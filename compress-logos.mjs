import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Logo files to compress
const logoFiles = [
  'src/images/Brand Work/GridDuck/GridDuck-logo-no-type.png',
  'src/images/Brand Work/wirewax/wirewax-logo-header.jpeg',
  'src/images/Brand Work/UTC/utc-logo-header.png',
  'src/images/Brand Work/gigbloc/gigbloc-logo-header.png'
];

async function compressLogos() {
  console.log('🖼️  Starting logo compression...\n');

  for (const filePath of logoFiles) {
    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: ${filePath}`);
      continue;
    }

    const originalSize = fs.statSync(filePath).size;
    const ext = path.extname(filePath).toLowerCase();
    
    console.log(`📁 Processing: ${filePath}`);
    console.log(`   Original size: ${(originalSize / 1024).toFixed(1)}KB`);

    try {
      let sharpInstance = sharp(filePath);
      
      if (ext === '.png') {
        // For PNG logos, use PNG compression
        sharpInstance = sharpInstance.png({
          quality: 80,
          compressionLevel: 9,
          adaptiveFiltering: true
        });
      } else if (ext === '.jpeg' || ext === '.jpg') {
        // For JPEG logos, use JPEG compression
        sharpInstance = sharpInstance.jpeg({
          quality: 75,
          progressive: true,
          mozjpeg: true
        });
      }

      // Resize to reasonable dimensions for logos (max 300px width/height)
      sharpInstance = sharpInstance.resize(300, 300, {
        fit: 'inside',
        withoutEnlargement: true
      });

      const compressedBuffer = await sharpInstance.toBuffer();
      const compressedSize = compressedBuffer.length;
      const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
      
      console.log(`   Compressed size: ${(compressedSize / 1024).toFixed(1)}KB`);
      console.log(`   Savings: ${savings}%`);
      
      // Write the compressed file back
      fs.writeFileSync(filePath, compressedBuffer);
      console.log(`   ✅ Compressed and saved\n`);
      
    } catch (error) {
      console.log(`   ❌ Error compressing: ${error.message}\n`);
    }
  }

  console.log('🎉 Logo compression complete!');
}

compressLogos().catch(console.error);
