"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[8489],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,k=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[m]="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3170:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"deploy-docker-image",title:"Run Docker Image"},i=void 0,d={unversionedId:"get-started/docker/deploy-docker-image",id:"get-started/docker/deploy-docker-image",title:"Run Docker Image",description:"Description",source:"@site/docs/02-get-started/02-docker/02-deploy-docker-image.md",sourceDirName:"02-get-started/02-docker",slug:"/get-started/docker/deploy-docker-image",permalink:"/datavines-website/en/docs/get-started/docker/deploy-docker-image",draft:!1,editUrl:"https://github.com/datavane/datavines-website/edit/dev/docs/02-get-started/02-docker/02-deploy-docker-image.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"deploy-docker-image",title:"Run Docker Image"},sidebar:"tutorialSidebar",previous:{title:"Build Docker Image",permalink:"/datavines-website/en/docs/get-started/docker/build-docker-image"},next:{title:"Kubernetes Deploy",permalink:"/datavines-website/en/docs/get-started/kubernetes-deploy"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Environment",id:"environment",level:2},{value:"Method 1 (Recommended)\uff1adocker-compose",id:"method-1-recommendeddocker-compose",level:2},{value:"Preparation in advance",id:"preparation-in-advance",level:3},{value:"Quick Start",id:"quick-start",level:3},{value:"Method 2 \uff1adocker run",id:"method-2-docker-run",level:2}],s={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This article will briefly describe how to quickly run Datavines using the 'Docker run' or 'Docker compile' commands."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"software"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Docker"),(0,a.kt)("td",{parentName:"tr",align:"center"},"20.0 and above")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"docker-compose"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2.10 and above")))),(0,a.kt)("h2",{id:"method-1-recommendeddocker-compose"},"Method 1 (Recommended)\uff1adocker-compose"),(0,a.kt)("h3",{id:"preparation-in-advance"},"Preparation in advance"),(0,a.kt)("p",null,"1.Download and modify",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/datavane/datavines/dev/deploy/compose/docker-compose.yaml"},"docker-compose.yaml")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modify the image version to a locally compiled version or a private repository image version")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"image: datavines:dev\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If there is a conflict between the external network segment and the internal network segment of the container, which means that the container can be accessed within the same network segment, but cannot be accessed across different network segments,Can modify the ",(0,a.kt)("inlineCode",{parentName:"li"},"network_mode")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.yaml")," file.\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"networks:\n  datavines:\n    driver: bridge\n    ipam:\n      config:\n        - subnet: 172.18.0.0/24(Custom network segment)\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Download environment configuration file",(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/datavane/datavines/dev/deploy/compose/.env"},".env")),(0,a.kt)("li",{parentName:"ol"},"Modify the configuration items in the ",(0,a.kt)("inlineCode",{parentName:"li"},". env")," file as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Database Connection\nSPRING_DATASOURCE_URL=jdbc:mysql://127.0.0.1:3306/datavines?useSSL=false&useUnicode=true&characterEncoding=UTF-8&allowPublicKeyRetrieval=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8\n# User name\nSPRING_DATASOURCE_USERNAME=root\n")),(0,a.kt)("h3",{id:"quick-start"},"Quick Start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker compose up -d\n")),(0,a.kt)("h2",{id:"method-2-docker-run"},"Method 2 \uff1adocker run"),(0,a.kt)("p",null,"The environmental parameters need to be passed in from the startup command, as shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -it -d --name datavines -p 5600:5600 --privileged=true --restart always -e SPRING_PROFILES_ACTIVE=mysql -e SPRING_DATASOURCE_URL=jdbc:mysql://127.0.0.1:3306/datavines?useSSL=false&useUnicode=true&characterEncoding=UTF-8&allowPublicKeyRetrieval=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8 -e SPRING_DATASOURCE_USERNAME=root -e SPRING_DATASOURCE_PASSWORD=123456 -e SPRING_DATASOURCE_DRIVER-CLASS_NAME=com.mysql.cj.jdbc.Driver datavines:dev\n")))}m.isMDXComponent=!0}}]);