import Link from "next/link";
import { navItems } from "@/lib/data";

export function SiteHeader() {
  return <header className="site-header">
    <Link className="brand" href="/"><span className="brand-mark">LC</span><span>AI液冷产业知识库</span></Link>
    <nav className="site-nav" aria-label="知识库导航">{navItems.slice(0,7).map(([label,url])=><Link key={url} href={url}>{label}</Link>)}</nav>
    <Link className="search-link" href="/search">搜索 <kbd>/</kbd></Link>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div><strong>AI液冷产业知识库</strong><span>公开学习 · 来源可追溯 · 持续更新</span></div><div><Link href="/sources">来源覆盖</Link><a href="/data/catalog.json" download>下载数据</a></div></footer>;
}

export function PageIntro({kicker,title,description,meta}:{kicker:string;title:string;description:string;meta?:string}) {
  return <section className="page-intro"><span className="kicker">{kicker}</span><h1>{title}</h1><p>{description}</p>{meta&&<small>{meta}</small>}</section>;
}

export function EvidenceBadge({value}:{value:string}) {
  const level=value.slice(0,1).toLowerCase();
  return <span className={`evidence evidence-${level}`}>{value}</span>;
}
