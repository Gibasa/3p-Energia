import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirsToScan = [
    path.join(__dirname, 'public', 'images'),
    // Add more directories if needed, e.g., src/assets/images
];

const walkSync = (dir, filelist = []) => {
    if (!fs.existsSync(dir)) return filelist;
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        if (fs.statSync(dirFile).isDirectory()) {
            filelist = walkSync(dirFile, filelist);
        } else {
            if (/\.(jpg|jpeg|png)$/i.test(dirFile)) {
                filelist.push(dirFile);
            }
        }
    });
    return filelist;
};

async function processImages() {
    let allFiles = [];
    dirsToScan.forEach(dir => {
        allFiles = allFiles.concat(walkSync(dir));
    });

    console.log(`Found ${allFiles.length} images to process.`);

    for (const file of allFiles) {
        const ext = path.extname(file);
        const basename = path.basename(file, ext);
        const dir = path.dirname(file);
        // Remove problem characters like spaces in new filename? Let's keep name but just change extension.
        let newFilename = basename + '.webp';
        let newPath = path.join(dir, newFilename);

        try {
            const metadata = await sharp(file).metadata();
            // Skip if it says it's already a webp somehow (shouldn't happen with our regex)

            let sharpInstance = sharp(file);

            // Resize if too large (e.g., max width 1920)
            if (metadata.width > 1920) {
                sharpInstance = sharpInstance.resize({ width: 1920, withoutEnlargement: true });
            }

            await sharpInstance
                .webp({ quality: 80 })
                .toFile(newPath);

            console.log(`Converted: ${path.basename(file)} -> ${newFilename}`);

            // Optionally delete original to force update references later or keep it?
            // Let's not delete automatically yet.
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }
}

processImages();
