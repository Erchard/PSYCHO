const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const toc=fs.readFileSync(path.join(root,'09_rukopys/00_chytaty_knyhu.md'),'utf8');
const names=[...toc.matchAll(/\]\(([^)]+\.md)\)/g)].map(m=>m[1]).filter(f=>/^\d+_(?:vstup|hlava)/.test(f));
if(names.length!==28||new Set(names).size!==28)throw Error('Expected introduction and 27 unique chapter files');
const collect=dir=>fs.readdirSync(path.join(root,dir),{withFileTypes:true}).flatMap(e=>{
 if(e.name.startsWith('.')||e.name==='node_modules')return [];
 const p=path.join(dir,e.name);
 return e.isDirectory()?collect(p):e.name.endsWith('.md')?[p]:[];
});
const targets=collect('');
let links=0;
for(const name of targets){
 const p=path.join(root,name),raw=fs.readFileSync(p);new TextDecoder('utf-8',{fatal:true}).decode(raw);
 const s=raw.toString('utf8');
 for(const m of s.matchAll(/\]\(([^)]+)\)/g)){
  if(/^(https?:|#)/.test(m[1]))continue;
  const target=path.resolve(path.dirname(p),m[1].split('#')[0]);
  if(!fs.existsSync(target))throw Error(`${name}: missing ${m[1]}`);links++;
 }
 if(s.includes('\uFFFD'))throw Error(name+': replacement character');
}
const book=fs.readFileSync(path.join(root,'KNYHA_CHERNETKA.md'),'utf8');
const chapters=[...book.matchAll(/^# (\d{2})\./gm)].map(m=>Number(m[1]));
if(chapters.length!==27||chapters.some((n,i)=>n!==i+1))throw Error('Chapter sequence');
console.log(`UTF-8 valid in ${targets.length} Markdown files; ${links} local links valid; introduction and 27 chapters present`);
