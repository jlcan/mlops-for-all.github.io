"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[5839],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"What is Docker?",description:"Introduction to Docker.",sidebar_position:3,contributors:["Jongseob Jeon","Jaeyeon Kim"]},i=void 0,s={unversionedId:"prerequisites/docker/docker",id:"version-1.0/prerequisites/docker/docker",title:"What is Docker?",description:"Introduction to Docker.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/prerequisites/docker/docker.md",sourceDirName:"prerequisites/docker",slug:"/prerequisites/docker/",permalink:"/mlops-for-all.github.io/en/docs/1.0/prerequisites/docker/",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/prerequisites/docker/docker.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162774,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:3,frontMatter:{title:"What is Docker?",description:"Introduction to Docker.",sidebar_position:3,contributors:["Jongseob Jeon","Jaeyeon Kim"]},sidebar:"preSidebar",previous:{title:"Why Docker & Kubernetes ?",permalink:"/mlops-for-all.github.io/en/docs/1.0/prerequisites/docker/introduction"},next:{title:"[Practice] Docker command",permalink:"/mlops-for-all.github.io/en/docs/1.0/prerequisites/docker/command"}},l={},c=[{value:"Container",id:"container",level:2},{value:"Docker",id:"docker",level:2},{value:"Interpretation of Layer",id:"interpretation-of-layer",level:2},{value:"For ML Engineer",id:"for-ml-engineer",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"container"},"Container"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Containerization:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A technology that allows applications to be executed uniformly anywhere."))),(0,o.kt)("li",{parentName:"ul"},"Container Image:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A collection of all the files required to run an application."),(0,o.kt)("li",{parentName:"ul"},"\u2192 Similar to a mold for making fish-shaped bread (Bungeoppang)."))),(0,o.kt)("li",{parentName:"ul"},"Container:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A single process that is executed based on a container image."),(0,o.kt)("li",{parentName:"ul"},"\u2192 A fish-shaped bread (Bungeoppang) produced using a mold.")))),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"Docker is a platform that allows you to manage and use containers.",(0,o.kt)("br",{parentName:"p"}),"\n",'Its slogan is "Build Once, Run Anywhere," guaranteeing the same execution results anywhere.'),(0,o.kt)("p",null,"In the Docker, the resources for the container are separated and the lifecycle is controlled by Linux kernel's cgroups, etc.",(0,o.kt)("br",{parentName:"p"}),"\n","However, it is too difficult to use these interfaces directly, so an abstraction layer is created."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"docker-layer.png",src:r(2297).Z,width:"574",height:"455"})),(0,o.kt)("p",null,"Through this, users can easily control containers with just the user-friendly API ",(0,o.kt)("strong",{parentName:"p"},"Docker CLI"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users can easily control containers using the user-friendly API called ",(0,o.kt)("strong",{parentName:"li"},"Docker CLI"),".")),(0,o.kt)("h2",{id:"interpretation-of-layer"},"Interpretation of Layer"),(0,o.kt)("p",null,"The roles of the layers mentioned above are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"runC: Utilizes the functionality of the Linux kernel to isolate namespaces, CPUs, memory, filesystems, etc., for a container, which is a single process."),(0,o.kt)("li",{parentName:"ol"},"containerd: Acts as an abstraction layer to communicate with runC (OCI layer) and uses the standardized interface (OCI)."),(0,o.kt)("li",{parentName:"ol"},"dockerd: Solely responsible for issuing commands to containerd."),(0,o.kt)("li",{parentName:"ol"},"Docker CLI: Users only need to issue commands to dockerd (Docker daemon) using Docker CLI.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'During this communication process, Unix socket is used, so sometimes Docker-related errors occur, such as "the /var/run/docker.sock is in use" or "insufficient permissions" error messages.')))),(0,o.kt)("p",null,'Although Docker encompasses many stages, when the term "Docker" is used, it can refer to Docker CLI, Dockerd (Docker daemon), or even a single Docker container, which can lead to confusion.',(0,o.kt)("br",{parentName:"p"}),"\n",'In the upcoming text, the term "Docker" may be used in various contexts.'),(0,o.kt)("h2",{id:"for-ml-engineer"},"For ML Engineer"),(0,o.kt)("p",null,"ML engineers use Docker for the following reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"ML training/inference code needs to be independent of the underlying operating system, Python version, Python environment, and specific versions of Python packages."),(0,o.kt)("li",{parentName:"ol"},"Therefore, the goal is to bundle not only the code but also all the dependent packages, environment variables, folder names, etc., into a single package. Containerization technology enables this."),(0,o.kt)("li",{parentName:"ol"},"Docker is one of the software tools that makes it easy to use and manage this technology, and the packaged units are referred to as Docker images.")))}d.isMDXComponent=!0},2297:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/docker-layer-223ebf4a5bacfe912f92117606e17ac2.png"}}]);