"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[8032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={id:"contributor",title:"Contributor",sidebar_position:2},a=void 0,l={unversionedId:"contribution_guide/contributor",id:"contribution_guide/contributor",title:"Contributor",description:"You can report a bug, submit a new function enhancement suggestion, or submit a pull request directly.",source:"@site/community/contribution_guide/2-contributor.md",sourceDirName:"contribution_guide",slug:"/contribution_guide/contributor",permalink:"/datavines-website/en/community/contribution_guide/contributor",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"contributor",title:"Contributor",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Code Conduct",permalink:"/datavines-website/en/community/contribution_guide/code-conduct"},next:{title:"Document Contributor",permalink:"/datavines-website/en/community/contribution_guide/document-contributor"}},u={},s=[{value:"Submit an Issue",id:"submit-an-issue",level:2},{value:"Developer Flow",id:"developer-flow",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can report a bug, submit a new function enhancement suggestion, or submit a pull request directly."),(0,o.kt)("h2",{id:"submit-an-issue"},"Submit an Issue"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Before submitting an issue, please go through a comprehensive search to make sure the problem cannot be solved just by searching."),(0,o.kt)("li",{parentName:"ul"},"Check the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/datavane/datavines/issues"},"Issue List")," to make sure the problem is not repeated."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/datavane/datavines/issues/new/choose"},"Create")," a new issue and choose the type of issue."),(0,o.kt)("li",{parentName:"ul"},"Define the issue with a clear and descriptive title."),(0,o.kt)("li",{parentName:"ul"},"Fill in necessary information according to the template."),(0,o.kt)("li",{parentName:"ul"},"Please pay attention for your issue, you may need provide more information during discussion.")),(0,o.kt)("h2",{id:"developer-flow"},"Developer Flow"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Prepare repository")),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datavane/datavines"},"Datavines GitHub Repo")," and fork repository to your account."),(0,o.kt)("p",null,"Clone repository to local machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/(your_github_name)/datavines.git\n")),(0,o.kt)("p",null,"Add Datavines remote repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add upstrem https://github.com/datavane/datavines.git\ngit remote -v\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Choose Issue")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please choose the issue to be edited. If it is a new issue discovered or a new function enhancement to offer, please create an issue and set the right label for it."),(0,o.kt)("li",{parentName:"ul"},"After choosing the relevant issue, please reply with a deadline to indicate that you are working on it.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Create Branch")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Switch to forked master branch, update local branch, then create a new branch.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout dev\ngit fetch upstream\ngit rebase upstream/dev\ngit push origin dev # optional\ngit checkout -b issueNo\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Coding")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please obey the ",(0,o.kt)("a",{parentName:"li",href:"code-conduct.md"},"Code of Conduct")," during the process of development and finish the check before submitting the pull request."),(0,o.kt)("li",{parentName:"ul"},"push code to your fork repo.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git add .\ngit commit -m 'commit log'\ngit push origin issueNo\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5. Submit Pull Request")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Send a pull request to the master branch."),(0,o.kt)("li",{parentName:"ul"},"The other developer will do code review before discussing some details (including the design, the implementation and the performance) with you. The request will be merged into the branch of current development version after the edit is well enough."),(0,o.kt)("li",{parentName:"ul"},"At last, congratulations on being an contributor of Datavines")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6. Delete Branch")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can delete the remote branch (origin/issueNo) and the local branch (issueNo) associated with the remote branch (origin/issueNo) after the mentor merged the pull request into the master branch of Datavines.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout dev\ngit branch -d issueNo\ngit remote prune origin # If you delete branch on GitHub PR page, else you could delete origin branch with following command\ngit push origin --delete issueNo\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notice"),":  Please note that in order to show your id in the contributor list, don't forget the configurations below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'git config --global user.name "username"\ngit config --global user.email "username@mail.com"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Thanks"),"\nThis contribution guide refers to the contribution guide of Apache ShardingSphere, thanks to them for their excellent contributions."))}p.isMDXComponent=!0}}]);