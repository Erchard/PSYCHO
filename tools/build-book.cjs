const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const dir = path.join(root, '09_rukopys');
const toc = fs.readFileSync(path.join(dir, '00_chytaty_knyhu.md'), 'utf8');
const files = [...toc.matchAll(/\]\(([^)]+\.md)\)/g)].map(m=>m[1]).filter(f=>/^\d+_(?:vstup|hlava)/.test(f));
if (files.length !== 28 || new Set(files).size !== 28) throw new Error('Expected introduction and 27 unique chapters');
const chunks = files.map(f => {
  let s = fs.readFileSync(path.join(dir, f), 'utf8').replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').trim();
  return s.replace(/\]\(([^)]+)\)/g, (all, target) => {
    if (/^(?:https?:|#)/.test(target)) return all;
    return `](${path.posix.normalize('09_rukopys/' + target)})`;
  });
});
fs.writeFileSync(path.join(root, 'KNYHA_CHERNETKA.md'), '# Людина у світі змін\n\n## Психіка, життя, свідомість і сенс — від походження життя до спільного майбутнього\n\nРедакція 0.2, 9 листопада 2026 року. Авторські навчальні сцени позначено у вступі; дослідження й сценарії розрізнено в тексті.\n\n' + chunks.join('\n\n---\n\n') + '\n', 'utf8');
console.log(`Built ${files.length} sections`);
