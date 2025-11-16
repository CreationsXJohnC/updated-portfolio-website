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

  // Lazy import modules so script fails gracefully if deps are missing
  const otf2ttf = require('otf2ttf')
  const ttf2woff2 = require('ttf2woff2')

  const ttfPath = path.join(fontDir, `${baseName}.ttf`)
  const woff2Path = path.join(fontDir, `${baseName}.woff2`)

  // Read OTF, convert to TTF
  const otfBuffer = fs.readFileSync(otfPath)
  const ttf = otf2ttf(otfBuffer)
  if (ttf && typeof ttf.pipe === 'function') {
    // Some versions return a stream; write via pipeline
    await new Promise((resolve, reject) => {
      const write = fs.createWriteStream(ttfPath)
      ttf.pipe(write)
      write.on('finish', resolve)
      write.on('error', reject)
    })
  } else {
    const ttfArrayBuffer = ttf && (ttf.buffer ? ttf.buffer : ttf)
    if (!ttfArrayBuffer) {
      throw new Error('TTF conversion failed: no buffer/stream returned')
    }
    fs.writeFileSync(ttfPath, Buffer.from(ttfArrayBuffer))
  }

  // Convert TTF to WOFF2
  console.log(`Converting to WOFF2: ${ttfPath} -> ${woff2Path}`)
  const ttfBuf = fs.readFileSync(ttfPath)
  console.log(`TTF size: ${ttfBuf.length} bytes`)
  const woff2 = ttf2woff2(ttfBuf)
  fs.writeFileSync(woff2Path, woff2)
  console.log(`Wrote WOFF2: ${woff2Path} (${fs.statSync(woff2Path).size} bytes)`) 
  console.log(`Converted ${baseName}.otf -> ${baseName}.woff2`)
}

async function main() {
  const fontDir = path.join(__dirname, '..', 'public', 'fonts')
  if (!fs.existsSync(fontDir)) {
    throw new Error(`Font directory not found: ${fontDir}`)
  }

  const bases = [
    'texgyreadventor-italic',
    'texgyreadventor-bold',
    'texgyreadventor-bolditalic',
  ]

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