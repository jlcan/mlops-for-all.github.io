"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[2032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,b=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return n?o.createElement(b,a(a({ref:t},c),{},{components:n})):o.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={title:"1. Kubeflow Introduction",description:"",sidebar_position:1,contributors:["Jongseob Jeon"]},a=void 0,l={unversionedId:"kubeflow/kubeflow-intro",id:"version-1.0/kubeflow/kubeflow-intro",title:"1. Kubeflow Introduction",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/kubeflow/kubeflow-intro.md",sourceDirName:"kubeflow",slug:"/kubeflow/kubeflow-intro",permalink:"/en/docs/1.0/kubeflow/kubeflow-intro",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/kubeflow/kubeflow-intro.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162399,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:1,frontMatter:{title:"1. Kubeflow Introduction",description:"",sidebar_position:1,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"6. Kubeflow Pipeline Relates",permalink:"/en/docs/1.0/kubeflow-dashboard-guide/experiments-and-others"},next:{title:"2. Kubeflow Concepts",permalink:"/en/docs/1.0/kubeflow/kubeflow-concepts"}},s={},p=[],c={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To use Kubeflow, you need to write components and pipelines."),(0,r.kt)("p",null,"The approach described in ",(0,r.kt)("em",{parentName:"p"},"MLOps for ALL")," differs slightly from the method described on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/components/pipelines/overview/quickstart/"},"Kubeflow Pipeline official website"),". Here, Kubeflow Pipeline is used as one of the components in the ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/1.0/kubeflow/kubeflow-concepts#component-contents"},"elements that make up MLOps")," rather than a standalone workflow."),(0,r.kt)("p",null,"Now, let's understand what components and pipelines are and how to write them."))}f.isMDXComponent=!0}}]);