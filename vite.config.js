import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const srcLogo = 'C:\\Users\\Hello!!\\.gemini\\antigravity-ide\\brain\\d5509750-be85-4337-adbc-abf7578603c0\\media__1781844865747.png';
const destLogo = path.resolve(__dirname, 'src/logo.png');

try {
  if (fs.existsSync(srcLogo)) {
    fs.copyFileSync(srcLogo, destLogo);
    console.log('Successfully copied logo to src/logo.png via vite.config.js');
  } else {
    console.warn('Source logo not found at: ' + srcLogo);
  }
} catch (err) {
  console.error('Error copying logo in vite.config.js:', err);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
