import CompanyExplorer from "@/components/CompanyExplorer"; import { PageIntro,SiteFooter,SiteHeader } from "@/components/SiteChrome";
export default function Companies(){return <><SiteHeader/><main className="subpage"><PageIntro kicker="COMPANY DATABASE" title="全球厂商，中国与广东重点" description="覆盖芯片平台、服务器、冷板、CDU、冷却液、系统集成与数据中心基础设施。每家公司都标记证据等级。"/><CompanyExplorer/></main><SiteFooter/></>}
