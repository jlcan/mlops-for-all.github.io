"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[8932],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>m});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),s=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=s(e.components);return t.createElement(i.Provider,{value:a},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,m=c["".concat(i,".").concat(d)]||c[d]||k[d]||l;return n?t.createElement(m,o(o({ref:a},u),{},{components:n})):t.createElement(m,o({ref:a},u))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1481:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var t=n(7462),r=(n(7294),n(3905));const l={title:"[Practice] Docker command",description:"Practice to use docker command.",sidebar_position:4,contributors:["Jongseob Jeon","Jaeyeon Kim"]},o=void 0,p={unversionedId:"prerequisites/docker/command",id:"prerequisites/docker/command",title:"[Practice] Docker command",description:"Practice to use docker command.",source:"@site/docs/prerequisites/docker/command.md",sourceDirName:"prerequisites/docker",slug:"/prerequisites/docker/command",permalink:"/mlops-for-all.github.io/docs/prerequisites/docker/command",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/prerequisites/docker/command.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162774,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:4,frontMatter:{title:"[Practice] Docker command",description:"Practice to use docker command.",sidebar_position:4,contributors:["Jongseob Jeon","Jaeyeon Kim"]},sidebar:"preSidebar",previous:{title:"What is Docker?",permalink:"/mlops-for-all.github.io/docs/prerequisites/docker/"},next:{title:"[Practice] Docker images",permalink:"/mlops-for-all.github.io/docs/prerequisites/docker/images"}},i={},s=[{value:"1. \uc815\uc0c1 \uc124\uce58 \ud655\uc778",id:"1-\uc815\uc0c1-\uc124\uce58-\ud655\uc778",level:2},{value:"2. Docker Pull",id:"2-docker-pull",level:2},{value:"3. Docker images",id:"3-docker-images",level:2},{value:"4. Docker ps",id:"4-docker-ps",level:2},{value:"5. Docker run",id:"5-docker-run",level:2},{value:"6. Docker exec",id:"6-docker-exec",level:2},{value:"7. Docker logs",id:"7-docker-logs",level:2},{value:"8. Docker stop",id:"8-docker-stop",level:2},{value:"9. Docker rm",id:"9-docker-rm",level:2},{value:"10. Docker rmi",id:"10-docker-rmi",level:2},{value:"References",id:"references",level:2}],u={toc:s},c="wrapper";function k(e){let{components:a,...n}=e;return(0,r.kt)(c,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\uc815\uc0c1-\uc124\uce58-\ud655\uc778"},"1. \uc815\uc0c1 \uc124\uce58 \ud655\uc778"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run hello-world\n")),(0,r.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub41c \uacbd\uc6b0 \ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Hello from Docker!\nThis message shows that your installation appears to be working correctly.\n....\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"(For ubuntu)")," sudo \uc5c6\uc774 \uc0ac\uc6a9\ud558\uace0 \uc2f6\ub2e4\uba74 \uc544\ub798 \uc0ac\uc774\ud2b8\ub97c \ucc38\uace0\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user"},"https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user"))),(0,r.kt)("h2",{id:"2-docker-pull"},"2. Docker Pull"),(0,r.kt)("p",null,"docker image registry(\ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub97c \uc800\uc7a5\ud558\uace0 \uacf5\uc720\ud560 \uc218 \uc788\ub294 \uc800\uc7a5\uc18c)\ub85c\ubd80\ud130 Docker image \ub97c \ub85c\uceec\uc5d0 \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\ub294 \ucee4\ub9e8\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\ub798 \ucee4\ub9e8\ub4dc\ub97c \ud1b5\ud574 docker pull\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud55c argument\ub4e4\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull --help\n")),(0,r.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub418\uba74 \uc544\ub798\uc640 \uac19\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Usage:  docker pull [OPTIONS] NAME[:TAG|@DIGEST]\n\nPull an image or a repository from a registry\n\nOptions:\n  -a, --all-tags                Download all tagged images in the repository\n      --disable-content-trust   Skip image verification (default true)\n      --platform string         Set platform if server is multi-platform capable\n  -q, --quiet                   Suppress verbose output\n")),(0,r.kt)("p",null,"\uc5ec\uae30\uc11c \uc54c \uc218 \uc788\ub294 \uac83\uc740 \ubc14\ub85c docker pull\uc740 \ub450 \uac1c \ud0c0\uc785\uc758 argument\ub97c \ubc1b\ub294\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPTIONS]")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"NAME[:TAG|@DIGEST]"))),(0,r.kt)("p",null,"help\uc5d0\uc11c \ub098\uc628 ",(0,r.kt)("inlineCode",{parentName:"p"},"-a"),", -",(0,r.kt)("inlineCode",{parentName:"p"},"q")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 NAME \uc55e\uc5d0\uc11c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc9c1\uc811 ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu:18.04")," \uc774\ubbf8\uc9c0\ub97c pull \ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ubuntu:18.04\n")),(0,r.kt)("p",null,"\uc704 \uba85\ub839\uc5b4\ub97c \ud574\uc11d\ud558\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu")," \ub77c\ub294 \uc774\ub984\uc744 \uac00\uc9c4 \uc774\ubbf8\uc9c0 \uc911 ",(0,r.kt)("inlineCode",{parentName:"p"},"18.04")," \ud0dc\uadf8\uac00 \ub2ec\ub824\uc788\ub294 \uc774\ubbf8\uc9c0\ub97c \uac00\uc838\uc624\ub77c\ub294 \ub73b\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub9cc\uc57d, \uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub41c\ub2e4\uba74 \ub2e4\uc74c\uacfc \ube44\uc2b7\ud558\uac8c \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"18.04: Pulling from library/ubuntu\n20d796c36622: Pull complete \nDigest: sha256:42cd9143b6060261187a72716906187294b8b66653b50d70bc7a90ccade5c984\nStatus: Downloaded newer image for ubuntu:18.04\ndocker.io/library/ubuntu:18.04\n")),(0,r.kt)("p",null,"\uc704\uc758 \uba85\ub839\uc5b4\ub97c \uc218\ud589\ud558\uba74 ",(0,r.kt)("a",{parentName:"p",href:"http://docker.io/library/"},"docker.io/library")," \ub77c\ub294 \uc774\ub984\uc758 registry \uc5d0\uc11c ubuntu:18.04 \ub77c\ub294 image \ub97c \uc5ec\ub7ec\ubd84\uc758 \ub178\ud2b8\ubd81\uc5d0 \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uac8c\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucc38\uace0\uc0ac\ud56d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucd94\ud6c4 ",(0,r.kt)("a",{parentName:"li",href:"http://docker.io"},"docker.io")," \ub098 public \ud55c docker hub \uc640 \uac19\uc740 registry \ub300\uc2e0\uc5d0, \ud2b9\uc815 ",(0,r.kt)("strong",{parentName:"li"},"private")," \ud55c registry \uc5d0\uc11c docker image \ub97c \uac00\uc838\uc640\uc57c \ud558\ub294 \uacbd\uc6b0\uc5d0\ub294, ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/login/"},(0,r.kt)("inlineCode",{parentName:"a"},"docker login"))," \uc744 \ud1b5\ud574\uc11c \ud2b9\uc815 registry \ub97c \ubc14\ub77c\ubcf4\ub3c4\ub85d \ud55c \ub4a4, docker pull \uc744 \uc218\ud589\ud558\ub294 \ud615\ud0dc\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud639\uc740 insecure registry \ub97c \uc124\uc815\ud558\ub294 ",(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/42211380/add-insecure-registry-to-docker"},"\ubc29\uc548"),"\ub3c4 \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud3d0\uc1c4\ub9dd\uc5d0\uc11c docker image \ub97c ",(0,r.kt)("inlineCode",{parentName:"li"},".tar")," \ud30c\uc77c\uacfc \uac19\uc740 \ud615\ud0dc\ub85c \uc800\uc7a5\ud558\uace0 \uacf5\uc720\ud560 \uc218 \uc788\ub3c4\ub85d ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/save/"},(0,r.kt)("inlineCode",{parentName:"a"},"docker save")),", ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/load/"},(0,r.kt)("inlineCode",{parentName:"a"},"docker load"))," \uc640 \uac19\uc740 \uba85\ub839\uc5b4\ub3c4 \uc874\uc7ac\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h2",{id:"3-docker-images"},"3. Docker images"),(0,r.kt)("p",null,"\ub85c\uceec\uc5d0 \uc874\uc7ac\ud558\ub294 docker image \ub9ac\uc2a4\ud2b8\ub97c \ucd9c\ub825\ud558\ub294 \ucee4\ub9e8\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker images --help\n")),(0,r.kt)("p",null,"docker images\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 argument\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Usage:  docker images [OPTIONS] [REPOSITORY[:TAG]]\n\nList images\n\nOptions:\n  -a, --all             Show all images (default hides intermediate images)\n      --digests         Show digests\n  -f, --filter filter   Filter output based on conditions provided\n      --format string   Pretty-print images using a Go template\n      --no-trunc        Don't truncate output\n  -q, --quiet           Only show image IDs\n")),(0,r.kt)("p",null,"\uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc774\uc6a9\ud574 \uc9c1\uc811 \uc2e4\ud589\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker images\n")),(0,r.kt)("p",null,"\ub9cc\uc57d \ub3c4\ucee4\ub97c \ucd5c\ucd08 \uc124\uce58 \ud6c4 \uc774 \uc2e4\uc2b5\uc744 \uc9c4\ud589\ud55c\ub2e4\uba74 \ub2e4\uc74c\uacfc \ube44\uc2b7\ud558\uac8c \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"REPOSITORY   TAG       IMAGE ID       CREATED      SIZE\nubuntu       18.04     29e70752d7b2   2 days ago   56.7MB\n")),(0,r.kt)("p",null,"\uc904 \uc218 \uc788\ub294 argument\uc911 ",(0,r.kt)("inlineCode",{parentName:"p"},"-q"),"\ub97c \uc0ac\uc6a9\ud558\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"IMAGE ID")," \ub9cc \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker images -q\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"29e70752d7b2\n")),(0,r.kt)("h2",{id:"4-docker-ps"},"4. Docker ps"),(0,r.kt)("p",null,"\ud604\uc7ac \uc2e4\ud589 \uc911\uc778 \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \ub9ac\uc2a4\ud2b8\ub97c \ucd9c\ub825\ud558\ub294 \ucee4\ub9e8\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps --help\n")),(0,r.kt)("p",null,"docker ps\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 argument\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Usage:  docker ps [OPTIONS]\n\nList containers\n\nOptions:\n  -a, --all             Show all containers (default shows just running)\n  -f, --filter filter   Filter output based on conditions provided\n      --format string   Pretty-print containers using a Go template\n  -n, --last int        Show n last created containers (includes all states) (default -1)\n  -l, --latest          Show the latest created container (includes all states)\n      --no-trunc        Don't truncate output\n  -q, --quiet           Only display container IDs\n  -s, --size            Display total file sizes\n")),(0,r.kt)("p",null,"\uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc774\uc6a9\ud574 \uc9c1\uc811 \uc2e4\ud589\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,r.kt)("p",null,"\ud604\uc7ac \uc2e4\ud589 \uc911\uc778 \ucee8\ud14c\uc774\ub108\uac00 \uc5c6\ub2e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ub098\uc635\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES\n")),(0,r.kt)("p",null,"\ub9cc\uc57d \uc2e4\ud589\ub418\ub294 \ucee8\ud14c\uc774\ub108\uac00 \uc788\ub2e4\uba74 \ub2e4\uc74c\uacfc \ube44\uc2b7\ud558\uac8c \ub098\uc635\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE     COMMAND        CREATED          STATUS          PORTS     NAMES\nc1e8f5e89d8d   ubuntu    "sleep 3600"   13 seconds ago   Up 12 seconds             trusting_newton\n')),(0,r.kt)("h2",{id:"5-docker-run"},"5. Docker run"),(0,r.kt)("p",null,"\ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\ub97c \uc2e4\ud589\uc2dc\ud0a4\ub294 \ucee4\ub9e8\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --help\n")),(0,r.kt)("p",null,"docker run\uc744 \uc2e4\ud589\ud558\ub294 \uba85\ub839\uc5b4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]\n\nRun a command in a new container\n")),(0,r.kt)("p",null,"\uc5ec\uae30\uc11c \uc6b0\ub9ac\uac00 \ud655\uc778\ud574\uc57c \ud558\ub294 \uac83\uc740 \ubc14\ub85c docker run\uc740 \uc138 \uac1c \ud0c0\uc785\uc758 argument\ub97c \ubc1b\ub294\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPTIONS]")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"[COMMAND]")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"[ARG...]"))),(0,r.kt)("p",null,"\uc9c1\uc811 \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\ub97c \uc2e4\ud589\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]\ndocker run -it --name demo1 ubuntu:18.04 /bin/bash\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-it")," : ",(0,r.kt)("inlineCode",{parentName:"li"},"-i")," \uc635\uc158 + ",(0,r.kt)("inlineCode",{parentName:"li"},"-t")," \uc635\uc158",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"container \ub97c \uc2e4\ud589\uc2dc\ud0b4\uacfc \ub3d9\uc2dc\uc5d0 interactive \ud55c terminal \ub85c \uc811\uc18d\uc2dc\ucf1c\uc8fc\ub294 \uc635\uc158"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--name")," : name",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucee8\ud14c\uc774\ub108 id \ub300\uc2e0, \uad6c\ubd84\ud558\uae30 \uc27d\ub3c4\ub85d \uc9c0\uc815\ud574\uc8fc\ub294 \uc774\ub984"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/bin/bash"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucee8\ud14c\uc774\ub108\ub97c \uc2e4\ud589\uc2dc\ud0b4\uacfc \ub3d9\uc2dc\uc5d0 \uc2e4\ud589\ud560 \ucee4\ub9e8\ub4dc\ub85c, ",(0,r.kt)("inlineCode",{parentName:"li"},"/bin/bash")," \ub294 bash \uc258\uc744 \uc5ec\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.")))),(0,r.kt)("p",null,"\uc2e4\ud589 \ud6c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"exit")," \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \ucee8\ud14c\uc774\ub108\ub97c \uc885\ub8cc\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc81c \uc55e\uc11c \ubc30\uc6e0\ub358 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps")," \uba85\ub839\uc5b4\ub97c \uce58\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ub098\uc635\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES\n")),(0,r.kt)("p",null,"\uc2e4\ud589\ub418\uace0 \uc788\ub294 \ucee8\ud14c\uc774\ub108\uac00 \ub098\uc628\ub2e4\uace0 \ud588\uc9c0\ub9cc \uc5b4\uc9f8\uc11c\uc778\uc9c0 \ubc29\uae08 \uc2e4\ud589\ud55c \ucee8\ud14c\uc774\ub108\uac00 \ubcf4\uc774\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\uadf8 \uc774\uc720\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps"),"\ub294 \uae30\ubcf8\uac12\uc73c\ub85c \ud604\uc7ac \uc2e4\ud589 \uc911\uc778 \ucee8\ud14c\uc774\ub108\ub97c \ubcf4\uc5ec\uc8fc\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub9cc\uc57d \uc885\ub8cc\ub41c \ucee8\ud14c\uc774\ub108\ub4e4\ub3c4 \ubcf4\uace0 \uc2f6\ub2e4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"-a")," \uc635\uc158\uc744 \uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -a\n")),(0,r.kt)("p",null,"\uadf8\ub7ec\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \uc885\ub8cc\ub41c \ucee8\ud14c\uc774\ub108 \ubaa9\ub85d\ub3c4 \ub098\uc635\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE          COMMAND       CREATED         STATUS                     PORTS     NAMES\n4c1aa74a382a   ubuntu:18.04   "/bin/bash"   2 minutes ago   Exited (0) 2 minutes ago             demo1\n')),(0,r.kt)("h2",{id:"6-docker-exec"},"6. Docker exec"),(0,r.kt)("p",null,"Docker \ucee8\ud14c\uc774\ub108 \ub0b4\ubd80\uc5d0\uc11c \uba85\ub839\uc744 \ub0b4\ub9ac\uac70\ub098, \ub0b4\ubd80\ub85c \uc811\uc18d\ud558\ub294 \ucee4\ub9e8\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec --help\n")),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name demo2 ubuntu:18.04 sleep 3600\n")),(0,r.kt)("p",null,"\uc5ec\uae30\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," \uc635\uc158\uc740 \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\ub97c \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc2e4\ud589\uc2dc\ucf1c\uc11c, \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \uc811\uc18d \uc885\ub8cc\ub97c \ud558\ub354\ub77c\ub3c4, \uacc4\uc18d \uc2e4\ud589 \uc911\uc774 \ub418\ub3c4\ub85d \ud558\ub294 \ucee4\ub9e8\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker ps"),"\ub97c \ud1b5\ud574 \ud604\uc7ac \uc2e4\ud589\uc911\uc778\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 \uc2e4\ud589 \uc911\uc784\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE          COMMAND        CREATED         STATUS         PORTS     NAMES\nfc88a83e90f0   ubuntu:18.04   "sleep 3600"   4 seconds ago   Up 3 seconds             demo2\n')),(0,r.kt)("p",null,"\uc774\uc81c ",(0,r.kt)("inlineCode",{parentName:"p"},"docker exec")," \uba85\ub839\uc5b4\ub97c \ud1b5\ud574\uc11c \uc2e4\ud589\uc911\uc778 \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\uc5d0 \uc811\uc18d\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it demo2 /bin/bash\n")),(0,r.kt)("p",null,"\uc774 \uc804\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run"),"\uacfc \ub3d9\uc77c\ud558\uac8c container \ub0b4\ubd80\uc5d0 \uc811\uc18d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"exit"),"\uc744 \ud1b5\ud574 \uc885\ub8cc\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"7-docker-logs"},"7. Docker logs"),(0,r.kt)("p",null,"\ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\uc758 log\ub97c \ud655\uc778\ud558\ub294 \ucee4\ub9e8\ub4dc \uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs --help\n")),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \ucee8\ud14c\uc774\ub108\ub97c \uc2e4\ud589\uc2dc\ud0a4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --name demo3 -d busybox sh -c "while true; do $(echo date); sleep 1; done"\n')),(0,r.kt)("p",null,"\uc704 \uba85\ub839\uc5b4\ub97c \ud1b5\ud574\uc11c test \ub77c\ub294 \uc774\ub984\uc758 busybox \ucee8\ud14c\uc774\ub108\ub97c \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\ub85c \uc2e4\ud589\ud558\uc5ec, 1\ucd08\uc5d0 \ud55c \ubc88\uc529 \ud604\uc7ac \uc2dc\uac04\uc744 \ucd9c\ub825\ud558\ub3c4\ub85d \ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\uc81c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 log\ub97c \ud655\uc778\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs demo3\n")),(0,r.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub418\uba74 \uc544\ub798\uc640 \ube44\uc2b7\ud558\uac8c \ub098\uc635\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Sun Mar  6 11:06:49 UTC 2022\nSun Mar  6 11:06:50 UTC 2022\nSun Mar  6 11:06:51 UTC 2022\nSun Mar  6 11:06:52 UTC 2022\nSun Mar  6 11:06:53 UTC 2022\nSun Mar  6 11:06:54 UTC 2022\n")),(0,r.kt)("p",null,"\uadf8\ub7f0\ub370 \uc774\ub807\uac8c \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \uc5ec\ud0dc\uae4c\uc9c0 \ucc0d\ud78c log \ubc16\uc5d0 \ud655\uc778\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc774 \ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," \uc635\uc158\uc744 \uc774\uc6a9\ud574 \uacc4\uc18d watch \ud558\uba70 \ucd9c\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs demo3 -f    \n")),(0,r.kt)("h2",{id:"8-docker-stop"},"8. Docker stop"),(0,r.kt)("p",null,"\uc2e4\ud589 \uc911\uc778 \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\ub97c \uc911\ub2e8\uc2dc\ud0a4\ub294 \ucee4\ub9e8\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop --help\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker ps"),"\ub97c \ud1b5\ud574 \ud604\uc7ac \uc2e4\ud589 \uc911\uc778 \ucee8\ud14c\uc774\ub108\ub97c \ud655\uc778\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE          COMMAND                  CREATED              STATUS              PORTS     NAMES\n730391669c39   busybox        "sh -c \'while true; \u2026"   About a minute ago   Up About a minute             demo3\nfc88a83e90f0   ubuntu:18.04   "sleep 3600"             4 minutes ago        Up 4 minutes                  demo2\n')),(0,r.kt)("p",null,"\uc774\uc81c ",(0,r.kt)("inlineCode",{parentName:"p"},"docker stop")," \uc744 \ud1b5\ud574 \ub3c4\ucee4\ub97c \uc815\uc9c0\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop demo2\n")),(0,r.kt)("p",null,"\uc2e4\ud589 \ud6c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps"),"\ub97c \ub2e4\uc2dc \uc785\ub825\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS     NAMES\n730391669c39   busybox   "sh -c \'while true; \u2026"   2 minutes ago   Up 2 minutes             demo3\n')),(0,r.kt)("p",null,"\uc704\uc758 \uacb0\uacfc\uc640 \ube44\uad50\ud588\uc744 \ub54c demo2 \ucee8\ud14c\uc774\ub108\uac00 \ud604\uc7ac \uc2e4\ud589 \uc911\uc778 \ucee8\ud14c\uc774\ub108 \ubaa9\ub85d\uc5d0\uc11c \uc0ac\ub77c\uc9c4 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub098\uba38\uc9c0 \ucee8\ud14c\uc774\ub108\ub3c4 \uc815\uc9c0\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop demo3\n")),(0,r.kt)("h2",{id:"9-docker-rm"},"9. Docker rm"),(0,r.kt)("p",null,"\ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\ub97c \uc0ad\uc81c\ud558\ub294 \ucee4\ub9e8\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm --help\n")),(0,r.kt)("p",null,"\ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc885\ub8cc\uac00 \ub41c \uc0c1\ud0dc\ub85c \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps -a"),"\ub97c \ud1b5\ud574\uc11c \uc885\ub8cc\ub41c \ucee8\ud14c\uc774\ub108\ub3c4 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uadf8\ub7f0\ub370 \uc885\ub8cc\ub41c \ucee8\ud14c\uc774\ub108\ub294 \uc65c \uc9c0\uc6cc\uc57c \ud560\uae4c\uc694?",(0,r.kt)("br",{parentName:"p"}),"\n","\uc885\ub8cc\ub418\uc5b4 \uc788\ub294 \ub3c4\ucee4\uc5d0\ub294 \uc774\uc804\uc5d0 \uc0ac\uc6a9\ud55c \ub370\uc774\ud130\uac00 \uc544\uc9c1 \ucee8\ud14c\uc774\ub108 \ub0b4\ubd80\uc5d0 \ub0a8\uc544\uc788\uc2b5\ub2c8\ub2e4.\n\uadf8\ub798\uc11c restart \ub4f1\uc744 \ud1b5\ud574\uc11c \ucee8\ud14c\uc774\ub108\ub97c \uc7ac\uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uadf8\ub7f0\ub370 \uc774 \uacfc\uc815\uc5d0\uc11c disk\ub97c \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub798\uc11c \uc644\uc804\ud788 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ucee8\ud14c\uc774\ub108\ub97c \uc9c0\uc6b0\uae30 \uc704\ud574\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker rm")," \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc6b0\uc120 \ud604\uc7ac \ucee8\ud14c\uc774\ub108\ub4e4\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -a\n")),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 3\uac1c\uc758 \ucee8\ud14c\uc774\ub108\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS                            PORTS     NAMES\n730391669c39   busybox        "sh -c \'while true; \u2026"   4 minutes ago    Exited (137) About a minute ago             demo3\nfc88a83e90f0   ubuntu:18.04   "sleep 3600"             7 minutes ago    Exited (137) 2 minutes ago                  demo2\n4c1aa74a382a   ubuntu:18.04   "/bin/bash"              10 minutes ago   Exited (0) 10 minutes ago                   demo1\n')),(0,r.kt)("p",null,"\uc544\ub798 \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"demo3")," \ucee8\ud14c\uc774\ub108\ub97c \uc0ad\uc81c\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm demo3\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker ps -a")," \uba85\ub839\uc5b4\ub97c \uce58\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 2\uac1c\ub85c \uc904\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE          COMMAND        CREATED          STATUS                       PORTS     NAMES\nfc88a83e90f0   ubuntu:18.04   "sleep 3600"   13 minutes ago   Exited (137) 8 minutes ago             demo2\n4c1aa74a382a   ubuntu:18.04   "/bin/bash"    16 minutes ago   Exited (0) 16 minutes ago              demo1\n')),(0,r.kt)("p",null,"\ub098\uba38\uc9c0 \ucee8\ud14c\uc774\ub108\ub4e4\ub3c4 \uc0ad\uc81c\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm demo2\ndocker rm demo1\n")),(0,r.kt)("h2",{id:"10-docker-rmi"},"10. Docker rmi"),(0,r.kt)("p",null,"\ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub97c \uc0ad\uc81c\ud558\ub294 \ucee4\ub9e8\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rmi --help\n")),(0,r.kt)("p",null,"\uc544\ub798 \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \ud604\uc7ac \uc5b4\ub5a4 \uc774\ubbf8\uc9c0\ub4e4\uc774 \ub85c\uceec\uc5d0 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker images\n")),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"REPOSITORY   TAG       IMAGE ID       CREATED        SIZE\nbusybox      latest    a8440bba1bc0   32 hours ago   1.41MB\nubuntu       18.04     29e70752d7b2   2 days ago     56.7MB\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"busybox")," \uc774\ubbf8\uc9c0\ub97c \uc0ad\uc81c\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rmi busybox\n")),(0,r.kt)("p",null,"\ub2e4\uc2dc ",(0,r.kt)("inlineCode",{parentName:"p"},"docker images"),"\ub97c \uce60 \uacbd\uc6b0 \ub2e4\uc74c\uacfc \uac19\uc774 \ub098\uc635\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"REPOSITORY   TAG       IMAGE ID       CREATED        SIZE\nubuntu       18.04     29e70752d7b2   2 days ago     56.7MB\n")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"},"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"))))}k.isMDXComponent=!0}}]);