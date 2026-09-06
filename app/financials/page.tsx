import { financials } from "@/lib/data";
import { EvidenceBadge, PageIntro, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const pct = (value: number, previous?: number) => previous ? `${((value / previous - 1) * 100).toFixed(1)}%` : "—";

export default function Financials() {
  return <>
    <SiteHeader />
    <main className="subpage">
      <PageIntro
        kicker="FINANCIAL BASELINE"
        title="五年财报库"
        description="首发收录三家液冷与温控代表企业2020—2024年完整财年基线。金额统一换算为亿元；公司总营收不代表液冷业务收入。"
        meta="15组年度数据 · 监管披露优先 · 如公司追溯重述，以最新年报为准"
      />
      <section className="insight-box">
        <span>阅读规则</span>
        <h2>先看公司基本盘，再找液冷增量证据</h2>
        <p>财报基线用于判断企业规模、增长与盈利趋势。真正的液冷业务判断还要结合分部收入、客户订单、扩产、研发与产品认证；没有明确拆分时，本站不会把公司总营收标成液冷收入。</p>
      </section>
      <div className="table-wrap">
        <table>
          <thead><tr><th>公司</th><th>财年</th><th>营收（亿元）</th><th>营收同比</th><th>归母净利润（亿元）</th><th>净利润同比</th><th>液冷相关性</th><th>证据</th></tr></thead>
          <tbody>{financials.flatMap(company => company.years.map((row,index) => <tr key={`${company.ticker}-${row.year}`}>
            <td>{index === 0 ? <><strong>{company.company}</strong><br/><small>{company.ticker}｜{company.region}</small></> : ""}</td>
            <td><strong>{row.year}</strong></td><td>{row.revenue.toFixed(2)}</td><td>{pct(row.revenue,company.years[index-1]?.revenue)}</td>
            <td>{row.netProfit.toFixed(2)}</td><td>{pct(row.netProfit,company.years[index-1]?.netProfit)}</td>
            <td>{index === 0 ? company.focus : ""}</td><td>{index === 0 ? <EvidenceBadge value={company.evidence}/> : ""}</td>
          </tr>))}</tbody>
        </table>
      </div>
      <section className="record-list">{financials.map(company => <article key={company.ticker}>
        <span>{company.ticker}</span><h2>{company.company}｜原始报告</h2><p>{company.focus}</p>
        <div>{company.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>)}</div>
      </article>)}</section>
    </main>
    <SiteFooter />
  </>;
}
