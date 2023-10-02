"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[528],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(a),o=n,k=d["".concat(c,".").concat(o)]||d[o]||m[o]||l;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=o;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[d]="string"==typeof e?e:n,i[1]=u;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},1145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={id:"multi-table-value-comparison",title:"\u4e24\u8868\u503c\u6bd4\u5bf9"},i=void 0,u={unversionedId:"features/metric/multi-table-metric/multi-table-value-comparison",id:"features/metric/multi-table-metric/multi-table-value-comparison",title:"\u4e24\u8868\u503c\u6bd4\u5bf9",description:"\u4f7f\u7528\u65b9\u6cd5",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/04-features/02-metric/02-multi-table-metric/01-multi-table-value-comparison.md",sourceDirName:"04-features/02-metric/02-multi-table-metric",slug:"/features/metric/multi-table-metric/multi-table-value-comparison",permalink:"/datavines-website/zh-CN/docs/features/metric/multi-table-metric/multi-table-value-comparison",draft:!1,editUrl:"https://github.com/datavane/datavines-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/04-features/02-metric/02-multi-table-metric/01-multi-table-value-comparison.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"multi-table-value-comparison",title:"\u4e24\u8868\u503c\u6bd4\u5bf9"},sidebar:"tutorialSidebar",previous:{title:"column_in_enums",permalink:"/datavines-website/zh-CN/docs/features/metric/single-table-metric/column-in-enums"},next:{title:"\u8de8\u8868\u51c6\u786e\u6027",permalink:"/datavines-website/zh-CN/docs/features/metric/multi-table-metric/multi-table-accuracy"}},c={},s=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u53c2\u6570\u4ecb\u7ecd",id:"\u53c2\u6570\u4ecb\u7ecd",level:2},{value:"Options",id:"options",level:3},{value:"database string",id:"database-string",level:4},{value:"table string",id:"table-string",level:4},{value:"actual_execute_sql string",id:"actual_execute_sql-string",level:4},{value:"database2 string",id:"database2-string",level:4},{value:"table2 string",id:"table2-string",level:4},{value:"expected_execute_sql string",id:"expected_execute_sql-string",level:4},{value:"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50",id:"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50",level:3},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:2},{value:"\u573a\u666f",id:"\u573a\u666f",level:3},{value:"\u601d\u8def",id:"\u601d\u8def",level:3},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3}],p={toc:s};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u521b\u5efa\u89c4\u5219\u4f5c\u4e1a\uff0c\u9009\u62e9\u6570\u636e\u6bd4\u5bf9\u4f5c\u4e1a"),(0,n.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u4f5c\u4e1a\u9875\u9762\u9009\u62e9 \u4e24\u8868\u503c\u6bd4\u5bf9 \u89c4\u5219"),(0,n.kt)("li",{parentName:"ul"},"\u8fdb\u884c\u6e90\u8868\u548c\u76ee\u6807\u8868\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u7f16\u5199\u5404\u81ea\u7684\u68c0\u67e5SQL\u8bed\u53e5")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u4e24\u8868\u503c\u6bd4\u5bf9\u89c4\u5219",src:a(6222).Z,width:"1920",height:"937"})),(0,n.kt)("h2",{id:"\u53c2\u6570\u4ecb\u7ecd"},"\u53c2\u6570\u4ecb\u7ecd"),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"default value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"#database-string"},"database")),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"#table-string"},"table")),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"#actual_execute_sql-string"},"actual_execute_sql")),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"#database2-string"},"database2")),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"#table2-string"},"table2")),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"#expected_execute_sql-string"},"expected_execute_sql")),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,n.kt)("h4",{id:"database-string"},"database ","[string]"),(0,n.kt)("p",null,"\u6e90\u8868\u6570\u636e\u5e93\u540d"),(0,n.kt)("h4",{id:"table-string"},"table ","[string]"),(0,n.kt)("p",null,"\u6e90\u8868\u6570\u636e\u5e93\u4e2d\u7684\u8868\u540d"),(0,n.kt)("h4",{id:"actual_execute_sql-string"},"actual_execute_sql ","[string]"),(0,n.kt)("p",null,"\u5b9e\u9645\u503c\u6267\u884cSQL\uff0c\u6ce8\u610f as \u540e\u9762\u7684\u522b\u540d\u4e00\u5b9a\u8981\u662f ",(0,n.kt)("strong",{parentName:"p"},"actual_value"),"\uff0c\u5426\u5219\u7edf\u8ba1\u4f1a\u51fa\u9519\u3002"),(0,n.kt)("h4",{id:"database2-string"},"database2 ","[string]"),(0,n.kt)("p",null,"\u76ee\u6807\u8868\u6570\u636e\u5e93\u540d"),(0,n.kt)("h4",{id:"table2-string"},"table2 ","[string]"),(0,n.kt)("p",null,"\u76ee\u6807\u8868\u6570\u636e\u5e93\u4e2d\u7684\u8868\u540d"),(0,n.kt)("h4",{id:"expected_execute_sql-string"},"expected_execute_sql ","[string]"),(0,n.kt)("p",null,"\u671f\u671b\u503c\u6267\u884cSQL\uff0c\u6ce8\u610f as \u540e\u9762\u7684\u522b\u540d\u4e00\u5b9a\u8981\u662f ",(0,n.kt)("strong",{parentName:"p"},"expected_value"),"\uff0c\u5426\u5219\u7edf\u8ba1\u4f1a\u51fa\u9519\u3002"),(0,n.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50"},"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "metricType": "multi_table_value_comparison",\n  "metricParameter": {\n    "database": "cbs",\n    "table": "cbs_ratio",\n    "actual_execute_sql": "select count(1) as actual_value from ${table}",\n    "database2": "cbs",\n    "table2": "cbs_ratio",\n    "expected_execute_sql": "select count(1) as expected_value from ${table2}"\n  }\n}\n')),(0,n.kt)("h2",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,n.kt)("h3",{id:"\u573a\u666f"},"\u573a\u666f"),(0,n.kt)("p",null,"\u6bd4\u8f83\u67d0\u5f20\u8868(\u6709\u65f6\u95f4\u5206\u533a\u5217)\u4eca\u5929\u7684\u6570\u636e\u91cf\u548c\u6628\u5929\u7684\u6570\u636e\u91cf\uff0c\u5982\u679c\u4eca\u5929\u7684\u6570\u636e\u91cf\u5c0f\u4e8e\u6628\u5929\u7684\u6570\u636e\u91cf\u5c31\u9700\u8981\u544a\u8b66\u3002"),(0,n.kt)("h3",{id:"\u601d\u8def"},"\u601d\u8def"),(0,n.kt)("p",null,"\u4f7f\u7528\u4e24\u8868\u503c\u6bd4\u5bf9\u89c4\u5219\u914d\u5408\u5185\u7f6e\u65f6\u95f4\u53c2\u6570\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u4e24\u8868\u503c\u6bd4\u5bf9\u7684\u89c4\u5219\uff0c\u901a\u8fc7\u7f16\u5199 SQL \u8bed\u53e5\u6765\u7edf\u8ba1\u4eca\u5929\u548c\u6628\u5929\u7684\u6570\u636e\u91cf\uff0c\u7136\u540e\u6bd4\u8f83\u4e24\u4e2a\u503c\uff0c\u5982\u679c\u4eca\u5929\u7684\u503c\u5927\u4e8e\u6628\u5929\u7684\u503c\u5219\u4e3a\u771f\uff0c\u5426\u5219\u4e3a\u5047\u3002")),(0,n.kt)("h3",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6570\u636e\u6bd4\u5bf9\u4f5c\u4e1a\u4e2d\u7684\u4e24\u8868\u503c\u6bd4\u5bf9\u89c4\u5219"),(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u548c\u8868\uff0c\u5e76\u7f16\u5199\u8ba1\u7b97\u5b9e\u9645\u503c SQL \u8bed\u53e5\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8bed\u53e5\u91cc\u9762\u7528\u5230\u4e86",(0,n.kt)("inlineCode",{parentName:"li"},"$[today]"),"\u65f6\u95f4\u53d8\u91cf\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u66ff\u6362\u6210\u4eca\u5929\u7684\u65e5\u671f\uff0c\u683c\u5f0f\u4e3a",(0,n.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd"),"\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5df1\u914d\u7f6e\u683c\u5f0f ",(0,n.kt)("inlineCode",{parentName:"li"},"$[today(yyyyMMdd)]"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f as \u540e\u9762\u7684\u522b\u540d\u4e00\u5b9a\u8981\u662f ",(0,n.kt)("strong",{parentName:"li"},"actual_value"),"\uff0c\u5426\u5219\u7edf\u8ba1\u4f1a\u51fa\u9519\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8868\u540d\u53ef\u4ee5\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"${table}"),"\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u66ff\u6362\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5199\u6b63\u786e\u7684\u8868\u540d\u3002")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"select count(1) as actual_value from ${table} where data_date='$[today]'\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u548c\u8868\uff0c\u5e76\u7f16\u5199\u8ba1\u7b97\u671f\u671b\u503c SQL \u8bed\u53e5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8bed\u53e5\u91cc\u9762\u7528\u5230\u4e86",(0,n.kt)("inlineCode",{parentName:"li"},"$[yesterday]"),"\u65f6\u95f4\u53d8\u91cf\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u66ff\u6362\u6210\u6628\u5929\u7684\u65e5\u671f\uff0c\u683c\u5f0f\u4e3a",(0,n.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd"),"\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5df1\u914d\u7f6e\u683c\u5f0f ",(0,n.kt)("inlineCode",{parentName:"li"},"$[yesterday(yyyyMMdd)]"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f as \u540e\u9762\u7684\u522b\u540d\u4e00\u5b9a\u8981\u662f ",(0,n.kt)("strong",{parentName:"li"},"expected_value"),"\uff0c\u5426\u5219\u7edf\u8ba1\u4f1a\u51fa\u9519\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8868\u540d\u53ef\u4ee5\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"${table2}"),"\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u66ff\u6362\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5199\u6b63\u786e\u7684\u8868\u540d\u3002")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"select count(1) as expected_value from ${table2} where data_date='$[yesterday]'\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u7ed3\u679c\u5224\u65ad\u516c\u5f0f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7ed3\u679c\u516c\u5f0f\u9009\u62e9\uff1a\u5b9e\u9645\u503c-\u671f\u671b\u503c"),(0,n.kt)("li",{parentName:"ul"},"\u6bd4\u8f83\u7b26\u9009\u62e9\uff1a>="),(0,n.kt)("li",{parentName:"ul"},"\u9608\u503c\uff1a0")))),(0,n.kt)("p",null,"\u5982\u679c\u516c\u5f0f",(0,n.kt)("inlineCode",{parentName:"p"},"\u5b9e\u9645\u503c-\u671f\u671b\u503c >= 0"),"\u7684\u7ed3\u679c\u4e3a\u771f, \u90a3\u4e48\u5c31\u8bc1\u660e\u4eca\u5929\u7684\u8868\u884c\u6570\u5927\u4e8e\u6628\u5929\u7684\u8868\u884c\u6570\uff0c\u5426\u5219\u5c31\u8bc1\u660e\u4eca\u5929\u7684\u8868\u884c\u6570\u5c0f\u4e8e\u6628\u5929\u7684\u8868\u884c\u6570\uff0c\u7ed3\u679c\u662f\u5f02\u5e38\u7684\uff0c\u9700\u8981\u544a\u8b66\u3002"))}d.isMDXComponent=!0},6222:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/metric_multi_table_value_comparison-063f9a87ba98acb97edcad11c60fffb1.png"}}]);