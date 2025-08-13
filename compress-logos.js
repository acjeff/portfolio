import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
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
      let plugins = [];
      
      if (ext === '.png') {
        plugins.push(
          imageminPngquant({
            quality: [0.6, 0.8], // Good quality for logos
            speed: 1
          })
        );
      } else if (ext === '.jpeg' || ext === '.jpg') {
        plugins.push(
          imageminMozjpeg({
            quality: 75, // Good quality for logos
            progressive: true
          })
        );
      }

      const files = await imagemin([filePath], {
        plugins
      });

      if (files.length > 0) {
        const compressedSize = files[0].data.length;
        const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
        
        console.log(`   Compressed size: ${(compressedSize / 1024).toFixed(1)}KB`);
        console.log(`   Savings: ${savings}%`);
        
        // Write the compressed file back
        fs.writeFileSync(filePath, files[0].data);
        console.log(`   ✅ Compressed and saved\n`);
      }
    } catch (error) {
      console.log(`   ❌ Error compressing: ${error.message}\n`);
    }
  }

  console.log('🎉 Logo compression complete!');
}

compressLogos().catch(console.error);
