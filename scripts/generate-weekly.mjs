import fs from "node:fs/promises";
const items=JSON.parse(await fs.readFile("content/inbox.json","utf8"));
const now=new Date(); const since=new Date(now.getTime()-8*24*60*60*1000);
const selected=items.filter(x=>new Date(x.firstSeen)>=since).sort((a,b)=>b.score-a.score).slice(0,60);
const start=since.toISOString().slice(0,10); const end=now.toISOString().slice(0,10);
const report={generatedAt:now.toISOString(),period:{start,end},items:selected};
await fs.writeFile("content/weekly-generated.json",JSON.stringify(report,null,2)+"\n");
await fs.mkdir("public/reports",{recursive:true});
const lines=[`# AI液冷产业周报（${start}—${end}）`,``,`本周自动发现 ${selected.length} 条候选信息。所有内容仍按证据等级区分，低可信线索不视为确定事实。`,""];
for(const group of ["市场规模","标准","政策","企业","服务器","AI平台","结构件"]) {
  const rows=selected.filter(x=>x.type===group); if(!rows.length) continue;
  lines.push(`## ${group}`,""); for(const row of rows) lines.push(`- [${row.title}](${row.url})｜${row.sourceName}｜${row.region}｜${row.status}`); lines.push("");
}
if(!selected.length) lines.push("本周期未发现满足关键词和时间条件的新线索；请检查来源在线率与采集日志。","");
const markdown=lines.join("\n");
await fs.writeFile(`public/reports/${end}.md`,markdown); await fs.writeFile("public/reports/latest.md",markdown);
console.log(`周报已生成：${selected.length} 条候选信息。`);
