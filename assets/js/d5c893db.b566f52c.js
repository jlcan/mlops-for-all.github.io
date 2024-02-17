"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[3225],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(r),b=n,d=s["".concat(p,".").concat(b)]||s[b]||f[b]||l;return r?o.createElement(d,i(i({ref:t},u),{},{components:r})):o.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=b;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[s]="string"==typeof e?e:n,i[1]=a;for(var c=2;c<l;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const l={title:"1. Kubeflow Introduction",description:"",sidebar_position:1,contributors:["Jongseob Jeon"]},i=void 0,a={unversionedId:"kubeflow/kubeflow-intro",id:"kubeflow/kubeflow-intro",title:"1. Kubeflow Introduction",description:"",source:"@site/docs/kubeflow/kubeflow-intro.md",sourceDirName:"kubeflow",slug:"/kubeflow/kubeflow-intro",permalink:"/mlops-for-all/docs/kubeflow/kubeflow-intro",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow/kubeflow-intro.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708161852,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:1,frontMatter:{title:"1. Kubeflow Introduction",description:"",sidebar_position:1,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"6. Kubeflow Pipeline \uad00\ub828",permalink:"/mlops-for-all/docs/kubeflow-dashboard-guide/experiments-and-others"},next:{title:"2. Kubeflow Concepts",permalink:"/mlops-for-all/docs/kubeflow/kubeflow-concepts"}},p={},c=[],u={toc:c},s="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Kubeflow\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \ucef4\ud3ec\ub10c\ud2b8(Component)\uc640 \ud30c\uc774\ud504\ub77c\uc778(Pipeline)\uc744 \uc791\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c \uc124\uba85\ud558\ub294 \ubc29\uc2dd\uc740 ",(0,n.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/components/pipelines/overview/quickstart/"},"Kubeflow Pipeline \uacf5\uc2dd \ud648\ud398\uc774\uc9c0"),"\uc5d0\uc11c \uc124\uba85\ud558\ub294 \ubc29\uc2dd\uacfc\ub294 \ub2e4\uc18c \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c\ub294 Kubeflow Pipeline\uc744 \uc6cc\ud06c\ud50c\ub85c(Workflow)\uac00 \uc544\ub2cc \uc55e\uc11c \uc124\uba85\ud55c ",(0,n.kt)("a",{parentName:"p",href:"/mlops-for-all/docs/kubeflow/kubeflow-concepts#component-contents"},"MLOps\ub97c \uad6c\uc131\ud558\ub294 \uc694\uc18c")," \uc911 \ud558\ub098\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub85c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uadf8\ub7fc \uc774\uc81c \ucef4\ud3ec\ub10c\ud2b8\uc640 \ud30c\uc774\ud504\ub77c\uc778\uc740 \ubb34\uc5c7\uc774\uba70 \uc5b4\ub5bb\uac8c \uc791\uc131\ud560 \uc218 \uc788\ub294\uc9c0 \uc54c\uc544\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."))}f.isMDXComponent=!0}}]);