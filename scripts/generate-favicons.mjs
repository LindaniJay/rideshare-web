import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const inputPath = path.join(root, 'public', 'favicon.png');

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function circleMaskSvg(size) {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/>
    </svg>`,
  );
}

async function makeCircularPng({ size, outFile }) {
  const mask = circleMaskSvg(size);
  await sharp(inputPath)
    .resize(size, size, { fit: 'cover' })
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toFile(outFile);
}

const outputs = [
  { size: 16, outFile: path.join(root, 'public', 'favicon-16.png') },
  { size: 32, outFile: path.join(root, 'public', 'favicon-32.png') },
  { size: 180, outFile: path.join(root, 'public', 'apple-touch-icon.png') },
  { size: 192, outFile: path.join(root, 'public', 'android-chrome-192.png') },
];

if (!(await fileExists(inputPath))) {
  console.error(`Missing input logo at ${inputPath}`);
  console.error('Expected the Navbar logo to be copied to public/favicon.png');
  process.exit(1);
}

await Promise.all(outputs.map((o) => makeCircularPng(o)));
console.log('Generated circular favicons:');
for (const o of outputs) console.log(`- ${path.relative(root, o.outFile)}`);
