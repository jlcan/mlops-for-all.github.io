"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[7298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"1. Introduction",description:"Setup Introduction",sidebar_position:1,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-13T00:00:00.000Z"),contributors:["Jaeyeon Kim","Jongsun Shinn","Youngdon Tae","SeungTae Kim"]},l=void 0,i={unversionedId:"setup-kubernetes/intro",id:"version-1.0/setup-kubernetes/intro",title:"1. Introduction",description:"Setup Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/setup-kubernetes/intro.md",sourceDirName:"setup-kubernetes",slug:"/setup-kubernetes/intro",permalink:"/mlops-for-all.github.io/en/docs/1.0/setup-kubernetes/intro",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/setup-kubernetes/intro.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162774,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:1,frontMatter:{title:"1. Introduction",description:"Setup Introduction",sidebar_position:1,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-13T00:00:00.000Z",contributors:["Jaeyeon Kim","Jongsun Shinn","Youngdon Tae","SeungTae Kim"]},sidebar:"tutorialSidebar",previous:{title:"4. Why Kubernetes?",permalink:"/mlops-for-all.github.io/en/docs/1.0/introduction/why_kubernetes"},next:{title:"2. Setup Kubernetes",permalink:"/mlops-for-all.github.io/en/docs/1.0/setup-kubernetes/kubernetes"}},s={},u=[{value:"Build MLOps System",id:"build-mlops-system",level:2},{value:"Components",id:"components",level:2},{value:"Cluster",id:"cluster",level:3},{value:"1. Software",id:"1-software",level:4},{value:"2. Helm Chart",id:"2-helm-chart",level:4},{value:"Client",id:"client",level:3},{value:"Minimum System Requirements",id:"minimum-system-requirements",level:3}],p={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"build-mlops-system"},"Build MLOps System"),(0,a.kt)("p",null,"The biggest barrier when studying MLOps is the difficulty of setting up and using an MLOps system. Using public cloud platforms like AWS or GCP, or commercial tools like Weights & Biases or neptune.ai, can be costly, and starting from scratch to build the entire environment can be overwhelming and confusing."),(0,a.kt)("p",null,"To address these challenges and help those who haven't been able to start with MLOps, ",(0,a.kt)("em",{parentName:"p"},"MLOps for ALL")," will guide you on how to build and use an MLOps system from scratch, requiring only a desktop with Ubuntu installed."),(0,a.kt)("p",null,"For those who cannot prepare a Ubuntu desktop environment, use virtual machines to set up the environment."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you are using Windows or an Intel-based Mac for the ",(0,a.kt)("em",{parentName:"p"},"MLOps for ALL")," practical exercises, you can prepare an Ubuntu desktop environment using virtual machine software such as VirtualBox or VMware. Please make sure to meet the recommended specifications when creating the virtual machine.\nHowever, for those using an M1 Mac, as of the date of writing (February 2022), VirtualBox and VMware are not available. (",(0,a.kt)("a",{parentName:"p",href:"https://isapplesiliconready.com/kr"},"Check if macOS apps are optimized for M1 Apple Silicon Mac"),")\nTherefore, if you are not using a cloud environment, you can install UTM, Virtual machines for Mac, to use virtual machines.\n(Purchasing and downloading software from the App Store is a form of donation-based payment. The free version is sufficient as it only differs in automatic updates.)\nThis virtual machine software supports the ",(0,a.kt)("em",{parentName:"p"},"Ubuntu 20.04.3 LTS")," practice operating system, enabling you to perform the exercises on an M1 Mac.")),(0,a.kt)("p",null,"However, since it is not possible to use all the elements described in the ",(0,a.kt)("a",{parentName:"p",href:"/mlops-for-all.github.io/en/docs/1.0/introduction/component"},"Components of MLOps"),", ",(0,a.kt)("em",{parentName:"p"},"MLOps for ALL")," will mainly focus on installing the representative open source software and connecting them to each other."),(0,a.kt)("p",null,"It is not meant that installing open source software in ",(0,a.kt)("em",{parentName:"p"},"MLOps for ALL")," is a standard, and we recommend choosing the appropriate tool that fits your situation."),(0,a.kt)("h2",{id:"components"},"Components"),(0,a.kt)("p",null,"The components of the MLOps system that we will make in this article and each version have been verified in the following environment."),(0,a.kt)("p",null,"To facilitate smooth testing, I will explain the setup of the ",(0,a.kt)("strong",{parentName:"p"},"Cluster")," and ",(0,a.kt)("strong",{parentName:"p"},"Client")," as separate entities."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Cluster")," refers to a single desktop with Ubuntu installed.",(0,a.kt)("br",{parentName:"p"}),"\n","The ",(0,a.kt)("strong",{parentName:"p"},"Client")," is recommended to be a different desktop, such as a laptop or another desktop with access to the Cluster or Kubernetes installation. However, if you only have one machine available, you can use the same desktop for both Cluster and Client purposes."),(0,a.kt)("h3",{id:"cluster"},"Cluster"),(0,a.kt)("h4",{id:"1-software"},"1. Software"),(0,a.kt)("p",null,"Below is the list of software that needs to be installed on the Cluster:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Software"),(0,a.kt)("th",{parentName:"tr",align:null},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ubuntu"),(0,a.kt)("td",{parentName:"tr",align:null},"20.04.3 LTS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Docker (Server)"),(0,a.kt)("td",{parentName:"tr",align:null},"20.10.11")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NVIDIA Driver"),(0,a.kt)("td",{parentName:"tr",align:null},"470.86")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kubernetes"),(0,a.kt)("td",{parentName:"tr",align:null},"v1.21.7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kubeflow"),(0,a.kt)("td",{parentName:"tr",align:null},"v1.4.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MLFlow"),(0,a.kt)("td",{parentName:"tr",align:null},"v1.21.0")))),(0,a.kt)("h4",{id:"2-helm-chart"},"2. Helm Chart"),(0,a.kt)("p",null,"Below is the list of third-party software that needs to be installed using Helm:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Helm Chart Repo Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"datawire/ambassador"),(0,a.kt)("td",{parentName:"tr",align:null},"6.9.3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"seldonio/seldon-core-operator"),(0,a.kt)("td",{parentName:"tr",align:null},"1.11.2")))),(0,a.kt)("h3",{id:"client"},"Client"),(0,a.kt)("p",null,"The Client has been validated on MacOS (Intel CPU) and Ubuntu 20.04."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Software"),(0,a.kt)("th",{parentName:"tr",align:null},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kubectl"),(0,a.kt)("td",{parentName:"tr",align:null},"v1.21.7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"helm"),(0,a.kt)("td",{parentName:"tr",align:null},"v3.7.1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kustomize"),(0,a.kt)("td",{parentName:"tr",align:null},"v3.10.0")))),(0,a.kt)("h3",{id:"minimum-system-requirements"},"Minimum System Requirements"),(0,a.kt)("p",null,"It is recommended that the Cluster meet the following specifications, which are dependent on the recommended specifications for Kubernetes and Kubeflow:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CPU: 6 cores"),(0,a.kt)("li",{parentName:"ul"},"RAM: 12GB"),(0,a.kt)("li",{parentName:"ul"},"DISK: 50GB"),(0,a.kt)("li",{parentName:"ul"},"GPU: NVIDIA GPU (optional)")))}d.isMDXComponent=!0}}]);