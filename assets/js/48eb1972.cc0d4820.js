"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[7651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(p,".").concat(d)]||u[d]||k[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Why Docker & Kubernetes ?",description:"Introduction to Docker.",sidebar_position:2,contributors:["Jongseob Jeon","Jaeyeon Kim"]},o=void 0,l={unversionedId:"prerequisites/docker/introduction",id:"prerequisites/docker/introduction",title:"Why Docker & Kubernetes ?",description:"Introduction to Docker.",source:"@site/docs/prerequisites/docker/introduction.md",sourceDirName:"prerequisites/docker",slug:"/prerequisites/docker/introduction",permalink:"/docs/prerequisites/docker/introduction",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/prerequisites/docker/introduction.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162399,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:2,frontMatter:{title:"Why Docker & Kubernetes ?",description:"Introduction to Docker.",sidebar_position:2,contributors:["Jongseob Jeon","Jaeyeon Kim"]},sidebar:"preSidebar",previous:{title:"Install Docker",permalink:"/docs/prerequisites/docker/install"},next:{title:"What is Docker?",permalink:"/docs/prerequisites/docker/"}},p={},s=[{value:"Why Kubernetes ?",id:"why-kubernetes-",level:2},{value:"\ub3c4\ucee4\uc640 \ucfe0\ubc84\ub124\ud2f0\uc2a4",id:"\ub3c4\ucee4\uc640-\ucfe0\ubc84\ub124\ud2f0\uc2a4",level:2},{value:"\uae30\uc220 \uc774\ub984\uc774 \uc544\ub2c8\ub77c \uc81c\ud488 \uc774\ub984",id:"\uae30\uc220-\uc774\ub984\uc774-\uc544\ub2c8\ub77c-\uc81c\ud488-\uc774\ub984",level:3},{value:"\ub3c4\ucee4",id:"\ub3c4\ucee4",level:4},{value:"\ucfe0\ubc84\ub124\ud2f0\uc2a4",id:"\ucfe0\ubc84\ub124\ud2f0\uc2a4",level:4},{value:"<strong>\uc7ac\ubbf8\uc788\ub294 \uc624\ud508\uc18c\uc2a4 \uc5ed\uc0ac \uc774\uc57c\uae30</strong>",id:"\uc7ac\ubbf8\uc788\ub294-\uc624\ud508\uc18c\uc2a4-\uc5ed\uc0ac-\uc774\uc57c\uae30",level:3},{value:"\ucd08\uae30 \ub3c4\ucee4 &amp; \ucfe0\ubc84\ub124\ud2f0\uc2a4",id:"\ucd08\uae30-\ub3c4\ucee4--\ucfe0\ubc84\ub124\ud2f0\uc2a4",level:4},{value:"Open Container Initiative",id:"open-container-initiative",level:4},{value:"CRI-O",id:"cri-o",level:4},{value:"\uc9c0\uae08\uc758 \ub3c4\ucee4 &amp; \ucfe0\ubc84\ub124\ud2f0\uc2a4",id:"\uc9c0\uae08\uc758-\ub3c4\ucee4--\ucfe0\ubc84\ub124\ud2f0\uc2a4",level:4},{value:"References",id:"references",level:3}],c={toc:s},u="wrapper";function k(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"why-kubernetes-"},"Why Kubernetes ?"),(0,a.kt)("p",null,"\uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378\uc744 \uc11c\ube44\uc2a4\ud654\ud558\uae30 \uc704\ud574\uc11c\ub294 \ubaa8\ub378 \uac1c\ubc1c \uc678\uc5d0\ub3c4 \ub9ce\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ubd80\uac00\uc801\uc778")," \uae30\ub2a5\ub4e4\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ud559\uc2b5 \ub2e8\uacc4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ub378 \ud559\uc2b5 \uba85\ub839\uc758 \uc2a4\ucf00\uc904 \uad00\ub9ac"),(0,a.kt)("li",{parentName:"ul"},"\ud559\uc2b5\ub41c \ubaa8\ub378\uc758 Reproducibility \ubcf4\uc7a5"))),(0,a.kt)("li",{parentName:"ol"},"\ubc30\ud3ec \ub2e8\uacc4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud2b8\ub798\ud53d \ubd84\uc0b0"),(0,a.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4 \uc7a5\uc560 \ubaa8\ub2c8\ud130\ub9c1"),(0,a.kt)("li",{parentName:"ul"},"\uc7a5\uc560 \uc2dc \ud2b8\ub7ec\ube14\uc288\ud305")))),(0,a.kt)("p",null,"\ub2e4\ud589\ud788\ub3c4 \uc774\ub7f0 \uae30\ub2a5\ub4e4\uc5d0 \ub300\ud55c needs\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \ucabd\uc5d0\uc11c \uc774\ubbf8 \ub9ce\uc740 \uace0\ubbfc\uc744 \uac70\uccd0 \ubc1c\uc804\ub418\uc5b4 \uc654\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub530\ub77c\uc11c \uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378\uc744 \ubc30\ud3ec\ud560 \ub54c\ub3c4 \uc774\ub7f0 \uace0\ubbfc\uc758 \uacb0\uacfc\ubb3c\ub4e4\uc744 \ud65c\uc6a9\ud558\uba74 \ud070 \ub3c4\uc6c0\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nMLOps\uc5d0\uc11c \ub300\ud45c\uc801\uc73c\ub85c \ud65c\uc6a9\ud558\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc81c\ud488\uc774 \ubc14\ub85c \ub3c4\ucee4\uc640 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ub3c4\ucee4\uc640-\ucfe0\ubc84\ub124\ud2f0\uc2a4"},"\ub3c4\ucee4\uc640 \ucfe0\ubc84\ub124\ud2f0\uc2a4"),(0,a.kt)("h3",{id:"\uae30\uc220-\uc774\ub984\uc774-\uc544\ub2c8\ub77c-\uc81c\ud488-\uc774\ub984"},"\uae30\uc220 \uc774\ub984\uc774 \uc544\ub2c8\ub77c \uc81c\ud488 \uc774\ub984"),(0,a.kt)("p",null,"\ub3c4\ucee4\uc640 \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub294 \uac01\uac01 \ucee8\ud14c\uc774\ub108\ub77c\uc774\uc81c\uc774\uc158(Containerization) \uae30\ub2a5\uacfc \ucee8\ud14c\uc774\ub108 \uc624\ucf00\uc2a4\ud2b8\ub808\uc774\uc158(Container Orchestration) \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\ub294 \ub300\ud45c \uc18c\ud504\ud2b8\uc6e8\uc5b4(\uc81c\ud488)\uc785\ub2c8\ub2e4."),(0,a.kt)("h4",{id:"\ub3c4\ucee4"},"\ub3c4\ucee4"),(0,a.kt)("p",null,"\ub3c4\ucee4\ub294 \uacfc\uac70\uc5d0 \ub300\uc138\uc600\uc9c0\ub9cc \uc720\ub8cc\ud654 \uad00\ub828 \uc815\ucc45\ub4e4\uc744 \ud558\ub098\uc529 \ucd94\uac00\ud558\uba74\uc11c \uc810\uc810 \uc0ac\uc6a9 \ube48\ub3c4\uac00 \ud558\ub77d\uc138\uc785\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc 2022\ub144 3\uc6d4 \uae30\uc900\uc73c\ub85c \uc544\uc9c1\uae4c\uc9c0\ub3c4 \uac00\uc7a5 \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 \ucee8\ud14c\uc774\ub108 \uac00\uc0c1\ud654 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sysdig-2019.png",src:n(2235).Z,width:"1600",height:"900"})),(0,a.kt)("center",null," [from sysdig 2019] "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sysdig-2021.png",src:n(1256).Z,width:"750",height:"437"})),(0,a.kt)("center",null," [from sysdig 2021]  "),(0,a.kt)("h4",{id:"\ucfe0\ubc84\ub124\ud2f0\uc2a4"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4"),(0,a.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\ub294 \uc9c0\uae08\uae4c\uc9c0\ub294 \ube44\uad50 \ub300\uc0c1\uc870\ucc28 \uac70\uc758 \uc5c6\ub294 \uc81c\ud488\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cncf-survey.png",src:n(6640).Z,width:"2048",height:"1317"})),(0,a.kt)("center",null," [from cncf survey] "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"t4-ai.png",src:n(2044).Z,width:"926",height:"629"})),(0,a.kt)("center",null," [from t4.ai]  "),(0,a.kt)("h3",{id:"\uc7ac\ubbf8\uc788\ub294-\uc624\ud508\uc18c\uc2a4-\uc5ed\uc0ac-\uc774\uc57c\uae30"},(0,a.kt)("strong",{parentName:"h3"},"\uc7ac\ubbf8\uc788\ub294 \uc624\ud508\uc18c\uc2a4 \uc5ed\uc0ac \uc774\uc57c\uae30")),(0,a.kt)("h4",{id:"\ucd08\uae30-\ub3c4\ucee4--\ucfe0\ubc84\ub124\ud2f0\uc2a4"},"\ucd08\uae30 \ub3c4\ucee4 & \ucfe0\ubc84\ub124\ud2f0\uc2a4"),(0,a.kt)("p",null,"\ucd08\uae30 \ub3c4\ucee4 \uac1c\ubc1c\uc2dc\uc5d0\ub294 Docker Engine\uc774\ub77c\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\ud558\ub098\uc758 \ud328\ud0a4\uc9c0"),"\uc5d0 API, CLI, \ub124\ud2b8\uc6cc\ud06c, \uc2a4\ud1a0\ub9ac\uc9c0 \ub4f1 \uc5ec\ub7ec \uae30\ub2a5\ub4e4\uc744 \ubaa8\ub450 \ud3ec\ud568\ud588\uc73c\ub098, ",(0,a.kt)("strong",{parentName:"p"},"MSA")," \uc758 \ucca0\ud559\uc744 \ub2f4\uc544 ",(0,a.kt)("strong",{parentName:"p"},"\ud558\ub098\uc529 \ubd84\ub9ac"),"\ud558\uae30 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud558\uc9c0\ub9cc \ucd08\uae30\uc758 \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub294 \ucee8\ud14c\uc774\ub108 \uac00\uc0c1\ud654\ub97c \uc704\ud574 Docker Engine\uc744 \ub0b4\uc7a5\ud558\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub530\ub77c\uc11c \ub3c4\ucee4 \ubc84\uc804\uc774 \uc5c5\ub370\uc774\ud2b8\ub420 \ub54c\ub9c8\ub2e4 Docker Engine \uc758 \uc778\ud130\ud398\uc774\uc2a4\uac00 \ubcc0\uacbd\ub418\uc5b4 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c \ud06c\uac8c \uc601\ud5a5\uc744 \ubc1b\ub294 \uc77c\uc774 \uacc4\uc18d\ud574\uc11c \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h4",{id:"open-container-initiative"},"Open Container Initiative"),(0,a.kt)("p",null,"\uadf8\ub798\uc11c ",(0,a.kt)("strong",{parentName:"p"},"\uc774\ub7f0 \ubd88\ud3b8\ud568\uc744 \ud574\uc18c"),"\ud558\uace0\uc790, \ub3c4\ucee4\ub97c \uc911\uc2ec\uc73c\ub85c \uad6c\uae00 \ub4f1 \ucee8\ud14c\uc774\ub108 \uae30\uc220\uc5d0 \uad00\uc2ec\uc788\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\uc5ec\ub7ec \uc9d1\ub2e8"),"\ub4e4\uc774 \ud55c\ub370 \ubaa8\uc5ec ",(0,a.kt)("strong",{parentName:"p"},"Open Container Initiative,")," \uc774\ud558 ",(0,a.kt)("strong",{parentName:"p"},"OCI"),"\ub77c\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud558\uc5ec \ucee8\ud14c\uc774\ub108\uc5d0 \uad00\ud55c ",(0,a.kt)("strong",{parentName:"p"},"\ud45c\uc900"),"\uc744 \uc815\ud558\ub294 \uc77c\ub4e4\uc744 \uc2dc\uc791\ud558\uc600\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub3c4\ucee4\uc5d0\uc11c\ub3c4 \uc778\ud130\ud398\uc774\uc2a4\ub97c ",(0,a.kt)("strong",{parentName:"p"},"\ud55c \ubc88 \ub354 \ubd84\ub9ac"),"\ud574\uc11c, OCI \ud45c\uc900\uc744 \uc900\uc218\ud558\ub294 ",(0,a.kt)("strong",{parentName:"p"},"containerd"),"\ub77c\ub294 Container Runtime \ub97c \uac1c\ubc1c\ud558\uace0, ",(0,a.kt)("strong",{parentName:"p"},"dockerd")," \uac00 containerd \uc758 API \ub97c \ud638\ucd9c\ud558\ub3c4\ub85d \ucd94\uc0c1\ud654 \ub808\uc774\uc5b4\ub97c \ucd94\uac00\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub7ec\ud55c \ud750\ub984\uc5d0 \ub9de\ucd94\uc5b4\uc11c \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c\ub3c4 \uc774\uc81c\ubd80\ud130\ub294 \ub3c4\ucee4\ub9cc\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uace0, ",(0,a.kt)("strong",{parentName:"p"},"OCI \ud45c\uc900\uc744")," \uc900\uc218\ud558\uace0, \uc815\ud574\uc9c4 \uc2a4\ud399\uc744 \uc9c0\ud0a4\ub294 \ucee8\ud14c\uc774\ub108 \ub7f0\ud0c0\uc784\uc740 \ubb34\uc5c7\uc774\ub4e0 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d, Container Runtime Interface, \uc774\ud558 ",(0,a.kt)("strong",{parentName:"p"},"CRI \uc2a4\ud399"),"\uc744 \ubc84\uc804 1.5\ubd80\ud130 \uc81c\uacf5\ud558\uae30 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h4",{id:"cri-o"},"CRI-O"),(0,a.kt)("p",null,"Red Hat, Intel, SUSE, IBM\uc5d0\uc11c ",(0,a.kt)("strong",{parentName:"p"},"OCI \ud45c\uc900+CRI \uc2a4\ud399\uc744")," \ub530\ub77c Kubernetes \uc804\uc6a9 Container Runtime \uc744 \ubaa9\uc801\uc73c\ub85c \uac1c\ubc1c\ud55c \ucee8\ud14c\uc774\ub108 \ub7f0\ud0c0\uc784\uc785\ub2c8\ub2e4."),(0,a.kt)("h4",{id:"\uc9c0\uae08\uc758-\ub3c4\ucee4--\ucfe0\ubc84\ub124\ud2f0\uc2a4"},"\uc9c0\uae08\uc758 \ub3c4\ucee4 & \ucfe0\ubc84\ub124\ud2f0\uc2a4"),(0,a.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\ub294 Docker Engine \uc744 \ub514\ud3f4\ud2b8 \ucee8\ud14c\uc774\ub108 \ub7f0\ud0c0\uc784\uc73c\ub85c \uc0ac\uc6a9\ud574\uc654\uc9c0\ub9cc, \ub3c4\ucee4\uc758 API \uac00 ",(0,a.kt)("strong",{parentName:"p"},"CRI")," \uc2a4\ud399\uc5d0 \ub9de\uc9c0 \uc54a\uc544(",(0,a.kt)("em",{parentName:"p"},"OCI \ub294 \ub530\ub984"),") \ub3c4\ucee4\uc758 API\ub97c ",(0,a.kt)("strong",{parentName:"p"},"CRI"),"\uc640 \ud638\ud658\ub418\uac8c \ubc14\uafd4\uc8fc\ub294 ",(0,a.kt)("strong",{parentName:"p"},"dockershim"),"\uc744 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc790\uccb4\uc801\uc73c\ub85c \uac1c\ubc1c \ubc0f \uc9c0\uc6d0\ud574\uc654\uc5c8\ub294\ub370,(",(0,a.kt)("em",{parentName:"p"},"\ub3c4\ucee4 \uce21\uc774 \uc544\ub2c8\ub77c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uce21\uc5d0\uc11c \uc9c0\uc6d0\ud588\ub2e4\ub294 \uc810\uc774 \uad49\uc7a5\ud788 \ud070 \uc9d0\uc774\uc5c8\uc2b5\ub2c8\ub2e4."),") \uc774\uac78 \ucfe0\ubc84\ub124\ud2f0\uc2a4 ",(0,a.kt)("strong",{parentName:"p"},"v1.20 \ubd80\ud130\ub294 Deprecated\ud558\uace0,")," ",(0,a.kt)("strong",{parentName:"p"},"v1.23 \ubd80\ud130\ub294 \uc9c0\uc6d0\uc744 \ud3ec\uae30"),"\ud558\uae30\ub85c \uacb0\uc815\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"v1.23 \uc740 2021 \ub144 12\uc6d4 \ub9b4\ub9ac\uc988")),(0,a.kt)("p",null,"\uadf8\ub798\uc11c \ucfe0\ubc84\ub124\ud2f0\uc2a4 v1.23 \ubd80\ud130\ub294 \ub3c4\ucee4\ub97c native \ud558\uac8c \uc4f8 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uadf8\ub807\uc9c0\ub9cc ",(0,a.kt)("strong",{parentName:"p"},"\uc0ac\uc6a9\uc790\ub4e4\uc740 \uc774\ub7f0 \ubcc0\ud654\uc5d0 \ud06c\uac8c \uad00\ub828\uc774 \uc788\uc9c4 \uc54a\uc2b5\ub2c8\ub2e4."),"\n\uc65c\ub0d0\ud558\uba74 Docker Engine\uc744 \ud1b5\ud574 \ub9cc\ub4e4\uc5b4\uc9c4 \ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub294 OCI \ud45c\uc900\uc744 \uc900\uc218\ud558\uae30 \ub54c\ubb38\uc5d0, \ucfe0\ubc84\ub124\ud2f0\uc2a4\uac00 \uc5b4\ub5a4 \ucee8\ud14c\uc774\ub108 \ub7f0\ud0c0\uc784\uc73c\ub85c \uc774\ub8e8\uc5b4\uc838\uc788\ub4e0 \uc0ac\uc6a9 \uac00\ub2a5\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.linkedin.com/pulse/containerd%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B4%EA%B3%A0-%EC%99%9C-%EC%A4%91%EC%9A%94%ED%95%A0%EA%B9%8C-sean-lee/?originalSubdomain=kr"},(0,a.kt)("em",{parentName:"a"},"https://www.linkedin.com/pulse/containerd\ub294-\ubb34\uc5c7\uc774\uace0-\uc65c-\uc911\uc694\ud560\uae4c-sean-lee/?originalSubdomain=kr"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2021/12/07/kubernetes-1-23-release-announcement/"},"https://kubernetes.io/blog/2021/12/07/kubernetes-1-23-release-announcement/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2020/12/02/dockershim-faq/"},"https://kubernetes.io/blog/2020/12/02/dockershim-faq/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/"},"https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/ko/blog/2020/12/02/dont-panic-kubernetes-and-docker/"},"https://kubernetes.io/ko/blog/2020/12/02/dont-panic-kubernetes-and-docker/"))))}k.isMDXComponent=!0},6640:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cncf-survey-53378aeae96c2069d60cbd72e31baa22.png"},2235:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sysdig-2019-a7a9178a83773e8126833287a7fb755c.png"},1256:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sysdig-2021-d575835a018c7b99ef06c932a46953a3.png"},2044:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/t4-ai-f055bc33fd1f8fd7b098b71508aac896.png"}}]);