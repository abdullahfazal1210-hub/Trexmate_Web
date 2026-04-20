const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const srcDir = '../src/components/ui';
const destDir = './components/ui';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);

files.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts')) {
    const filePath = path.join(srcDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Transform with Babel to strip TS types
    try {
      const result = babel.transformSync(content, {
        filename: filePath,
        presets: [
          ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
          ['@babel/preset-react', { runtime: 'automatic' }]
        ],
        plugins: [],
        retainLines: false,
      });

      let code = result.code;
      // Re-add "use client" if it was lost, or just add it to the top because Shadcn UI needs it in Next.js
      if (!code.includes('"use client"')) {
        code = `"use client";\n\n` + code;
      }
      
      const destExt = file.endsWith('.tsx') ? '.jsx' : '.js';
      const destFile = path.join(destDir, file.replace(/\.tsx?$/, destExt));
      
      fs.writeFileSync(destFile, code);
      console.log(`Converted ${file} to ${path.basename(destFile)}`);
    } catch (err) {
      console.error(`Error transforming ${file}:`, err);
    }
  }
});
