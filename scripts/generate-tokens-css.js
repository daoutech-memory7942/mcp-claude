import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function rgbaToHex(r, g, b, a) {
  const toHex = (value) => {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  if (a < 1) {
    return `${hex}${toHex(a)}`;
  }

  return hex;
}

function generateTokensCSS() {
  const tokensPath = path.join(__dirname, '..', 'figma-design-token.json');
  const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

  let cssContent = '@import "tailwindcss";\n\n';
  cssContent += '@theme {\n';

  const colorMap = new Map();

  tokens.collections.forEach(collection => {
    collection.variables.forEach(variable => {
      const name = variable.name;
      const type = variable.resolvedType;
      const value = variable.valuesByMode[collection.defaultModeId];

      if (type === 'COLOR') {
        const colorValue = rgbaToHex(value.r, value.g, value.b, value.a);
        const cssVarName = name.replace(/\//g, '-');
        colorMap.set(cssVarName, colorValue);
      }
    });
  });

  colorMap.forEach((value, key) => {
    cssContent += `  --color-${key}: ${value};\n`;
  });

  cssContent += '}\n';

  const outputPath = path.join(__dirname, '..', 'src', 'index.css');
  fs.writeFileSync(outputPath, cssContent);

  console.log('✅ Design tokens successfully converted to CSS and saved to src/index.css');
  console.log(`📊 Generated ${colorMap.size} color tokens`);
}

generateTokensCSS();
