"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[8425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},k=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(p,".").concat(u)]||d[u]||s[u]||l;return n?r.createElement(m,o(o({ref:t},k),{},{components:n})):r.createElement(m,o({ref:t},k))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={title:"[Practice] Docker Advanced",description:"Practice to use docker more advanced way.",sidebar_position:6,contributors:["Jongseob Jeon","Jaeyeon Kim"]},o=void 0,i={unversionedId:"prerequisites/docker/advanced",id:"prerequisites/docker/advanced",title:"[Practice] Docker Advanced",description:"Practice to use docker more advanced way.",source:"@site/docs/prerequisites/docker/advanced.md",sourceDirName:"prerequisites/docker",slug:"/prerequisites/docker/advanced",permalink:"/mlops-for-all.github.io/docs/prerequisites/docker/advanced",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/prerequisites/docker/advanced.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708161574,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:6,frontMatter:{title:"[Practice] Docker Advanced",description:"Practice to use docker more advanced way.",sidebar_position:6,contributors:["Jongseob Jeon","Jaeyeon Kim"]},sidebar:"preSidebar",previous:{title:"[Practice] Docker images",permalink:"/mlops-for-all.github.io/docs/prerequisites/docker/images"}},p={},c=[{value:"\ub3c4\ucee4 \uc774\ubbf8\uc9c0 \uc798 \ub9cc\ub4e4\uae30",id:"\ub3c4\ucee4-\uc774\ubbf8\uc9c0-\uc798-\ub9cc\ub4e4\uae30",level:2},{value:"\ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub97c \ub9cc\ub4e4 \ub54c \uace0\ub824\ud574\uc57c \ub420 \uc810",id:"\ub3c4\ucee4-\uc774\ubbf8\uc9c0\ub97c-\ub9cc\ub4e4-\ub54c-\uace0\ub824\ud574\uc57c-\ub420-\uc810",level:3},{value:"ENTRYPOINT vs CMD",id:"entrypoint-vs-cmd",level:3},{value:"Docker tag \uc774\ub984 \uc9d3\uae30",id:"docker-tag-\uc774\ub984-\uc9d3\uae30",level:3},{value:"ETC",id:"etc",level:3},{value:"docker run \uc758 \ub2e4\uc591\ud55c \uc635\uc158",id:"docker-run-\uc758-\ub2e4\uc591\ud55c-\uc635\uc158",level:2},{value:"docker run with volume",id:"docker-run-with-volume",level:3},{value:"Docker volume",id:"docker-volume",level:4},{value:"Bind mount",id:"bind-mount",level:4},{value:"How to use?",id:"how-to-use",level:4},{value:"docker run with resource limit",id:"docker-run-with-resource-limit",level:3},{value:"docker run with restart policy",id:"docker-run-with-restart-policy",level:3},{value:"docker run as a background process",id:"docker-run-as-a-background-process",level:3},{value:"First Practice",id:"first-practice",level:4},{value:"Second Practice",id:"second-practice",level:4},{value:"Third Practice",id:"third-practice",level:4},{value:"References",id:"references",level:2}],k={toc:c},d="wrapper";function s(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,r.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ub3c4\ucee4-\uc774\ubbf8\uc9c0-\uc798-\ub9cc\ub4e4\uae30"},"\ub3c4\ucee4 \uc774\ubbf8\uc9c0 \uc798 \ub9cc\ub4e4\uae30"),(0,a.kt)("h3",{id:"\ub3c4\ucee4-\uc774\ubbf8\uc9c0\ub97c-\ub9cc\ub4e4-\ub54c-\uace0\ub824\ud574\uc57c-\ub420-\uc810"},"\ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub97c \ub9cc\ub4e4 \ub54c \uace0\ub824\ud574\uc57c \ub420 \uc810"),(0,a.kt)("p",null,"Dockerfile \uc744 \ud65c\uc6a9\ud558\uc5ec \ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub97c \ub9cc\ub4e4 \ub54c\ub294 \uba85\ub839\uc5b4\uc758 ",(0,a.kt)("strong",{parentName:"p"},"\uc21c\uc11c"),"\uac00 \uc911\uc694\ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uadf8 \uc774\uc720\ub294 \ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub294 \uc5ec\ub7ec \uac1c\uc758 Read-Only Layer \ub85c \uad6c\uc131\ub418\uc5b4\uc788\uace0, \uc774\ubbf8\uc9c0\ub97c \ube4c\ub4dc\ud560 \ub54c \uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \ub808\uc774\uc5b4\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\uce90\uc2dc\ub418\uc5b4")," \uc7ac\uc0ac\uc6a9\ub418\uae30 \ub54c\ubb38\uc5d0, \uc774\ub97c \uc0dd\uac01\ud574\uc11c Dockerfile \uc744 \uad6c\uc131\ud55c\ub2e4\uba74 ",(0,a.kt)("strong",{parentName:"p"},"\ube4c\ub4dc \uc2dc\uac04\uc744 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"Dockerfile\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"RUN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY")," \uba85\ub839\uc5b4 \ud558\ub098\uac00 \ud558\ub098\uc758 \ub808\uc774\uc5b4\ub85c \uc800\uc7a5\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},"# Layer 1\nFROM ubuntu:latest\n\n# Layer 2\nRUN apt-get update && apt-get install python3 pip3 -y\n\n# Layer 3\nRUN pip3 install -U pip && pip3 install torch\n\n# Layer 4\nCOPY src/ src/\n\n# Layer 5\nCMD python src/app.py\n")),(0,a.kt)("p",null,"\uc704\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\ub85c \ube4c\ub4dc\ub41c \uc774\ubbf8\uc9c0\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run -it app:latest /bin/bash")," \uba85\ub839\uc5b4\ub85c \uc2e4\ud589\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ub808\uc774\uc5b4\ub85c \ud45c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"layers.png",src:n(6045).Z,width:"1080",height:"612"})),(0,a.kt)("p",null,"\ucd5c\uc0c1\ub2e8\uc758 R/W Layer \ub294 \uc774\ubbf8\uc9c0\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc989, \ucee8\ud14c\uc774\ub108 \ub0b4\ubd80\uc5d0\uc11c \uc791\uc5c5\ud55c \ub0b4\uc5ed\uc740 \ubaa8\ub450 \ud718\ubc1c\uc131\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud558\ub2e8\uc758 \ub808\uc774\uc5b4\uac00 \ubcc0\uacbd\ub418\uba74, \uadf8 \uc704\uc758 \ub808\uc774\uc5b4\ub294 \ubaa8\ub450 \uc0c8\ub85c \ube4c\ub4dc\ub429\ub2c8\ub2e4. \uadf8\ub798\uc11c Dockerfile \ub0b4\uc7a5 \uba85\ub839\uc5b4\uc758 \uc21c\uc11c\uac00 \uc911\uc694\ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc608\ub97c \ub4e4\uba74, ",(0,a.kt)("strong",{parentName:"p"},"\uc790\uc8fc \ubcc0\uacbd"),"\ub418\ub294 \ubd80\ubd84\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ucd5c\ub300\ud55c \ub4a4\ucabd\uc73c\ub85c")," \uc815\ub82c\ud558\ub294 \uac83\uc744 \ucd94\ucc9c\ud569\ub2c8\ub2e4. (ex. ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY src/ app/src/"),")"),(0,a.kt)("p",null,"\uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \ubc18\ub300\ub85c \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub294 \ubd80\ubd84\uc740 \ucd5c\ub300\ud55c \uc55e\ucabd\uc73c\ub85c \uc815\ub82c\ud558\ub294\uac8c \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub9cc\uc57d \uac70\uc758 ",(0,a.kt)("strong",{parentName:"p"},"\ubcc0\uacbd\ub418\uc9c0 \uc54a\uc9c0\ub9cc"),", \uc5ec\ub7ec \uacf3\uc5d0\uc11c ",(0,a.kt)("strong",{parentName:"p"},"\uc790\uc8fc")," \uc4f0\uc774\ub294 \ubd80\ubd84\uc744 \uacf5\ud1b5\ud654\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\n\ud574\ub2f9 \uacf5\ud1b5\ubd80\ubd84\ub9cc \ubb36\uc5b4\uc11c \ubcc4\ub3c4\uc758 \uc774\ubbf8\uc9c0\ub294 \ubbf8\ub9ac \ub9cc\ub4e4\uc5b4\ub454 \ub2e4\uc74c, ",(0,a.kt)("strong",{parentName:"p"},"\ubca0\uc774\uc2a4 \uc774\ubbf8\uc9c0")," \ub85c \ud65c\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, \ub2e4\ub978 \uac74 \uac70\uc758 \ub611\uac19\uc740\ub370, tensorflow-cpu \ub97c \uc0ac\uc6a9\ud558\ub294 \uc774\ubbf8\uc9c0\uc640, tensorflow-gpu \ub97c \uc0ac\uc6a9\ud558\ub294 \ud658\uacbd\uc744 \ubd84\ub9ac\ud574\uc11c \uc774\ubbf8\uc9c0\ub85c \ub9cc\ub4e4\uace0 \uc2f6\uc740 \uacbd\uc6b0\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","python \uacfc \uae30\ud0c0 \uae30\ubcf8\uc801\uc778 \ud328\ud0a4\uc9c0\uac00 \uc124\uce58\ub41c ",(0,a.kt)("a",{parentName:"p",href:"http://ghcr.io/makinarocks/python:3.8-base-cpu"},(0,a.kt)("inlineCode",{parentName:"a"},"ghcr.io/makinarocks/python:3.8-base"))," \ub97c \ub9cc\ub4e4\uc5b4\ub450\uace0, ",(0,a.kt)("strong",{parentName:"p"},"tensorflow cpu \ubc84\uc804\uacfc gpu \ubc84\uc804\uc774")," \uc124\uce58\ub41c \uc774\ubbf8\uc9c0 \uc0c8\ub85c \ub9cc\ub4e4\ub54c\ub294, \uc704\uc758 \uc774\ubbf8\uc9c0\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"FROM")," \uc73c\ub85c \ubd88\ub7ec\uc628 \ub2e4\uc74c, tensorflow install \ud558\ub294 \ubd80\ubd84\ub9cc \ubcc4\ub3c4\ub85c \uc791\uc131\ud574\uc11c Dockerfile \uc744 2 \uac1c\ub85c \uad00\ub9ac\ud55c\ub2e4\uba74 \uac00\ub3c5\uc131\ub3c4 \uc88b\uace0 \ube4c\ub4dc \uc2dc\uac04\ub3c4 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud569\uce60 \uc218 \uc788\ub294 Layer \ub294 \ud569\uce58\ub294 \uac83"),"\uc774 Old version \uc758 \ub3c4\ucee4\uc5d0\uc11c\ub294 \uc131\ub2a5 \ud5a5\uc0c1 \ud6a8\uacfc\ub97c \uc774\ub04c\uc5c8\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\uac00 \uc5b4\ub5a4 \ub3c4\ucee4 \ubc84\uc804\uc5d0\uc11c \uc2e4\ud589\ub420 \uac83\uc778\uc9c0 \ubcf4\uc7a5\ud560 \uc218 \uc5c6\uc73c\uba70, ",(0,a.kt)("strong",{parentName:"p"},"\uac00\ub3c5\uc131"),"\uc744 \uc704\ud574\uc11c\ub3c4 \ud569\uce60 \uc218 \uc788\ub294 Layer \ub294 \uc801\uc808\ud788 \ud569\uce58\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uba74, \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ub41c ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},"# Bad Case\nRUN apt-get update\nRUN apt-get install build-essential -y\nRUN apt-get install curl -y\nRUN apt-get install jq -y\nRUN apt-get install git -y\n")),(0,a.kt)("p",null,"\uc774\ub97c \uc544\ub798\uc640 \uac19\uc774 \ud569\uccd0\uc11c \uc801\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},"# Better Case\nRUN apt-get update && \\\n    apt-get install -y \\\n    build-essential \\\n    curl \\\n    jq \\\n    git\n")),(0,a.kt)("p",null,"\ud3b8\uc758\ub97c \uc704\ud574\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},".dockerignore")," \ub3c4 \uc0ac\uc6a9\ud558\ub294\uac8c \uc88b\uc2b5\ub2c8\ub2e4.\n",(0,a.kt)("inlineCode",{parentName:"p"},".dockerignore"),"\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," \uc640 \ube44\uc2b7\ud55c \uc5ed\ud560\uc744 \ud55c\ub2e4\uace0 \uc774\ud574\ud558\uba74 \ub429\ub2c8\ub2e4. (git add \ud560 \ub54c \uc81c\uc678\ud560 \uc218 \uc788\ub4ef\uc774, docker build \ud560 \ub54c \uc790\ub3d9\uc73c\ub85c \uc81c\uc678)"),(0,a.kt)("p",null,"\ub354 \ub9ce\uc740 \uc815\ubcf4\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/"},"Docker \uacf5\uc2dd \ubb38\uc11c"),"\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"entrypoint-vs-cmd"},"ENTRYPOINT vs CMD"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," \uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"CMD")," \ub294 \ubaa8\ub450 \ucee8\ud14c\uc774\ub108\uc758 \uc2e4\ud589 \uc2dc\uc810\uc5d0\uc11c \uc5b4\ub5a4 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\uc2dc\ud0a4\uace0 \uc2f6\uc744 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 \uc774 \ub458 \uc911 \ud558\ub098\ub294 \ubc18\ub4dc\uc2dc \uc874\uc7ac\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ucc28\uc774\uc810"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CMD"),": docker run \uc744 \uc218\ud589\ud560 \ub54c, \uc27d\uac8c \ubcc0\uacbd\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"--entrypoint"),"  \ub97c \uc0ac\uc6a9\ud574\uc57c \ubcc0\uacbd\ud560 \uc218 \uc788\uc74c")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," \uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"CMD")," \uac00 \ud568\uaed8 \uc4f0\uc77c \ub54c\ub294 \ubcf4\ud1b5 ",(0,a.kt)("inlineCode",{parentName:"p"},"CMD"),"\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," \uc5d0\uc11c \uc801\uc740 \uba85\ub839\uc758 arguments(parameters) \ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},'FROM ubuntu:latest\n\n# \uc544\ub798 4 \uac00\uc9c0 option \uc744 \ubc14\uafd4\uac00\uba70 \uc9c1\uc811 \ud14c\uc2a4\ud2b8\ud574\ubcf4\uc2dc\uba74 \uc774\ud574\ud558\uae30 \ud3b8\ud569\ub2c8\ub2e4.\n# \ub2e8, NO ENTRYPOINT \uc635\uc158\uc740 base image \uc778 ubuntu:latest \uc5d0 \uc774\ubbf8 \uc788\uc5b4\uc11c \ud14c\uc2a4\ud2b8\ud574\ubcfc \uc218\ub294 \uc5c6\uace0 \ub098\uba38\uc9c0 v2, 3, 5, 6, 8, 9, 11, 12 \ub97c \ud14c\uc2a4\ud2b8\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n# ENTRYPOINT echo "Hello ENTRYPOINT"\n# ENTRYPOINT ["echo", "Hello ENTRYPOINT"]\n# CMD echo "Hello CMD"\n# CMD ["echo", "Hello CMD"]\n')),(0,a.kt)("p",null,"\uc704\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\uc5d0\uc11c \uc8fc\uc11d\uc73c\ub85c \ud45c\uc2dc\ub41c \ubd80\ubd84\ub4e4\uc744 \ud574\uc81c\ud558\uba70 \ube4c\ub4dc\ud558\uace0 \uc2e4\ud589\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uacb0\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"No ENTRYPOINT"),(0,a.kt)("th",{parentName:"tr",align:null},"ENTRYPOINT a b"),(0,a.kt)("th",{parentName:"tr",align:null},"ENTRYPOINT ",'["a", "b"]'))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"NO CMD")),(0,a.kt)("td",{parentName:"tr",align:null},"Error!"),(0,a.kt)("td",{parentName:"tr",align:null},"/bin/sh -c a b"),(0,a.kt)("td",{parentName:"tr",align:null},"a b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"CMD ",'["x", "y"]')),(0,a.kt)("td",{parentName:"tr",align:null},"x y"),(0,a.kt)("td",{parentName:"tr",align:null},"/bin/sh -c a b"),(0,a.kt)("td",{parentName:"tr",align:null},"a b x y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"CMD x y")),(0,a.kt)("td",{parentName:"tr",align:null},"/bin/sh -c x y"),(0,a.kt)("td",{parentName:"tr",align:null},"/bin/sh -c a b"),(0,a.kt)("td",{parentName:"tr",align:null},"a b /bin/sh -c x y")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In Kubernetes pod",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT")," \u2192 command"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CMD")," \u2192 args")))),(0,a.kt)("h3",{id:"docker-tag-\uc774\ub984-\uc9d3\uae30"},"Docker tag \uc774\ub984 \uc9d3\uae30"),(0,a.kt)("p",null,"\ub3c4\ucee4 \uc774\ubbf8\uc9c0\uc758 tag \ub85c ",(0,a.kt)("strong",{parentName:"p"},"latest \ub294 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uac83\uc744 \uad8c\uc7a5"),"\ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc774\uc720\ub294 latest \ub294 default tag name \uc774\ubbc0\ub85c ",(0,a.kt)("strong",{parentName:"p"},"\uc758\ub3c4\uce58 \uc54a\uac8c overwritten")," \ub418\ub294 \uacbd\uc6b0\uac00 \ub108\ubb34 \ub9ce\uc774 \ubc1c\uc0dd\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud558\ub098\uc758 \uc774\ubbf8\uc9c0\ub294 \ud558\ub098\uc758 \ud0dc\uadf8\ub97c \uac00\uc9d0(",(0,a.kt)("strong",{parentName:"p"},"uniqueness"),")\uc744 \ubcf4\uc7a5\ud574\uc57c \ucd94\ud6c4 Production \ub2e8\uacc4\uc5d0\uc11c ",(0,a.kt)("strong",{parentName:"p"},"\ud611\uc5c5/\ub514\ubc84\uae45"),"\uc5d0 \uc6a9\uc774\ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub0b4\uc6a9\uc740 \ub2e4\ub974\uc9c0\ub9cc, \ub3d9\uc77c\ud55c tag \ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uba74 \ucd94\ud6c4 dangling image \ub85c \ucde8\uae09\ub418\uc5b4 \uad00\ub9ac\ud558\uae30 \uc5b4\ub824\uc6cc\uc9d1\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","dangling image\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker images"),"\uc5d0\ub294 \ub098\uc624\uc9c0 \uc54a\uc9c0\ub9cc \uacc4\uc18d\ud574\uc11c \uc800\uc7a5\uc18c\ub97c \ucc28\uc9c0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"etc"},"ETC"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"log \ub4f1\uc758 \uc815\ubcf4\ub294 container \ub0b4\ubd80\uac00 \uc544\ub2cc \uacf3\uc5d0 \ub530\ub85c \uc800\uc7a5\ud569\ub2c8\ub2e4.\ncontainer \ub0b4\ubd80\uc5d0\uc11c write \ud55c data \ub294 \uc5b8\uc81c\ub4e0\uc9c0 \uc0ac\ub77c\uc9c8 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"secret \ud55c \uc815\ubcf4, \ud658\uacbd(dev/prod) dependent \ud55c \uc815\ubcf4 \ub4f1\uc740 Dockerfile \uc5d0 \uc9c1\uc811 \uc801\ub294 \uac8c \uc544\ub2c8\ub77c, env var \ub610\ub294 .env config file \uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"Dockerfile ",(0,a.kt)("strong",{parentName:"li"},"linter")," \ub3c4 \uc874\uc7ac\ud558\ubbc0\ub85c, \ud611\uc5c5 \uc2dc\uc5d0\ub294 \ud65c\uc6a9\ud558\uba74 \uc88b\uc2b5\ub2c8\ub2e4.\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/hadolint/hadolint"},"https://github.com/hadolint/hadolint"))),(0,a.kt)("h2",{id:"docker-run-\uc758-\ub2e4\uc591\ud55c-\uc635\uc158"},"docker run \uc758 \ub2e4\uc591\ud55c \uc635\uc158"),(0,a.kt)("h3",{id:"docker-run-with-volume"},"docker run with volume"),(0,a.kt)("p",null,"Docker container \uc0ac\uc6a9 \uc2dc \ubd88\ud3b8\ud55c \uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.\n\ubc14\ub85c Docker\ub294 \uae30\ubcf8\uc801\uc73c\ub85c Docker ",(0,a.kt)("strong",{parentName:"p"},"container \ub0b4\ubd80\uc5d0\uc11c \uc791\uc5c5\ud55c \ubaa8\ub4e0 \uc0ac\ud56d\uc740 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),"\n\uc774\uc720\ub294 Docker container \ub294 \uac01\uac01 \uaca9\ub9ac\ub41c \ud30c\uc77c\uc2dc\uc2a4\ud15c\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c, ",(0,a.kt)("strong",{parentName:"p"},"\uc5ec\ub7ec docker container \ub07c\ub9ac \ub370\uc774\ud130\ub97c \uacf5\uc720\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c Docker\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ubc29\uc2dd\uc740 ",(0,a.kt)("strong",{parentName:"p"},"2 \uac00\uc9c0"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"storage.png",src:n(5940).Z,width:"501",height:"255"})),(0,a.kt)("h4",{id:"docker-volume"},"Docker volume"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"docker cli \ub97c \uc0ac\uc6a9\ud574 ",(0,a.kt)("inlineCode",{parentName:"li"},"volume")," \uc774\ub77c\ub294 \ub9ac\uc18c\uc2a4\ub97c \uc9c1\uc811 \uad00\ub9ac"),(0,a.kt)("li",{parentName:"ul"},"host \uc5d0\uc11c Docker area(",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/docker"),") \uc544\ub798\uc5d0 \ud2b9\uc815 \ub514\ub809\ud1a0\ub9ac\ub97c \uc0dd\uc131\ud55c \ub2e4\uc74c, \ud574\ub2f9 \uacbd\ub85c\ub97c docker container \uc5d0 mount")),(0,a.kt)("h4",{id:"bind-mount"},"Bind mount"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"host \uc758 \ud2b9\uc815 \uacbd\ub85c\ub97c docker container \uc5d0 mount")),(0,a.kt)("h4",{id:"how-to-use"},"How to use?"),(0,a.kt)("p",null,"\uc0ac\uc6a9 \ubc29\uc2dd\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ub3d9\uc77c\ud55c \uc778\ud130\ud398\uc774\uc2a4"),"\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"-v")," \uc635\uc158\uc744 \ud1b5\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub2e4\ub9cc, volume \uc744 \uc0ac\uc6a9\ud560 \ub54c\uc5d0\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker volume create"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"docker volume ls"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"docker volume rm")," \ub4f1\uc744 \uc218\ud589\ud558\uc5ec \uc9c1\uc811 \uad00\ub9ac\ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Docker volume"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n    -v my_volume:/app \\\n    nginx:latest\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Blind mount"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n    -v /home/user/some/path:/app \\\n    nginx:latest\n")))),(0,a.kt)("p",null,"\ub85c\uceec\uc5d0\uc11c \uac1c\ubc1c\ud560 \ub54c\ub294 bind mount \uac00 \ud3b8\ud558\uae34 \ud558\uc9c0\ub9cc, \ud658\uacbd\uc744 \uae54\ub054\ud558\uac8c \uc720\uc9c0\ud558\uace0 \uc2f6\ub2e4\uba74 docker volume \uc744 \uc0ac\uc6a9\ud558\uc5ec create, rm \uc744 \uba85\uc2dc\uc801\uc73c\ub85c \uc218\ud589\ud558\ub294 \uac83\ub3c4 \ud558\ub098\uc758 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc81c\uacf5\ud558\ub294 \ubc29\uc2dd\ub3c4 \uacb0\uad6d docker \uc758 bind mount \ub97c \ud65c\uc6a9\ud558\uc5ec \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"docker-run-with-resource-limit"},"docker run with resource limit"),(0,a.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c docker container \ub294 ",(0,a.kt)("strong",{parentName:"p"},"host OS \uc758 cpu, memory \uc790\uc6d0\uc744 fully \uc0ac\uc6a9"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774\ub807\uac8c \uc0ac\uc6a9\ud558\uac8c \ub418\uba74 host OS \uc758 \uc790\uc6d0 \uc0c1\ud669\uc5d0 \ub530\ub77c\uc11c ",(0,a.kt)("strong",{parentName:"p"},"OOM")," \ub4f1\uc758 \uc774\uc288\ub85c docker container \uac00 \ube44\uc815\uc0c1\uc801\uc73c\ub85c \uc885\ub8cc\ub418\ub294 \uc0c1\ud669\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc774\ub7f0 \ubb38\uc81c\ub97c \ub2e4\ub8e8\uae30 \uc704\ud574 ",(0,a.kt)("strong",{parentName:"p"},"docker container \uc2e4\ud589 \uc2dc, cpu \uc640 memory \uc758 \uc0ac\uc6a9\ub7c9 \uc81c\ud55c"),"\uc744 \uac78 \uc218 \uc788\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"-m")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/resource_constraints/#limit-a-containers-access-to-memory"},"\uc635\uc158"),"\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -m 512m --memory-reservation=256m --name 512-limit ubuntu sleep 3600\ndocker run -d -m 1g --memory-reservation=256m --name 1g-limit ubuntu sleep 3600\n")),(0,a.kt)("p",null,"\uc704\uc758 \ub3c4\ucee4\ub97c \uc2e4\ud589 \ud6c4 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker stats")," \ucee4\ub9e8\ub4dc\ub97c \ud1b5\ud574 \uc0ac\uc6a9\ub7c9\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"CONTAINER ID   NAME        CPU %     MEM USAGE / LIMIT   MEM %     NET I/O       BLOCK I/O   PIDS\n4ea1258e2e09   1g-limit    0.00%     300KiB / 1GiB       0.03%     1kB / 0B      0B / 0B     1\n4edf94b9a3e5   512-limit   0.00%     296KiB / 512MiB     0.06%     1.11kB / 0B   0B / 0B     1\n")),(0,a.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c pod \ub77c\ub294 \ub9ac\uc18c\uc2a4\uc5d0 cpu, memory \uc81c\ud55c\uc744 \uc904 \ub54c, \uc774 \ubc29\uc2dd\uc744 \ud65c\uc6a9\ud558\uc5ec \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"docker-run-with-restart-policy"},"docker run with restart policy"),(0,a.kt)("p",null,"\ud2b9\uc815 \ucee8\ud14c\uc774\ub108\uac00 \uacc4\uc18d\ud574\uc11c running \uc0c1\ud0dc\ub97c \uc720\uc9c0\uc2dc\ucf1c\uc57c \ud558\ub294 \uacbd\uc6b0\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4. \uc774\ub7f0 \uacbd\uc6b0\ub97c \uc704\ud574\uc11c \ud574\ub2f9 \ucee8\ud14c\uc774\ub108\uac00 \uc885\ub8cc\ub418\uc790\ub9c8\uc790 \ubc14\ub85c \uc7ac\uc0dd\uc131\uc744 \uc2dc\ub3c4\ud560 \uc218 \uc788\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"--restart=always")," \uc635\uc158\uc744 \uc81c\uacf5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc635\uc158 \uc785\ub825 \ud6c4 \ub3c4\ucee4\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --restart=always ubuntu\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"watch -n1 docker ps"),"\ub97c \ud1b5\ud574 \uc7ac\uc2e4\ud589\uc774 \ub418\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.\n\uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub418\uace0 \uc788\ub2e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 STATUS\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Restarting (0)")," \uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE     COMMAND   CREATED          STATUS                         PORTS     NAMES\na911850276e8   ubuntu    "bash"    35 seconds ago   Restarting (0) 6 seconds ago             hungry_vaughan\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/run/#restart-policies---restart"},"https://docs.docker.com/engine/reference/commandline/run/#restart-policies---restart"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"on-failure with max retries"),(0,a.kt)("li",{parentName:"ul"},"always \ub4f1\uc758 \uc120\ud0dd\uc9c0 \uc81c\uacf5")))),(0,a.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c job \uc774\ub77c\ub294 resource \uc758 restart \uc635\uc158\uc744 \uc904 \ub54c, \uc774 \ubc29\uc2dd\uc744 \ud65c\uc6a9\ud558\uc5ec \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"docker-run-as-a-background-process"},"docker run as a background process"),(0,a.kt)("p",null,"\ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\ub97c \uc2e4\ud589\ud560 \ub54c\ub294 \uae30\ubcf8\uc801\uc73c\ub85c foreground process \ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc989, \ucee8\ud14c\uc774\ub108\ub97c \uc2e4\ud589\ud55c \ud130\ubbf8\ub110\uc774 \ud574\ub2f9 \ucee8\ud14c\uc774\ub108\uc5d0 \uc790\ub3d9\uc73c\ub85c attach \ub418\uc5b4 \uc788\uc5b4, \ub2e4\ub978 \uba85\ub839\uc744 \uc2e4\ud589\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uc608\uc2dc\ub97c \uc218\ud589\ud574\ubd05\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc6b0\uc120 \ud130\ubbf8\ub110 2 \uac1c\ub97c \uc5f4\uc5b4, \ud558\ub098\uc758 \ud130\ubbf8\ub110\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps")," \ub97c \uc9c0\ucf1c\ubcf4\uace0, \ub2e4\ub978 \ud558\ub098\uc758 \ud130\ubbf8\ub110\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uba85\ub839\uc744 \ucc28\ub840\ub85c \uc2e4\ud589\ud574\ubcf4\uba70 \ub3d9\uc791\uc744 \uc9c0\ucf1c\ubd05\ub2c8\ub2e4."),(0,a.kt)("h4",{id:"first-practice"},"First Practice"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it ubuntu sleep 10\n")),(0,a.kt)("p",null,"10 \ucd08\ub3d9\uc548 \uba48\ucdb0 \uc788\uc5b4\uc57c \ud558\uace0, \ud574\ub2f9 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \ub2e4\ub978 \uba85\ub839\uc744 \uc218\ud589\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. 10\ucd08 \ub4a4\uc5d0\ub294 docker ps \uc5d0\uc11c container \uac00 \uc885\ub8cc\ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h4",{id:"second-practice"},"Second Practice"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it ubuntu sleep 10\n")),(0,a.kt)("p",null,"\uc774\ud6c4, ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl + p")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl + q")),(0,a.kt)("p",null,"\ud574\ub2f9 \ud130\ubbf8\ub110\uc5d0\uc11c \uc774\uc81c \ub2e4\ub978 \uba85\ub839\uc744 \uc218\ud589\ud560 \uc218 \uc788\uac8c \ub418\uc5c8\uc73c\uba70, docker ps \ub85c\ub3c4 10\ucd08\uae4c\uc9c0\ub294 \ud574\ub2f9 \ucee8\ud14c\uc774\ub108\uac00 \uc0b4\uc544\uc788\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ub807\uac8c docker container \ub0b4\ubd80\uc5d0\uc11c \ube60\uc838\ub098\uc628 \uc0c1\ud669\uc744 detached \ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4.\n\ub3c4\ucee4\uc5d0\uc11c\ub294 run \uc744 \uc2e4\ud589\ud568\uacfc \ub3d9\uc2dc\uc5d0 detached mode \ub85c \uc2e4\ud589\uc2dc\ud0ac \uc218 \uc788\ub294 \uc635\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,a.kt)("h4",{id:"third-practice"},"Third Practice"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d ubuntu sleep 10\n")),(0,a.kt)("p",null,"detached mode \uc774\ubbc0\ub85c \ud574\ub2f9 \uba85\ub839\uc744 \uc2e4\ud589\uc2dc\ud0a8 \ud130\ubbf8\ub110\uc5d0\uc11c \ub2e4\ub978 \uc561\uc158\uc744 \uc218\ud589\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc0c1\ud669\uc5d0 \ub530\ub77c detached mode \ub97c \uc801\uc808\ud788 \ud65c\uc6a9\ud558\uba74 \uc88b\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc608\ub97c \ub4e4\uc5b4, DB \uc640 \ud1b5\uc2e0\ud558\ub294 Backend API server \ub97c \uac1c\ubc1c\ud560 \ub54c Backend API server \ub294 source code \ub97c \ubcc0\uacbd\uc2dc\ucf1c\uac00\uba74\uc11c hot-loading \uc73c\ub85c \uacc4\uc18d\ud574\uc11c \ub85c\uadf8\ub97c \ud655\uc778\ud574\ubd10\uc57c \ud558\uc9c0\ub9cc, DB \ub294 \ub85c\uadf8\ub97c \uc9c0\ucf1c\ubcfc \ud544\uc694\ub294 \uc5c6\ub294 \uacbd\uc6b0\ub77c\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","DB \ub294 docker container \ub97c detached mode \ub85c \uc2e4\ud589\uc2dc\ud0a4\uace0, Backend API server \ub294 attached mode \ub85c log \ub97c following \ud558\uba74\uc11c \uc2e4\ud589\uc2dc\ud0a4\uba74 \ud6a8\uc728\uc801\uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://towardsdatascience.com/docker-storage-598e385f4efe"},"https://towardsdatascience.com/docker-storage-598e385f4efe")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vsupalov.com/docker-latest-tag/"},"https://vsupalov.com/docker-latest-tag/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/ko-kr/azure/container-registry/container-registry-image-tag-version"},"https://docs.microsoft.com/ko-kr/azure/container-registry/container-registry-image-tag-version")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stevelasker.blog/2018/03/01/docker-tagging-best-practices-for-tagging-and-versioning-docker-images/"},"https://stevelasker.blog/2018/03/01/docker-tagging-best-practices-for-tagging-and-versioning-docker-images/"))))}s.isMDXComponent=!0},6045:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/layers-d934a487c19f428867e8d460015e8747.png"},5940:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/storage-2d2649699364f46922716d1fe9b5470a.png"}}]);