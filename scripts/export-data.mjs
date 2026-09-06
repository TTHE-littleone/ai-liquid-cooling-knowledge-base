import fs from "node:fs/promises";
import ts from "typescript";
const source=await fs.readFile("lib/data.ts","utf8");
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const data=await import(`data:text/javascript;base64,${Buffer.from(js).toString("base64")}`);
const keys=["learningChapters","chain","companies","products","standards","marketData","projects","manufacturing","weeklySignals","sources"];
const catalog=Object.fromEntries(keys.map(key=>[key,data[key]]));
await fs.mkdir("public/data",{recursive:true}); await fs.writeFile("public/data/catalog.json",JSON.stringify({generatedAt:new Date().toISOString(),...catalog},null,2)+"\n");
console.log("公开数据包已生成。")
