export type Evidence = "A 官方/监管" | "B 企业官方" | "C 权威转引" | "D 线索待核验";

export const navItems = [
  ["学习", "/learn"], ["产业链", "/industry"], ["厂商", "/companies"],
  ["产品", "/products"], ["市场", "/market"], ["财报", "/financials"], ["标准", "/standards"],
  ["项目案例", "/projects"], ["制造机会", "/manufacturing"], ["每周情报", "/weekly"],
  ["来源覆盖", "/sources"],
];

export const learningChapters = [
  {id:"L01",title:"为什么AI需要液冷",level:"入门",summary:"从芯片功耗、热流密度、机柜功率和风冷边界理解液冷需求。",topics:["TDP与热流密度","机柜功率密度","PUE/WUE","风冷边界"]},
  {id:"L02",title:"热管理基础",level:"入门",summary:"建立热阻、流量、压降、温差、比热容和换热效率的共同语言。",topics:["热阻","流量与压降","供回液温度","接近温差"]},
  {id:"L03",title:"冷板式液冷",level:"核心",summary:"理解冷板、TIM、软管、歧管、快接、CDU与一次/二次侧回路。",topics:["微通道冷板","D2C","Manifold","CDU"]},
  {id:"L04",title:"浸没与喷淋",level:"进阶",summary:"比较单相浸没、两相浸没与喷淋方案的介质、维护和部署差异。",topics:["单相浸没","两相浸没","喷淋","材料兼容性"]},
  {id:"L05",title:"冷却液与材料",level:"核心",summary:"关注水/乙二醇体系、介电液、腐蚀、析出、密封件和材料兼容。",topics:["PG25","去离子水","介电液","腐蚀与洁净"]},
  {id:"L06",title:"AI服务器与机柜",level:"核心",summary:"从GPU、CPU、内存、交换芯片到整机柜热捕获和冗余设计。",topics:["GB200/GB300 NVL72","液冷服务器","盲插","漏液检测"]},
  {id:"L07",title:"数据中心基础设施",level:"进阶",summary:"把TCS、FWS、冷源、干冷器、冷却塔、电力与运维放进系统视角。",topics:["TCS/FWS","干冷器","冷却塔","余热利用"]},
  {id:"L08",title:"可靠性与测试",level:"进阶",summary:"覆盖气密、水压、颗粒、离子、振动、运输、冗余和故障隔离。",topics:["泄漏测试","水质","FMEA","可维护性"]},
  {id:"L09",title:"产业链与商业模式",level:"市场",summary:"区分部件商、系统商、服务器商、集成商、运营商与终端客户。",topics:["价值链","认证导入","交付模式","售后服务"]},
  {id:"L10",title:"市场规模与财务",level:"市场",summary:"学会识别液冷服务器、数据中心液冷和热管理市场的口径差异。",topics:["市场口径","CAGR","液冷收入证据","订单与产能"]},
  {id:"L11",title:"政策与标准",level:"市场",summary:"跟踪国家标准、OCP、ASHRAE以及数据中心能效政策。",topics:["GB/T 48023","OCP ACS","ASHRAE TC 9.9","PUE约束"]},
  {id:"L12",title:"制造工艺与机床机会",level:"业务",summary:"从液冷零件BOM反推CNC工艺、产能扩张和潜在客户。",topics:["冷板加工","分流块","CDU壳体","客户信号"]},
];

export const chain = [
  {stage:"上游材料",items:["铝合金与铜材","不锈钢管路","工程塑料与密封件","水/乙二醇冷却液","介电冷却液","TIM导热材料"]},
  {stage:"核心部件",items:["冷板","CDU","Manifold歧管","UQD快接","泵阀与过滤器","换热器","传感与漏液检测"]},
  {stage:"系统与设备",items:["冷板式整机柜","浸没液冷Tank","液冷服务器","干冷器/冷却塔","预制化液冷舱","监控与群控平台"]},
  {stage:"集成与交付",items:["服务器OEM","数据中心设计院","机电总包","液冷系统集成","测试认证","运维服务"]},
  {stage:"下游需求",items:["云与互联网厂商","运营商","智算中心","超算中心","科研高校","金融与制造业客户"]},
];

export const companies = [
  {name:"英维克 Envicool",region:"中国·深圳",stage:"全链条液冷",evidence:"B 企业官方" as Evidence,focus:"冷板、CDU、快接、冷却液、管路、整机柜与浸没方案",guangdong:true,url:"https://www.envicool.com/product/index.html"},
  {name:"华为数字能源",region:"中国·深圳/东莞",stage:"AIDC基础设施",evidence:"B 企业官方" as Evidence,focus:"MW级液冷、热管理控制器、数据中心基础设施",guangdong:true,url:"https://digitalpower.huawei.com/cn/data-center-facility/smart-cooling"},
  {name:"申菱环境",region:"中国·佛山",stage:"系统与冷源",evidence:"B 企业官方" as Evidence,focus:"CDU、MDU、二次侧环网、风液同源与预制化交付",guangdong:true,url:"https://www.shenling.com/applications/data-services/idc/"},
  {name:"高澜股份",region:"中国·广州",stage:"热管理系统",evidence:"A 官方/监管" as Evidence,focus:"服务器液冷及多场景水冷产品，业务证据需持续看公告",guangdong:true,url:"https://www.cninfo.com.cn/"},
  {name:"飞荣达",region:"中国·深圳",stage:"液冷模组/结构件",evidence:"B 企业官方" as Evidence,focus:"AI服务器液冷模组、液冷板、导热与屏蔽材料",guangdong:true,url:"https://www.frd.cn/products.aspx"},
  {name:"铭利达·讯凌新",region:"中国·东莞",stage:"精密结构件/CDU",evidence:"B 企业官方" as Evidence,focus:"CDU、服务器水冷、GPU水冷、钎焊冷板与CNC加工",guangdong:true,url:"https://www.minglidagroup.com/zh_CN/products/18.html"},
  {name:"海悟科技",region:"中国·东莞",stage:"CDU/数据中心温控",evidence:"B 企业官方" as Evidence,focus:"液冷分配单元及数据中心热管理",guangdong:true,url:"https://www.haiwu.com/"},
  {name:"浪潮信息",region:"中国·济南",stage:"液冷服务器",evidence:"C 权威转引" as Evidence,focus:"中国液冷服务器头部厂商，份额需以IDC最新口径更新",guangdong:false,url:"https://www.inspur.com/"},
  {name:"超聚变 xFusion",region:"中国·郑州",stage:"液冷服务器",evidence:"C 权威转引" as Evidence,focus:"中国液冷服务器主要厂商",guangdong:false,url:"https://www.xfusion.com/"},
  {name:"宁畅",region:"中国·北京",stage:"液冷服务器",evidence:"C 权威转引" as Evidence,focus:"中国液冷服务器主要厂商",guangdong:false,url:"https://www.nettrix.com.cn/"},
  {name:"联想 Neptune",region:"中国/全球",stage:"HPC液冷",evidence:"B 企业官方" as Evidence,focus:"温水液冷与HPC/AI系统",guangdong:false,url:"https://www.lenovo.com/us/en/servers-storage/solutions/liquid-cooling/"},
  {name:"中科曙光",region:"中国·天津",stage:"浸没/服务器",evidence:"B 企业官方" as Evidence,focus:"服务器、高性能计算与液冷数据中心方案",guangdong:false,url:"https://www.sugon.com/"},
  {name:"新华三 H3C",region:"中国·杭州",stage:"液冷服务器",evidence:"B 企业官方" as Evidence,focus:"服务器与数据中心液冷解决方案",guangdong:false,url:"https://www.h3c.com/"},
  {name:"佳力图",region:"中国·南京",stage:"数据中心温控",evidence:"B 企业官方" as Evidence,focus:"机房环境控制与数据中心热管理",guangdong:false,url:"https://www.canatal.com.cn/"},
  {name:"同飞股份",region:"中国·三河",stage:"工业温控/液冷",evidence:"B 企业官方" as Evidence,focus:"数据中心与工业温控产品",guangdong:false,url:"https://www.tfzl.com/"},
  {name:"NVIDIA",region:"美国",stage:"AI计算平台",evidence:"B 企业官方" as Evidence,focus:"GB200/GB300 NVL72等液冷机柜级AI平台",guangdong:false,url:"https://www.nvidia.com/en-us/data-center/gb200-nvl72/"},
  {name:"Supermicro",region:"美国",stage:"整机柜液冷",evidence:"B 企业官方" as Evidence,focus:"服务器、冷板、CDU、歧管到冷却塔的DLC-2方案",guangdong:false,url:"https://www.supermicro.com/en/solutions/liquid-cooling"},
  {name:"CoolIT Systems",region:"加拿大",stage:"冷板/CDU",evidence:"B 企业官方" as Evidence,focus:"D2C冷板与高容量CDU，面向AI/HPC集群",guangdong:false,url:"https://www.coolitsystems.com/"},
  {name:"Schneider Electric / Motivair",region:"法国/美国",stage:"端到端液冷",evidence:"B 企业官方" as Evidence,focus:"CDU、后门换热器、HDU、冷板、冷源与服务",guangdong:false,url:"https://www.se.com/us/en/about-us/newsroom/news/press-releases/schneider-electric-unveils-liquid-cooling-portfolio-with-motivair-featuring-dedicated-solutions-and-services-for-hpc-and-ai-workloads-68da975376d417f4a10de42c/"},
  {name:"Vertiv",region:"美国",stage:"CDU/基础设施",evidence:"B 企业官方" as Evidence,focus:"Liebert XDU、芯片液冷与后门换热方案",guangdong:false,url:"https://www.vertiv.com/en-emea/products-catalog/thermal-management/high-density-solutions/liebert-xdu-x-treme-density-coolant-distribution-unit/"},
  {name:"Boyd",region:"美国",stage:"冷板/热管理",evidence:"B 企业官方" as Evidence,focus:"冷板、液冷系统与工程热管理",guangdong:false,url:"https://www.boydcorp.com/thermal/liquid-cooling.html"},
  {name:"Modine",region:"美国",stage:"数据中心冷却",evidence:"B 企业官方" as Evidence,focus:"Airedale数据中心冷却与液冷基础设施",guangdong:false,url:"https://www.modine.com/markets/data-centers/"},
  {name:"LiquidStack",region:"美国",stage:"浸没液冷",evidence:"B 企业官方" as Evidence,focus:"单相/两相浸没与直接液冷解决方案",guangdong:false,url:"https://liquidstack.com/"},
  {name:"Submer",region:"西班牙",stage:"浸没液冷",evidence:"B 企业官方" as Evidence,focus:"浸没冷却、数据中心基础设施与热回收",guangdong:false,url:"https://submer.com/"},
  {name:"GRC",region:"美国",stage:"浸没液冷",evidence:"B 企业官方" as Evidence,focus:"单相浸没式数据中心冷却",guangdong:false,url:"https://www.grcooling.com/"},
  {name:"ZutaCore",region:"以色列/美国",stage:"两相D2C",evidence:"B 企业官方" as Evidence,focus:"无水介电两相直接芯片冷却",guangdong:false,url:"https://zutacore.com/"},
];

export const products = [
  {name:"CHx2000",vendor:"CoolIT Systems",type:"液-液行级CDU",capacity:"2,000 kW",flow:"2,125 L/min（厂商条件）",interface:"4英寸 Tri-Clamp",status:"已公开",source:"https://www.coolitsystems.com/cdu-product/chx2000/"},
  {name:"MCDU-70",vendor:"Motivair by Schneider",type:"液-液CDU",capacity:"2.5 MW",flow:"待产品表核验",interface:"模块化扩展",status:"2026年发布",source:"https://www.se.com/us/en/about-us/newsroom/news/press-releases/motivair-by-schneider-electric-announces-new-cdu-with-capability-to-scale-to-10mw-and-beyond-for-nextgen-ai-factories-69705c3655f8517e99086bbd/"},
  {name:"Liebert XDU 450",vendor:"Vertiv",type:"液-液CDU",capacity:"450 kW",flow:"按选型表",interface:"一次/二次侧隔离",status:"已公开",source:"https://www.vertiv.com/493535/globalassets/products/thermal-management/high-density-solutions/vertiv-liebert-xdu-coolant-distribution-units/liebert-xdu450-cdu-ds-emea--rev.-01-jan-2023.pdf"},
  {name:"FusionCol600-L450MA",vendor:"华为数字能源",type:"热管理控制器",capacity:"型号信息待核验",flow:"待产品表核验",interface:"高密智算液冷",status:"官网在售",source:"https://digitalpower.huawei.com/cn/data-center-facility/smart-cooling"},
  {name:"DLC-2",vendor:"Supermicro",type:"整机柜D2C方案",capacity:"机柜级方案",flow:"随配置",interface:"冷板/CDU/CDM/管路",status:"已公开",source:"https://www.supermicro.com/datasheet/Datasheet_Supermicro_DLC-2.pdf"},
  {name:"Coolinside",vendor:"英维克",type:"全链条冷板式液冷",capacity:"多规格",flow:"随配置",interface:"冷板/CDU/UQD/工质/管路",status:"官网在售",source:"https://www.envicool.com/solution/24.html"},
];

export const standards = [
  {code:"GB/T 48023-2026",title:"数据中心冷板式液冷系统技术规范",region:"中国",date:"2027-02-01实施",evidence:"A 官方/监管" as Evidence,source:"https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=114934594976F57EA3F3683C13B13DB8"},
  {code:"发改环资〔2024〕970号",title:"数据中心绿色低碳发展专项行动计划",region:"中国",date:"2024-07-03",evidence:"A 官方/监管" as Evidence,source:"https://zfxxgk.ndrc.gov.cn/web/iteminfo.jsp?id=20410"},
  {code:"粤发改高技〔2022〕436号",title:"广东省关于加强数据中心布局建设的意见",region:"广东",date:"现行有效",evidence:"A 官方/监管" as Evidence,source:"https://drc.gd.gov.cn/gkmlpt/content/4/4077/mmpost_4077314.html"},
  {code:"粤算行动计划 2024-2025",title:"广东省算力基础设施高质量发展行动",region:"广东",date:"2024-2025",evidence:"A 官方/监管" as Evidence,source:"https://www.cagd.gov.cn/v/2024/03/4773.html"},
  {code:"OCP ACS",title:"Advanced Cooling Solutions开放工作组与文档库",region:"全球",date:"持续更新",evidence:"A 官方/监管" as Evidence,source:"https://www.opencompute.org/wiki/Cooling_Environments_Advanced_Cooling_Solutions"},
  {code:"OCP Cold Plate Loop Rev 2.0",title:"冷板冷却回路要求",region:"全球",date:"持续更新",evidence:"A 官方/监管" as Evidence,source:"https://www.opencompute.org/documents/cold-plate-cooling-loop-requirements-rev-2-pdf"},
  {code:"OCP UQD v2",title:"通用快接接口规范工作项",region:"全球",date:"草案跟踪",evidence:"A 官方/监管" as Evidence,source:"https://www.opencompute.org/wiki/Cooling_Environments/Cold_Plate"},
  {code:"ASHRAE TC 9.9",title:"Datacom液冷与环境指南体系",region:"全球",date:"持续更新",evidence:"A 官方/监管" as Evidence,source:"https://www.ashrae.org/technical-resources/bookstore/datacom-series"},
  {code:"ASHRAE 90.4-2025",title:"Energy Standard for Data Centers",region:"全球",date:"2025版",evidence:"A 官方/监管" as Evidence,source:"https://www.ashrae.org/technical-resources/bookstore/datacom-series"},
];

export const marketData = [
  {metric:"中国液冷服务器市场规模",period:"2024",value:"23.7亿美元",change:"同比 +67.0%",scope:"液冷服务器销售额；非整个液冷基础设施市场",evidence:"C 权威转引" as Evidence,source:"https://xxzx.fujian.gov.cn/jjxx/xxhdt/202505/t20250509_6910026.htm"},
  {metric:"中国液冷服务器出货量",period:"2024",value:"超过23万台",change:"IDC跟踪口径",scope:"服务器台数，不能与CDU/冷板收入相加",evidence:"C 权威转引" as Evidence,source:"https://xxzx.fujian.gov.cn/jjxx/xxhdt/202505/t20250509_6910026.htm"},
  {metric:"中国液冷服务器预测",period:"2024-2029",value:"CAGR 46.8%",change:"2029年162亿美元",scope:"预测值，需随IDC新版本滚动更新",evidence:"C 权威转引" as Evidence,source:"https://xxzx.fujian.gov.cn/jjxx/xxhdt/202505/t20250509_6910026.htm"},
  {metric:"市场集中度信号",period:"2024",value:"前三约七成",change:"浪潮、超聚变、宁畅",scope:"按厂商销售额；具体份额需购买/核验原报告",evidence:"C 权威转引" as Evidence,source:"https://xxzx.fujian.gov.cn/jjxx/xxhdt/202505/t20250509_6910026.htm"},
];

export const financials = [
  {
    company:"英维克", ticker:"002837.SZ", region:"广东·深圳", focus:"数据中心温控、冷板、CDU、管路与液冷系统",
    evidence:"A 官方/监管" as Evidence,
    sources:[
      {label:"2024年度报告",url:"https://static.cninfo.com.cn/finalpage/2025-04-22/1223190929.PDF"},
      {label:"2022年度财务报告",url:"https://disc.static.szse.cn/disc/disk03/finalpage/2023-04-10/974f467b-1cd2-4614-a6c3-abe04723687a.PDF"},
      {label:"2021年度财务决算",url:"https://static.cninfo.com.cn/finalpage/2022-04-26/1213101808.PDF"},
    ],
    years:[
      {year:2020,revenue:17.03,netProfit:1.82},{year:2021,revenue:22.28,netProfit:2.05},
      {year:2022,revenue:29.23,netProfit:2.80},{year:2023,revenue:35.29,netProfit:3.44},
      {year:2024,revenue:45.89,netProfit:4.53},
    ],
  },
  {
    company:"申菱环境", ticker:"301018.SZ", region:"广东·佛山", focus:"数据服务温控、CDU、液冷环网与冷源系统",
    evidence:"A 官方/监管" as Evidence,
    sources:[
      {label:"2024年度报告摘要",url:"https://static.cninfo.com.cn/finalpage/2025-04-28/1223319937.PDF"},
      {label:"2022年度财务决算",url:"https://static.cninfo.com.cn/finalpage/2023-04-28/1216657793.PDF"},
      {label:"2021年度报告摘要",url:"https://static.cninfo.com.cn/finalpage/2022-04-25/1213052329.PDF"},
    ],
    years:[
      {year:2020,revenue:14.67,netProfit:1.25},{year:2021,revenue:17.98,netProfit:1.40},
      {year:2022,revenue:22.21,netProfit:1.66},{year:2023,revenue:25.11,netProfit:1.05},
      {year:2024,revenue:30.16,netProfit:1.16},
    ],
  },
  {
    company:"同飞股份", ticker:"300990.SZ", region:"中国·河北", focus:"工业温控、液体恒温设备及数据中心液冷",
    evidence:"A 官方/监管" as Evidence,
    sources:[
      {label:"2024年度报告",url:"https://static.cninfo.com.cn/finalpage/2025-04-18/1223121085.PDF"},
      {label:"公司投资者关系",url:"https://www.tfzl.com/invest"},
    ],
    years:[
      {year:2020,revenue:6.12,netProfit:1.25},{year:2021,revenue:8.29,netProfit:1.20},
      {year:2022,revenue:10.08,netProfit:1.28},{year:2023,revenue:18.45,netProfit:1.82},
      {year:2024,revenue:21.60,netProfit:1.53},
    ],
  },
];

export const projects = [
  {name:"中国移动粤港澳（广州）数据中心",place:"广州",signal:"采用液冷散热、异构计算、算电协同等技术；官方称为广州首个单体万P新型智算中心。",date:"2026",source:"https://kjj.gz.gov.cn/xwlb/yw/content/post_10760625.html"},
  {name:"香港科技大学（广州）智算中心",place:"广州",signal:"官方答复材料称建成40kW以上喷淋液冷规模化应用数据中心。",date:"2025",source:"https://kjj.gz.gov.cn/gkmlpt/content/10/10326/post_10326790.html"},
  {name:"广东韶关数据中心集群",place:"韶关",signal:"广东2026—2030行动方案继续强调强化科研算力基础设施与韶关集群建设。",date:"2026-2030",source:"https://www.cagd.gov.cn/v/2026/06/9223.html"},
  {name:"马来西亚MY06液冷集装箱项目",place:"马来西亚",signal:"申菱官方案例披露风液同源液冷集装箱方案，属于中国供应商出海线索。",date:"持续跟踪",source:"https://www.shenling.com/applications/data-services/idc/"},
];

export const manufacturing = [
  {part:"CPU/GPU冷板",material:"铝合金、紫铜",process:"精铣基面、微细流道、钻孔攻牙、摩擦搅拌焊/钎焊后精加工",control:"平面度、粗糙度、流阻、洁净度与气密",machine:"高速高精立加；小中型工件优先"},
  {part:"Manifold分流块",material:"铝合金、不锈钢",process:"多面腔体、交叉深孔、螺纹口与密封面加工",control:"孔位、毛刺、颗粒残留、耐压与均流",machine:"BT40立加+四轴；复杂件关注深孔能力"},
  {part:"CDU壳体/底座",material:"铝合金、碳钢、不锈钢",process:"板金结构与局部精加工、泵阀安装面、管路接口",control:"装配基准、承载、振动与可维护性",machine:"中大型立加用于关键安装面和连接块"},
  {part:"快接阀体",material:"不锈钢、铜合金",process:"车削、内孔、密封槽、精密配合面",control:"泄漏率、插拔寿命、压降与颗粒",machine:"以车铣复合为主，立加用于阀块/夹具工序"},
  {part:"泵体/阀块",material:"铝合金、不锈钢",process:"型腔、流道、阀孔、法兰面与多孔系",control:"同轴度、密封面、气蚀风险与清洁度",machine:"高刚性BT40立加，视尺寸选择工作台"},
  {part:"换热器端板",material:"不锈钢、碳钢",process:"孔系、定位槽、密封面与装配基准",control:"平面度、孔距、耐腐蚀",machine:"中大型立加，批量件关注夹具与节拍"},
  {part:"浸没液冷Tank",material:"不锈钢、铝合金",process:"箱体焊接、法兰与安装面精加工",control:"密封、形变、介质兼容与维护空间",machine:"大型立加/龙门为主，当前产品线作为线索"},
  {part:"测试工装与夹具",material:"铝、钢、工程塑料",process:"定位面、管路接口、仿形支撑与快速换型",control:"重复定位、节拍、防变形",machine:"立式加工中心直接适配，适合作为切入订单"},
];

export const weeklySignals = [
  {date:"2026-08-21",level:"重大",title:"中国首项数据中心冷板式液冷系统国家标准发布",summary:"GB/T 48023-2026已发布，2027年2月1日起实施。首发需要建立条款影响清单并追踪配套检测与认证。",source:"https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=114934594976F57EA3F3683C13B13DB8"},
  {date:"2026-07-20",level:"行业",title:"华为继续强化AIDC液冷生态与全生命周期热管理",summary:"官方活动继续把液冷、供电、AI运维和工程预制化放在同一AIDC架构中。",source:"https://digitalpower.huawei.com/za/news/data-center-facility/aidc-ecosystem-forum"},
  {date:"2026-05-19",level:"广东",title:"华为在东莞发布Grid-Interactive AIDC战略",summary:"官方提出MW级液冷系统与从芯片到室外的全生命周期热管理，东莞成为重点观察地。",source:"https://www.huawei.com/en/news/2026/5/global-aidc-industry-summit"},
  {date:"2026-03-06",level:"产品",title:"CoolIT公开CHx2000 AI CDU详细能力",summary:"厂商披露2MW级冷却、面向高密AI集群，并强调制造规模与集群控制能力。",source:"https://www.coolitsystems.com/resources/news/chx2000-the-ai-cdu/"},
  {date:"2026-01-21",level:"产品",title:"Motivair发布2.5MW MCDU-70",summary:"厂商称单机2.5MW，CDU组合可扩展到10MW及以上，反映CDU容量持续上移。",source:"https://www.se.com/us/en/about-us/newsroom/news/press-releases/motivair-by-schneider-electric-announces-new-cdu-with-capability-to-scale-to-10mw-and-beyond-for-nextgen-ai-factories-69705c3655f8517e99086bbd/"},
];

export const sources = [
  {name:"国家标准全文公开系统",type:"标准",region:"中国",priority:"P0",method:"页面变更",url:"https://openstd.samr.gov.cn/"},
  {name:"国家发展改革委",type:"政策",region:"中国",priority:"P0",method:"栏目巡检",url:"https://www.ndrc.gov.cn/"},
  {name:"工业和信息化部",type:"政策/目录",region:"中国",priority:"P0",method:"栏目巡检",url:"https://www.miit.gov.cn/"},
  {name:"巨潮资讯",type:"财报/公告",region:"中国",priority:"P0",method:"公开检索",url:"https://www.cninfo.com.cn/"},
  {name:"广东省政府/发改委",type:"广东政策",region:"广东",priority:"P0",method:"栏目巡检",url:"https://www.gd.gov.cn/"},
  {name:"广州/深圳/东莞/佛山政府",type:"项目/政策",region:"广东",priority:"P0",method:"多站点巡检",url:"https://www.gd.gov.cn/"},
  {name:"Open Compute Project ACS",type:"标准/技术",region:"全球",priority:"P0",method:"Wiki与文档",url:"https://www.opencompute.org/wiki/Cooling_Environments_Advanced_Cooling_Solutions"},
  {name:"ASHRAE TC 9.9",type:"标准/技术",region:"全球",priority:"P0",method:"公开资源",url:"https://www.ashrae.org/technical-resources/bookstore/datacom-series"},
  {name:"NVIDIA Data Center",type:"AI平台",region:"全球",priority:"P0",method:"产品与文档",url:"https://www.nvidia.com/en-us/data-center/"},
  {name:"英维克",type:"企业/产品",region:"深圳",priority:"P0",method:"官网变更",url:"https://www.envicool.com/"},
  {name:"华为数字能源",type:"企业/产品",region:"深圳/东莞",priority:"P0",method:"官网变更",url:"https://digitalpower.huawei.com/"},
  {name:"申菱环境",type:"企业/项目",region:"佛山",priority:"P0",method:"官网变更",url:"https://www.shenling.com/"},
  {name:"飞荣达",type:"结构件/产品",region:"深圳",priority:"P1",method:"官网变更",url:"https://www.frd.cn/"},
  {name:"铭利达",type:"结构件/制造",region:"东莞",priority:"P1",method:"官网变更",url:"https://www.minglidagroup.com/"},
  {name:"CoolIT Systems",type:"冷板/CDU",region:"全球",priority:"P0",method:"官网变更",url:"https://www.coolitsystems.com/"},
  {name:"Schneider/Motivair",type:"CDU/基础设施",region:"全球",priority:"P0",method:"新闻与产品",url:"https://www.se.com/"},
  {name:"Vertiv",type:"CDU/基础设施",region:"全球",priority:"P0",method:"产品与文档",url:"https://www.vertiv.com/"},
  {name:"Supermicro",type:"AI服务器/整机柜",region:"全球",priority:"P0",method:"产品与文档",url:"https://www.supermicro.com/en/solutions/liquid-cooling"},
  {name:"IDC公开摘要与政府转引",type:"市场规模",region:"中国",priority:"P1",method:"交叉核验",url:"https://www.idc.com/"},
  {name:"企业年度报告",type:"财务",region:"全球",priority:"P0",method:"监管披露",url:"https://www.cninfo.com.cn/"},
];

export const searchIndex = [
  ...learningChapters.map(x=>({title:x.title,type:"学习",summary:x.summary,url:"/learn"})),
  ...companies.map(x=>({title:x.name,type:"厂商",summary:`${x.region}｜${x.stage}｜${x.focus}`,url:"/companies"})),
  ...products.map(x=>({title:x.name,type:"产品",summary:`${x.vendor}｜${x.type}｜${x.capacity}`,url:"/products"})),
  ...financials.map(x=>({title:`${x.company} ${x.ticker}`,type:"财报",summary:`${x.region}｜2020—2024营收与归母净利润｜${x.focus}`,url:"/financials"})),
  ...standards.map(x=>({title:x.code,type:"标准",summary:`${x.title}｜${x.region}｜${x.date}`,url:"/standards"})),
  ...projects.map(x=>({title:x.name,type:"项目",summary:`${x.place}｜${x.signal}`,url:"/projects"})),
];
