"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[2265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"3. Seldon Monitoring",description:"Prometheus & Grafana \ud655\uc778\ud558\uae30",sidebar_position:3,date:new Date("2021-12-24T00:00:00.000Z"),lastmod:new Date("2021-12-24T00:00:00.000Z"),contributors:["Jongseob Jeon"]},l=void 0,i={unversionedId:"api-deployment/seldon-pg",id:"api-deployment/seldon-pg",title:"3. Seldon Monitoring",description:"Prometheus & Grafana \ud655\uc778\ud558\uae30",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/api-deployment/seldon-pg.md",sourceDirName:"api-deployment",slug:"/api-deployment/seldon-pg",permalink:"/mlops-for-all.github.io/en/docs/api-deployment/seldon-pg",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/api-deployment/seldon-pg.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708161574,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:3,frontMatter:{title:"3. Seldon Monitoring",description:"Prometheus & Grafana \ud655\uc778\ud558\uae30",sidebar_position:3,date:"2021-12-24T00:00:00.000Z",lastmod:"2021-12-24T00:00:00.000Z",contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"2. Deploy SeldonDeployment",permalink:"/mlops-for-all.github.io/en/docs/api-deployment/seldon-iris"},next:{title:"4. Seldon Fields",permalink:"/mlops-for-all.github.io/en/docs/api-deployment/seldon-fields"}},s={},p=[{value:"Grafana &amp; Prometheus",id:"grafana--prometheus",level:2},{value:"Dashboard",id:"dashboard",level:3},{value:"Request API",id:"request-api",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"grafana--prometheus"},"Grafana & Prometheus"),(0,o.kt)("p",null,"Now, let's perform repeated API requests with the SeldonDeployment we created on the ",(0,o.kt)("a",{parentName:"p",href:"/mlops-for-all.github.io/en/docs/api-deployment/seldon-iris"},"previous page")," and check if the dashboard changes."),(0,o.kt)("h3",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mlops-for-all.github.io/en/docs/setup-components/install-components-pg"},"Forward the dashboard created earlier"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/seldon-core-analytics-grafana -n seldon-system 8090:80\n")),(0,o.kt)("h3",{id:"request-api"},"Request API"),(0,o.kt)("p",null,"Request ",(0,o.kt)("strong",{parentName:"p"},"repeated")," to the ",(0,o.kt)("a",{parentName:"p",href:"/mlops-for-all.github.io/en/docs/api-deployment/seldon-iris#using-cli"},"previously created Seldon Deployment"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST http://$NODE_IP:$NODE_PORT/seldon/seldon-deploy/sklearn/api/v1.0/predictions \\\n-H 'Content-Type: application/json' \\\n-d '{ \"data\": { \"ndarray\": [[1,2,3,4]] } }'\n")),(0,o.kt)("p",null,"Furthermore, when checking the Grafana dashboard, you can observe that the Global Request Rate increases momentarily from ",(0,o.kt)("inlineCode",{parentName:"p"},"0 ops"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"repeat-raise.png",src:n(9506).Z,width:"5016",height:"2826"})),(0,o.kt)("p",null,"This confirms that Prometheus and Grafana have been successfully installed and configured."))}u.isMDXComponent=!0},9506:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/repeat-raise-60a3d043d2ac70549160aa936b4bed46.png"}}]);