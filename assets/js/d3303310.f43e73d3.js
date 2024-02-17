"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[7346],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?a.createElement(k,o(o({ref:n},u),{},{components:t})):a.createElement(k,o({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4762:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={title:"6. (Optional) Setup GPU",description:"Install nvidia docker, nvidia device plugin",sidebar_position:6,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-13T00:00:00.000Z"),contributors:["Jaeyeon Kim"]},o=void 0,l={unversionedId:"setup-kubernetes/setup-nvidia-gpu",id:"version-1.0/setup-kubernetes/setup-nvidia-gpu",title:"6. (Optional) Setup GPU",description:"Install nvidia docker, nvidia device plugin",source:"@site/versioned_docs/version-1.0/setup-kubernetes/setup-nvidia-gpu.md",sourceDirName:"setup-kubernetes",slug:"/setup-kubernetes/setup-nvidia-gpu",permalink:"/docs/1.0/setup-kubernetes/setup-nvidia-gpu",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/setup-kubernetes/setup-nvidia-gpu.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162399,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:6,frontMatter:{title:"6. (Optional) Setup GPU",description:"Install nvidia docker, nvidia device plugin",sidebar_position:6,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-13T00:00:00.000Z",contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"5. Install Kubernetes Modules",permalink:"/docs/1.0/setup-kubernetes/install-kubernetes-module"},next:{title:"1. Kubeflow",permalink:"/docs/1.0/setup-components/install-components-kf"}},s={},p=[{value:"1. Install NVIDIA Driver",id:"1-install-nvidia-driver",level:2},{value:"2. NVIDIA-Docker \uc124\uce58",id:"2-nvidia-docker-\uc124\uce58",level:2},{value:"3. NVIDIA-Docker\ub97c Default Container Runtime\uc73c\ub85c \uc124\uc815",id:"3-nvidia-docker\ub97c-default-container-runtime\uc73c\ub85c-\uc124\uc815",level:2},{value:"4. Nvidia-Device-Plugin",id:"4-nvidia-device-plugin",level:2}],u={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ubc0f Kubeflow \ub4f1\uc5d0\uc11c GP \ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub2e4\uc74c \uc791\uc5c5\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"1-install-nvidia-driver"},"1. Install NVIDIA Driver"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nvidia-smi")," \uc218\ud589 \uc2dc \ub2e4\uc74c\uacfc \uac19\uc740 \ud654\uba74\uc774 \ucd9c\ub825\ub41c\ub2e4\uba74 \uc774 \ub2e8\uacc4\ub294 \uc0dd\ub7b5\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mlops@ubuntu:~$ nvidia-smi \n+-----------------------------------------------------------------------------+\n| NVIDIA-SMI 470.86       Driver Version: 470.86       CUDA Version: 11.4     |\n|-------------------------------+----------------------+----------------------+\n| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |\n|                               |                      |               MIG M. |\n|===============================+======================+======================|\n|   0  NVIDIA GeForce ...  Off  | 00000000:01:00.0 Off |                  N/A |\n| 25%   32C    P8     4W / 120W |    211MiB /  6078MiB |      0%      Default |\n|                               |                      |                  N/A |\n+-------------------------------+----------------------+----------------------+\n|   1  NVIDIA GeForce ...  Off  | 00000000:02:00.0 Off |                  N/A |\n|  0%   34C    P8     7W / 175W |      5MiB /  7982MiB |      0%      Default |\n|                               |                      |                  N/A |\n+-------------------------------+----------------------+----------------------+\n                                                                              \n+-----------------------------------------------------------------------------+\n| Processes:                                                                  |\n|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |\n|        ID   ID                                                   Usage      |\n|=============================================================================|\n|    0   N/A  N/A      1644      G   /usr/lib/xorg/Xorg                198MiB |\n|    0   N/A  N/A      1893      G   /usr/bin/gnome-shell               10MiB |\n|    1   N/A  N/A      1644      G   /usr/lib/xorg/Xorg                  4MiB |\n+-----------------------------------------------------------------------------+\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nvidia-smi"),"\uc758 \ucd9c\ub825 \uacb0\uacfc\uac00 \uc704\uc640 \uac19\uc9c0 \uc54a\ub2e4\uba74 \uc7a5\ucc29\ub41c GPU\uc5d0 \ub9de\ub294 nvidia driver\ub97c \uc124\uce58\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub9cc\uc57d nvidia driver\uc758 \uc124\uce58\uc5d0 \uc775\uc219\ud558\uc9c0 \uc54a\ub2e4\uba74 \uc544\ub798 \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \uc124\uce58\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository ppa:graphics-drivers/ppa\nsudo apt update && sudo apt install -y ubuntu-drivers-common\nsudo ubuntu-drivers autoinstall\nsudo reboot\n")),(0,r.kt)("h2",{id:"2-nvidia-docker-\uc124\uce58"},"2. NVIDIA-Docker \uc124\uce58"),(0,r.kt)("p",null,"NVIDIA-Docker\ub97c \uc124\uce58\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | \\\n  sudo apt-key add -\ndistribution=$(. /etc/os-release;echo $ID$VERSION_ID)\ncurl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list\nsudo apt-get update\nsudo apt-get install -y nvidia-docker2 &&\nsudo systemctl restart docker\n")),(0,r.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574, GPU\ub97c \uc0ac\uc6a9\ud558\ub294 \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\ub97c \uc2e4\ud589\ud574\ubd05\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi\n")),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ubcf4\uc774\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mlops@ubuntu:~$ sudo docker run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi\n+-----------------------------------------------------------------------------+\n| NVIDIA-SMI 470.86       Driver Version: 470.86       CUDA Version: 11.4     |\n|-------------------------------+----------------------+----------------------+\n| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |\n|                               |                      |               MIG M. |\n|===============================+======================+======================|\n|   0  NVIDIA GeForce ...  Off  | 00000000:01:00.0 Off |                  N/A |\n| 25%   32C    P8     4W / 120W |    211MiB /  6078MiB |      0%      Default |\n|                               |                      |                  N/A |\n+-------------------------------+----------------------+----------------------+\n|   1  NVIDIA GeForce ...  Off  | 00000000:02:00.0 Off |                  N/A |\n|  0%   34C    P8     6W / 175W |      5MiB /  7982MiB |      0%      Default |\n|                               |                      |                  N/A |\n+-------------------------------+----------------------+----------------------+\n                                                                              \n+-----------------------------------------------------------------------------+\n| Processes:                                                                  |\n|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |\n|        ID   ID                                                   Usage      |\n|=============================================================================|\n+-----------------------------------------------------------------------------+\n")),(0,r.kt)("h2",{id:"3-nvidia-docker\ub97c-default-container-runtime\uc73c\ub85c-\uc124\uc815"},"3. NVIDIA-Docker\ub97c Default Container Runtime\uc73c\ub85c \uc124\uc815"),(0,r.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\ub294 \uae30\ubcf8\uc801\uc73c\ub85c Docker-CE\ub97c Default Container Runtime\uc73c\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n\ub530\ub77c\uc11c, Docker Container \ub0b4\uc5d0\uc11c NVIDIA GPU\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 NVIDIA-Docker \ub97c Container Runtime \uc73c\ub85c \uc0ac\uc6a9\ud558\uc5ec pod\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\ub3c4\ub85d Default Runtime\uc744 \uc218\uc815\ud574 \uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")," \ud30c\uc77c\uc744 \uc5f4\uc5b4 \ub2e4\uc74c\uacfc \uac19\uc774 \uc218\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo vi /etc/docker/daemon.json\n\n{\n  "default-runtime": "nvidia",\n  "runtimes": {\n      "nvidia": {\n          "path": "nvidia-container-runtime",\n          "runtimeArgs": []\n  }\n  }\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud30c\uc77c\uc774 \ubcc0\uacbd\ub41c \uac83\uc744 \ud655\uc778\ud55c \ud6c4, Docker\ub97c \uc7ac\uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\nsudo service docker restart\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ubcc0\uacbd \uc0ac\ud56d\uc774 \ubc18\uc601\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker info | grep nvidia\n")),(0,r.kt)("p",{parentName:"li"},"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ubcf4\uc774\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mlops@ubuntu:~$ docker info | grep nvidia\nRuntimes: io.containerd.runc.v2 io.containerd.runtime.v1.linux nvidia runc\nDefault Runtime: nvidia\n")))),(0,r.kt)("h2",{id:"4-nvidia-device-plugin"},"4. Nvidia-Device-Plugin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"nvidia-device-plugin daemonset\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f https://raw.githubusercontent.com/NVIDIA/k8s-device-plugin/v0.10.0/nvidia-device-plugin.yml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"nvidia-device-plugin pod\uc774 RUNNING \uc0c1\ud0dc\ub85c \uc0dd\uc131\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n kube-system | grep nvidia\n")),(0,r.kt)("p",{parentName:"li"},"\ub2e4\uc74c\uacfc \uac19\uc740 \uacb0\uacfc\uac00 \ucd9c\ub825\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kube-system       nvidia-device-plugin-daemonset-nlqh2         1/1     Running   0      1h\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"node \uc815\ubcf4\uc5d0 gpu\uac00 \uc0ac\uc6a9\uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl get nodes "-o=custom-columns=NAME:.metadata.name,GPU:.status.allocatable.nvidia\\.com/gpu"\n')),(0,r.kt)("p",{parentName:"li"},"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ubcf4\uc774\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc124\uc815\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","(",(0,r.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps")," \uc5d0\uc11c \uc2e4\uc2b5\uc744 \uc9c4\ud589\ud55c \ud074\ub7ec\uc2a4\ud130\ub294 2\uac1c\uc758 GPU\uac00 \uc788\uc5b4\uc11c 2\uac00 \ucd9c\ub825\ub429\ub2c8\ub2e4.\n\ubcf8\uc778\uc758 \ud074\ub7ec\uc2a4\ud130\uc758 GPU \uac1c\uc218\uc640 \ub9de\ub294 \uc22b\uc790\uac00 \ucd9c\ub825\ub41c\ub2e4\uba74 \ub429\ub2c8\ub2e4.)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME       GPU\nubuntu     2\n")))),(0,r.kt)("p",null,"\uc124\uc815\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0, GPU\uc758 value\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"<None>")," \uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4."))}c.isMDXComponent=!0}}]);