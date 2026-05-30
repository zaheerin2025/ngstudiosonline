const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.resolve(rootDir, 'public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Patterns of files to copy from root to public
const verificationPatterns = [
  /^google[a-zA-Z0-9]+\.html$/,  // Google Search Console HTML verification
  /^BingSiteAuth\.xml$/,         // Bing Webmaster HTML/XML verification
  /^app-ads\.txt$/,              // AdMob / AdSense app-ads.txt
  /^ads\.txt$/,                  // AdSense ads.txt
  /^robots\.txt$/,               // robots.txt crawler directions
  /^CNAME$/,                     // CNAME domain mapping for GitHub Pages
  /^sitemap.*\.xml$/             // XML Sitemaps
];

console.log('\x1b[36m%s\x1b[0m', 'Running pre-build verification files sync...');

try {
  const files = fs.readdirSync(rootDir);
  let copiedCount = 0;

  files.forEach(file => {
    const isVerificationFile = verificationPatterns.some(pattern => pattern.test(file));
    if (isVerificationFile) {
      const srcPath = path.join(rootDir, file);
      const destPath = path.join(publicDir, file);
      
      // Only copy if it's a file
      if (fs.statSync(srcPath).isFile()) {
        // Read file contents to verify it isn't empty or copy it anyway
        fs.copyFileSync(srcPath, destPath);
        console.log(`\x1b[32m%s\x1b[0m`, `  ✓ Synced: ${file} -> public/${file}`);
        copiedCount++;
      }
    }
  });

  console.log('\x1b[36m%s\x1b[0m', `Verification sync complete. Synced ${copiedCount} file(s).`);
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', 'Error copying verification files:', error);
  process.exit(1);
}
