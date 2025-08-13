import sharp from 'sharp';
import path from 'path';

async function createGigblocHeader() {
  console.log('📱 Creating Gigbloc header image...');

  try {
    // Load the app screenshots
    const app1 = await sharp('src/images/Brand Work/gigbloc/app-1.png');
    const app2 = await sharp('src/images/Brand Work/gigbloc/app-2.png');

    // Get dimensions
    const app1Metadata = await app1.metadata();
    const app2Metadata = await app2.metadata();

    // Create iPhone frame dimensions (16:9 ratio for header)
    const headerWidth = 1200;
    const headerHeight = 675;
    const phoneWidth = 300;
    const phoneHeight = 600;

    // Resize app screenshots to fit phone frame
    const resizedApp1 = await app1.resize(phoneWidth - 40, phoneHeight - 80, {
      fit: 'cover',
      position: 'center'
    });

    const resizedApp2 = await app2.resize(phoneWidth - 40, phoneHeight - 80, {
      fit: 'cover',
      position: 'center'
    });

    // Create a gradient background
    const background = await sharp({
      create: {
        width: headerWidth,
        height: headerHeight,
        channels: 4,
        background: { r: 40, g: 44, b: 52, alpha: 1 } // Dark blue-grey matching brand color
      }
    });

    // Create iPhone frame SVG
    const iphoneFrame = `
      <svg width="${headerWidth}" height="${headerHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#2a2e36;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1e2127;stop-opacity:1" />
          </linearGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="10" stdDeviation="20" flood-color="#000000" flood-opacity="0.3"/>
          </filter>
        </defs>
        
        <!-- Background gradient -->
        <rect width="100%" height="100%" fill="url(#phoneGradient)"/>
        
        <!-- First iPhone (left) -->
        <g transform="translate(200, 50)" filter="url(#shadow)">
          <!-- Phone body -->
          <rect x="0" y="0" width="${phoneWidth}" height="${phoneHeight}" rx="40" ry="40" 
                fill="#1a1a1a" stroke="#333" stroke-width="2"/>
          <!-- Screen area -->
          <rect x="10" y="60" width="${phoneWidth - 20}" height="${phoneHeight - 80}" rx="30" ry="30" 
                fill="#000"/>
          <!-- Home indicator -->
          <rect x="${phoneWidth/2 - 30}" y="${phoneHeight - 25}" width="60" height="4" rx="2" ry="2" 
                fill="#333"/>
          <!-- Camera notch -->
          <rect x="${phoneWidth/2 - 25}" y="15" width="50" height="30" rx="15" ry="15" 
                fill="#1a1a1a"/>
        </g>
        
        <!-- Second iPhone (right) -->
        <g transform="translate(700, 50)" filter="url(#shadow)">
          <!-- Phone body -->
          <rect x="0" y="0" width="${phoneWidth}" height="${phoneHeight}" rx="40" ry="40" 
                fill="#1a1a1a" stroke="#333" stroke-width="2"/>
          <!-- Screen area -->
          <rect x="10" y="60" width="${phoneWidth - 20}" height="${phoneHeight - 80}" rx="30" ry="30" 
                fill="#000"/>
          <!-- Home indicator -->
          <rect x="${phoneWidth/2 - 30}" y="${phoneHeight - 25}" width="60" height="4" rx="2" ry="2" 
                fill="#333"/>
          <!-- Camera notch -->
          <rect x="${phoneWidth/2 - 25}" y="15" width="50" height="30" rx="15" ry="15" 
                fill="#1a1a1a"/>
        </g>
        
        <!-- Gigbloc logo text -->
        <text x="${headerWidth/2}" y="50" text-anchor="middle" 
              font-family="Arial, sans-serif" font-size="48" font-weight="bold" 
              fill="#ffffff" opacity="0.9">Gigbloc</text>
        
        <!-- Subtitle -->
        <text x="${headerWidth/2}" y="90" text-anchor="middle" 
              font-family="Arial, sans-serif" font-size="18" 
              fill="#cccccc" opacity="0.7">Music Discovery Platform</text>
      </svg>
    `;

    // Create the base with iPhone frames
    const baseWithFrames = await background
      .composite([{
        input: Buffer.from(iphoneFrame),
        top: 0,
        left: 0
      }]);

    // Add app screenshots to the phones
    const finalImage = await baseWithFrames
      .composite([
        {
          input: await resizedApp1.toBuffer(),
          top: 110, // 50 + 60 (frame offset + screen offset)
          left: 210  // 200 + 10 (frame offset + screen offset)
        },
        {
          input: await resizedApp2.toBuffer(),
          top: 110,
          left: 710  // 700 + 10
        }
      ]);

    // Save the header image
    const outputPath = 'src/images/Brand Work/gigbloc/gigbloc-header.png';
    await finalImage.png({ quality: 90 }).toFile(outputPath);

    console.log(`✅ Gigbloc header created: ${outputPath}`);
    console.log(`📏 Dimensions: ${headerWidth}x${headerHeight}`);
    
  } catch (error) {
    console.error('❌ Error creating header:', error.message);
  }
}

createGigblocHeader();
