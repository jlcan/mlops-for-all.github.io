"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[3552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"4. Prometheus & Grafana",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - Prometheus & Grafana",sidebar_position:4,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-13T00:00:00.000Z"),contributors:["Jaeyeon Kim"]},l=void 0,s={unversionedId:"setup-components/install-components-pg",id:"setup-components/install-components-pg",title:"4. Prometheus & Grafana",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - Prometheus & Grafana",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/setup-components/install-components-pg.md",sourceDirName:"setup-components",slug:"/setup-components/install-components-pg",permalink:"/mlops-for-all.github.io/en/docs/setup-components/install-components-pg",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/setup-components/install-components-pg.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162774,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:4,frontMatter:{title:"4. Prometheus & Grafana",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - Prometheus & Grafana",sidebar_position:4,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-13T00:00:00.000Z",contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"3. Seldon-Core",permalink:"/mlops-for-all.github.io/en/docs/setup-components/install-components-seldon"},next:{title:"1. Central Dashboard",permalink:"/mlops-for-all.github.io/en/docs/kubeflow-dashboard-guide/intro"}},i={},c=[{value:"Prometheus &amp; Grafana",id:"prometheus--grafana",level:2},{value:"Add Helm Repository",id:"add-helm-repository",level:3},{value:"Update Helm Repository",id:"update-helm-repository",level:3},{value:"Helm Install",id:"helm-install",level:3},{value:"Check installation",id:"check-installation",level:3},{value:"References",id:"references",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prometheus--grafana"},"Prometheus & Grafana"),(0,o.kt)("p",null,"Prometheus and Grafana are tools for monitoring.",(0,o.kt)("br",{parentName:"p"}),"\n","For stable service operation, it is necessary to continuously observe the status of the service and infrastructure where the service is operating, and to respond quickly based on the observed metrics when a problem arises.",(0,o.kt)("br",{parentName:"p"}),"\n","Among the many tools to efficiently perform such monitoring, ",(0,o.kt)("em",{parentName:"p"},"Everyone's MLOps")," will use open source Prometheus and Grafana."),(0,o.kt)("p",null,"For more information, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/overview/"},"Prometheus Official Documentation")," and ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/"},"Grafana Official Documentation"),"."),(0,o.kt)("p",null,"Prometheus is a tool to collect metrics from various targets, and Grafana is a tool to help visualize the gathered data. Although there is no dependency between them, they are often used together complementary to each other."),(0,o.kt)("p",null,"In this page, we will install Prometheus and Grafana on a Kubernetes cluster, then send API requests to a SeldonDeployment created with Seldon-Core and check if metrics are collected successfully."),(0,o.kt)("p",null,"We also install a dashboard to efficiently monitor the metrics of the SeldonDeployment created in Seldon-Core using Helm Chart version 1.12.0 from seldonio/seldon-core-analytics Helm Repository."),(0,o.kt)("h3",{id:"add-helm-repository"},"Add Helm Repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add seldonio https://storage.googleapis.com/seldon-charts\n")),(0,o.kt)("p",null,"If the following message is output, it means that it has been added successfully."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'"seldonio" has been added to your repositories\n')),(0,o.kt)("h3",{id:"update-helm-repository"},"Update Helm Repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\n")),(0,o.kt)("p",null,"If the following message is displayed, it means that the update was successful."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Hang tight while we grab the latest from your chart repositories...\n...Successfully got an update from the "seldonio" chart repository\n...Successfully got an update from the "datawire" chart repository\nUpdate Complete. \u2388Happy Helming!\u2388\n')),(0,o.kt)("h3",{id:"helm-install"},"Helm Install"),(0,o.kt)("p",null,"Install version 1.12.0 of the seldon-core-analytics Helm Chart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install seldon-core-analytics seldonio/seldon-core-analytics \\\n  --namespace seldon-system \\\n  --version 1.12.0\n")),(0,o.kt)("p",null,"The following message should be output."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Skip...\nNAME: seldon-core-analytics\nLAST DEPLOYED: Tue Dec 14 18:29:38 2021\nNAMESPACE: seldon-system\nSTATUS: deployed\nREVISION: 1\n")),(0,o.kt)("p",null,"Check to see if it was installed normally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n seldon-system | grep seldon-core-analytics\n")),(0,o.kt)("p",null,"Wait until 6 seldon-core-analytics related pods are Running in the seldon-system namespace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"seldon-core-analytics-grafana-657c956c88-ng8wn                  2/2     Running   0          114s\nseldon-core-analytics-kube-state-metrics-94bb6cb9-svs82         1/1     Running   0          114s\nseldon-core-analytics-prometheus-alertmanager-64cf7b8f5-nxbl8   2/2     Running   0          114s\nseldon-core-analytics-prometheus-node-exporter-5rrj5            1/1     Running   0          114s\nseldon-core-analytics-prometheus-pushgateway-8476474cff-sr4n6   1/1     Running   0          114s\nseldon-core-analytics-prometheus-seldon-685c664894-7cr45        2/2     Running   0          114s\n")),(0,o.kt)("h3",{id:"check-installation"},"Check installation"),(0,o.kt)("p",null,"Let's now check if we can connect to Grafana normally. First, we will port forward to connect to the client node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/seldon-core-analytics-grafana -n seldon-system 8090:80\n")),(0,o.kt)("p",null,"Open the web browser and connect to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8090"},"localhost:8090"),", then the following screen will be displayed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-install",src:n(4171).Z,width:"5016",height:"2826"})),(0,o.kt)("p",null,"Enter the following connection information to connect."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Email or username: ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")),(0,o.kt)("li",{parentName:"ul"},"Password: ",(0,o.kt)("inlineCode",{parentName:"li"},"password"))),(0,o.kt)("p",null,"When you log in, the following screen will be displayed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-login",src:n(7985).Z,width:"3640",height:"2140"})),(0,o.kt)("p",null,"Click the dashboard icon on the left and click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"dashboard-click",src:n(3443).Z,width:"5016",height:"2826"})),(0,o.kt)("p",null,"You can see that the basic Grafana dashboard is included. Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Prediction Analytics")," dashboard among them."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"dashboard",src:n(3323).Z,width:"5016",height:"2826"})),(0,o.kt)("p",null," The Seldon Core API Dashboard is visible and can be confirmed with the following output."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"seldon-dashboard",src:n(2592).Z,width:"5016",height:"2826"})),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeldonIO/seldon-core/tree/master/helm-charts/seldon-core-analytics"},"Seldon-Core-Analytics Helm Chart"))))}u.isMDXComponent=!0},3443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard-click-868bcd267717917295a8f9627d6c522e.png"},3323:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard-ee3d0192807699b2515d184ff00f426d.png"},4171:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/grafana-install-4ca59cc00fad5ee1a50d91f30ab89bb1.png"},7985:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/grafana-login-b91326a2a0082ffb560ad1b30d381091.png"},2592:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/seldon-dashboard-01eccd6a30aac640474edef01050d277.png"}}]);