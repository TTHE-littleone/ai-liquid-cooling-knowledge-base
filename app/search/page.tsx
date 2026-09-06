import SearchClient from "@/components/SearchClient"; import { PageIntro,SiteFooter,SiteHeader } from "@/components/SiteChrome";
export default function Search(){return <><SiteHeader/><main className="subpage"><PageIntro kicker="SEARCH" title="搜索整个知识库" description="搜索学习章节、厂商、产品、标准和项目。首发索引随每周更新自动扩展。"/><SearchClient/></main><SiteFooter/></>}
