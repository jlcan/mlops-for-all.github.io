"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[7345],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,l[1]=p;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const a={title:"1. What is API Deployment?",description:"",sidebar_position:1,date:new Date("2021-12-22T00:00:00.000Z"),lastmod:new Date("2021-12-22T00:00:00.000Z"),contributors:["Youngcheol Jang"]},l=void 0,p={unversionedId:"api-deployment/what-is-api-deployment",id:"api-deployment/what-is-api-deployment",title:"1. What is API Deployment?",description:"",source:"@site/docs/api-deployment/what-is-api-deployment.md",sourceDirName:"api-deployment",slug:"/api-deployment/what-is-api-deployment",permalink:"/mlops-for-all.github.io/docs/api-deployment/what-is-api-deployment",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/api-deployment/what-is-api-deployment.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162146,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:1,frontMatter:{title:"1. What is API Deployment?",description:"",sidebar_position:1,date:"2021-12-22T00:00:00.000Z",lastmod:"2021-12-22T00:00:00.000Z",contributors:["Youngcheol Jang"]},sidebar:"tutorialSidebar",previous:{title:"13. Component - Debugging",permalink:"/mlops-for-all.github.io/docs/kubeflow/how-to-debug"},next:{title:"2. Deploy SeldonDeployment",permalink:"/mlops-for-all.github.io/docs/api-deployment/seldon-iris"}},i={},m=[{value:"API Deployment\ub780?",id:"api-deployment\ub780",level:2},{value:"Serving Framework",id:"serving-framework",level:2}],s={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"api-deployment\ub780"},"API Deployment\ub780?"),(0,o.kt)("p",null,"\uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378\uc744 \ud559\uc2b5\ud55c \ub4a4\uc5d0\ub294 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud574\uc57c \ud560\uae4c\uc694?",(0,o.kt)("br",{parentName:"p"}),"\n","\uba38\uc2e0\ub7ec\ub2dd\uc744 \ud559\uc2b5\ud560 \ub54c\ub294 \ub354 \ub192\uc740 \uc131\ub2a5\uc758 \ubaa8\ub378\uc774 \ub098\uc624\uae30\ub97c \uae30\ub300\ud558\uc9c0\ub9cc, \ud559\uc2b5\ub41c \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucd94\ub860\uc744 \ud560 \ub54c\ub294 \ube60\ub974\uace0 \uc27d\uac8c \ucd94\ub860 \uacb0\uacfc\ub97c \ubc1b\uc544\ubcf4\uace0 \uc2f6\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ubaa8\ub378\uc758 \ucd94\ub860 \uacb0\uacfc\ub97c \ud655\uc778\ud558\uace0\uc790 \ud560 \ub54c \uc8fc\ud53c\ud130 \ub178\ud2b8\ubd81\uc774\ub098 \ud30c\uc774\uc36c \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ud1b5\ud574 \ud559\uc2b5\ub41c \ubaa8\ub378\uc744 \ub85c\ub4dc\ud55c \ub4a4 \ucd94\ub860\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uadf8\ub807\uc9c0\ub9cc \uc774\ub7f0 \ubc29\ubc95\uc740 \ubaa8\ub378\uc774 \ud074\uc218\ub85d \ubaa8\ub378\uc744 \ubd88\ub7ec\uc624\ub294 \ub370 \ub9ce\uc740 \uc2dc\uac04\uc744 \uc18c\uc694\ud558\uac8c \ub418\uc5b4\uc11c \ube44\ud6a8\uc728\uc801\uc785\ub2c8\ub2e4. \ub610\ud55c \uc774\ub807\uac8c \uc774\uc6a9\ud558\uba74 \ub9ce\uc740 \uc0ac\ub78c\uc774 \ubaa8\ub378\uc744 \uc774\uc6a9\ud560 \uc218 \uc5c6\uace0 \ud559\uc2b5\ub41c \ubaa8\ub378\uc774 \uc788\ub294 \ud658\uacbd\uc5d0\uc11c\ubc16\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uadf8\ub798\uc11c \uc2e4\uc81c \uc11c\ube44\uc2a4\uc5d0\uc11c \uba38\uc2e0\ub7ec\ub2dd\uc774 \uc0ac\uc6a9\ub420 \ub54c\ub294 API\ub97c \uc774\uc6a9\ud574\uc11c \ud559\uc2b5\ub41c \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ubaa8\ub378\uc740 API \uc11c\ubc84\uac00 \uad6c\ub3d9\ub418\ub294 \ud658\uacbd\uc5d0\uc11c \ud55c \ubc88\ub9cc \ub85c\ub4dc\uac00 \ub418\uba70, DNS\ub97c \ud65c\uc6a9\ud558\uc5ec \uc678\ubd80\uc5d0\uc11c\ub3c4 \uc27d\uac8c \ucd94\ub860 \uacb0\uacfc\ub97c \ubc1b\uc744 \uc218 \uc788\uace0 \ub2e4\ub978 \uc11c\ube44\uc2a4\uc640 \uc5f0\ub3d9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud558\uc9c0\ub9cc \ubaa8\ub378\uc744 API\ub85c \ub9cc\ub4dc\ub294 \uc791\uc5c5\uc5d0\ub294 \uc0dd\uac01\ubcf4\ub2e4 \ub9ce\uc740 \ubd80\uc218\uc801\uc778 \uc791\uc5c5\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uadf8\ub798\uc11c API\ub85c \ub9cc\ub4dc\ub294 \uc791\uc5c5\uc744 \ub354 \uc27d\uac8c \ud558\uae30 \uc704\ud574\uc11c Tensorflow\uc640 \uac19\uc740 \uba38\uc2e0\ub7ec\ub2dd \ud504\ub808\uc784\uc6cc\ud06c \uc9c4\uc601\uc5d0\uc11c\ub294 \ucd94\ub860 \uc5d4\uc9c4(Inference engine)\uc744 \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ucd94\ub860 \uc5d4\uc9c4\ub4e4\uc744 \uc774\uc6a9\ud558\uba74 \ud574\ub2f9 \uba38\uc2e0\ub7ec\ub2dd \ud504\ub808\uc784\uc6cc\ud06c\ub85c \uac1c\ubc1c\ub418\uace0 \ud559\uc2b5\ub41c \ubaa8\ub378\uc744 \ubd88\ub7ec\uc640 \ucd94\ub860\uc774 \uac00\ub2a5\ud55c API(REST \ub610\ub294 gRPC)\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc774\ub7ec\ud55c \ucd94\ub860 \uc5d4\uc9c4\uc744 \ud65c\uc6a9\ud558\uc5ec \uad6c\ucd95\ud55c API \uc11c\ubc84\ub85c \ucd94\ub860\ud558\uace0\uc790 \ud558\ub294 \ub370\uc774\ud130\ub97c \ub2f4\uc544 \uc694\uccad\uc744 \ubcf4\ub0b4\uba74, \ucd94\ub860 \uc5d4\uc9c4\uc774 \ucd94\ub860 \uacb0\uacfc\ub97c \uc751\ub2f5\uc5d0 \ub2f4\uc544 \uc804\uc1a1\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub300\ud45c\uc801\uc73c\ub85c \ub2e4\uc74c\uacfc \uac19\uc740 \uc624\ud508\uc18c\uc2a4 \ucd94\ub860 \uc5d4\uc9c4\ub4e4\uc774 \uac1c\ubc1c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tensorflow/serving"},"Tensorflow : Tensorflow Serving")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pytorch/serve"},"PyTorch : Torchserve")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/onnxruntime"},"Onnx : Onnx Runtime"))),(0,o.kt)("p",null,"\uc624\ud504\uc18c\uc2a4\uc5d0\uc11c \uacf5\uc2dd\uc801\uc73c\ub85c \uc9c0\uc6d0\ud558\uc9c0\ub294 \uc54a\uc9c0\ub9cc, \ub9ce\uc774 \uc4f0\uc774\ub294 sklearn, xgboost \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc704\ud55c \ucd94\ub860 \uc5d4\uc9c4\ub3c4 \uac1c\ubc1c\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ucc98\ub7fc \ubaa8\ub378\uc758 \ucd94\ub860 \uacb0\uacfc\ub97c API\uc758 \ud615\ud0dc\ub85c \ubc1b\uc544\ubcfc \uc218 \uc788\ub3c4\ub85d \ubc30\ud3ec\ud558\ub294 \uac83\uc744 ",(0,o.kt)("strong",{parentName:"p"},"API Deployment"),"\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"serving-framework"},"Serving Framework"),(0,o.kt)("p",null,"\uc704\uc5d0\uc11c \ub2e4\uc591\ud55c \ucd94\ub860 \uc5d4\uc9c4\ub4e4\uc774 \uac1c\ubc1c\ub418\uc5c8\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uc18c\uac1c\ud574 \ub4dc\ub838\uc2b5\ub2c8\ub2e4.\n\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud658\uacbd\uc5d0\uc11c \uc774\ub7ec\ud55c \ucd94\ub860 \uc5d4\uc9c4\ub4e4\uc744 \uc0ac\uc6a9\ud558\uc5ec API Deployment\ub97c \ud55c\ub2e4\uba74 \uc5b4\ub5a4 \uc791\uc5c5\uc774 \ud544\uc694\ud560\uae4c\uc694?\n\ucd94\ub860 \uc5d4\uc9c4\uc744 \ubc30\ud3ec\ud558\uae30 \uc704\ud55c Deployment, \ucd94\ub860 \uc694\uccad\uc744 \ubcf4\ub0bc Endpoint\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud55c Service,\n\uc678\ubd80\uc5d0\uc11c\uc758 \ucd94\ub860 \uc694\uccad\uc744 \ucd94\ub860 \uc5d4\uc9c4\uc73c\ub85c \ubcf4\ub0b4\uae30 \uc704\ud55c Ingress \ub4f1 \ub9ce\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub9ac\uc18c\uc2a4\ub97c \ubc30\ud3ec\ud574 \uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4.\n\uc774\uac83 \uc774\uc678\uc5d0\ub3c4, \ub9ce\uc740 \ucd94\ub860 \uc694\uccad\uc774 \ub4e4\uc5b4\uc654\uc744 \uacbd\uc6b0\uc758 \uc2a4\ucf00\uc77c \uc544\uc6c3(scale-out), \ucd94\ub860 \uc5d4\uc9c4 \uc0c1\ud0dc\uc5d0 \ub300\ud55c \ubaa8\ub2c8\ud130\ub9c1, \uac1c\uc120\ub41c \ubaa8\ub378\uc774 \ub098\uc654\uc744 \uacbd\uc6b0 \ubc84\uc804 \uc5c5\ub370\uc774\ud2b8 \ub4f1 \ucd94\ub860 \uc5d4\uc9c4\uc744 \uc6b4\uc601\ud560 \ub54c\uc758 \uc694\uad6c\uc0ac\ud56d\uc740 \ud55c\ub450 \uac00\uc9c0\uac00 \uc544\ub2d9\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ub7ec\ud55c \ub9ce\uc740 \uc694\uad6c\uc0ac\ud56d\uc744 \ucc98\ub9ac\ud558\uae30 \uc704\ud574 \ucd94\ub860 \uc5d4\uc9c4\ub4e4\uc744 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud658\uacbd \uc704\uc5d0\uc11c \ud55c \ubc88 \ub354 \ucd94\uc0c1\ud654\ud55c ",(0,o.kt)("strong",{parentName:"p"},"Serving Framework"),"\ub4e4\uc774 \uac1c\ubc1c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uac1c\ubc1c\ub41c Serving Framework\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uc624\ud508\uc18c\uc2a4\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeldonIO/seldon-core"},"Seldon Core")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kserve"},"Kserve")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bentoml/BentoML"},"BentoML"))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c\ub294 Seldon Core\ub97c \uc0ac\uc6a9\ud558\uc5ec API Deployment\ub97c \ud558\ub294 \uacfc\uc815\uc744 \ub2e4\ub8e8\uc5b4 \ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."))}c.isMDXComponent=!0}}]);