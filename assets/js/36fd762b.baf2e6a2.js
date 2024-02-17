"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[6052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=o(n),d=a,m=c["".concat(u,".").concat(d)]||c[d]||k[d]||s;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var o=2;o<s;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const s={title:"4.1. K3s",description:"",sidebar_position:1,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-20T00:00:00.000Z"),draft:!1,weight:221,contributors:["Jongseob Jeon"],menu:{docs:'parent:../setup-kubernetes"'},images:[]},l=void 0,i={unversionedId:"setup-kubernetes/install-kubernetes/kubernetes-with-k3s",id:"version-1.0/setup-kubernetes/install-kubernetes/kubernetes-with-k3s",title:"4.1. K3s",description:"",source:"@site/versioned_docs/version-1.0/setup-kubernetes/install-kubernetes/kubernetes-with-k3s.md",sourceDirName:"setup-kubernetes/install-kubernetes",slug:"/setup-kubernetes/install-kubernetes/kubernetes-with-k3s",permalink:"/docs/1.0/setup-kubernetes/install-kubernetes/kubernetes-with-k3s",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/setup-kubernetes/install-kubernetes/kubernetes-with-k3s.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162399,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:1,frontMatter:{title:"4.1. K3s",description:"",sidebar_position:1,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-20T00:00:00.000Z",draft:!1,weight:221,contributors:["Jongseob Jeon"],menu:{docs:'parent:../setup-kubernetes"'},images:[]},sidebar:"tutorialSidebar",previous:{title:"3. Install Prerequisite",permalink:"/docs/1.0/setup-kubernetes/install-prerequisite"},next:{title:"4.3. Kubeadm",permalink:"/docs/1.0/setup-kubernetes/install-kubernetes/kubernetes-with-kubeadm"}},u={},o=[{value:"1. Prerequisite",id:"1-prerequisite",level:2},{value:"2. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130 \uc14b\uc5c5",id:"2-\ucfe0\ubc84\ub124\ud2f0\uc2a4-\ud074\ub7ec\uc2a4\ud130-\uc14b\uc5c5",level:2},{value:"3. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc14b\uc5c5",id:"3-\ucfe0\ubc84\ub124\ud2f0\uc2a4-\ud074\ub77c\uc774\uc5b8\ud2b8-\uc14b\uc5c5",level:2},{value:"4. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uae30\ubcf8 \ubaa8\ub4c8 \uc124\uce58",id:"4-\ucfe0\ubc84\ub124\ud2f0\uc2a4-\uae30\ubcf8-\ubaa8\ub4c8-\uc124\uce58",level:2},{value:"5. \uc815\uc0c1 \uc124\uce58 \ud655\uc778",id:"5-\uc815\uc0c1-\uc124\uce58-\ud655\uc778",level:2},{value:"6. References",id:"6-references",level:2}],p={toc:o},c="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-prerequisite"},"1. Prerequisite"),(0,a.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \uad6c\ucd95\ud558\uae30\uc5d0 \uc55e\uc11c, \ud544\uc694\ud55c \uad6c\uc131 \uc694\uc18c\ub4e4\uc744 ",(0,a.kt)("strong",{parentName:"p"},"\ud074\ub7ec\uc2a4\ud130\uc5d0")," \uc124\uce58\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/setup-kubernetes/install-prerequisite"},"Install Prerequisite"),"\uc744 \ucc38\uace0\ud558\uc5ec Kubernetes\ub97c \uc124\uce58\ud558\uae30 \uc804\uc5d0 \ud544\uc694\ud55c \uc694\uc18c\ub4e4\uc744 ",(0,a.kt)("strong",{parentName:"p"},"\ud074\ub7ec\uc2a4\ud130\uc5d0")," \uc124\uce58\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,a.kt)("p",null,"k3s \uc5d0\uc11c\ub294 \uae30\ubcf8\uac12\uc73c\ub85c containerd\ub97c \ubc31\uc5d4\ub4dc\ub85c \uc774\uc6a9\ud574 \uc124\uce58\ud569\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \uc800\ud76c\ub294 GPU\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c docker\ub97c \ubc31\uc5d4\ub4dc\ub85c \uc0ac\uc6a9\ud574\uc57c \ud558\ubbc0\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"--docker")," \uc635\uc158\uc744 \ud1b5\ud574 \ubc31\uc5d4\ub4dc\ub97c docker\ub85c \uc124\uce58\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.21.7+k3s1 sh -s - server --disable traefik --disable servicelb --disable local-storage --docker\n")),(0,a.kt)("p",null,"k3s\ub97c \uc124\uce58 \ud6c4 k3s config\ub97c \ud655\uc778\ud569\ub2c8\ub2e4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cat /etc/rancher/k3s/k3s.yaml\n")),(0,a.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub418\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ud56d\ubaa9\uc774 \ucd9c\ub825\ub429\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","(\ubcf4\uc548 \ubb38\uc81c\uc640 \uad00\ub828\ub41c \ud0a4\ub4e4\uc740 <...>\ub85c \uac00\ub838\uc2b5\ub2c8\ub2e4.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data:\n    <...>\n    server: https://127.0.0.1:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    client-certificate-data:\n    <...>\n    client-key-data:\n    <...>\n")),(0,a.kt)("h2",{id:"2-\ucfe0\ubc84\ub124\ud2f0\uc2a4-\ud074\ub7ec\uc2a4\ud130-\uc14b\uc5c5"},"2. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130 \uc14b\uc5c5"),(0,a.kt)("p",null,"k3s config\ub97c \ud074\ub7ec\uc2a4\ud130\uc758 kubeconfig\ub85c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c \ubcf5\uc0ac\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir .kube\nsudo cp /etc/rancher/k3s/k3s.yaml .kube/config\n")),(0,a.kt)("p",null,"\ubcf5\uc0ac\ub41c config \ud30c\uc77c\uc5d0 user\uac00 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \uad8c\ud55c\uc744 \uc90d\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown $USER:$USER .kube/config\n")),(0,a.kt)("h2",{id:"3-\ucfe0\ubc84\ub124\ud2f0\uc2a4-\ud074\ub77c\uc774\uc5b8\ud2b8-\uc14b\uc5c5"},"3. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc14b\uc5c5"),(0,a.kt)("p",null,"\uc774\uc81c \ud074\ub7ec\uc2a4\ud130\uc5d0\uc11c \uc124\uc815\ud55c kubeconfig\ub97c \ub85c\uceec\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.\n\ub85c\uceec\uc5d0\uc11c\ub294 \uacbd\ub85c\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),"\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ucc98\uc74c \ubcf5\uc0ac\ud55c config \ud30c\uc77c\uc5d0\ub294 server ip\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"https://127.0.0.1:6443")," \uc73c\ub85c \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc774 \uac12\uc744 \ud074\ub7ec\uc2a4\ud130\uc758 ip\uc5d0 \ub9de\uac8c \uc218\uc815\ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","(\uc774\ubc88 \ud398\uc774\uc9c0\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ud074\ub7ec\uc2a4\ud130\uc758 ip\uc5d0 \ub9de\ucdb0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"https://192.168.0.19:6443")," \uc73c\ub85c \uc218\uc815\ud588\uc2b5\ub2c8\ub2e4.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data:\n    <...>\n    server: https://192.168.0.19:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    client-certificate-data:\n    <...>\n    client-key-data:\n    <...>\n")),(0,a.kt)("h2",{id:"4-\ucfe0\ubc84\ub124\ud2f0\uc2a4-\uae30\ubcf8-\ubaa8\ub4c8-\uc124\uce58"},"4. \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uae30\ubcf8 \ubaa8\ub4c8 \uc124\uce58"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/setup-kubernetes/install-kubernetes-module"},"Setup Kubernetes Modules"),"\uc744 \ucc38\uace0\ud558\uc5ec \ub2e4\uc74c \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc744 \uc124\uce58\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"helm"),(0,a.kt)("li",{parentName:"ul"},"kustomize"),(0,a.kt)("li",{parentName:"ul"},"CSI plugin"),(0,a.kt)("li",{parentName:"ul"},"[Optional]"," nvidia-docker, nvidia-device-plugin")),(0,a.kt)("h2",{id:"5-\uc815\uc0c1-\uc124\uce58-\ud655\uc778"},"5. \uc815\uc0c1 \uc124\uce58 \ud655\uc778"),(0,a.kt)("p",null,"\ucd5c\uc885\uc801\uc73c\ub85c node\uac00 Ready \uc778\uc9c0, OS, Docker, Kubernetes \ubc84\uc804\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes -o wide\n")),(0,a.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ubcf4\uc774\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAME    STATUS   ROLES                  AGE   VERSION        INTERNAL-IP    EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION     CONTAINER-RUNTIME\nubuntu   Ready    control-plane,master   11m   v1.21.7+k3s1   192.168.0.19   <none>        Ubuntu 20.04.3 LTS   5.4.0-91-generic   docker://20.10.11\n")),(0,a.kt)("h2",{id:"6-references"},"6. References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/"},"https://rancher.com/docs/k3s/latest/en/installation/install-options/"))))}k.isMDXComponent=!0}}]);