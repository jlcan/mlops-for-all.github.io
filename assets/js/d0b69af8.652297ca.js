"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[2429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={title:"4. Prometheus & Grafana",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - Prometheus & Grafana",sidebar_position:4,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-13T00:00:00.000Z"),contributors:["Jaeyeon Kim"]},l=void 0,s={unversionedId:"setup-components/install-components-pg",id:"version-1.0/setup-components/install-components-pg",title:"4. Prometheus & Grafana",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - Prometheus & Grafana",source:"@site/versioned_docs/version-1.0/setup-components/install-components-pg.md",sourceDirName:"setup-components",slug:"/setup-components/install-components-pg",permalink:"/mlops-for-all.github.io/docs/1.0/setup-components/install-components-pg",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/setup-components/install-components-pg.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708161574,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:4,frontMatter:{title:"4. Prometheus & Grafana",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - Prometheus & Grafana",sidebar_position:4,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-13T00:00:00.000Z",contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"3. Seldon-Core",permalink:"/mlops-for-all.github.io/docs/1.0/setup-components/install-components-seldon"},next:{title:"1. Central Dashboard",permalink:"/mlops-for-all.github.io/docs/1.0/kubeflow-dashboard-guide/intro"}},p={},i=[{value:"Prometheus &amp; Grafana",id:"prometheus--grafana",level:2},{value:"Helm Repository \ucd94\uac00",id:"helm-repository-\ucd94\uac00",level:3},{value:"Helm Repository \uc5c5\ub370\uc774\ud2b8",id:"helm-repository-\uc5c5\ub370\uc774\ud2b8",level:3},{value:"Helm Install",id:"helm-install",level:3},{value:"\uc815\uc0c1 \uc124\uce58 \ud655\uc778",id:"\uc815\uc0c1-\uc124\uce58-\ud655\uc778",level:3},{value:"References",id:"references",level:2}],c={toc:i},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prometheus--grafana"},"Prometheus & Grafana"),(0,r.kt)("p",null,"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4(Prometheus) \uc640 \uadf8\ub77c\ud30c\ub098(Grafana) \ub294 \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc704\ud55c \ub3c4\uad6c\uc785\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc548\uc815\uc801\uc778 \uc11c\ube44\uc2a4 \uc6b4\uc601\uc744 \uc704\ud574\uc11c\ub294 \uc11c\ube44\uc2a4\uc640 \uc11c\ube44\uc2a4\uac00 \uc6b4\uc601\ub418\uace0 \uc788\ub294 \uc778\ud504\ub77c\uc758 \uc0c1\ud0dc\ub97c \uc9c0\uc18d\ud574\uc11c \uad00\ucc30\ud558\uace0, \uad00\ucc30\ud55c \uba54\ud2b8\ub9ad\uc744 \ubc14\ud0d5\uc73c\ub85c \ubb38\uc81c\uac00 \uc0dd\uae38 \ub54c \ube60\ub974\uac8c \ub300\uc751\ud574\uc57c \ud569\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc774\ub7ec\ud55c \ubaa8\ub2c8\ud130\ub9c1\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uc218\ud589\ud558\uae30 \uc704\ud55c \ub9ce\uc740 \ub3c4\uad6c \uc911 ",(0,r.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c\ub294 \uc624\ud508\uc18c\uc2a4\uc778 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\uc640 \uadf8\ub77c\ud30c\ub098\ub97c \uc0ac\uc6a9\ud560 \uc608\uc815\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub354 \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/overview/"},"Prometheus \uacf5\uc2dd \ubb38\uc11c"),", ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/"},"Grafana \uacf5\uc2dd \ubb38\uc11c"),"\ub97c \ud655\uc778\ud574\uc8fc\uc2dc\uae30\ub97c \ubc14\ub78d\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub294 \ub2e4\uc591\ud55c \ub300\uc0c1\uc73c\ub85c\ubd80\ud130 Metric\uc744 \uc218\uc9d1\ud558\ub294 \ub3c4\uad6c\uc774\uba70, \uadf8\ub77c\ud30c\ub098\ub294 \ubaa8\uc778 \ub370\uc774\ud130\ub97c \uc2dc\uac01\ud654\ud558\ub294 \uac83\uc744 \ub3c4\uc640\uc8fc\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4. \uc11c\ub85c \uac04\uc758 \uc885\uc18d\uc131\uc740 \uc5c6\uc9c0\ub9cc \uc0c1\ud638 \ubcf4\uc644\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5b4 \ud568\uaed8 \uc0ac\uc6a9\ub418\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ubc88 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc5d0 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\uc640 \uadf8\ub77c\ud30c\ub098\ub97c \uc124\uce58\ud55c \ub4a4, Seldon-Core \ub85c \uc0dd\uc131\ud55c SeldonDeployment \ub85c API \uc694\uccad\uc744 \ubcf4\ub0b4, \uc815\uc0c1\uc801\uc73c\ub85c Metrics \uc774 \uc218\uc9d1\ub418\ub294\uc9c0 \ud655\uc778\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubcf8 \uae00\uc5d0\uc11c\ub294 seldonio/seldon-core-analytics Helm Chart 1.12.0 \ubc84\uc804\uc744 \ud65c\uc6a9\ud574 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc5d0 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\uc640 \uadf8\ub77c\ud30c\ub098\ub97c \uc124\uce58\ud558\uace0, Seldon-Core \uc5d0\uc11c \uc0dd\uc131\ud55c SeldonDeployment\uc758 Metrics \uc744 \ud6a8\uc728\uc801\uc73c\ub85c \ud655\uc778\ud558\uae30 \uc704\ud55c \ub300\uc2dc\ubcf4\ub4dc\ub3c4 \ud568\uaed8 \uc124\uce58\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"helm-repository-\ucd94\uac00"},"Helm Repository \ucd94\uac00"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add seldonio https://storage.googleapis.com/seldon-charts\n")),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ucd9c\ub825\ub418\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \ucd94\uac00\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'"seldonio" has been added to your repositories\n')),(0,r.kt)("h3",{id:"helm-repository-\uc5c5\ub370\uc774\ud2b8"},"Helm Repository \uc5c5\ub370\uc774\ud2b8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\n")),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ucd9c\ub825\ub418\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Hang tight while we grab the latest from your chart repositories...\n...Successfully got an update from the "seldonio" chart repository\n...Successfully got an update from the "datawire" chart repository\nUpdate Complete. \u2388Happy Helming!\u2388\n')),(0,r.kt)("h3",{id:"helm-install"},"Helm Install"),(0,r.kt)("p",null,"seldon-core-analytics Helm Chart 1.12.0 \ubc84\uc804\uc744 \uc124\uce58\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install seldon-core-analytics seldonio/seldon-core-analytics \\\n  --namespace seldon-system \\\n  --version 1.12.0\n")),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ucd9c\ub825\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\uc0dd\ub7b5...\nNAME: seldon-core-analytics\nLAST DEPLOYED: Tue Dec 14 18:29:38 2021\nNAMESPACE: seldon-system\nSTATUS: deployed\nREVISION: 1\n")),(0,r.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n seldon-system | grep seldon-core-analytics\n")),(0,r.kt)("p",null,"seldon-system namespace \uc5d0 6\uac1c\uc758 seldon-core-analytics \uad00\ub828 pod \uac00 Running \uc774 \ub420 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9bd\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"seldon-core-analytics-grafana-657c956c88-ng8wn                  2/2     Running   0          114s\nseldon-core-analytics-kube-state-metrics-94bb6cb9-svs82         1/1     Running   0          114s\nseldon-core-analytics-prometheus-alertmanager-64cf7b8f5-nxbl8   2/2     Running   0          114s\nseldon-core-analytics-prometheus-node-exporter-5rrj5            1/1     Running   0          114s\nseldon-core-analytics-prometheus-pushgateway-8476474cff-sr4n6   1/1     Running   0          114s\nseldon-core-analytics-prometheus-seldon-685c664894-7cr45        2/2     Running   0          114s\n")),(0,r.kt)("h3",{id:"\uc815\uc0c1-\uc124\uce58-\ud655\uc778"},"\uc815\uc0c1 \uc124\uce58 \ud655\uc778"),(0,r.kt)("p",null,"\uadf8\ub7fc \uc774\uc81c \uadf8\ub77c\ud30c\ub098\uc5d0 \uc815\uc0c1\uc801\uc73c\ub85c \uc811\uc18d\ub418\ub294\uc9c0 \ud655\uc778\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc6b0\uc120 \ud074\ub77c\uc774\uc5b8\ud2b8 \ub178\ub4dc\uc5d0\uc11c \uc811\uc18d\ud558\uae30 \uc704\ud574, \ud3ec\ud2b8\ud3ec\uc6cc\ub529\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/seldon-core-analytics-grafana -n seldon-system 8090:80\n")),(0,r.kt)("p",null,"\uc6f9 \ube0c\ub77c\uc6b0\uc800\ub97c \uc5f4\uc5b4 ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8090"},"localhost:8090"),"\uc73c\ub85c \uc811\uc18d\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ud654\uba74\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"grafana-install",src:n(7796).Z,width:"5016",height:"2826"})),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uc811\uc18d\uc815\ubcf4\ub97c \uc785\ub825\ud558\uc5ec \uc811\uc18d\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Email or username : ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")),(0,r.kt)("li",{parentName:"ul"},"Password : ",(0,r.kt)("inlineCode",{parentName:"li"},"password"))),(0,r.kt)("p",null,"\ub85c\uadf8\uc778\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ud654\uba74\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"grafana-login",src:n(7397).Z,width:"3640",height:"2140"})),(0,r.kt)("p",null,"\uc88c\uce21\uc758 \ub300\uc2dc\ubcf4\ub4dc \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec, ",(0,r.kt)("inlineCode",{parentName:"p"},"Manage")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dashboard-click",src:n(426).Z,width:"5016",height:"2826"})),(0,r.kt)("p",null,"\uae30\ubcf8\uc801\uc778 \uadf8\ub77c\ud30c\ub098 \ub300\uc2dc\ubcf4\ub4dc\uac00 \ud3ec\ud568\ub418\uc5b4\uc788\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc911 ",(0,r.kt)("inlineCode",{parentName:"p"},"Prediction Analytics")," \ub300\uc2dc\ubcf4\ub4dc\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dashboard",src:n(6274).Z,width:"5016",height:"2826"})),(0,r.kt)("p",null,"Seldon Core API Dashboard \uac00 \ubcf4\uc774\uace0, \ub2e4\uc74c\uacfc \uac19\uc774 \ucd9c\ub825\ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"seldon-dashboard",src:n(1095).Z,width:"5016",height:"2826"})),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeldonIO/seldon-core/tree/master/helm-charts/seldon-core-analytics"},"Seldon-Core-Analytics Helm Chart"))))}u.isMDXComponent=!0},426:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard-click-868bcd267717917295a8f9627d6c522e.png"},6274:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard-ee3d0192807699b2515d184ff00f426d.png"},7796:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/grafana-install-4ca59cc00fad5ee1a50d91f30ab89bb1.png"},7397:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/grafana-login-b91326a2a0082ffb560ad1b30d381091.png"},1095:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/seldon-dashboard-01eccd6a30aac640474edef01050d277.png"}}]);