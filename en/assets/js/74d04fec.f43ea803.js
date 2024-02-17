"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[7525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(n),b=s,m=c["".concat(i,".").concat(b)]||c[b]||d[b]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[c]="string"==typeof e?e:s,a[1]=u;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7462),s=(n(7294),n(3905));const o={title:"2. Setup Kubernetes",description:"Setup Kubernetes",sidebar_position:2,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-13T00:00:00.000Z"),contributors:["Jaeyeon Kim"]},a=void 0,u={unversionedId:"setup-kubernetes/kubernetes",id:"version-1.0/setup-kubernetes/kubernetes",title:"2. Setup Kubernetes",description:"Setup Kubernetes",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/setup-kubernetes/kubernetes.md",sourceDirName:"setup-kubernetes",slug:"/setup-kubernetes/kubernetes",permalink:"/mlops-for-all.github.io/en/docs/1.0/setup-kubernetes/kubernetes",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/setup-kubernetes/kubernetes.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708161574,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:2,frontMatter:{title:"2. Setup Kubernetes",description:"Setup Kubernetes",sidebar_position:2,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-13T00:00:00.000Z",contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"1. Introduction",permalink:"/mlops-for-all.github.io/en/docs/1.0/setup-kubernetes/intro"},next:{title:"3. Install Prerequisite",permalink:"/mlops-for-all.github.io/en/docs/1.0/setup-kubernetes/install-prerequisite"}},i={},l=[{value:"Setup Kubernetes Cluster",id:"setup-kubernetes-cluster",level:2}],p={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"setup-kubernetes-cluster"},"Setup Kubernetes Cluster"),(0,s.kt)("p",null,"For those learning Kubernetes for the first time, the first barrier to entry is setting up a Kubernetes practice environment."),(0,s.kt)("p",null,"The official tool that supports building a production-level Kubernetes cluster is kubeadm, but there are also tools such as kubespray and kops that help users set up more easily, and tools such as k3s, minikube, microk8s, and kind that help you set up a compact Kubernetes cluster easily for learning purposes."),(0,s.kt)("p",null,"Each tool has its own advantages and disadvantages, so considering the preferences of each user, this article will use three tools: kubeadm, k3s, and minikube to set up a Kubernetes cluster.\nFor detailed comparisons of each tool, please refer to the official Kubernetes ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/tasks/tools/"},"documentation"),"."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"MLOps for ALL")," recommends ",(0,s.kt)("strong",{parentName:"p"},"k3s")," as a tool that is easy to use when setting up a Kubernetes cluster."),(0,s.kt)("p",null,"If you want to use all the features of Kubernetes and configure the nodes, we recommend ",(0,s.kt)("strong",{parentName:"p"},"kubeadm"),".",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"minikube")," has the advantage of being able to easily install other Kubernetes in an add-on format, in addition to the components we describe."),(0,s.kt)("p",null,"In this ",(0,s.kt)("em",{parentName:"p"},"MLOps for ALL"),", in order to use the components that will be built for MLOps smoothly, there are additional settings that must be configured when building the Kubernetes cluster using each of the tools."),(0,s.kt)("p",null,"The scope of this ",(0,s.kt)("strong",{parentName:"p"},"Setup Kubernetes")," section is to build a k8s cluster on a desktop that already has Ubuntu OS installed and to confirm that external client nodes can access the Kubernetes cluster."),(0,s.kt)("p",null,"The detailed setup procedure is composed of the following flow, as each of the three tools has its own setup procedure."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"3. Setup Prerequisite\n4. Setup Kubernetes\n  4.1. with k3s\n  4.2. with minikube\n  4.3. with kubeadm\n5. Setup Kubernetes Modules\n")),(0,s.kt)("p",null,"Let's now build a Kubernetes cluster by using each of the tools. You don't have to use all the tools, and you can use the tools that you are familiar with."))}d.isMDXComponent=!0}}]);