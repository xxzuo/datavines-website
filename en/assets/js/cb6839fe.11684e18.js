"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[3741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={id:"deploy-from-source",title:"Deploy From Source"},i=void 0,l={unversionedId:"get-started/deploy-from-source",id:"get-started/deploy-from-source",title:"Deploy From Source",description:"Environment preparation",source:"@site/docs/02-get-started/01-deploy-from-source.md",sourceDirName:"02-get-started",slug:"/get-started/deploy-from-source",permalink:"/datavines-website/en/docs/get-started/deploy-from-source",draft:!1,editUrl:"https://github.com/datavane/datavines-website/edit/dev/docs/02-get-started/01-deploy-from-source.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"deploy-from-source",title:"Deploy From Source"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/datavines-website/en/docs/intro"},next:{title:"Quick Start",permalink:"/datavines-website/en/docs/user-guide/quick-start"}},s={},p=[{value:"Environment preparation",id:"environment-preparation",level:2},{value:"Download code",id:"download-code",level:2},{value:"Database preparation",id:"database-preparation",level:2},{value:"Build Project",id:"build-project",level:3},{value:"Start service",id:"start-service",level:2},{value:"Start exploring",id:"start-exploring",level:3}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"environment-preparation"},"Environment preparation"),(0,r.kt)("p",null,"Before installing ",(0,r.kt)("inlineCode",{parentName:"p"},"Datavines"),", please make sure the following software is installed on your server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Git")," to ensure smooth execution of ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JDK"),", make sure ",(0,r.kt)("inlineCode",{parentName:"li"},"jdk = 8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Maven"),", to ensure the smooth packaging of the project (of course, you can also upload it to the server after packaging locally)")),(0,r.kt)("h2",{id:"download-code"},"Download code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/datavane/datavines.git\ncd datavines\n")),(0,r.kt)("h2",{id:"database-preparation"},"Database preparation"),(0,r.kt)("p",null,"The metadata of ",(0,r.kt)("inlineCode",{parentName:"p"},"Datavines")," is stored in a relational database. Currently, ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PostgreSQL")," are supported, and ",(0,r.kt)("inlineCode",{parentName:"p"},"PostgreSQL")," is used by default. The following uses ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL")," as an example to illustrate the installation steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create database ",(0,r.kt)("inlineCode",{parentName:"li"},"datavines")),(0,r.kt)("li",{parentName:"ul"},"Execute the ",(0,r.kt)("inlineCode",{parentName:"li"},"script/sql/datavines-mysql.sql")," script to initialize the database")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The following building also uses ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL")," as an example")),(0,r.kt)("h3",{id:"build-project"},"Build Project"),(0,r.kt)("p",null,"Build and unpack"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn clean package -Prelease\ncd datavines-dist/target\ntar -zxvf datavines-1.0.0-SNAPSHOT-bin.tar.gz\n")),(0,r.kt)("p",null,"After the decompression is complete, enter the directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd datavines-1.0.0-SNAPSHOT-bin\n")),(0,r.kt)("p",null,"Modify configuration information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd conf\nvi application.yaml\n")),(0,r.kt)("p",null,"Mainly modify database information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spring:\n datasource:\n   driver-class-name: com.mysql.cj.jdbc.Driver\n   url: jdbc:mysql://127.0.0.1:3306/datavines?useUnicode=true&characterEncoding=UTF-8\n   username: root\n   password: 123456\n")),(0,r.kt)("p",null,"If you use Spark as the execution engine and submit it to Yarn for execution, you need the yarn-related configuration information in common.properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"standalone mode")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn.mode=standalone\nyarn.application.status.address=http://%s:%s/ws/v1/cluster/apps/%s #The first %s needs to be replaced the ip address of yarn\nyarn.resource.manager.http.address.port=8088\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ha mode")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn.mode=ha\nyarn.application.status.address=http://%s:%s/ws/v1/cluster/apps/%s\nyarn.resource.manager.http.address.port=8088\nyarn.resource.manager.ha.ids=192.168.0.1,192.168.0.2\n")),(0,r.kt)("h2",{id:"start-service"},"Start service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd bin\nsh datavines-daemon.sh start mysql\n")),(0,r.kt)("p",null,"Check the log, if there is no error message in the log, and you can see ",(0,r.kt)("inlineCode",{parentName:"p"},"[INFO] 2022-04-10 12:29:05.447 io.datavines.server.DatavinesServer:[61] - Started DatavinesServer in 3.97 seconds (JVM running for 4.69 )"),", it proves that the service has been successfully started"),(0,r.kt)("h3",{id:"start-exploring"},"Start exploring"),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:5600")," in the browser, and you will see the login interface. Enter the username & password ",(0,r.kt)("inlineCode",{parentName:"p"},"admin / 123456")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Datavines\u67b6\u6784\u56fe",src:n(3883).Z,width:"1920",height:"937"})))}c.isMDXComponent=!0},3883:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/login-89c5d83a8a04341661f8158812e746af.png"}}]);