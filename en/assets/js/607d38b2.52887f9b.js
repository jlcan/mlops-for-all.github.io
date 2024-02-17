"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[9945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),b=a,k=p["".concat(o,".").concat(b)]||p[b]||d[b]||l;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=b;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:a,s[1]=u;for(var i=2;i<l;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const l={title:"4.3. Kubeadm",description:"",sidebar_position:3,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-20T00:00:00.000Z"),contributors:["Youngcheol Jang"]},s=void 0,u={unversionedId:"setup-kubernetes/install-kubernetes/kubernetes-with-kubeadm",id:"setup-kubernetes/install-kubernetes/kubernetes-with-kubeadm",title:"4.3. Kubeadm",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/setup-kubernetes/install-kubernetes/kubernetes-with-kubeadm.md",sourceDirName:"setup-kubernetes/install-kubernetes",slug:"/setup-kubernetes/install-kubernetes/kubernetes-with-kubeadm",permalink:"/mlops-for-all.github.io/en/docs/setup-kubernetes/install-kubernetes/kubernetes-with-kubeadm",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/setup-kubernetes/install-kubernetes/kubernetes-with-kubeadm.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708161574,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:3,frontMatter:{title:"4.3. Kubeadm",description:"",sidebar_position:3,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-20T00:00:00.000Z",contributors:["Youngcheol Jang"]},sidebar:"tutorialSidebar",previous:{title:"4.1. K3s",permalink:"/mlops-for-all.github.io/en/docs/setup-kubernetes/install-kubernetes/kubernetes-with-k3s"},next:{title:"4.2. Minikube",permalink:"/mlops-for-all.github.io/en/docs/setup-kubernetes/install-kubernetes/kubernetes-with-minikube"}},o={},i=[{value:"1. Prerequisite",id:"1-prerequisite",level:2},{value:"2. Setup Kubernetes Cluster",id:"2-setup-kubernetes-cluster",level:2},{value:"3. Setup Kubernetes Client",id:"3-setup-kubernetes-client",level:2},{value:"4. Install Kubernetes Default Modules",id:"4-install-kubernetes-default-modules",level:2},{value:"5. Verify Successful Installation",id:"5-verify-successful-installation",level:2},{value:"6. References",id:"6-references",level:2}],c={toc:i},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-prerequisite"},"1. Prerequisite"),(0,a.kt)("p",null,"Before building a Kubernetes cluster, install the necessary components to the ",(0,a.kt)("strong",{parentName:"p"},"cluster"),"."),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/mlops-for-all.github.io/en/docs/setup-kubernetes/install-prerequisite"},"Install Prerequisite")," and install the necessary components to the ",(0,a.kt)("strong",{parentName:"p"},"cluster"),"."),(0,a.kt)("p",null,"Change the configuration of the network for Kubernetes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo modprobe br_netfilter\n\ncat <<EOF | sudo tee /etc/modules-load.d/k8s.conf\nbr_netfilter\nEOF\n\ncat <<EOF | sudo tee /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nEOF\nsudo sysctl --system\n")),(0,a.kt)("h2",{id:"2-setup-kubernetes-cluster"},"2. Setup Kubernetes Cluster"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kubeadm : Automates the installation process by registering kubelet as a service and issuing certificates for communication between cluster components."),(0,a.kt)("li",{parentName:"ul"},"kubelet : Container handler responsible for starting and stopping container resources."),(0,a.kt)("li",{parentName:"ul"},"kubectl : CLI tool used to interact with and manage Kubernetes clusters from the terminal.")),(0,a.kt)("p",null,"Install kubeadm, kubelet, and kubectl using the following commands. It's important to prevent accidental changes to the versions of these components, as it can lead to unexpected issues."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get update\nsudo apt-get install -y apt-transport-https ca-certificates curl &&\nsudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg &&\necho "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list &&\nsudo apt-get update\nsudo apt-get install -y kubelet=1.21.7-00 kubeadm=1.21.7-00 kubectl=1.21.7-00 &&\nsudo apt-mark hold kubelet kubeadm kubectl\n')),(0,a.kt)("p",null,"Check if kubeadm, kubelet, and kubectl are installed correctly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'mlops@ubuntu:~$ kubeadm version\nkubeadm version: &version.Info{Major:"1", Minor:"21", GitVersion:"v1.21.7", GitCommit:"1f86634ff08f37e54e8bfcd86bc90b61c98f84d4", GitTreeState:"clean", BuildDate:"2021-11-17T14:40:08Z", GoVersion:"go1.16.10", Compiler:"gc", Platform:"linux/amd64"}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mlops@ubuntu:~$ kubelet --version\nKubernetes v1.21.7\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'mlops@ubuntu:~$ kubectl version --client\nClient Version: version.Info{Major:"1", Minor:"21", GitVersion:"v1.21.7", GitCommit:"1f86634ff08f37e54e8bfcd86bc90b61c98f84d4", GitTreeState:"clean", BuildDate:"2021-11-17T14:41:19Z", GoVersion:"go1.16.10", Compiler:"gc", Platform:"linux/amd64"}\n')),(0,a.kt)("p",null,"Now we will use kubeadm to install Kubernetes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubeadm config images list\nkubeadm config images pull\n\nsudo kubeadm init --pod-network-cidr=10.244.0.0/16\n")),(0,a.kt)("p",null,"Through kubectl, copy the admin certificate to the path $HOME/.kube/config to control the Kubernetes cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $HOME/.kube\nsudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\nsudo chown $(id -u):$(id -g) $HOME/.kube/config\n")),(0,a.kt)("p",null,"Install CNI. There are various kinds of CNI, which is responsible for setting up the network inside Kubernetes, and in ",(0,a.kt)("em",{parentName:"p"},"MLOps for All"),", flannel is used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/v0.13.0/Documentation/kube-flannel.yml\n")),(0,a.kt)("p",null,"There are two types of Kubernetes nodes: ",(0,a.kt)("inlineCode",{parentName:"p"},"Master Node")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Worker Node"),". For stability, it is generally recommended that only tasks to control the Kubernetes cluster are run on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Master Node"),", however this manual assumes a single cluster, so all types of tasks can be run on the Master Node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl taint nodes --all node-role.kubernetes.io/master-\n")),(0,a.kt)("h2",{id:"3-setup-kubernetes-client"},"3. Setup Kubernetes Client"),(0,a.kt)("p",null,"Copy the kubeconfig file created in the cluster to the ",(0,a.kt)("strong",{parentName:"p"},"client")," to control the cluster through kubectl."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $HOME/.kube\nscp -p {CLUSTER_USER_ID}@{CLUSTER_IP}:~/.kube/config ~/.kube/config\n")),(0,a.kt)("h2",{id:"4-install-kubernetes-default-modules"},"4. Install Kubernetes Default Modules"),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/mlops-for-all.github.io/en/docs/setup-kubernetes/install-kubernetes-module"},"Setup Kubernetes Modules")," to install the following components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"helm"),(0,a.kt)("li",{parentName:"ul"},"kustomize"),(0,a.kt)("li",{parentName:"ul"},"CSI plugin"),(0,a.kt)("li",{parentName:"ul"},"[Optional]"," nvidia-docker, nvidia-device-plugin")),(0,a.kt)("h2",{id:"5-verify-successful-installation"},"5. Verify Successful Installation"),(0,a.kt)("p",null,"Finally, check if the nodes are Ready and verify the OS, Docker, and Kubernetes versions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes\n")),(0,a.kt)("p",null,'When the node is in the "Ready" state, the output will be similar to the following:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAME     STATUS   ROLES                  AGE     VERSION\nubuntu   Ready    control-plane,master   2m55s   v1.21.7\n")),(0,a.kt)("h2",{id:"6-references"},"6. References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm"},"kubeadm"))))}d.isMDXComponent=!0}}]);