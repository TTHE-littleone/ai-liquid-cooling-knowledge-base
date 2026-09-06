"use client";
import { useMemo, useState } from "react";
import { companies } from "@/lib/data";
import { EvidenceBadge } from "./SiteChrome";

export default function CompanyExplorer(){
  const [query,setQuery]=useState("");
  const [scope,setScope]=useState<"all"|"gd">("all");
  const result=useMemo(()=>companies.filter(c=>(scope==="all"||c.guangdong)&&`${c.name}${c.region}${c.stage}${c.focus}`.toLowerCase().includes(query.toLowerCase())),[query,scope]);
  return <>
    <div className="explorer-bar"><label><span>搜索厂商</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="公司、城市、部件或业务" /></label><div className="segmented"><button className={scope==="all"?"active":""} onClick={()=>setScope("all")}>全球 {companies.length}</button><button className={scope==="gd"?"active":""} onClick={()=>setScope("gd")}>广东 {companies.filter(c=>c.guangdong).length}</button></div></div>
    <div className="result-note">显示 {result.length} 家｜“实际业务”与“概念关联”分开，持续用公告和产品页复核</div>
    <div className="company-grid">{result.map(c=><article key={c.name} className="company-card"><div className="company-top"><span>{c.region}</span><EvidenceBadge value={c.evidence}/></div><h2>{c.name}</h2><strong>{c.stage}</strong><p>{c.focus}</p><a href={c.url} target="_blank" rel="noreferrer">查看原始来源 ↗</a></article>)}</div>
  </>;
}
