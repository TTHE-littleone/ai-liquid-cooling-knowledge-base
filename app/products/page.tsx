import { products } from "@/lib/data";
import { PageIntro,SiteFooter,SiteHeader } from "@/components/SiteChrome";

const groups = [
  ["CDU", (type:string)=>type.includes("CDU")],
  ["冷板与整机柜", (type:string)=>type.includes("冷板")||type.includes("整机柜")||type.includes("热管理")],
  ["浸没系统", (type:string)=>type.includes("浸没")&&!type.includes("冷却液")],
  ["快接", (type:string)=>type.includes("快接")],
  ["冷却液", (type:string)=>type.includes("冷却液")],
] as const;

export default function Products(){return <><SiteHeader/><main className="subpage">
  <PageIntro kicker="PRODUCT DATABASE" title="产品参数库" description="覆盖CDU、冷板与整机柜、浸没系统、快接和冷却液。统一记录容量、流量、接口及热源侧与设施侧条件；厂商标称值只在注明工况后比较。" meta={`${products.length}条产品基线 · 5个核心品类 · 全部保留官方来源`}/>
  <section className="coverage-cards">{groups.map(([label,match])=><article key={label}><span>{label}</span><strong>{products.filter(x=>match(x.type)).length} 条</strong><p>可按产品类型在下表定位，并回到官方资料复核。</p></article>)}</section>
  <div className="table-wrap"><table><thead><tr><th>产品</th><th>厂商</th><th>类型</th><th>冷却能力/关键参数</th><th>流量/工况</th><th>接口/构成</th><th>状态</th><th>来源</th></tr></thead><tbody>{products.map(x=><tr key={`${x.vendor}-${x.name}`}><td><b>{x.name}</b></td><td>{x.vendor}</td><td>{x.type}</td><td>{x.capacity}</td><td>{x.flow}</td><td>{x.interface}</td><td>{x.status}</td><td><a href={x.source} target="_blank" rel="noreferrer">原文 ↗</a></td></tr>)}</tbody></table></div>
  <div className="method-note"><b>比较规则</b><p>CDU容量必须同时记录接近温差、供回液温度、流量、压头、介质和冗余配置；浸没系统容量必须对应设施水温、机架数量和介质；冷却液参数必须对应测试方法。缺少条件时显示“待核验”，不同口径不做简单排名。</p></div>
</main><SiteFooter/></>}
