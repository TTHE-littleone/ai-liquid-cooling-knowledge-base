"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { searchIndex } from "@/lib/data";

export default function SearchClient(){
  const [q,setQ]=useState("");
  const results=useMemo(()=>q.trim()?searchIndex.filter(x=>`${x.title}${x.type}${x.summary}`.toLowerCase().includes(q.toLowerCase())):searchIndex.slice(0,12),[q]);
  return <div className="search-panel"><label><span>搜索全部知识</span><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="例如：CDU、广东、GB/T 48023、冷板" /></label><p>{q?`找到 ${results.length} 条相关记录`:`推荐入口 · 共 ${searchIndex.length} 条首发索引`}</p><div className="search-results">{results.map((x,i)=><Link href={x.url} key={`${x.title}-${i}`}><span>{x.type}</span><div><h2>{x.title}</h2><p>{x.summary}</p></div><b>→</b></Link>)}</div></div>;
}
