"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[53],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,b=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9657:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={title:"6. Kubeflow Pipeline \uad00\ub828",description:"",sidebar_position:6,contributors:["Jaeyeon Kim"]},a=void 0,l={unversionedId:"kubeflow-dashboard-guide/experiments-and-others",id:"kubeflow-dashboard-guide/experiments-and-others",title:"6. Kubeflow Pipeline \uad00\ub828",description:"",source:"@site/docs/kubeflow-dashboard-guide/experiments-and-others.md",sourceDirName:"kubeflow-dashboard-guide",slug:"/kubeflow-dashboard-guide/experiments-and-others",permalink:"/docs/kubeflow-dashboard-guide/experiments-and-others",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow-dashboard-guide/experiments-and-others.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708160311,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:6,frontMatter:{title:"6. Kubeflow Pipeline \uad00\ub828",description:"",sidebar_position:6,contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"5. Experiments(AutoML)",permalink:"/docs/kubeflow-dashboard-guide/experiments"},next:{title:"1. Kubeflow Introduction",permalink:"/docs/kubeflow/kubeflow-intro"}},s={},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Central Dashboard\uc758 \uc67c\ucabd \ud0ed\uc758 Experiments(KFP), Pipelines, Runs, Recurring Runs, Artifacts, Executions \ud398\uc774\uc9c0\ub4e4\uc5d0\uc11c\ub294 Kubeflow Pipeline\uacfc Pipeline\uc758 \uc2e4\ud589 \uadf8\ub9ac\uace0 Pipeline Run\uc758 \uacb0\uacfc\ub97c \uad00\ub9ac\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"left-tabs",src:r(7511).Z,width:"3940",height:"1278"})),(0,o.kt)("p",null,"Kubeflow Pipeline\uc774 ",(0,o.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c Kubeflow\ub97c \uc0ac\uc6a9\ud558\ub294 \uc8fc\ub41c \uc774\uc720\uc774\uba70, Kubeflow Pipeline\uc744 \ub9cc\ub4dc\ub294 \ubc29\ubc95, \uc2e4\ud589\ud558\ub294 \ubc29\ubc95, \uacb0\uacfc\ub97c \ud655\uc778\ud558\ub294 \ubc29\ubc95 \ub4f1 \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,o.kt)("a",{parentName:"p",href:"../kubeflow/kubeflow-intro"},"3.Kubeflow"),"\uc5d0\uc11c \ub2e4\ub8f9\ub2c8\ub2e4."))}d.isMDXComponent=!0},7511:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/left-tabs-4290df638df45a698ebc615a5bcb5b86.png"}}]);