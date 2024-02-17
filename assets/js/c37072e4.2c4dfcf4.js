"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[9325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=o(n),f=i,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:i,l[1]=p;for(var o=2;o<a;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>o});var r=n(7462),i=(n(7294),n(3905));const a={title:"7. Pipeline - Run",description:"",sidebar_position:7,contributors:["Jongseob Jeon"]},l=void 0,p={unversionedId:"kubeflow/basic-run",id:"version-1.0/kubeflow/basic-run",title:"7. Pipeline - Run",description:"",source:"@site/versioned_docs/version-1.0/kubeflow/basic-run.md",sourceDirName:"kubeflow",slug:"/kubeflow/basic-run",permalink:"/docs/1.0/kubeflow/basic-run",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/kubeflow/basic-run.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162399,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:7,frontMatter:{title:"7. Pipeline - Run",description:"",sidebar_position:7,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"6. Pipeline - Upload",permalink:"/docs/1.0/kubeflow/basic-pipeline-upload"},next:{title:"8. Component - InputPath/OutputPath",permalink:"/docs/1.0/kubeflow/advanced-component"}},u={},o=[{value:"Run Pipeline",id:"run-pipeline",level:2},{value:"Before Run",id:"before-run",level:2},{value:"1. Create Experiment",id:"1-create-experiment",level:3},{value:"2. Name \uc785\ub825",id:"2-name-\uc785\ub825",level:3},{value:"Run Pipeline",id:"run-pipeline-1",level:2},{value:"1. Create Run \uc120\ud0dd",id:"1-create-run-\uc120\ud0dd",level:3},{value:"2. Experiment \uc120\ud0dd",id:"2-experiment-\uc120\ud0dd",level:3},{value:"3. Pipeline Config \uc785\ub825",id:"3-pipeline-config-\uc785\ub825",level:3},{value:"4. Start",id:"4-start",level:3},{value:"Run Result",id:"run-result",level:2}],s={toc:o},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"run-pipeline"},"Run Pipeline"),(0,i.kt)("p",null,"\uc774\uc81c \uc5c5\ub85c\ub4dc\ud55c \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc2e4\ud589\uc2dc\ucf1c \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"before-run"},"Before Run"),(0,i.kt)("h3",{id:"1-create-experiment"},"1. Create Experiment"),(0,i.kt)("p",null,"Experiment\ub780 Kubeflow \uc5d0\uc11c \uc2e4\ud589\ub418\ub294 Run\uc744 \ub17c\ub9ac\uc801\uc73c\ub85c \uad00\ub9ac\ud558\ub294 \ub2e8\uc704\uc785\ub2c8\ub2e4.  "),(0,i.kt)("p",null,"Kubeflow\uc5d0\uc11c namespace\ub97c \ucc98\uc74c \ub4e4\uc5b4\uc624\uba74 \uc0dd\uc131\ub418\uc5b4 \uc788\ub294 Experiment\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc2e4\ud589\ud558\uae30 \uc804\uc5d0 \ubbf8\ub9ac Experiment\ub97c \uc0dd\uc131\ud574\ub450\uc5b4\uc57c \ud569\ub2c8\ub2e4. Experiment\uc774 \uc788\ub2e4\uba74 ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0/kubeflow/basic-run#run-pipeline-1"},"Run Pipeline"),"\uc73c\ub85c \ub118\uc5b4\uac00\ub3c4 \ubb34\ubc29\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"Experiment\ub294 Create Experiment \ubc84\ud2bc\uc744 \ud1b5\ud574 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-0.png",src:n(5997).Z,width:"3360",height:"2100"})),(0,i.kt)("h3",{id:"2-name-\uc785\ub825"},"2. Name \uc785\ub825"),(0,i.kt)("p",null,"Experiment\ub85c \uc0ac\uc6a9\ud560 \uc774\ub984\uc744 \uc785\ub825\ud569\ub2c8\ub2e4.\n",(0,i.kt)("img",{alt:"run-1.png",src:n(7523).Z,width:"3360",height:"2100"})),(0,i.kt)("h2",{id:"run-pipeline-1"},"Run Pipeline"),(0,i.kt)("h3",{id:"1-create-run-\uc120\ud0dd"},"1. Create Run \uc120\ud0dd"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-2.png",src:n(9005).Z,width:"3360",height:"2100"})),(0,i.kt)("h3",{id:"2-experiment-\uc120\ud0dd"},"2. Experiment \uc120\ud0dd"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-9.png",src:n(4048).Z,width:"3360",height:"2100"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-10.png",src:n(1363).Z,width:"3360",height:"2100"})),(0,i.kt)("h3",{id:"3-pipeline-config-\uc785\ub825"},"3. Pipeline Config \uc785\ub825"),(0,i.kt)("p",null,"\ud30c\uc774\ud504\ub77c\uc778\uc744 \uc0dd\uc131\ud560 \ub54c \uc785\ub825\ud55c Config \uac12\ub4e4\uc744 \ucc44\uc6cc \ub123\uc2b5\ub2c8\ub2e4.\n\uc5c5\ub85c\ub4dc\ud55c \ud30c\uc774\ud504\ub77c\uc778\uc740 number_1\uacfc number_2\ub97c \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-3.png",src:n(7705).Z,width:"3360",height:"2100"})),(0,i.kt)("h3",{id:"4-start"},"4. Start"),(0,i.kt)("p",null,"\uc785\ub825 \ud6c4 Start \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \ud30c\uc774\ud504\ub77c\uc778\uc774 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-4.png",src:n(576).Z,width:"3360",height:"2100"})),(0,i.kt)("h2",{id:"run-result"},"Run Result"),(0,i.kt)("p",null,"\uc2e4\ud589\ub41c \ud30c\uc774\ud504\ub77c\uc778\ub4e4\uc740 Runs \ud0ed\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nRun\uc744 \ud074\ub9ad\ud558\uba74 \uc2e4\ud589\ub41c \ud30c\uc774\ud504\ub77c\uc778\uacfc \uad00\ub828\ub41c \uc790\uc138\ud55c \ub0b4\uc6a9\uc744 \ud655\uc778\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-5.png",src:n(3297).Z,width:"3360",height:"2100"})),(0,i.kt)("p",null,"\ud074\ub9ad\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ud654\uba74\uc774 \ub098\uc635\ub2c8\ub2e4. \uc544\uc9c1 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud68c\uc0c9 \ud45c\uc2dc\ub85c \ub098\uc635\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-6.png",src:n(7895).Z,width:"3360",height:"2100"})),(0,i.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uac00 \uc2e4\ud589\uc774 \uc644\ub8cc\ub418\uba74 \ucd08\ub85d\uc0c9 \uccb4\ud06c \ud45c\uc2dc\uac00 \ub098\uc635\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-7.png",src:n(2687).Z,width:"3408",height:"2156"})),(0,i.kt)("p",null,"\uac00\uc7a5 \ub9c8\uc9c0\ub9c9 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubcf4\uba74 \uc785\ub825\ud55c Config\uc778 3\uacfc 5\uc758 \ud569\uc778 8\uc774 \ucd9c\ub825\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-8.png",src:n(4786).Z,width:"3360",height:"2100"})))}d.isMDXComponent=!0},5997:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-0-89a074cf253ad20e9315a21b2a3f0e9d.png"},7523:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-1-665e6047b848cee9383180a6a146a1a7.png"},1363:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-10-2177a6d36d33136d1b22445a2bfde87b.png"},9005:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-2-e1d4347b0c3974602d7f848dd39139a1.png"},7705:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-3-4d37c68448d8d5a8930ace230463e41e.png"},576:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-4-b6f1160b622f53a449e9022b42a0969c.png"},3297:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-5-165361ea6e50ef9626ff848ca5901332.png"},7895:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-6-c0df9defda8fb66fd249cfe650168103.png"},2687:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-7-53ba486fe934b320289bf98ddbf9a4b6.png"},4786:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-8-ffde114f1b8e8f33c58e40927a2d28c6.png"},4048:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-9-845cae1b0883fa77fb58717001557edb.png"}}]);