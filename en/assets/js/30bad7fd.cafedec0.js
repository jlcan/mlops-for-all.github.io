"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[1684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={title:"4. Why Kubernetes?",description:"Reason for using k8s in MLOps",sidebar_position:4,date:new Date("2021-12-03T00:00:00.000Z"),lastmod:new Date("2021-12-10T00:00:00.000Z"),contributors:["Jaeyeon Kim"]},i=void 0,s={unversionedId:"introduction/why_kubernetes",id:"version-1.0/introduction/why_kubernetes",title:"4. Why Kubernetes?",description:"Reason for using k8s in MLOps",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/introduction/why_kubernetes.md",sourceDirName:"introduction",slug:"/introduction/why_kubernetes",permalink:"/en/docs/1.0/introduction/why_kubernetes",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/introduction/why_kubernetes.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162399,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:4,frontMatter:{title:"4. Why Kubernetes?",description:"Reason for using k8s in MLOps",sidebar_position:4,date:"2021-12-03T00:00:00.000Z",lastmod:"2021-12-10T00:00:00.000Z",contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"3. Components of MLOps",permalink:"/en/docs/1.0/introduction/component"},next:{title:"1. Introduction",permalink:"/en/docs/1.0/setup-kubernetes/intro"}},c={},l=[{value:"MLOps &amp; Kubernetes",id:"mlops--kubernetes",level:2},{value:"Container",id:"container",level:2},{value:"Container Orchestration System",id:"container-orchestration-system",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mlops--kubernetes"},"MLOps & Kubernetes"),(0,r.kt)("p",null,"When talking about MLOps, why is the word Kubernetes always heard together?"),(0,r.kt)("p",null,"To build a successful MLOps system, various components are needed as described in ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/1.0/introduction/component"},"Components of MLOps"),", but to operate them organically at the infrastructure level, there are many issues to be solved. For example, simply running a large number of machine learning model requests in order, ensuring the same execution environment in other workspaces, and responding quickly when a deployed service has a failure."),(0,r.kt)("p",null,"The need for containers and container orchestration systems appears here. With the introduction of container orchestration systems such as Kubernetes, efficient isolation and management of execution environments can be achieved. By introducing a container orchestration system, it is possible to prevent situations such as ",(0,r.kt)("em",{parentName:"p"},"'Is anyone using cluster 1?', 'Who killed my process that was using GPU?', 'Who updated the x package on the cluster?")," when developing and deploying machine learning models while a few developers share a small number of clusters."),(0,r.kt)("h2",{id:"container"},"Container"),(0,r.kt)("p",null,"Microsoft defines a container as follows: What is a container then? In Microsoft, a container is defined as ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/overview/what-is-a-container/"},"follows"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Container: Standardized, portable packaging of an application's code, libraries, and configuration files")),(0,r.kt)("p",null,"But why is a container needed for machine learning? Machine learning models can behave differently depending on the operating system, Python execution environment, package version, etc. To prevent this, the technology used to share and execute the entire dependent execution environment with the source code used in machine learning is called containerization technology. This packaged form is called a container image, and by sharing the container image, users can ensure the same execution results on any system. In other words, by sharing not just the Jupyter Notebook file or the source code and requirements.txt file of the model, but the entire container image with the execution environment, you can avoid situations such as ",(0,r.kt)("em",{parentName:"p"},'"It works on my notebook, why not yours?"'),"."),(0,r.kt)("p",null,'One translation of the Korean sentence to English is: "One of the common misunderstandings that people who are new to containers often make is to assume that "container == Docker". Docker is not a concept that has the same meaning as containers; rather, it is a tool that provides features to make it easier and more flexible to use containers, such as launching containers and creating and sharing container images. In summary, container is a virtualization technology, and Docker is an implementation of virtualization technology.'),(0,r.kt)("p",null,"However, Docker has become the mainstream quickly due to its easy usability and high efficiency among various container virtualization tools, so when people think of containers, they often think of Docker automatically. There are various reasons why the container and Docker ecosystem have become the mainstream, but for technical reasons, I won't go into that detail since it is outside the scope of Everybody's MLOps."),(0,r.kt)("h2",{id:"container-orchestration-system"},"Container Orchestration System"),(0,r.kt)("p",null,'Then what is a container orchestration system? As inferred from the word "orchestration," it can be compared to a system that coordinates the operation of numerous containers to work together harmoniously.'),(0,r.kt)("p",null,"In container-based systems, services are provided to users in the form of containers. If the number of containers to be managed is small, a single operator can sufficiently handle all situations. However, if there are hundreds of containers running in dozens of clusters and they need to function continuously without causing any failures, it becomes nearly impossible for a single operator to monitor the proper functioning of all services and respond to issues."),(0,r.kt)("p",null,"For example, continuous monitoring is required to ensure that all services are functioning properly. If a specific service experiences a failure, the operator needs to investigate the problem by examining the logs of multiple containers. Additionally, they need to handle various tasks such as scheduling and load balancing to prevent work overload on specific clusters or containers, as well as scaling operations."),(0,r.kt)("p",null,"A container orchestration system is software that provides functionality to manage and operate the states of numerous containers continuously and automatically, making the process of managing and operating a large number of containers somewhat easier."),(0,r.kt)("p",null,"How can it be used in machine learning? For example, a container that packages deep learning training code that requires a GPU can be executed on a cluster with available GPUs. A container that packages data preprocessing code requiring a large amount of memory can be executed on a cluster with ample memory. If there is an issue with the cluster during training, the system can automatically move the same container to a different cluster and continue the training, eliminating the need for manual intervention. Developing such a system that automates management without requiring manual intervention is the goal."),(0,r.kt)("p",null,"As of the writing of this text in 2022, Kubernetes is considered the de facto standard for container orchestration systems."),(0,r.kt)("p",null,"According to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.cncf.io/blog/2018/08/29/cncf-survey-use-of-cloud-native-technologies-in-production-has-grown-over-200-percent/"},"survey")," released by CNCF in 2018, Kubernetes was already showing its prominence. The ",(0,r.kt)("a",{parentName:"p",href:"https://www.cncf.io/wp-content/uploads/2020/08/CNCF_Survey_Report.pdf"},"survey")," published in 2019 indicates that 78% of respondents were using Kubernetes at a production level."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"k8s-graph",src:n(850).Z,width:"2048",height:"1317"})),(0,r.kt)("p",null,'The growth of the Kubernetes ecosystem can be attributed to various reasons. However, similar to Docker, Kubernetes is not exclusively limited to machine learning-based services. Since delving into detailed technical content would require a substantial amount of discussion, this edition of "MLOps for ALL" will omit the detailed explanation of Kubernetes.'))}p.isMDXComponent=!0},850:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/k8s-graph-4320bbc5bf9fc0dccdeb1edc0157e8ec.png"}}]);