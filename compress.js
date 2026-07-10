import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'public', 'images');

async function processImages() {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const inputPath = path.join(dir, file);
      const filenameWithoutExt = path.parse(file).name;
      const outputPath = path.join(dir, `${filenameWithoutExt}.webp`);
      
      console.log(`Converting ${file}...`);
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        console.log(`Successfully created ${filenameWithoutExt}.webp`);
        
        // Remove original to save space
        fs.unlinkSync(inputPath);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
  
  console.log('All done!');
}

processImages();
