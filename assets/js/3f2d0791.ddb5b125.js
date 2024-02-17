"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[5435],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},k=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,s=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return r?n.createElement(s,o(o({ref:t},k),{},{components:r})):n.createElement(s,o({ref:t},k))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={title:"[Practice] Docker images",description:"Practice to use docker image.",sidebar_position:5,contributors:["Jongseob Jeon","Jaeyeon Kim"]},o=void 0,i={unversionedId:"prerequisites/docker/images",id:"prerequisites/docker/images",title:"[Practice] Docker images",description:"Practice to use docker image.",source:"@site/docs/prerequisites/docker/images.md",sourceDirName:"prerequisites/docker",slug:"/prerequisites/docker/images",permalink:"/mlops-for-all.github.io/docs/prerequisites/docker/images",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/prerequisites/docker/images.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162146,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:5,frontMatter:{title:"[Practice] Docker images",description:"Practice to use docker image.",sidebar_position:5,contributors:["Jongseob Jeon","Jaeyeon Kim"]},sidebar:"preSidebar",previous:{title:"[Practice] Docker command",permalink:"/mlops-for-all.github.io/docs/prerequisites/docker/command"},next:{title:"[Practice] Docker Advanced",permalink:"/mlops-for-all.github.io/docs/prerequisites/docker/advanced"}},p={},c=[{value:"1. Dockerfile \ub9cc\ub4e4\uae30",id:"1-dockerfile-\ub9cc\ub4e4\uae30",level:2},{value:"2. Dockerfile \ub0b4\uc7a5 \uba85\ub839\uc5b4",id:"2-dockerfile-\ub0b4\uc7a5-\uba85\ub839\uc5b4",level:2},{value:"FROM",id:"from",level:3},{value:"COPY",id:"copy",level:3},{value:"RUN",id:"run",level:3},{value:"CMD",id:"cmd",level:3},{value:"WORKDIR",id:"workdir",level:3},{value:"ENV",id:"env",level:3},{value:"EXPOSE",id:"expose",level:3},{value:"3. \uac04\ub2e8\ud55c Dockerfile \uc791\uc131\ud574\ubcf4\uae30",id:"3-\uac04\ub2e8\ud55c-dockerfile-\uc791\uc131\ud574\ubcf4\uae30",level:2},{value:"4. Docker build from Dockerfile",id:"4-docker-build-from-dockerfile",level:2},{value:"5. Docker run from Dockerfile",id:"5-docker-run-from-dockerfile",level:2},{value:"6. Docker run with env",id:"6-docker-run-with-env",level:2}],k={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-dockerfile-\ub9cc\ub4e4\uae30"},"1. Dockerfile \ub9cc\ub4e4\uae30"),(0,a.kt)("p",null,"\ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub97c \ub9cc\ub4dc\ub294 \uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc740 \ub3c4\ucee4\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud15c\ud50c\ub9bf\uc778 Dockerfile\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc774\uc678\uc5d0\ub294 running container \ub97c docker image \ub85c \ub9cc\ub4dc\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker commit")," \ub4f1\uc744 \ud65c\uc6a9\ud558\ub294 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uac00 \ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub97c \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\ub3c4\ub85d, \uc81c\uacf5\ud558\ub294 \ud15c\ud50c\ub9bf"),(0,a.kt)("li",{parentName:"ul"},"\ud30c\uc77c\uba85\uc740 \uaf2d ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile")," \uc774 \uc544\ub2c8\uc5b4\ub3c4 \uc0c1\uad00\uc5c6\uc9c0\ub9cc, ",(0,a.kt)("inlineCode",{parentName:"li"},"docker build")," \uc218\ud589 \uc2dc, default \ub85c \uc0ac\uc6a9\ud558\ub294 \ud30c\uc77c\uba85\uc774 ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile")," \uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub97c \ub9cc\ub4dc\ub294 ",(0,a.kt)("inlineCode",{parentName:"li"},"docker build")," \ub97c \uc218\ud589\ud560 \ub54c, ",(0,a.kt)("inlineCode",{parentName:"li"},"-f")," \uc635\uc158\uc744 \uc8fc\uba74 \ub2e4\ub978 \ud30c\uc77c\uba85\uc73c\ub85c\ub3c4 \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ex) ",(0,a.kt)("inlineCode",{parentName:"li"},"docker build -f dockerfile-asdf .")," \ub3c4 \uac00\ub2a5")))))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc2e4\uc2b5\uc744 \uc704\ud574\uc11c \ud3b8\ud55c \ub514\ub809\ud1a0\ub9ac\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd <SOME-DIRECTORY>\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"docker-practice \ub77c\ub294 \uc774\ub984\uc758 \ud3f4\ub354\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir docker-practice\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"docker-practice \ud3f4\ub354\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker-practice\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Dockerfile \uc774\ub77c\ub294 \ube48 \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"touch Dockerfile\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uc815\uc0c1\uc801\uc73c\ub85c \uc0dd\uc131\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ls\n")))),(0,a.kt)("h2",{id:"2-dockerfile-\ub0b4\uc7a5-\uba85\ub839\uc5b4"},"2. Dockerfile \ub0b4\uc7a5 \uba85\ub839\uc5b4"),(0,a.kt)("p",null,"Dockerfile \uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uae30\ubcf8\uc801\uc778 \uba85\ub839\uc5b4\uc5d0 \ub300\ud574\uc11c \ud558\ub098\uc529 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"from"},"FROM"),(0,a.kt)("p",null,"Dockerfile \uc774 base image \ub85c \uc5b4\ub5a0\ud55c \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud560 \uac83\uc778\uc9c0\ub97c \uba85\uc2dc\ud558\ub294 \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub97c \ub9cc\ub4e4 \ub54c, \uc544\ubb34\uac83\ub3c4 \uc5c6\ub294 \ube48 \ud658\uacbd\uc5d0\uc11c\ubd80\ud130 \ud558\ub098\ud558\ub098\uc529 \uc81c\uac00 \uc758\ub3c4\ud55c \ud658\uacbd\uc744 \ub9cc\ub4e4\uc5b4\uac00\ub294\uac8c \uc544\ub2c8\ub77c, python 3.9 \ubc84\uc804\uc774 \uc124\uce58\ub41c \ud658\uacbd\uc744 \ubca0\uc774\uc2a4\ub85c\ud574\ub450\uace0, \uc800\ub294 pytorch \ub97c \uc124\uce58\ud558\uace0, \uc81c \uc18c\uc2a4\ucf54\ub4dc\ub9cc \ub123\uc5b4\ub450\ub294 \ud615\ud0dc\ub85c \ud65c\uc6a9\ud560 \uc218\uac00 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc774\ub7ec\ud55c \uacbd\uc6b0\uc5d0\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"python:3.9"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"python-3.9-alpine"),", ... \ub4f1\uc758 \uc798 \ub9cc\ub4e4\uc5b4\uc9c4 \uc774\ubbf8\uc9c0\ub97c \ubca0\uc774\uc2a4\ub85c \ud65c\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},"FROM <image>[:<tag>] [AS <name>]\n\n# \uc608\uc2dc\nFROM ubuntu\nFROM ubuntu:18.04\nFROM nginx:latest AS ngx\n")),(0,a.kt)("h3",{id:"copy"},"COPY"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"host(\ub85c\uceec)\uc5d0\uc11c\uc758 ",(0,a.kt)("inlineCode",{parentName:"strong"},"<src>"))," \uacbd\ub85c\uc758 \ud30c\uc77c \ud639\uc740 \ub514\ub809\ud1a0\ub9ac\ub97c ",(0,a.kt)("strong",{parentName:"p"},"container \ub0b4\ubd80\uc5d0\uc11c\uc758 ",(0,a.kt)("inlineCode",{parentName:"strong"},"<dest>"))," \uacbd\ub85c\uc5d0 \ubcf5\uc0ac\ud558\ub294 \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},"COPY <src>... <dest>\n\n# \uc608\uc2dc\nCOPY a.txt /some-directory/b.txt\nCOPY my-directory /some-directory-2\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ADD")," \ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY")," \uc640 \ube44\uc2b7\ud558\uc9c0\ub9cc \ucd94\uac00\uc801\uc778 \uae30\ub2a5\uc744 \ud488\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},"# 1 - \ud638\uc2a4\ud2b8\uc5d0 \uc555\ucd95\ub418\uc5b4\uc788\ub294 \ud30c\uc77c\uc744 \ud480\uba74\uc11c \ucee8\ud14c\uc774\ub108 \ub0b4\ubd80\ub85c copy \ud560 \uc218 \uc788\uc74c\nADD scripts.tar.gz /tmp\n# 2 - Remote URLs \uc5d0 \uc788\ub294 \ud30c\uc77c\uc744 \uc18c\uc2a4 \uacbd\ub85c\ub85c \uc9c0\uc815\ud560 \uc218 \uc788\uc74c\nADD http://www.example.com/script.sh /tmp\n\n# \uc704 \ub450 \uac00\uc9c0 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc744 \uacbd\uc6b0\uc5d0\ub9cc COPY \ub300\uc2e0 ADD \ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\n")),(0,a.kt)("h3",{id:"run"},"RUN"),(0,a.kt)("p",null,"\uba85\uc2dc\ud55c \ucee4\ub9e8\ub4dc\ub97c \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \ub0b4\ubd80\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub294 \ud574\ub2f9 \ucee4\ub9e8\ub4dc\ub4e4\uc774 \uc2e4\ud589\ub41c \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},'RUN <command>\nRUN ["executable-command", "parameter1", "parameter2"]\n\n# \uc608\uc2dc\nRUN pip install torch\nRUN pip install -r requirements.txt\n')),(0,a.kt)("h3",{id:"cmd"},"CMD"),(0,a.kt)("p",null,"\uba85\uc2dc\ud55c \ucee4\ub9e8\ub4dc\ub97c \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\uac00 ",(0,a.kt)("strong",{parentName:"p"},"\uc2dc\uc791\ub420 \ub54c"),", \uc2e4\ud589\ud558\ub294 \uac83\uc744 \uba85\uc2dc\ud558\ub294 \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ube44\uc2b7\ud55c \uc5ed\ud560\uc744 \ud558\ub294 \uba85\ub839\uc5b4\ub85c ",(0,a.kt)("strong",{parentName:"p"},"ENTRYPOINT")," \uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub458\uc758 \ucc28\uc774\uc5d0 \ub300\ud574\uc11c\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\ub4a4\uc5d0\uc11c")," \ub2e4\ub8f9\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud558\ub098\uc758 \ub3c4\ucee4 \uc774\ubbf8\uc9c0\uc5d0\uc11c\ub294 \ud558\ub098\uc758 ",(0,a.kt)("strong",{parentName:"p"},"CMD")," \ub9cc \uc2e4\ud589\ud560 \uc218 \uc788\ub2e4\ub294 \uc810\uc5d0\uc11c ",(0,a.kt)("strong",{parentName:"p"},"RUN")," \uba85\ub839\uc5b4\uc640 \ub2e4\ub985\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},'CMD <command>\nCMD ["executable-command", "parameter1", "parameter2"]\nCMD ["parameter1", "parameter2"] # ENTRYPOINT \uc640 \ud568\uaed8 \uc0ac\uc6a9\ub420 \ub54c\n\n# \uc608\uc2dc\nCMD python main.py\n')),(0,a.kt)("h3",{id:"workdir"},"WORKDIR"),(0,a.kt)("p",null,"\uc774\ud6c4 \ucd94\uac00\ub420 \uba85\ub839\uc5b4\ub97c \ucee8\ud14c\uc774\ub108 \ub0b4\uc758 \uc5b4\ub5a4 \ub514\ub809\ud1a0\ub9ac\uc5d0\uc11c \uc218\ud589\ud560 \uac83\uc778\uc9c0\ub97c \uba85\uc2dc\ud558\ub294 \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ub9cc\uc57d, \ud574\ub2f9 \ub514\ub809\ud1a0\ub9ac\uac00 \uc5c6\ub2e4\uba74 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},"WORKDIR /path/to/workdir\n\n# \uc608\uc2dc\nWORKDIR /home/demo\nRUN pwd # /home/demo \uac00 \ucd9c\ub825\ub428\n")),(0,a.kt)("h3",{id:"env"},"ENV"),(0,a.kt)("p",null,"\ucee8\ud14c\uc774\ub108 \ub0b4\ubd80\uc5d0\uc11c \uc9c0\uc18d\uc801\uc73c\ub85c \uc0ac\uc6a9\ub420 environment variable \uc758 \uac12\uc744 \uc124\uc815\ud558\ub294 \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},"ENV <KEY> <VALUE>\nENV <KEY>=<VALUE>\n\n# \uc608\uc2dc\n# default \uc5b8\uc5b4 \uc124\uc815\nRUN locale-gen ko_KR.UTF-8\nENV LANG ko_KR.UTF-8\nENV LANGUAGE ko_KR.UTF-8\nENV LC_ALL ko_KR.UTF-8\n")),(0,a.kt)("h3",{id:"expose"},"EXPOSE"),(0,a.kt)("p",null,"\ucee8\ud14c\uc774\ub108\uc5d0\uc11c \ub6ab\uc5b4\uc904 \ud3ec\ud2b8/\ud504\ub85c\ud1a0\ucf5c\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"<protocol>")," \uc744 \uc9c0\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 TCP \uac00 \ub514\ud3f4\ud2b8\ub85c \uc124\uc815\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},"EXPOSE <port>\nEXPOSE <port>/<protocol>\n\n# \uc608\uc2dc\nEXPOSE 8080\n")),(0,a.kt)("h2",{id:"3-\uac04\ub2e8\ud55c-dockerfile-\uc791\uc131\ud574\ubcf4\uae30"},"3. \uac04\ub2e8\ud55c Dockerfile \uc791\uc131\ud574\ubcf4\uae30"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"vim Dockerfile")," \ud639\uc740 vscode \ub4f1 \ubcf8\uc778\uc774 \uc0ac\uc6a9\ud558\ub294 \ud3b8\uc9d1\uae30\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \uc744 \uc5f4\uc5b4 \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ud574\uc90d\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},"# base image \ub97c ubuntu 18.04 \ub85c \uc124\uc815\ud569\ub2c8\ub2e4.\nFROM ubuntu:18.04\n\n# apt-get update \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.\nRUN apt-get update\n\n# TEST env var\uc758 \uac12\uc744 hello \ub85c \uc9c0\uc815\ud569\ub2c8\ub2e4.\nENV TEST hello\n\n# DOCKER CONTAINER \uac00 \uc2dc\uc791\ub420 \ub54c, \ud658\uacbd\ubcc0\uc218 TEST \uc758 \uac12\uc744 \ucd9c\ub825\ud569\ub2c8\ub2e4.\nCMD echo $TEST\n")),(0,a.kt)("h2",{id:"4-docker-build-from-dockerfile"},"4. Docker build from Dockerfile"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker build")," \uba85\ub839\uc5b4\ub85c Dockerfile \ub85c\ubd80\ud130 Docker Image \ub97c \ub9cc\ub4e4\uc5b4\ubd05\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build --help\n")),(0,a.kt)("p",null,"Dockerfile \uc774 \uc788\ub294 \uacbd\ub85c\uc5d0\uc11c \ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t my-image:v1.0.0 .\n")),(0,a.kt)("p",null,"\uc704 \ucee4\ub9e8\ub4dc\ub97c \uc124\uba85\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".")," : ",(0,a.kt)("strong",{parentName:"li"},"\ud604\uc7ac \uacbd\ub85c"),"\uc5d0 \uc788\ub294 Dockerfile \ub85c\ubd80\ud130"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-t")," : my-image \ub77c\ub294 ",(0,a.kt)("strong",{parentName:"li"},"\uc774\ub984"),"\uacfc v1.0.0 \uc774\ub77c\ub294 ",(0,a.kt)("strong",{parentName:"li"},"\ud0dc\uadf8"),"\ub85c ",(0,a.kt)("strong",{parentName:"li"},"\uc774\ubbf8\uc9c0"),"\ub97c"),(0,a.kt)("li",{parentName:"ul"},"\ube4c\ub4dc\ud558\uaca0\ub2e4\ub77c\ub294 \uba85\ub839\uc5b4")),(0,a.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc774\ubbf8\uc9c0 \ube4c\ub4dc\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# grep : my-image \uac00 \uc788\ub294\uc9c0\ub97c \uc7a1\uc544\ub0b4\ub294 (grep) \ud558\ub294 \uba85\ub839\uc5b4\ndocker images | grep my-image\n")),(0,a.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub41c\ub2e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"my-image     v1.0.0    143114710b2d   3 seconds ago   87.9MB\n")),(0,a.kt)("h2",{id:"5-docker-run-from-dockerfile"},"5. Docker run from Dockerfile"),(0,a.kt)("p",null,"\uadf8\ub7fc \uc774\uc81c \ubc29\uae08 \ube4c\ub4dc\ud55c ",(0,a.kt)("inlineCode",{parentName:"p"},"my-image:v1.0.0")," \uc774\ubbf8\uc9c0\ub85c docker \ucee8\ud14c\uc774\ub108\ub97c ",(0,a.kt)("strong",{parentName:"p"},"run")," \ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run my-image:v1.0.0\n")),(0,a.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub41c\ub2e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ub098\uc635\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hello\n")),(0,a.kt)("h2",{id:"6-docker-run-with-env"},"6. Docker run with env"),(0,a.kt)("p",null,"\uc774\ubc88\uc5d0\ub294 \ubc29\uae08 \ube4c\ub4dc\ud55c ",(0,a.kt)("inlineCode",{parentName:"p"},"my-image:v1.0.0")," \uc774\ubbf8\uc9c0\ub97c \uc2e4\ud589\ud558\ub294 \uc2dc\uc810\uc5d0, ",(0,a.kt)("inlineCode",{parentName:"p"},"TEST")," env var \uc758 \uac12\uc744 \ubcc0\uacbd\ud558\uc5ec docker \ucee8\ud14c\uc774\ub108\ub97c run \ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e TEST=bye my-image:v1.0.0\n")),(0,a.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub41c\ub2e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ub098\uc635\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bye\n")))}d.isMDXComponent=!0}}]);