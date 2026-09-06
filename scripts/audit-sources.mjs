import fs from "node:fs/promises";
const status=JSON.parse(await fs.readFile("automation/status.json","utf8")); const rows=status.sources||[];
const p0=rows.filter(x=>x.priority==="P0"); const online=p0.filter(x=>x.ok).length; const rate=p0.length?online/p0.length:0;
const result={generatedAt:new Date().toISOString(),p0Total:p0.length,p0Online:online,p0OnlineRate:Number(rate.toFixed(4)),failed:rows.filter(x=>!x.ok).map(x=>({id:x.id,name:x.name,error:x.error}))};
await fs.writeFile("automation/audit.json",JSON.stringify(result,null,2)+"\n");
await fs.mkdir("public/reports",{recursive:true});
await fs.writeFile("public/reports/source-audit.md",`# 来源覆盖审计\n\n- 审计时间：${result.generatedAt}\n- P0核心来源在线率：${(rate*100).toFixed(1)}%（目标≥95%）\n- 失败来源：${result.failed.length}\n\n${result.failed.map(x=>`- ${x.name}：${x.error}`).join("\n")||"全部来源可访问。"}\n`);
console.log(`来源审计完成：P0在线率 ${(rate*100).toFixed(1)}%。`);
