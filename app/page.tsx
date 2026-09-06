const modules = [
  ["01", "学习路径", "从热管理基础到AI数据中心液冷系统，按知识依赖逐层学习。", "/learn"],
  ["02", "产业链地图", "连接材料、核心部件、系统集成、服务器与智算中心。", "/industry"],
  ["03", "厂商数据库", "全球收集，重点标注中国、广东与真实业务证据。", "/companies"],
  ["04", "产品参数库", "按冷板、CDU、快接、冷却液与系统方案交叉比较。", "/products"],
  ["05", "市场与财务", "保留市场口径、财报证据与预测差异，不强行合并数字。", "/market"],
  ["06", "政策与标准", "跟踪国家、地方和国际标准的发布、实施与变化。", "/standards"],
];

const rhythms = [
  ["每日 08:00 / 20:00", "自动采集公开来源"],
  ["每周一 07:00", "发布完整增量与5分钟摘要"],
  ["每月首个周一", "校准市场、厂商与产品数据"],
  ["每季度", "执行来源覆盖和失效审计"],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="AI液冷产业知识库首页">
          <span className="brand-mark">LC</span><span>AI液冷产业知识库</span>
        </a>
        <nav aria-label="主导航"><a href="/learn">学习</a><a href="/industry">产业</a><a href="/weekly">周报</a><a href="/sources">覆盖</a></nav>
        <span className="live-dot"><i />每日持续采集</span>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">GLOBAL INTELLIGENCE · CHINA &amp; GUANGDONG FOCUS</div>
          <h1>看懂AI液冷，<br /><em>找到产业机会。</em></h1>
          <p className="lead">一个为个人学习与业务判断打造的公开知识库。把技术、市场、企业、产品、财报、政策与制造需求放进同一套可追溯框架。</p>
          <div className="hero-actions"><a className="primary" href="/learn">开始学习 <span>→</span></a><a className="secondary" href="/weekly">查看更新机制</a></div>
          <div className="scope-row"><span>中文呈现</span><span>中英日韩来源</span><span>2020年至今回溯</span><span>零付费接口</span></div>
        </div>
        <aside className="signal-card" aria-label="知识库运行节奏">
          <div className="signal-head"><div><small>SYSTEM RHYTHM</small><h2>持续采集，统一周更</h2></div><span className="status">网站已上线</span></div>
          <div className="pulse" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /></div>
          <div className="rhythm-list">{rhythms.map(([time, action]) => <div key={time}><strong>{time}</strong><span>{action}</span></div>)}</div>
          <div className="trust-note"><b>可信度规则</b><p>官方资料进入正式库；宣传与转载只作为线索。每条记录保留来源、时间、地域与证据等级。</p></div>
        </aside>
      </section>

      <section className="ticker" aria-label="覆盖范围"><span>冷板式</span><i /><span>浸没式</span><i /><span>CDU</span><i /><span>冷却液</span><i /><span>快接与泵阀</span><i /><span>AI服务器</span><i /><span>智算中心</span><i /><span>制造工艺</span></section>

      <section className="section" id="learn">
        <div className="section-heading"><div><span className="kicker">KNOWLEDGE SYSTEM</span><h2>不是资讯堆积，是一套学习系统</h2></div><p>十二个相互连接的模块，让新知识自动回到产业位置、技术路线和商业意义中。</p></div>
        <div className="module-grid">{modules.map(([index, title, copy, url]) => <article className="module-card" key={index}><span className="module-index">{index}</span><h3>{title}</h3><p>{copy}</p><a href={url}>进入模块 <span>↗</span></a></article>)}</div>
      </section>

      <section className="business" id="industry">
        <div className="business-tag">FOR YOUR BUSINESS</div>
        <div className="business-copy"><h2>从液冷零件，反推数控机床机会</h2><p>识别冷板、分流块、CDU壳体、阀体与泵体的材料、尺寸和工艺，再结合扩产、招聘与招标信号，形成广东潜在客户地图。</p></div>
        <div className="process-flow"><span>液冷部件</span><b>→</b><span>制造工艺</span><b>→</b><span>机床能力</span><b>→</b><span>潜在客户</span></div>
      </section>

      <section className="section compact" id="weekly"><div className="section-heading"><div><span className="kicker">WEEKLY BRIEF</span><h2>每周只看真正发生的变化</h2></div><p>新增内容、重大预警、公司变化、技术趋势与来源缺口，将同步生成网页、Markdown与邮件摘要。</p></div></section>
      <footer id="coverage"><div><strong>AI液冷产业知识库</strong><span>公开学习 · 来源可追溯 · 持续更新</span></div><p><a href="/sources">查看来源覆盖 →</a></p></footer>
    </main>
  );
}
