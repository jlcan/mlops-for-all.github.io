"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[1526],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8370:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"5. Experiments(AutoML)",description:"",sidebar_position:5,contributors:["Jaeyeon Kim"]},i=void 0,s={unversionedId:"kubeflow-dashboard-guide/experiments",id:"version-1.0/kubeflow-dashboard-guide/experiments",title:"5. Experiments(AutoML)",description:"",source:"@site/versioned_docs/version-1.0/kubeflow-dashboard-guide/experiments.md",sourceDirName:"kubeflow-dashboard-guide",slug:"/kubeflow-dashboard-guide/experiments",permalink:"/docs/1.0/kubeflow-dashboard-guide/experiments",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/kubeflow-dashboard-guide/experiments.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708160311,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:5,frontMatter:{title:"5. Experiments(AutoML)",description:"",sidebar_position:5,contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"4. Volumes",permalink:"/docs/1.0/kubeflow-dashboard-guide/volumes"},next:{title:"6. Kubeflow Pipeline \uad00\ub828",permalink:"/docs/1.0/kubeflow-dashboard-guide/experiments-and-others"}},l={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c\ub294 Central Dashboard\uc758 \uc67c\ucabd \ud0ed\uc758 Experiments(AutoML)\uc744 \ud074\ub9ad\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"left-tabs",src:r(6316).Z,width:"3940",height:"1278"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"automl",src:r(2815).Z,width:"1498",height:"272"})),(0,o.kt)("p",null,"Experiments(AutoML) \ud398\uc774\uc9c0\ub294 Kubeflow\uc5d0\uc11c Hyperparameter Tuning\uacfc Neural Architecture Search\ub97c \ud1b5\ud55c AutoML\uc744 \ub2f4\ub2f9\ud558\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/components/katib/overview/"},"Katib"),"\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\ub294 \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"Katib\uc640 Experiments(AutoML)\uc5d0 \ub300\ud55c \uc0ac\uc6a9\ubc95\uc740 ",(0,o.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps")," v1.0\uc5d0\uc11c\ub294 \ub2e4\ub8e8\uc9c0 \uc54a\uc73c\uba70, v2.0\uc5d0 \ucd94\uac00\ub420 \uc608\uc815\uc785\ub2c8\ub2e4."))}d.isMDXComponent=!0},2815:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/automl-7f762c2c67e5319953ec8567769722fb.png"},6316:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/left-tabs-4290df638df45a698ebc615a5bcb5b86.png"}}]);