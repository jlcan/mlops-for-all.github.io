"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[3457],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=s(a),c=r,d=k["".concat(p,".").concat(c)]||k[c]||m[c]||o;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[k]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1085:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={title:"2. Notebooks",description:"",sidebar_position:2,contributors:["Jaeyeon Kim"]},l=void 0,i={unversionedId:"kubeflow-dashboard-guide/notebooks",id:"kubeflow-dashboard-guide/notebooks",title:"2. Notebooks",description:"",source:"@site/docs/kubeflow-dashboard-guide/notebooks.md",sourceDirName:"kubeflow-dashboard-guide",slug:"/kubeflow-dashboard-guide/notebooks",permalink:"/docs/kubeflow-dashboard-guide/notebooks",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow-dashboard-guide/notebooks.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708160311,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:2,frontMatter:{title:"2. Notebooks",description:"",sidebar_position:2,contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"1. Central Dashboard",permalink:"/docs/kubeflow-dashboard-guide/intro"},next:{title:"3. Tensorboards",permalink:"/docs/kubeflow-dashboard-guide/tensorboards"}},p={},s=[{value:"\ub178\ud2b8\ubd81 \uc11c\ubc84(Notebook Server) \uc0dd\uc131\ud558\uae30",id:"\ub178\ud2b8\ubd81-\uc11c\ubc84notebook-server-\uc0dd\uc131\ud558\uae30",level:2},{value:"\ub178\ud2b8\ubd81 \uc11c\ubc84 \uc811\uc18d\ud558\uae30",id:"\ub178\ud2b8\ubd81-\uc11c\ubc84-\uc811\uc18d\ud558\uae30",level:2},{value:"\ub178\ud2b8\ubd81 \uc11c\ubc84 \uc911\ub2e8\ud558\uae30",id:"\ub178\ud2b8\ubd81-\uc11c\ubc84-\uc911\ub2e8\ud558\uae30",level:2}],u={toc:s},k="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(k,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\ub178\ud2b8\ubd81-\uc11c\ubc84notebook-server-\uc0dd\uc131\ud558\uae30"},"\ub178\ud2b8\ubd81 \uc11c\ubc84(Notebook Server) \uc0dd\uc131\ud558\uae30"),(0,r.kt)("p",null,"\ub2e4\uc74c Central Dashboard\uc758 \uc67c\ucabd \ud0ed\uc758 Notebooks\ub97c \ud074\ub9ad\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"left-tabs",src:a(7511).Z,width:"3940",height:"1278"})),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \ud654\uba74\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"Notebooks \ud0ed\uc740 JupyterHub\uc640 \ube44\uc2b7\ud558\uac8c \uc720\uc800\ubcc4\ub85c jupyter notebook \ubc0f code server \ud658\uacbd(\uc774\ud558 \ub178\ud2b8\ubd81 \uc11c\ubc84)\uc744 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc0dd\uc131\ud558\uace0 \uc811\uc18d\ud560 \uc218 \uc788\ub294 \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"notebook-home",src:a(1288).Z,width:"5008",height:"2682"})),(0,r.kt)("p",null,"\uc624\ub978\ucabd \uc704\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"+ NEW NOTEBOOK")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"new-notebook",src:a(8666).Z,width:"1900",height:"312"})),(0,r.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc740 \ud654\uba74\uc774 \ub098\ud0c0\ub098\uba74, \uc774\uc81c \uc0dd\uc131\ud560 \ub178\ud2b8\ubd81 \uc11c\ubc84\uc758 \uc2a4\ud399(Spec)\uc744 \uba85\uc2dc\ud558\uc5ec \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create",src:a(4164).Z,width:"1738",height:"1674"})),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\uac01 \uc2a4\ud399\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub178\ud2b8\ubd81 \uc11c\ubc84\ub97c \uad6c\ubd84\ud560 \uc218 \uc788\ub294 \uc774\ub984\uc73c\ub85c \uc0dd\uc131\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"namespace")," :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub530\ub85c \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. (\ud604\uc7ac \ub85c\uadf8\uc778\ud55c user \uacc4\uc815\uc758 namespace\uc774 \uc790\ub3d9\uc73c\ub85c \uc9c0\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Image"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"sklearn, pytorch, tensorflow \ub4f1\uc758 \ud30c\uc774\uc36c \ud328\ud0a4\uc9c0\uac00 \ubbf8\ub9ac \uc124\uce58\ub41c jupyter lab \uc774\ubbf8\uc9c0 \uc911 \uc0ac\uc6a9\ud560 \uc774\ubbf8\uc9c0\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub178\ud2b8\ubd81 \uc11c\ubc84 \ub0b4\uc5d0\uc11c GPU\ub97c \uc0ac\uc6a9\ud558\uc5ec tensorflow-cuda, pytorch-cuda \ub4f1\uc758 \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0, ",(0,r.kt)("strong",{parentName:"li"},"\ud558\ub2e8\uc758 GPUs")," \ubd80\ubd84\uc744 \ud655\uc778\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ucd94\uac00\uc801\uc778 \ud328\ud0a4\uc9c0\ub098 \uc18c\uc2a4\ucf54\ub4dc \ub4f1\uc744 \ud3ec\ud568\ud55c \ucee4\uc2a4\ud140(Custom) \ub178\ud2b8\ubd81 \uc11c\ubc84\ub97c \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0\uc5d0\ub294 \ucee4\uc2a4\ud140 \uc774\ubbf8\uc9c0(Custom Image)\ub97c \ub9cc\ub4e4\uace0 \ubc30\ud3ec \ud6c4 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CPU / RAM"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud544\uc694\ud55c \uc790\uc6d0 \uc0ac\uc6a9\ub7c9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"cpu : core \ub2e8\uc704",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac00\uc0c1 core \uac1c\uc218 \ub2e8\uc704\ub97c \uc758\ubbf8\ud558\uba70, int \ud615\uc2dd\uc774 \uc544\ub2cc  ",(0,r.kt)("inlineCode",{parentName:"li"},"1.5"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"2.7")," \ub4f1\uc758 float \ud615\uc2dd\ub3c4 \uc785\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"memory : Gi \ub2e8\uc704"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GPUs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc8fc\ud53c\ud130 \ub178\ud2b8\ubd81\uc5d0 \ud560\ub2f9\ud560 GPU \uac1c\uc218\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"None"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GPU \uc790\uc6d0\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \uc0c1\ud669"))),(0,r.kt)("li",{parentName:"ul"},"1, 2, 4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GPU 1, 2, 4 \uac1c \ud560\ub2f9"))))),(0,r.kt)("li",{parentName:"ul"},"GPU Vendor",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc55e\uc758 ",(0,r.kt)("a",{parentName:"li",href:"/docs/setup-kubernetes/setup-nvidia-gpu"},"(Optional) Setup GPU")," \ub97c \ub530\ub77c nvidia gpu plugin\uc744 \uc124\uce58\ud558\uc600\ub2e4\uba74 NVIDIA\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Workspace Volume"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub178\ud2b8\ubd81 \uc11c\ubc84 \ub0b4\uc5d0\uc11c \ud544\uc694\ud55c \ub9cc\ud07c\uc758 \ub514\uc2a4\ud06c \uc6a9\ub7c9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Type \uacfc Name \uc740 \ubcc0\uacbd\ud558\uc9c0 \uc54a\uace0, ",(0,r.kt)("strong",{parentName:"li"},"\ub514\uc2a4\ud06c \uc6a9\ub7c9\uc744 \ub298\ub9ac\uace0 \uc2f6\uac70\ub098")," ",(0,r.kt)("strong",{parentName:"li"},"AccessMode \ub97c \ubcc0\uacbd\ud558\uace0 \uc2f6\uc744")," \ub54c\uc5d0\ub9cc \ubcc0\uacbd\ud574\uc11c \uc0ac\uc6a9\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\"Don't use Persistent Storage for User's home\"")," \uccb4\ud06c\ubc15\uc2a4\ub294 \ub178\ud2b8\ubd81 \uc11c\ubc84\uc758 \uc791\uc5c5 \ub0b4\uc6a9\uc744 \uc800\uc7a5\ud558\uc9c0 \uc54a\uc544\ub3c4 \uc0c1\uad00\uc5c6\uc744 \ub54c\uc5d0\ub9cc \ud074\ub9ad\ud569\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"li"},"\uc77c\ubc18\uc801\uc73c\ub85c\ub294 \ub204\ub974\uc9c0 \uc54a\ub294 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},'\uae30\uc874\uc5d0 \ubbf8\ub9ac \uc0dd\uc131\ud574\ub450\uc5c8\ub358 PVC\ub97c \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc744 \ub54c\uc5d0\ub294, Type\uc744 "Existing" \uc73c\ub85c \uc785\ub825\ud558\uc5ec \ud574\ub2f9 PVC\uc758 \uc774\ub984\uc744 \uc785\ub825\ud558\uc5ec \uc0ac\uc6a9\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4.'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Volumes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucd94\uac00\uc801\uc778 \uc2a4\ud1a0\ub9ac\uc9c0 \uc790\uc6d0\uc774 \ud544\uc694\ud558\ub2e4\uba74 ",(0,r.kt)("strong",{parentName:"li"},'"+ ADD VOLUME"')," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("del",{parentName:"li"},"Configurations, Affinity/Tolerations, Miscellaneous Settings"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c\ub294 \ud544\uc694\ud558\uc9c0 \uc54a\uc73c\ubbc0\ub85c ",(0,r.kt)("em",{parentName:"li"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c\ub294 \uc790\uc138\ud55c \uc124\uba85\uc744 \uc0dd\ub7b5\ud569\ub2c8\ub2e4."))))),(0,r.kt)("p",null,"\ubaa8\ub450 \uc815\uc0c1\uc801\uc73c\ub85c \uc785\ub825\ud558\uc600\ub2e4\uba74 \ud558\ub2e8\uc758 ",(0,r.kt)("strong",{parentName:"p"},"LAUNCH")," \ubc84\ud2bc\uc774 \ud65c\uc131\ud654\ub418\uba70, \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \ub178\ud2b8\ubd81 \uc11c\ubc84 \uc0dd\uc131\uc774 \uc2dc\uc791\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"creating",src:a(8290).Z,width:"1928",height:"400"})),(0,r.kt)("p",null,"\uc0dd\uc131 \ud6c4 \uc544\ub798\uc640 \uac19\uc774 ",(0,r.kt)("strong",{parentName:"p"},"Status")," \uac00 \ucd08\ub85d\uc0c9 \uccb4\ud06c \ud45c\uc2dc \uc544\uc774\ucf58\uc73c\ub85c \ubcc0\ud558\uba70, ",(0,r.kt)("strong",{parentName:"p"},"CONNECT \ubc84\ud2bc"),"\uc774 \ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"created",src:a(2519).Z,width:"1852",height:"352"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ub178\ud2b8\ubd81-\uc11c\ubc84-\uc811\uc18d\ud558\uae30"},"\ub178\ud2b8\ubd81 \uc11c\ubc84 \uc811\uc18d\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CONNECT \ubc84\ud2bc"),"\uc744 \ud074\ub9ad\ud558\uba74 \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc0c8 \ucc3d\uc774 \uc5f4\ub9ac\uba70, \ub2e4\uc74c\uacfc \uac19\uc740 \ud654\uba74\uc774 \ubcf4\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"notebook-access",src:a(5675).Z,width:"2898",height:"1990"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Launcher"),"\uc758 Notebook, Console, Terminal \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"  \uc0dd\uc131\ub41c Notebook \ud654\uba74"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"notebook-console",src:a(4831).Z,width:"2850",height:"736"})),(0,r.kt)("p",null,"  \uc0dd\uc131\ub41c Terminal \ud654\uba74"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"terminal-console",src:a(4155).Z,width:"2834",height:"806"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ub178\ud2b8\ubd81-\uc11c\ubc84-\uc911\ub2e8\ud558\uae30"},"\ub178\ud2b8\ubd81 \uc11c\ubc84 \uc911\ub2e8\ud558\uae30"),(0,r.kt)("p",null,"\ub178\ud2b8\ubd81 \uc11c\ubc84\ub97c \uc624\ub79c \uc2dc\uac04 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0, \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc758 \ud6a8\uc728\uc801\uc778 \ub9ac\uc18c\uc2a4 \uc0ac\uc6a9\uc744 \uc704\ud574\uc11c \ub178\ud2b8\ubd81 \uc11c\ubc84\ub97c \uc911\ub2e8(Stop)\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"\ub2e8, \uc774 \uacbd\uc6b0 \ub178\ud2b8\ubd81 \uc11c\ubc84 \uc0dd\uc131 \uc2dc Workspace Volume \ub610\ub294 Data Volume\uc73c\ub85c \uc9c0\uc815\ud574\ub193\uc740 \uacbd\ub85c \uc678\uc5d0 \uc800\uc7a5\ub41c \ub370\uc774\ud130\ub294 \ubaa8\ub450 \ucd08\uae30\ud654\ub418\ub294 \uac83\uc5d0 \uc8fc\uc758\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,r.kt)("br",{parentName:"p"}),"\n","\ub178\ud2b8\ubd81 \uc11c\ubc84 \uc0dd\uc131 \ub2f9\uc2dc \uacbd\ub85c\ub97c \ubcc0\uacbd\ud558\uc9c0 \uc54a\uc558\ub2e4\uba74, \ub514\ud3f4\ud2b8(Default) Workspace Volume\uc758 \uacbd\ub85c\ub294 \ub178\ud2b8\ubd81 \uc11c\ubc84 \ub0b4\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/jovyan")," \uc774\ubbc0\ub85c, ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/jovyan")," \uc758 \ud558\uc704 \uacbd\ub85c \uc774\uc678\uc758 \uacbd\ub85c\uc5d0 \uc800\uc7a5\ub41c \ub370\uc774\ud130\ub294 \ubaa8\ub450 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"STOP")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \ub178\ud2b8\ubd81 \uc11c\ubc84\uac00 \uc911\ub2e8\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"notebook-stop",src:a(1970).Z,width:"1832",height:"1014"})),(0,r.kt)("p",null,"\uc911\ub2e8\uc774 \uc644\ub8cc\ub418\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"CONNECT")," \ubc84\ud2bc\uc774 \ube44\ud65c\uc131\ud654\ub418\uba70, ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAY")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \ub2e4\uc2dc \uc815\uc0c1\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"notebook-restart",src:a(8586).Z,width:"1888",height:"932"})))}m.isMDXComponent=!0},4164:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-b349ef65d07ce46d18eb743995e83328.png"},2519:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/created-ea0c6e5b069a3bf68ec30dd2d9c8fda9.png"},8290:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/creating-fea15b81993043e41562213ce27be9c8.png"},7511:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/left-tabs-4290df638df45a698ebc615a5bcb5b86.png"},8666:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-notebook-f462329837ba1224dad0fdd5065aa161.png"},5675:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/notebook-access-04af482a0de3bf472671bb8106d2124d.png"},4831:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/notebook-console-57b91be5611c7bc685da1b29c792a45c.png"},1288:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/notebook-home-bc23928c112e027b46359aad251a8b69.png"},8586:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/notebook-restart-6550d536547af1c9e19f8ab05946ee9d.png"},1970:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/notebook-stop-bcc860736062b5cfb5831bab545dc60c.png"},4155:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/terminal-console-7fb950f9bf731144081feb0afb245bed.png"}}]);