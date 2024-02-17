"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[6005],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,k=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8580:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={title:"3. Install Prerequisite",description:"Install docker",sidebar_position:3,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-20T00:00:00.000Z"),contributors:["Jaeyeon Kim","Jongsun Shinn","Sangwoo Shim"]},l=void 0,s={unversionedId:"setup-kubernetes/install-prerequisite",id:"version-1.0/setup-kubernetes/install-prerequisite",title:"3. Install Prerequisite",description:"Install docker",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/setup-kubernetes/install-prerequisite.md",sourceDirName:"setup-kubernetes",slug:"/setup-kubernetes/install-prerequisite",permalink:"/mlops-for-all/en/docs/1.0/setup-kubernetes/install-prerequisite",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/setup-kubernetes/install-prerequisite.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708161852,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:3,frontMatter:{title:"3. Install Prerequisite",description:"Install docker",sidebar_position:3,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-20T00:00:00.000Z",contributors:["Jaeyeon Kim","Jongsun Shinn","Sangwoo Shim"]},sidebar:"tutorialSidebar",previous:{title:"2. Setup Kubernetes",permalink:"/mlops-for-all/en/docs/1.0/setup-kubernetes/kubernetes"},next:{title:"4.1. K3s",permalink:"/mlops-for-all/en/docs/1.0/setup-kubernetes/install-kubernetes/kubernetes-with-k3s"}},i={},u=[{value:"Install apt packages",id:"install-apt-packages",level:2},{value:"Install Docker",id:"install-docker",level:2},{value:"Turn off Swap Memory",id:"turn-off-swap-memory",level:2},{value:"Install Kubectl",id:"install-kubectl",level:2},{value:"References",id:"references",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On this page, we describe the components that need to be installed or configured on the ",(0,r.kt)("strong",{parentName:"p"},"Cluster")," and ",(0,r.kt)("strong",{parentName:"p"},"Client")," prior to installing Kubernetes."),(0,r.kt)("h2",{id:"install-apt-packages"},"Install apt packages"),(0,r.kt)("p",null,"In order to enable smooth communication between the Client and the Cluster, Port-Forwarding needs to be performed. To enable Port-Forwarding, the following packages need to be installed on the ",(0,r.kt)("strong",{parentName:"p"},"Cluster"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install -y socat\n")),(0,r.kt)("h2",{id:"install-docker"},"Install Docker"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install apt packages for docker."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update && sudo apt-get install -y ca-certificates curl gnupg lsb-release\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"add docker official GPG key."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When installing Docker using the apt package manager, configure it to retrieve from the stable repository:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo \\\n"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\\n$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the currently available Docker versions for installation:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update && apt-cache madison docker-ce\n")),(0,r.kt)("p",{parentName:"li"},"Verify if the version ",(0,r.kt)("inlineCode",{parentName:"p"},"5:20.10.11~3-0~ubuntu-focal")," is listed among the output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt-cache madison docker-ce | grep 5:20.10.11~3-0~ubuntu-focal\n")),(0,r.kt)("p",{parentName:"li"},"If the addition was successful, the following output will be displayed:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-ce | 5:20.10.11~3-0~ubuntu-focal | https://download.docker.com/linux/ubuntu focal/stable amd64 Packages\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Docker version ",(0,r.kt)("inlineCode",{parentName:"p"},"5:20.10.11~3-0~ubuntu-focal"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y containerd.io docker-ce=5:20.10.11~3-0~ubuntu-focal docker-ce-cli=5:20.10.11~3-0~ubuntu-focal\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check docker is installed."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run hello-world\n")))),(0,r.kt)("p",null,"   If added successfully, it will output as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mlops@ubuntu:~$ sudo docker run hello-world\n\nHello from Docker!\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n1. The Docker client contacted the Docker daemon.\n2. The Docker daemon pulled the "hello-world" image from the Docker Hub.\n   (amd64)\n3. The Docker daemon created a new container from that image which runs the\n   executable that produces the output you are currently reading.\n4. The Docker daemon streamed that output to the Docker client, which sent it\n   to your terminal.\n\nTo try something more ambitious, you can run an Ubuntu container with:\n$ docker run -it ubuntu bash\n\nShare images, automate workflows, and more with a free Docker ID:\nhttps://hub.docker.com/\n\nFor more examples and ideas, visit:\nhttps://docs.docker.com/get-started/\n')),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add permissions to use Docker commands without the ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo")," keyword by executing the following commands:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo groupadd docker\nsudo usermod -aG docker $USER\nnewgrp docker\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To verify that you can now use Docker commands without ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo"),", run the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command again:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run hello-world\n")),(0,r.kt)("p",{parentName:"li"},"If you see the following message after executing the command, it means that the permissions have been successfully added:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'mlops@ubuntu:~$ docker run hello-world\n\nHello from Docker!\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n1. The Docker client contacted the Docker daemon.\n2. The Docker daemon pulled the "hello-world" image from the Docker Hub.\n   (amd64)\n3. The Docker daemon created a new container from that image which runs the\n   executable that produces the output you are currently reading.\n4. The Docker daemon streamed that output to the Docker client, which sent it\n   to your terminal.\n\nTo try something more ambitious, you can run an Ubuntu container with:\n$ docker run -it ubuntu bash\n\nShare images, automate workflows, and more with a free Docker ID:\nhttps://hub.docker.com/\n\nFor more examples and ideas, visit:\nhttps://docs.docker.com/get-started/\n')))),(0,r.kt)("h2",{id:"turn-off-swap-memory"},"Turn off Swap Memory"),(0,r.kt)("p",null,"In order for kubelet to work properly, ",(0,r.kt)("strong",{parentName:"p"},"cluster")," nodes must turn off the virtual memory called swap. The following command turns off the swap.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"(When using cluster and client on the same desktop, turning off swap memory may result in a slowdown in speed)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sed -i '/ swap / s/^\\(.*\\)$/#\\1/g' /etc/fstab\nsudo swapoff -a\n")),(0,r.kt)("h2",{id:"install-kubectl"},"Install Kubectl"),(0,r.kt)("p",null,"kubectl is a client tool used to make API requests to a Kubernetes cluster. It needs to be installed on the client node."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download kubectl version v1.21.7 to the current folder:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LO https://dl.k8s.io/release/v1.21.7/bin/linux/amd64/kubectl\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the file permissions and move it to the appropriate location to make kubectl executable:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify that kubectl is installed correctly:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl version --client\n")),(0,r.kt)("p",{parentName:"li"},"If you see the following message, it means that kubectl is installed successfully:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Client Version: version.Info{Major:"1", Minor:"21", GitVersion:"v1.21.7", GitCommit:"1f86634ff08f37e54e8bfcd86bc90b61c98f84d4", GitTreeState:"clean", BuildDate:"2021-11-17T14:41:19Z", GoVersion:"go1.16.10", Compiler:"gc", Platform:"linux/amd64"}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you work with multiple Kubernetes clusters and need to manage multiple kubeconfig files or kube-contexts efficiently, you can refer to the following resources:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/aabiseverywhere/configuring-multiple-kubeconfig-on-your-machine-59eo"},"Configuring Multiple kubeconfig on Your Machine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ahmetb/kubectx"},"kubectx - Switch between Kubernetes contexts easily"))))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/"},"Install Docker Engine on Ubuntu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/"},"Install and Set Up kubectl on Linux"))))}m.isMDXComponent=!0}}]);