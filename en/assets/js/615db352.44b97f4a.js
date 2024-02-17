"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[6749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),f=i,m=c["".concat(o,".").concat(f)]||c[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=f;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:i,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={title:"7. Pipeline - Run",description:"",sidebar_position:7,contributors:["Jongseob Jeon"]},l=void 0,p={unversionedId:"kubeflow/basic-run",id:"kubeflow/basic-run",title:"7. Pipeline - Run",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/kubeflow/basic-run.md",sourceDirName:"kubeflow",slug:"/kubeflow/basic-run",permalink:"/en/docs/kubeflow/basic-run",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow/basic-run.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162399,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:7,frontMatter:{title:"7. Pipeline - Run",description:"",sidebar_position:7,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"6. Pipeline - Upload",permalink:"/en/docs/kubeflow/basic-pipeline-upload"},next:{title:"8. Component - InputPath/OutputPath",permalink:"/en/docs/kubeflow/advanced-component"}},o={},u=[{value:"Run Pipeline",id:"run-pipeline",level:2},{value:"Before Run",id:"before-run",level:2},{value:"1. Create Experiment",id:"1-create-experiment",level:3},{value:"2. Name \uc785\ub825",id:"2-name-\uc785\ub825",level:3},{value:"Run Pipeline",id:"run-pipeline-1",level:2},{value:"1. Select Create Run",id:"1-select-create-run",level:3},{value:"2. Select Experiment",id:"2-select-experiment",level:3},{value:"3. Enter Pipeline Config",id:"3-enter-pipeline-config",level:3},{value:"4. Start",id:"4-start",level:3},{value:"Run Result",id:"run-result",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"run-pipeline"},"Run Pipeline"),(0,i.kt)("p",null,"Now we will run the uploaded pipeline."),(0,i.kt)("h2",{id:"before-run"},"Before Run"),(0,i.kt)("h3",{id:"1-create-experiment"},"1. Create Experiment"),(0,i.kt)("p",null,"Experiments in Kubeflow are units that logically manage runs executed within them."),(0,i.kt)("p",null,"When you first enter the namespace in Kubeflow, there are no Experiments created. Therefore, you must create an Experiment beforehand in order to run the pipeline. If an Experiment already exists, you can go to ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/kubeflow/basic-run#run-pipeline-1"},"Run Pipeline"),"."),(0,i.kt)("p",null,"Experiments can be created via the Create Experiment button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-0.png",src:n(6402).Z,width:"3360",height:"2100"})),(0,i.kt)("h3",{id:"2-name-\uc785\ub825"},"2. Name \uc785\ub825"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-1.png",src:n(2813).Z,width:"3360",height:"2100"})),(0,i.kt)("h2",{id:"run-pipeline-1"},"Run Pipeline"),(0,i.kt)("h3",{id:"1-select-create-run"},"1. Select Create Run"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-2.png",src:n(1567).Z,width:"3360",height:"2100"})),(0,i.kt)("h3",{id:"2-select-experiment"},"2. Select Experiment"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-9.png",src:n(2090).Z,width:"3360",height:"2100"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-10.png",src:n(141).Z,width:"3360",height:"2100"})),(0,i.kt)("h3",{id:"3-enter-pipeline-config"},"3. Enter Pipeline Config"),(0,i.kt)("p",null,"Fill in the values of the Config provided when creating the pipeline. The uploaded pipeline requires input values for ",(0,i.kt)("inlineCode",{parentName:"p"},"number_1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"number_2"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-3.png",src:n(9208).Z,width:"3360",height:"2100"})),(0,i.kt)("h3",{id:"4-start"},"4. Start"),(0,i.kt)("p",null,"Click the Start button after entering the values. The pipeline will start running."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-4.png",src:n(666).Z,width:"3360",height:"2100"})),(0,i.kt)("h2",{id:"run-result"},"Run Result"),(0,i.kt)("p",null,"The executed pipelines can be viewed in the Runs tab.\nClicking on a run provides detailed information related to the executed pipeline."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-5.png",src:n(1552).Z,width:"3360",height:"2100"})),(0,i.kt)("p",null,"Upon clicking, the following screen appears. Components that have not yet executed are displayed in gray."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-6.png",src:n(7006).Z,width:"3360",height:"2100"})),(0,i.kt)("p",null,"When a component has completed execution, it is marked with a green checkmark."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-7.png",src:n(1847).Z,width:"3408",height:"2156"})),(0,i.kt)("p",null,"If we look at the last component, we can see that it has outputted the sum of the input values, which in this case is 8 (the sum of 3 and 5)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-8.png",src:n(6944).Z,width:"3360",height:"2100"})))}d.isMDXComponent=!0},6402:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-0-89a074cf253ad20e9315a21b2a3f0e9d.png"},2813:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-1-665e6047b848cee9383180a6a146a1a7.png"},141:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-10-2177a6d36d33136d1b22445a2bfde87b.png"},1567:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-2-e1d4347b0c3974602d7f848dd39139a1.png"},9208:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-3-4d37c68448d8d5a8930ace230463e41e.png"},666:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-4-b6f1160b622f53a449e9022b42a0969c.png"},1552:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-5-165361ea6e50ef9626ff848ca5901332.png"},7006:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-6-c0df9defda8fb66fd249cfe650168103.png"},1847:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-7-53ba486fe934b320289bf98ddbf9a4b6.png"},6944:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-8-ffde114f1b8e8f33c58e40927a2d28c6.png"},2090:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/run-9-845cae1b0883fa77fb58717001557edb.png"}}]);