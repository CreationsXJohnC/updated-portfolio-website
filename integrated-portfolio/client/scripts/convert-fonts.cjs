/*
 * Convert uploaded OTF fonts to WOFF2 for optimal web performance.
 *
 * Input directory: public/fonts/
 * Files handled: texgyreadventor-regular.otf, texgyreadventor-italic.otf,
 *                texgyreadventor-bold.otf, texgyreadventor-bolditalic.otf
 * Output: Corresponding .woff2 files in the same directory
 */

const fs = require('fs')
const path = require('path')

function ensureExists(p) {
  if (!fs.existsSync(p)) {
    throw new Error(`Missing file: ${p}`)
  }
}

async function convertOtfToWoff2(fontDir, baseName) {
  console.log(`Starting: ${baseName}`)
  const otfPath = path.join(fontDir, `${baseName}.otf`)
  ensureExists(otfPath)

  const ttf2woff2 = (require('ttf2woff2')?.default) || require('ttf2woff2')
  let FontEditor
  try {
    FontEditor = require('fonteditor-core')
  } catch (e) {}
  let otf2ttf
  try {
    otf2ttf = require('otf2ttf')
  } catch (e) {}

  const ttfPath = path.join(fontDir, `${baseName}.ttf`)
  const woff2Path = path.join(fontDir, `${baseName}.woff2`)

  const otfBuffer = fs.readFileSync(otfPath)
  let ttfBuf = null

  if (FontEditor) {
    try {
      const font = FontEditor.Font.create(otfBuffer, { type: 'otf' })
      ttfBuf = font.write({ type: 'ttf' })
    } catch (e) {}
  }
  if (!ttfBuf && otf2ttf) {
    try {
      const ttf = otf2ttf(otfBuffer)
      if (Buffer.isBuffer(ttf)) {
        ttfBuf = ttf
      } else if (ttf && ttf.buffer) {
        ttfBuf = Buffer.from(ttf.buffer)
      } else if (ttf && typeof ttf.pipe === 'function') {
        await new Promise((resolve, reject) => {
          const write = fs.createWriteStream(ttfPath)
          ttf.pipe(write)
          write.on('finish', resolve)
          write.on('error', reject)
        })
        ttfBuf = fs.readFileSync(ttfPath)
      }
    } catch (e) {}
  }

  if (!ttfBuf) {
    throw new Error('TTF conversion failed')
  }
  fs.writeFileSync(ttfPath, ttfBuf)

  const w2 = ttf2woff2(ttfBuf)
  fs.writeFileSync(woff2Path, w2)
  console.log(`Converted ${baseName}.otf -> ${baseName}.woff2`)
}

async function main() {
  const fontDir = path.join(__dirname, '..', 'public', 'fonts')
  if (!fs.existsSync(fontDir)) {
    throw new Error(`Font directory not found: ${fontDir}`)
  }

  const otfFiles = fs.readdirSync(fontDir)
    .filter((f) => f.toLowerCase().endsWith('.otf'))
  const bases = otfFiles.map((f) => f.replace(/\.otf$/i, ''))

  for (const b of bases) {
    try {
      await convertOtfToWoff2(fontDir, b)
    } catch (err) {
      console.warn(`Skipping ${b}: ${err.message}`)
    }
  }

  console.log('Font conversion complete.')
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})