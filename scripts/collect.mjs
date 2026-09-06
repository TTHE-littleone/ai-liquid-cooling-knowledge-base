import fs from "node:fs/promises";
import crypto from "node:crypto";

const sources = JSON.parse(await fs.readFile("automation/sources.json", "utf8"));
const inbox = JSON.parse(await fs.readFile("content/inbox.json", "utf8").catch(() => "[]"));
const oldStatus = JSON.parse(await fs.readFile("automation/status.json", "utf8").catch(() => "{\"sources\":[]}"));
const previous = new Map((oldStatus.sources || []).map(x => [x.id, x]));
const known = new Map(inbox.map(x => [x.url, x]));
const robotsCache = new Map();
const now = new Date().toISOString();

const clean = value => value.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'").replace(/\s+/g, " ").trim();
const hash = value => crypto.createHash("sha256").update(value.slice(0, 800000)).digest("hex");

async function robotsAllows(target) {
  const url = new URL(target); const key = url.origin;
  if (!robotsCache.has(key)) {
    const rules = [];
    try {
      const text = await fetch(`${key}/robots.txt`, {signal:AbortSignal.timeout(8000)}).then(r => r.ok ? r.text() : "");
      let active = false;
      for (const raw of text.split(/\r?\n/)) {
        const line = raw.split("#")[0].trim();
        if (/^user-agent:/i.test(line)) active = line.split(":").slice(1).join(":").trim() === "*";
        if (active && /^disallow:/i.test(line)) { const path=line.split(":").slice(1).join(":").trim(); if(path) rules.push(path); }
      }
    } catch {}
    robotsCache.set(key, rules);
  }
  return !robotsCache.get(key).some(path => url.pathname.startsWith(path));
}

function extractCandidates(html, source) {
  const out = [];
  const add=(rawTitle,rawUrl)=>{
    const title=clean(rawTitle.replace(/<!\[CDATA\[|\]\]>/g,"")); if(title.length<8 || title.length>180) return;
    let url; try { url=new URL(rawUrl.replace(/&amp;/g,"&"), source.url).href; } catch { return; }
    if(!/^https?:/.test(url)) return;
    const hay=`${title} ${url}`.toLowerCase(); const hits=source.keywords.filter(k=>hay.includes(k.toLowerCase()));
    if(!hits.length) return;
    out.push({title,url,keywords:hits,score:hits.length + (source.priority==="P0"?2:1)});
  };
  const rss=/<item>[\s\S]*?<title>([\s\S]*?)<\/title>[\s\S]*?<link>([\s\S]*?)<\/link>[\s\S]*?<\/item>/gi; let match;
  while((match=rss.exec(html)) && out.length<80) add(match[1],match[2]);
  const pattern=/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  while ((match=pattern.exec(html)) && out.length < 80) {
    add(match[2],match[1]);
  }
  return out;
}

const statuses=[];
for (const source of sources) {
  const started=Date.now();
  try {
    let response,html,accessUrl,lastError;
    for(const candidateUrl of [source.url,...(source.fallbackUrls||[])]) {
      try {
        if(!(await robotsAllows(candidateUrl))) throw new Error("robots.txt不允许采集");
        const candidateResponse=await fetch(candidateUrl,{headers:{"user-agent":"AI-Liquid-Cooling-Knowledge-Base/1.0 (+public research; respectful crawler)"},signal:AbortSignal.timeout(15000)});
        if(!candidateResponse.ok) throw new Error(`HTTP ${candidateResponse.status}`);
        response=candidateResponse; html=await response.text(); accessUrl=candidateUrl; break;
      } catch(error) { lastError=error; }
    }
    if(!response) throw lastError||new Error("全部入口不可访问");
    const bodyHash=hash(clean(html)); const old=previous.get(source.id); const changed=!old||old.contentHash!==bodyHash; const viaFallback=accessUrl!==source.url;
    for(const item of extractCandidates(html,source)) {
      const existing=known.get(item.url);
      known.set(item.url,{id:existing?.id||crypto.createHash("sha1").update(item.url).digest("hex").slice(0,12),sourceId:source.id,sourceName:source.name,region:source.region,type:source.type,evidence:viaFallback?"C 搜索索引待回源":source.priority==="P0"?"B 企业/机构官方":"D 线索待核验",title:item.title,url:item.url,keywords:item.keywords,score:item.score,firstSeen:existing?.firstSeen||now,lastSeen:now,status:existing?.status||"待核验"});
    }
    statuses.push({id:source.id,name:source.name,priority:source.priority,ok:true,checkedAt:now,changed,changedAt:changed?now:old?.changedAt||null,contentHash:bodyHash,httpStatus:response.status,accessUrl,viaFallback,durationMs:Date.now()-started});
  } catch(error) {
    statuses.push({id:source.id,name:source.name,priority:source.priority,ok:false,checkedAt:now,error:String(error.message||error),durationMs:Date.now()-started,contentHash:previous.get(source.id)?.contentHash||null,changedAt:previous.get(source.id)?.changedAt||null});
  }
}

const items=[...known.values()].sort((a,b)=>b.firstSeen.localeCompare(a.firstSeen)).slice(0,500);
await fs.writeFile("content/inbox.json",JSON.stringify(items,null,2)+"\n");
await fs.writeFile("automation/status.json",JSON.stringify({generatedAt:now,sources:statuses},null,2)+"\n");
console.log(`采集完成：${statuses.filter(x=>x.ok).length}/${statuses.length} 个来源可访问，线索库 ${items.length} 条。`);
