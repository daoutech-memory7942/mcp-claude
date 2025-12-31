import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tokensPath = path.join(__dirname, '..', 'figma-design-token.json');

console.log('👀 Watching for changes in figma-design-token.json...\n');

let debounceTimer;

fs.watch(tokensPath, (eventType, filename) => {
  if (eventType === 'change') {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      console.log(`\n🔄 Detected change in ${filename}`);
      console.log('📦 Generating CSS tokens...');

      try {
        execSync('node scripts/generate-tokens-css.js', {
          cwd: path.join(__dirname, '..'),
          stdio: 'inherit'
        });

        console.log('✨ Tailwind CSS tokens updated successfully!\n');
      } catch (error) {
        console.error('❌ Error generating tokens:', error.message);
      }
    }, 300);
  }
});

execSync('node scripts/generate-tokens-css.js', {
  cwd: path.join(__dirname, '..'),
  stdio: 'inherit'
});

console.log('Press Ctrl+C to stop watching...\n');
