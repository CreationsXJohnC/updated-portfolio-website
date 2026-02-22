<template>
  <div ref="container" class="three-bg"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'ThreeBackground',
  props: {
    variant: {
      type: String,
      default: 'wireframeSphere'
    },
    colorPrimary: {
      type: String,
      default: '#ffffff'
    },
    intensity: {
      type: Number,
      default: 0.8
    },
    enableMouse: {
      type: Boolean,
      default: false
    },
    gltfSrc: {
      type: String,
      default: ''
    },
    textureSrc: {
      type: String,
      default: ''
    },
    starDensityNear: {
      type: Number,
      default: 1800
    },
    starDensityFar: {
      type: Number,
      default: 2400
    },
    starSizeNear: {
      type: Number,
      default: 0.035
    },
    starSizeFar: {
      type: Number,
      default: 0.025
    }
    ,
    blendingMode: {
      type: String,
      default: 'additive'
    }
    ,
    useTheme: {
      type: Boolean,
      default: true
    }
    ,
    motionScale: {
      type: Number,
      default: 1
    }
  },
  setup(props) {
    const container = ref(null)
    let renderer = null
    let scene = null
    let camera = null
    let obj = null
    let rafId = null
    let resizeObserver = null
    let isRunning = false
    let isInitialized = false
    let mouseX = 0
    let mouseY = 0
    let mouseActive = false
    let smoothX = 0.5
    let smoothY = 0.5
    

    const prefersReducedMotion = () => {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }

    const init = async () => {
      if (isInitialized || !container.value) return
      const THREE = await import('three')

      scene = new THREE.Scene()

      const rect = container.value.getBoundingClientRect()
      camera = new THREE.PerspectiveCamera(45, rect.width / rect.height || 1, 0.1, 100)
      camera.position.set(0, 0, 3)

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
      renderer.setSize(rect.width, rect.height)
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'
      container.value.appendChild(renderer.domElement)

      if (props.variant !== 'starField') {
        const ambient = new THREE.AmbientLight(props.colorPrimary, props.intensity * 0.3)
        const dir = new THREE.DirectionalLight(props.colorPrimary, props.intensity)
        dir.position.set(3, 2, 3)
        scene.add(ambient)
        scene.add(dir)
      }

      if (props.gltfSrc) {
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js')
        const loader = new GLTFLoader()
        await new Promise((resolve) => {
          loader.load(props.gltfSrc, (gltf) => {
            obj = gltf.scene
            obj.scale.set(1, 1, 1)
            scene.add(obj)
            resolve()
          }, undefined, () => resolve())
        })
      } else if (props.variant === 'starField') {
        const countNear = props.starDensityNear
        const countFar = props.starDensityFar
        const makeStarTexture = () => {
          const size = 64
          const canvas = document.createElement('canvas')
          canvas.width = size
          canvas.height = size
          const ctx = canvas.getContext('2d')
          const cx = size / 2
          const cy = size / 2
          const r = size / 2
          const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
          grad.addColorStop(0.0, 'rgba(255,255,255,1)')
          grad.addColorStop(0.3, 'rgba(255,255,255,0.9)')
          grad.addColorStop(0.6, 'rgba(255,255,255,0.4)')
          grad.addColorStop(1.0, 'rgba(255,255,255,0)')
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(cx, cy, r, 0, Math.PI * 2)
          ctx.fill()
          const texture = new THREE.CanvasTexture(canvas)
          texture.minFilter = THREE.LinearFilter
          texture.magFilter = THREE.LinearFilter
          texture.anisotropy = 1
          return texture
        }
        let starTexture = makeStarTexture()
        if (props.textureSrc) {
          const loader = new THREE.TextureLoader()
          starTexture = loader.load(
            props.textureSrc,
            (tex) => {
              tex.minFilter = THREE.LinearMipMapLinearFilter
              tex.magFilter = THREE.LinearFilter
              tex.anisotropy = 2
              tex.center.set(0.5, 0.5)
              tex.needsUpdate = true
            },
            undefined,
            () => {
              starTexture = makeStarTexture()
            }
          )
        }
        const createStars = (count, size, spreadX, spreadY, spreadZ) => {
          const positions = new Float32Array(count * 3)
          const angles = new Float32Array(count)
          for (let i = 0; i < count; i++) {
            positions[i * 3 + 0] = (Math.random() - 0.5) * spreadX
            positions[i * 3 + 1] = (Math.random() - 0.5) * spreadY
            positions[i * 3 + 2] = (Math.random() - 0.5) * spreadZ
            angles[i] = Math.random() * Math.PI * 2
          }
          const geo = new THREE.BufferGeometry()
          geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
          geo.setAttribute('angle', new THREE.BufferAttribute(angles, 1))
          const pixelRatio = Math.min(2, window.devicePixelRatio || 1)
          const isDark = (document.documentElement.getAttribute('data-theme') || '').toLowerCase() === 'dark'
          const themedColor = isDark ? '#ffffff' : '#000000'
          const themedBlending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending
          const mat = new THREE.ShaderMaterial({
            uniforms: {
              uColor: { value: new THREE.Color(props.useTheme ? themedColor : props.colorPrimary) },
              uMap: { value: starTexture },
              uOpacity: { value: 0.9 },
              uSize: { value: size * 600.0 },
              uPixelRatio: { value: pixelRatio },
            },
            vertexShader: `
              attribute float angle;
              varying float vAngle;
              uniform float uSize;
              uniform float uPixelRatio;
              void main() {
                vAngle = angle;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                float scale = 1.0 / (-mvPosition.z);
                gl_PointSize = uSize * uPixelRatio * scale;
                gl_Position = projectionMatrix * mvPosition;
              }
            `,
            fragmentShader: `
              varying float vAngle;
              uniform sampler2D uMap;
              uniform vec3 uColor;
              uniform float uOpacity;
              void main() {
                vec2 p = gl_PointCoord - vec2(0.5);
                float s = sin(vAngle);
                float c = cos(vAngle);
                mat2 rot = mat2(c, -s, s, c);
                p = rot * p;
                vec2 uv = p + vec2(0.5);
                vec4 tex = texture2D(uMap, uv);
                vec4 col = vec4(uColor, uOpacity) * tex;
                gl_FragColor = col;
              }
            `,
            blending: props.useTheme ? themedBlending : (props.blendingMode === 'normal' ? THREE.NormalBlending : THREE.AdditiveBlending),
            transparent: true,
            depthWrite: false,
          })
          return new THREE.Points(geo, mat)
        }
        const near = createStars(countNear, props.starSizeNear, 10, 8, 10)
        const far = createStars(countFar, props.starSizeFar, 18, 12, 18)
        near.userData.phase = Math.random() * Math.PI * 2
        far.userData.phase = Math.random() * Math.PI * 2
        scene.add(far)
        scene.add(near)
        obj = { near, far }

        const updateTheme = () => {
          if (!props.useTheme || !obj || !obj.near || !obj.far) return
          const nowDark = (document.documentElement.getAttribute('data-theme') || '').toLowerCase() === 'dark'
          const desiredColor = new THREE.Color(nowDark ? '#ffffff' : '#000000')
          const desiredBlend = nowDark ? THREE.AdditiveBlending : THREE.NormalBlending
          const mats = [obj.near.material, obj.far.material]
          for (const m of mats) {
            if (m.uniforms && m.uniforms.uColor && !m.uniforms.uColor.value.equals(desiredColor)) {
              m.uniforms.uColor.value = desiredColor
              m.needsUpdate = true
            }
            if (m.blending !== desiredBlend) {
              m.blending = desiredBlend
              m.needsUpdate = true
            }
          }
        }
        const themeObserver = new MutationObserver(updateTheme)
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
        updateTheme()
      } else if (props.variant === 'particleField') {
        const count = 800
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
          positions[i * 3 + 0] = (Math.random() - 0.5) * 4
          positions[i * 3 + 1] = (Math.random() - 0.5) * 2
          positions[i * 3 + 2] = (Math.random() - 0.5) * 4
        }
        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const mat = new THREE.PointsMaterial({ color: props.colorPrimary, size: 0.02 })
        obj = new THREE.Points(geo, mat)
        scene.add(obj)
      } else {
        const geo = new THREE.IcosahedronGeometry(1, 2)
        const mat = new THREE.MeshStandardMaterial({ color: props.colorPrimary, wireframe: true })
        obj = new THREE.Mesh(geo, mat)
        scene.add(obj)
      }

      resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect
          if (!renderer || !camera) return
          renderer.setSize(width, height)
          camera.aspect = (width || 1) / (height || 1)
          camera.updateProjectionMatrix()
        }
      })
      resizeObserver.observe(container.value)

      isInitialized = true
    }

    const loop = (time) => {
      if (!renderer || !scene || !camera) return
      if (document.visibilityState !== 'visible') {
        rafId = requestAnimationFrame(loop)
        return
      }
      if (obj) {
        const baseY = 0.00035 * (props.motionScale || 1)
        const baseX = 0.00025 * (props.motionScale || 1)
        // Ease cursor movement with simple damping toward target
        const targetX = mouseActive ? mouseX : 0.5
        const targetY = mouseActive ? mouseY : 0.5
        smoothX += (targetX - smoothX) * 0.06
        smoothY += (targetY - smoothY) * 0.06
        const mouseFactorY = (smoothX - 0.5) * 0.0004 * (props.motionScale || 1)
        const mouseFactorX = (smoothY - 0.5) * 0.0002 * (props.motionScale || 1)
        if (obj.near && obj.far) {
          // Near layer: more responsive to pointer (same direction as far)
          obj.near.rotation.y += baseY + mouseFactorY * 2.0
          obj.near.rotation.x += baseX + mouseFactorX * 2.0
          // Far layer: almost static but follows the same direction slightly
          obj.far.rotation.y += baseY * 0.01 + mouseFactorY * 0.005
          obj.far.rotation.x += baseX * 0.01 + mouseFactorX * 0.003
          const t = (time || 0) * 0.001
          const nearMat = obj.near.material
          const farMat = obj.far.material
          if (nearMat.uniforms && nearMat.uniforms.uOpacity) {
            nearMat.uniforms.uOpacity.value = 0.7 + 0.2 * Math.sin(t + (obj.near.userData.phase || 0))
          }
          if (farMat.uniforms && farMat.uniforms.uOpacity) {
            farMat.uniforms.uOpacity.value = 0.6 + 0.2 * Math.sin(t * 0.85 + (obj.far.userData.phase || 0))
          }
        } else {
          obj.rotation.y += baseY + mouseFactorY
          obj.rotation.x += baseX + mouseFactorX
        }
      }
      renderer.render(scene, camera)
      rafId = requestAnimationFrame(loop)
    }

    const start = async () => {
      await init()
      if (prefersReducedMotion()) return
      if (!isRunning) {
        isRunning = true
        rafId = requestAnimationFrame(loop)
      }
    }

    const stop = () => {
      isRunning = false
      if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
    }

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting) start()
        else stop()
      }, { root: null, threshold: 0.1 })
      if (container.value) observer.observe(container.value)
      if (props.enableMouse) {
        const onMove = (e) => {
          mouseActive = true
          mouseX = e.clientX / window.innerWidth
          mouseY = e.clientY / window.innerHeight
        }
        const onLeave = () => { mouseActive = false; mouseX = 0.5; mouseY = 0.5 }
        document.addEventListener('pointermove', onMove)
        document.addEventListener('pointerleave', onLeave)
        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseleave', onLeave)
        onUnmounted(() => {
          document.removeEventListener('pointermove', onMove)
          document.removeEventListener('pointerleave', onLeave)
          document.removeEventListener('mousemove', onMove)
          document.removeEventListener('mouseleave', onLeave)
        })
      }
    })

    onUnmounted(() => {
      stop()
      if (resizeObserver) {
        resizeObserver.disconnect()
        resizeObserver = null
      }
      if (obj) {
        if (obj.near && obj.far) {
          if (obj.near.geometry) obj.near.geometry.dispose()
          if (obj.far.geometry) obj.far.geometry.dispose()
          const nearMap = obj.near.material && obj.near.material.map
          const farMap = obj.far.material && obj.far.material.map
          if (nearMap && nearMap === farMap) {
            nearMap.dispose()
          } else {
            if (nearMap) nearMap.dispose()
            if (farMap) farMap.dispose()
          }
          if (obj.near.material) obj.near.material.dispose()
          if (obj.far.material) obj.far.material.dispose()
        } else {
          if (obj.geometry) obj.geometry.dispose()
          if (obj.material) obj.material.dispose()
        }
        obj = null
      }
      if (renderer) {
        renderer.dispose()
        const el = renderer.domElement
        if (el && el.parentNode) el.parentNode.removeChild(el)
        renderer = null
      }
      scene = null
      camera = null
    })

    return { container }
  }
}
</script>

<style scoped>
.three-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
</style>