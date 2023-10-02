"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[5828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},o="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),o=m(n),d=a,k=o["".concat(s,".").concat(d)]||o[d]||p[d]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[o]="string"==typeof e?e:a,l[1]=u;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const i={id:"column-in-enums",title:"column_in_enums"},l=void 0,u={unversionedId:"features/metric/single-table-metric/column-in-enums",id:"features/metric/single-table-metric/column-in-enums",title:"column_in_enums",description:"\u4f7f\u7528\u65b9\u6cd5",source:"@site/docs/04-features/02-metric/01-single-table-metric/09-column-in-enums.md",sourceDirName:"04-features/02-metric/01-single-table-metric",slug:"/features/metric/single-table-metric/column-in-enums",permalink:"/datavines-website/docs/features/metric/single-table-metric/column-in-enums",draft:!1,editUrl:"https://github.com/datavane/datavines-website/edit/dev/docs/04-features/02-metric/01-single-table-metric/09-column-in-enums.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"column-in-enums",title:"column_in_enums"},sidebar:"tutorialSidebar",previous:{title:"column_duplicate",permalink:"/datavines-website/docs/features/metric/single-table-metric/column-duplicate"},next:{title:"column_in_enums",permalink:"/datavines-website/docs/features/metric/single-table-metric/column-in-enums"}},s={},m=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u53c2\u6570\u4ecb\u7ecd",id:"\u53c2\u6570\u4ecb\u7ecd",level:2},{value:"Options",id:"options",level:3},{value:"database string",id:"database-string",level:4},{value:"table string",id:"table-string",level:4},{value:"column string",id:"column-string",level:4},{value:"enum_list string",id:"enum_list-string",level:4},{value:"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50",id:"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50",level:3},{value:"\u68c0\u67e5\u8fc7\u7a0b\u4e2d\u81ea\u52a8\u751f\u6210\u7684 <code>SQL</code> \u8bed\u53e5",id:"\u68c0\u67e5\u8fc7\u7a0b\u4e2d\u81ea\u52a8\u751f\u6210\u7684-sql-\u8bed\u53e5",level:3},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:2},{value:"\u573a\u666f",id:"\u573a\u666f",level:3},{value:"\u601d\u8def",id:"\u601d\u8def",level:3},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3}],c={toc:m};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u521b\u5efa\u89c4\u5219\u4f5c\u4e1a\uff0c\u9009\u62e9\u6570\u636e\u8d28\u91cf\u4f5c\u4e1a"),(0,a.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u4f5c\u4e1a\u9875\u9762\u9009\u62e9 \u679a\u4e3e\u503c\u68c0\u67e5 \u89c4\u5219"),(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\u8981\u68c0\u67e5\u7684\u6570\u636e\u6e90\u4fe1\u606f")),(0,a.kt)("h2",{id:"\u53c2\u6570\u4ecb\u7ecd"},"\u53c2\u6570\u4ecb\u7ecd"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"required"),(0,a.kt)("th",{parentName:"tr",align:"center"},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#database-string"},"database")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#table-string"},"table")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#column-string"},"column")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#enum_list-string"},"enum_list")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,a.kt)("h4",{id:"database-string"},"database ","[string]"),(0,a.kt)("p",null,"\u6e90\u8868\u6570\u636e\u5e93\u540d"),(0,a.kt)("h4",{id:"table-string"},"table ","[string]"),(0,a.kt)("p",null,"\u6e90\u8868\u6570\u636e\u5e93\u4e2d\u7684\u8868\u540d"),(0,a.kt)("h4",{id:"column-string"},"column ","[string]"),(0,a.kt)("p",null,"\u8981\u68c0\u67e5\u7684\u5217"),(0,a.kt)("h4",{id:"enum_list-string"},"enum_list ","[string]"),(0,a.kt)("p",null,"\u679a\u4e3e\u503c\u5217\u8868\uff0c\u7528,\u9694\u5f00"),(0,a.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50"},"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "metricType": "column_in_enums",\n    "metricParameter": {\n        "database": "datavines",\n        "table": "dv_catalog_entity_instance",\n        "column": "type"\n        "enum_list":"\'database\',\'table\'"\n    }\n}\n')),(0,a.kt)("h3",{id:"\u68c0\u67e5\u8fc7\u7a0b\u4e2d\u81ea\u52a8\u751f\u6210\u7684-sql-\u8bed\u53e5"},"\u68c0\u67e5\u8fc7\u7a0b\u4e2d\u81ea\u52a8\u751f\u6210\u7684 ",(0,a.kt)("inlineCode",{parentName:"h3"},"SQL")," \u8bed\u53e5"),(0,a.kt)("p",null,"\u68c0\u67e5\u8fc7\u7a0b\u4f1a\u7528\u5230\u7684\u4e00\u4e9b\u81ea\u52a8\u751f\u6210\u7684\u53c2\u6570\uff0c\u7528\u4e8e\u533a\u5206\u5404\u4e2a\u68c0\u67e5\u89c4\u5219\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"uniqueKey\uff1a\u4f1a\u6839\u636e\u6bcf\u4e2a\u89c4\u5219\u7684\u914d\u7f6e\u4fe1\u606f\u751f\u6210\u4e00\u4e2a\u552f\u4e00\u952e\u503c"),(0,a.kt)("li",{parentName:"ul"},"invalidate",(0,a.kt)("em",{parentName:"li"},"items_table\uff1a\u4f1a\u521b\u5efa\u4e00\u4e2a\u89c6\u56fe\u7528\u4e8e\u5b58\u50a8\u4e2d\u95f4\u8868\u6570\u636e\uff0c\u4e2d\u95f4\u8868\u6570\u636e\u4e00\u822c\u4e3a\u547d\u4e2d\u89c4\u5219\u7684\u6570\u636e\uff0c\u5373\u4e3a\u9519\u8bef\u6570\u636e\uff0c\u8be5\u89c6\u56fe\u7684\u540d\u5b57\u751f\u6210\u89c4\u5219\u4e3a invalidate_items"),"${uniqueKey}")),(0,a.kt)("p",null,"\u4e2d\u95f4\u8868 invalidate_items_uniqueKey"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select * from ${table} where (${column} in (${enum_list})) and ${filter}\n")),(0,a.kt)("p",null,"\u8ba1\u7b97\u5b9e\u9645\u503c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"SQL"),"\uff0c\u8f93\u51fa\u7684\u5b9e\u9645\u503c\u662f\u5217\u7684\u503c\u5728\u679a\u4e3e\u503c\u5217\u8868\u4e2d\u7684\u5217\u7684\u884c\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'select count(1) as actual_value_"+ uniqueKey +" from ${invalidate_items_table}\n')),(0,a.kt)("h2",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("h3",{id:"\u573a\u666f"},"\u573a\u666f"),(0,a.kt)("p",null,"..."),(0,a.kt)("h3",{id:"\u601d\u8def"},"\u601d\u8def"),(0,a.kt)("p",null,"..."),(0,a.kt)("h3",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,a.kt)("p",null,"..."))}o.isMDXComponent=!0}}]);