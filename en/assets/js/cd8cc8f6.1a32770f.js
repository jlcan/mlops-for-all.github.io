"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[1973],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(o),b=r,d=c["".concat(s,".").concat(b)]||c[b]||f[b]||i;return o?n.createElement(d,l(l({ref:t},p),{},{components:o})):n.createElement(d,l({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:r,l[1]=a;for(var u=2;u<i;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},5756:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const i={title:"1. Kubeflow Introduction",description:"",sidebar_position:1,contributors:["Jongseob Jeon"]},l=void 0,a={unversionedId:"kubeflow/kubeflow-intro",id:"kubeflow/kubeflow-intro",title:"1. Kubeflow Introduction",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/kubeflow/kubeflow-intro.md",sourceDirName:"kubeflow",slug:"/kubeflow/kubeflow-intro",permalink:"/mlops-for-all.github.io/en/docs/kubeflow/kubeflow-intro",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow/kubeflow-intro.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708161574,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:1,frontMatter:{title:"1. Kubeflow Introduction",description:"",sidebar_position:1,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"6. Kubeflow Pipeline Relates",permalink:"/mlops-for-all.github.io/en/docs/kubeflow-dashboard-guide/experiments-and-others"},next:{title:"2. Kubeflow Concepts",permalink:"/mlops-for-all.github.io/en/docs/kubeflow/kubeflow-concepts"}},s={},u=[],p={toc:u},c="wrapper";function f(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To use Kubeflow, you need to write components and pipelines."),(0,r.kt)("p",null,"The approach described in ",(0,r.kt)("em",{parentName:"p"},"MLOps for ALL")," differs slightly from the method described on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/components/pipelines/overview/quickstart/"},"Kubeflow Pipeline official website"),". Here, Kubeflow Pipeline is used as one of the components in the ",(0,r.kt)("a",{parentName:"p",href:"/mlops-for-all.github.io/en/docs/kubeflow/kubeflow-concepts#component-contents"},"elements that make up MLOps")," rather than a standalone workflow."),(0,r.kt)("p",null,"Now, let's understand what components and pipelines are and how to write them."))}f.isMDXComponent=!0}}]);