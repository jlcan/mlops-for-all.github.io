"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[6210],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),b=o,m=c["".concat(s,".").concat(b)]||c[b]||d[b]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"1. Central Dashboard",description:"",sidebar_position:1,contributors:["Jaeyeon Kim","SeungTae Kim"]},i=void 0,l={unversionedId:"kubeflow-dashboard-guide/intro",id:"kubeflow-dashboard-guide/intro",title:"1. Central Dashboard",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/kubeflow-dashboard-guide/intro.md",sourceDirName:"kubeflow-dashboard-guide",slug:"/kubeflow-dashboard-guide/intro",permalink:"/mlops-for-all.github.io/en/docs/kubeflow-dashboard-guide/intro",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow-dashboard-guide/intro.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162146,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:1,frontMatter:{title:"1. Central Dashboard",description:"",sidebar_position:1,contributors:["Jaeyeon Kim","SeungTae Kim"]},sidebar:"tutorialSidebar",previous:{title:"4. Prometheus & Grafana",permalink:"/mlops-for-all.github.io/en/docs/setup-components/install-components-pg"},next:{title:"2. Notebooks",permalink:"/mlops-for-all.github.io/en/docs/kubeflow-dashboard-guide/notebooks"}},s={},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once you have completed ",(0,o.kt)("a",{parentName:"p",href:"/mlops-for-all.github.io/en/docs/setup-components/install-components-kf"},"Kubeflow installation"),", you can access the dashboard through the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward --address 0.0.0.0 svc/istio-ingressgateway -n istio-system 8080:80\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"after-login",src:r(5794).Z,width:"4008",height:"1266"})),(0,o.kt)("p",null,"The Central Dashboard is a UI that integrates all the features provided by Kubeflow. The features provided by the Central Dashboard can be divided based on the tabs on the left side"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"left-tabs",src:r(9268).Z,width:"3940",height:"1278"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Home"),(0,o.kt)("li",{parentName:"ul"},"Notebooks"),(0,o.kt)("li",{parentName:"ul"},"Tensorboards"),(0,o.kt)("li",{parentName:"ul"},"Volumes"),(0,o.kt)("li",{parentName:"ul"},"Models"),(0,o.kt)("li",{parentName:"ul"},"Experiments(AutoML)"),(0,o.kt)("li",{parentName:"ul"},"Experiments(KFP)"),(0,o.kt)("li",{parentName:"ul"},"Pipelines"),(0,o.kt)("li",{parentName:"ul"},"Runs"),(0,o.kt)("li",{parentName:"ul"},"Recurring Runs"),(0,o.kt)("li",{parentName:"ul"},"Artifacts"),(0,o.kt)("li",{parentName:"ul"},"Executions")),(0,o.kt)("p",null,"Let's now look at the simple usage of each feature."))}d.isMDXComponent=!0},5794:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/after-login-4b41daca6d9a97824552770b832d59b0.png"},9268:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/left-tabs-4290df638df45a698ebc615a5bcb5b86.png"}}]);