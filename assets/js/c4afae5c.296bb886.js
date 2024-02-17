"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[5825],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"1. Central Dashboard",description:"",sidebar_position:1,contributors:["Jaeyeon Kim","SeungTae Kim"]},l=void 0,i={unversionedId:"kubeflow-dashboard-guide/intro",id:"kubeflow-dashboard-guide/intro",title:"1. Central Dashboard",description:"",source:"@site/docs/kubeflow-dashboard-guide/intro.md",sourceDirName:"kubeflow-dashboard-guide",slug:"/kubeflow-dashboard-guide/intro",permalink:"/mlops-for-all/docs/kubeflow-dashboard-guide/intro",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow-dashboard-guide/intro.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708161852,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:1,frontMatter:{title:"1. Central Dashboard",description:"",sidebar_position:1,contributors:["Jaeyeon Kim","SeungTae Kim"]},sidebar:"tutorialSidebar",previous:{title:"4. Prometheus & Grafana",permalink:"/mlops-for-all/docs/setup-components/install-components-pg"},next:{title:"2. Notebooks",permalink:"/mlops-for-all/docs/kubeflow-dashboard-guide/notebooks"}},s={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/mlops-for-all/docs/setup-components/install-components-kf"},"Kubeflow \uc124\uce58"),"\ub97c \uc644\ub8cc\ud558\uba74, \ub2e4\uc74c \ucee4\ub9e8\ub4dc\ub97c \ud1b5\ud574 \ub300\uc2dc\ubcf4\ub4dc\uc5d0 \uc811\uc18d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward --address 0.0.0.0 svc/istio-ingressgateway -n istio-system 8080:80\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"after-login",src:r(5215).Z,width:"4008",height:"1266"})),(0,a.kt)("p",null,"Central Dashboard\ub294 Kubeflow\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ubaa8\ub4e0 \uae30\ub2a5\uc744 \ud1b5\ud569\ud558\uc5ec \uc81c\uacf5\ud558\ub294 UI\uc785\ub2c8\ub2e4. Central Dashboard\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uae30\ub2a5\uc740 \ud06c\uac8c \uc67c\ucabd\uc758 \ud0ed\uc744 \uae30\uc900\uc73c\ub85c \uad6c\ubd84\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"left-tabs",src:r(7511).Z,width:"3940",height:"1278"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Home"),(0,a.kt)("li",{parentName:"ul"},"Notebooks"),(0,a.kt)("li",{parentName:"ul"},"Tensorboards"),(0,a.kt)("li",{parentName:"ul"},"Volumes"),(0,a.kt)("li",{parentName:"ul"},"Models"),(0,a.kt)("li",{parentName:"ul"},"Experiments(AutoML)"),(0,a.kt)("li",{parentName:"ul"},"Experiments(KFP)"),(0,a.kt)("li",{parentName:"ul"},"Pipelines"),(0,a.kt)("li",{parentName:"ul"},"Runs"),(0,a.kt)("li",{parentName:"ul"},"Recurring Runs"),(0,a.kt)("li",{parentName:"ul"},"Artifacts"),(0,a.kt)("li",{parentName:"ul"},"Executions")),(0,a.kt)("p",null,"\uadf8\ub7fc \uc774\uc81c \uae30\ub2a5\ubcc4 \uac04\ub2e8\ud55c \uc0ac\uc6a9\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0},5215:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/after-login-4b41daca6d9a97824552770b832d59b0.png"},7511:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/left-tabs-4290df638df45a698ebc615a5bcb5b86.png"}}]);