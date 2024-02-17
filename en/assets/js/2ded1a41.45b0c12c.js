"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[6997],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),f=n,b=c["".concat(l,".").concat(f)]||c[f]||p[f]||a;return r?o.createElement(b,s(s({ref:t},d),{},{components:r})):o.createElement(b,s({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1319:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={title:"3. Tensorboards",description:"",sidebar_position:3,contributors:["Jaeyeon Kim"]},s=void 0,i={unversionedId:"kubeflow-dashboard-guide/tensorboards",id:"version-1.0/kubeflow-dashboard-guide/tensorboards",title:"3. Tensorboards",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/kubeflow-dashboard-guide/tensorboards.md",sourceDirName:"kubeflow-dashboard-guide",slug:"/kubeflow-dashboard-guide/tensorboards",permalink:"/mlops-for-all/en/docs/1.0/kubeflow-dashboard-guide/tensorboards",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/kubeflow-dashboard-guide/tensorboards.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708161852,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:3,frontMatter:{title:"3. Tensorboards",description:"",sidebar_position:3,contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"2. Notebooks",permalink:"/mlops-for-all/en/docs/1.0/kubeflow-dashboard-guide/notebooks"},next:{title:"4. Volumes",permalink:"/mlops-for-all/en/docs/1.0/kubeflow-dashboard-guide/volumes"}},l={},u=[],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Let's click on the Tensorboards tab of the left tabs of the Central Dashboard next."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"left-tabs",src:r(7173).Z,width:"3940",height:"1278"})),(0,n.kt)("p",null,"We can see the following screen. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"tensorboard",src:r(1964).Z,width:"2030",height:"406"})),(0,n.kt)("p",null,"The TensorBoard server created in this way can be used just like a regular remote TensorBoard server, or it can be used for the purpose of storing data directly from a Kubeflow Pipeline run for visualization purposes."),(0,n.kt)("p",null,"You can refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/components/pipelines/sdk/output-viewer/#tensorboard"},"TensorBoard documentation")," for more information on using TensorBoard with Kubeflow Pipeline runs."),(0,n.kt)("p",null,"There are various ways to visualize the results of Kubeflow Pipeline runs, and in ",(0,n.kt)("em",{parentName:"p"},"MLOps for ALL"),", we will utilize the Visualization feature of Kubeflow components and the visualization capabilities of MLflow to enable more general use cases. Therefore, detailed explanations of the TensorBoards page will be omitted in this context."))}p.isMDXComponent=!0},7173:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/left-tabs-4290df638df45a698ebc615a5bcb5b86.png"},1964:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/tensorboard-ec19f59c613e94e6b1ba7759e853f4ed.png"}}]);