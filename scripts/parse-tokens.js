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

function parseTokens() {
  const tokensPath = path.join(__dirname, '..', 'figma-design-token.json');
  const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

  const tailwindTokens = {
    colors: {},
    spacing: {},
    fontSize: {},
    fontFamily: {},
    borderRadius: {},
    boxShadow: {}
  };

  tokens.collections.forEach(collection => {
    collection.variables.forEach(variable => {
      const name = variable.name;
      const type = variable.resolvedType;
      const value = variable.valuesByMode[collection.defaultModeId];

      if (type === 'COLOR') {
        const colorValue = rgbaToHex(value.r, value.g, value.b, value.a);
        const colorPath = name.split('/');

        let current = tailwindTokens.colors;
        for (let i = 0; i < colorPath.length - 1; i++) {
          if (!current[colorPath[i]]) {
            current[colorPath[i]] = {};
          }
          current = current[colorPath[i]];
        }
        current[colorPath[colorPath.length - 1]] = colorValue;
      }
      else if (type === 'FLOAT') {
        if (name.includes('spacing') || name.includes('gap') || name.includes('padding') || name.includes('margin')) {
          const spacingPath = name.split('/');
          let current = tailwindTokens.spacing;
          for (let i = 0; i < spacingPath.length - 1; i++) {
            if (!current[spacingPath[i]]) {
              current[spacingPath[i]] = {};
            }
            current = current[spacingPath[i]];
          }
          current[spacingPath[spacingPath.length - 1]] = `${value}px`;
        }
        else if (name.includes('fontSize') || name.includes('text')) {
          const fontPath = name.split('/');
          let current = tailwindTokens.fontSize;
          for (let i = 0; i < fontPath.length - 1; i++) {
            if (!current[fontPath[i]]) {
              current[fontPath[i]] = {};
            }
            current = current[fontPath[i]];
          }
          current[fontPath[fontPath.length - 1]] = `${value}px`;
        }
        else if (name.includes('radius') || name.includes('borderRadius')) {
          const radiusPath = name.split('/');
          let current = tailwindTokens.borderRadius;
          for (let i = 0; i < radiusPath.length - 1; i++) {
            if (!current[radiusPath[i]]) {
              current[radiusPath[i]] = {};
            }
            current = current[radiusPath[i]];
          }
          current[radiusPath[radiusPath.length - 1]] = `${value}px`;
        }
      }
      else if (type === 'STRING') {
        if (name.includes('font') && name.includes('family')) {
          const fontPath = name.split('/');
          let current = tailwindTokens.fontFamily;
          for (let i = 0; i < fontPath.length - 1; i++) {
            if (!current[fontPath[i]]) {
              current[fontPath[i]] = {};
            }
            current = current[fontPath[i]];
          }
          current[fontPath[fontPath.length - 1]] = value.split(',').map(f => f.trim());
        }
      }
    });
  });

  const outputPath = path.join(__dirname, '..', 'tailwind-tokens.json');
  fs.writeFileSync(outputPath, JSON.stringify(tailwindTokens, null, 2));

  console.log('✅ Design tokens successfully parsed and saved to tailwind-tokens.json');
  return tailwindTokens;
}

parseTokens();
