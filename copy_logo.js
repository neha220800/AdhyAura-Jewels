const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\Hello!!\\.gemini\\antigravity-ide\\brain\\d5509750-be85-4337-adbc-abf7578603c0\\media__1781844865747.png';
const dest = path.join(__dirname, 'src', 'logo.png');

try {
  // Ensure the directory exists
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
  console.log('Logo copied successfully!');
} catch (err) {
  console.error('Error copying logo:', err);
}
