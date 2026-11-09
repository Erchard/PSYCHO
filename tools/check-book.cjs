const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const toc=fs.readFileSync(path.join(root,'09_rukopys/00_chytaty_knyhu.md'),'utf8');
const names=[...toc.matchAll(/\]\(([^)]+\.md)\)/g)].map(m=>m[1]).filter(f=>/^\d+_(?:vstup|hlava)/.test(f));
const targets=['KNYHA_CHERNETKA.md',...names.map(f=>'09_rukopys/'+f)];
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
const book=fs.readFileSync(path.join(root,targets[0]),'utf8');
const chapters=[...book.matchAll(/^# (\d{2})\./gm)].map(m=>Number(m[1]));
if(chapters.length!==27||chapters.some((n,i)=>n!==i+1))throw Error('Chapter sequence');
console.log(`UTF-8 and ${links} local links valid; introduction and 27 chapters present`);
