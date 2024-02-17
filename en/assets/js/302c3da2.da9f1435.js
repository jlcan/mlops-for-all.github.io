"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[7189],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>f});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(l),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return l?n.createElement(f,o(o({ref:t},c),{},{components:l})):n.createElement(f,o({ref:t},c))}));function f(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=l[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},6928:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=l(7462),a=(l(7294),l(3905));const r={title:"2. MLflow Tracking Server",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - MLflow",sidebar_position:2,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-13T00:00:00.000Z"),contributors:["Jaeyeon Kim"]},o=void 0,s={unversionedId:"setup-components/install-components-mlflow",id:"setup-components/install-components-mlflow",title:"2. MLflow Tracking Server",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - MLflow",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/setup-components/install-components-mlflow.md",sourceDirName:"setup-components",slug:"/setup-components/install-components-mlflow",permalink:"/en/docs/setup-components/install-components-mlflow",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/setup-components/install-components-mlflow.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162399,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:2,frontMatter:{title:"2. MLflow Tracking Server",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - MLflow",sidebar_position:2,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-13T00:00:00.000Z",contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"1. Kubeflow",permalink:"/en/docs/setup-components/install-components-kf"},next:{title:"3. Seldon-Core",permalink:"/en/docs/setup-components/install-components-seldon"}},i={},p=[{value:"Install MLflow Tracking Server",id:"install-mlflow-tracking-server",level:2},{value:"Before Install MLflow Tracking Server",id:"before-install-mlflow-tracking-server",level:2},{value:"Install PostgreSQL DB",id:"install-postgresql-db",level:3},{value:"Setup Minio",id:"setup-minio",level:3},{value:"Let&#39;s Install MLflow Tracking Server",id:"lets-install-mlflow-tracking-server",level:2},{value:"Add Helm Repository",id:"add-helm-repository",level:3},{value:"Update Helm Repository",id:"update-helm-repository",level:3},{value:"Helm Install",id:"helm-install",level:3},{value:"Check installation",id:"check-installation",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-mlflow-tracking-server"},"Install MLflow Tracking Server"),(0,a.kt)("p",null,"MLflow is a popular open-source ML experiment management tool. In addition to ",(0,a.kt)("a",{parentName:"p",href:"https://mlflow.org/docs/latest/tracking.html#tracking"},"experiment management"),", MLflow provides functionalities for ML ",(0,a.kt)("a",{parentName:"p",href:"https://mlflow.org/docs/latest/projects.html#projects"},"model packaging"),", ",(0,a.kt)("a",{parentName:"p",href:"https://mlflow.org/docs/latest/models.html#models"},"deployment management"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://mlflow.org/docs/latest/model-registry.html#registry"},"model storage"),"."),(0,a.kt)("p",null,"In ",(0,a.kt)("em",{parentName:"p"},"MLOps for ALL"),", we will be using MLflow for experiment management purposes.",(0,a.kt)("br",{parentName:"p"}),"\n","o store the data managed by MLflow and provide a user interface, we will deploy the MLflow Tracking Server on the Kubernetes cluster."),(0,a.kt)("h2",{id:"before-install-mlflow-tracking-server"},"Before Install MLflow Tracking Server"),(0,a.kt)("h3",{id:"install-postgresql-db"},"Install PostgreSQL DB"),(0,a.kt)("p",null,"MLflow Tracking Server deploys a PostgreSQL DB for use as a Backend Store to a Kubernetes cluster."),(0,a.kt)("p",null,"First, create a namespace called ",(0,a.kt)("inlineCode",{parentName:"p"},"mlflow-system"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns mlflow-system\n")),(0,a.kt)("p",null,"If the following message is output, it means that it has been generated normally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"namespace/mlflow-system created\n")),(0,a.kt)("p",null,"Create a Postgresql DB in the ",(0,a.kt)("inlineCode",{parentName:"p"},"mlflow-system")," namespace."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n mlflow-system apply -f https://raw.githubusercontent.com/mlops-for-all/helm-charts/b94b5fe4133f769c04b25068b98ccfa7a505aa60/mlflow/manifests/postgres.yaml \n")),(0,a.kt)("p",null,"If performed normally, it will be outputted as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"service/postgresql-mlflow-service created\ndeployment.apps/postgresql-mlflow created\npersistentvolumeclaim/postgresql-mlflow-pvc created\n")),(0,a.kt)("p",null,"Wait until one postgresql related pod is running in the mlflow-system namespace."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n mlflow-system | grep postgresql\n")),(0,a.kt)("p",null,"If it is output similar to the following, it has executed normally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"postgresql-mlflow-7b9bc8c79f-srkh7   1/1     Running   0          38s\n")),(0,a.kt)("h3",{id:"setup-minio"},"Setup Minio"),(0,a.kt)("p",null,"We will utilize the Minio that was installed in the previous Kubeflow installation step.\nHowever, in order to separate it for kubeflow and mlflow purposes, we will create a mlflow-specific bucket.",(0,a.kt)("br",{parentName:"p"}),"\n","First, port-forward the minio-service to access Minio and create the bucket."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/minio-service -n kubeflow 9000:9000\n")),(0,a.kt)("p",null,"Open a web browser and connect to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:9000"},"localhost:9000")," to display the following screen."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"minio-install",src:l(4642).Z,width:"2906",height:"1946"})),(0,a.kt)("p",null,"Enter the following credentials to log in: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Username: ",(0,a.kt)("inlineCode",{parentName:"li"},"minio")),(0,a.kt)("li",{parentName:"ul"},"Password: ",(0,a.kt)("inlineCode",{parentName:"li"},"minio123"))),(0,a.kt)("p",null,"Click the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"+"))," button on the right side bottom, then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Bucket"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-bucket",src:l(1817).Z,width:"2902",height:"1950"})),(0,a.kt)("p",null,"Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"mlflow")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"Bucket Name")," to create the bucket."),(0,a.kt)("p",null,"If successfully created, you will see a bucket named ",(0,a.kt)("inlineCode",{parentName:"p"},"mlflow")," on the left.\n",(0,a.kt)("img",{alt:"mlflow-bucket",src:l(1047).Z,width:"2902",height:"1950"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"lets-install-mlflow-tracking-server"},"Let's Install MLflow Tracking Server"),(0,a.kt)("h3",{id:"add-helm-repository"},"Add Helm Repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add mlops-for-all https://mlops-for-all.github.io/helm-charts\n")),(0,a.kt)("p",null,"If the following message is displayed, it means it has been added successfully."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'"mlops-for-all" has been added to your repositories\n')),(0,a.kt)("h3",{id:"update-helm-repository"},"Update Helm Repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\n")),(0,a.kt)("p",null,"If the following message is displayed, it means that the update has been successfully completed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Hang tight while we grab the latest from your chart repositories...\n...Successfully got an update from the "mlops-for-all" chart repository\nUpdate Complete. \u2388Happy Helming!\u2388\n')),(0,a.kt)("h3",{id:"helm-install"},"Helm Install"),(0,a.kt)("p",null,"Install mlflow-server Helm Chart version 0.2.0."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm install mlflow-server mlops-for-all/mlflow-server \\\n  --namespace mlflow-system \\\n  --version 0.2.0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The above Helm chart installs MLflow with the connection information for its backend store and artifacts store set to the default minio created during the Kubeflow installation process and the postgresql information created from the ",(0,a.kt)("a",{parentName:"li",href:"#postgresql-db-installation"},"PostgreSQL DB installation")," above.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you want to use a separate DB or object storage, please refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mlops-for-all/helm-charts/tree/main/mlflow/chart"},"Helm Chart Repo")," and set the values separately during helm install.")))),(0,a.kt)("p",null,"The following message should be displayed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAME: mlflow-server\nLAST DEPLOYED: Sat Dec 18 22:02:13 2021\nNAMESPACE: mlflow-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n")),(0,a.kt)("p",null,"Check to see if it was installed normally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n mlflow-system | grep mlflow-server\n")),(0,a.kt)("p",null,"Wait until one mlflow-server related pod is running in the mlflow-system namespace.",(0,a.kt)("br",{parentName:"p"}),"\n","If it is output similar to the following, then it has been successfully executed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mlflow-server-ffd66d858-6hm62        1/1     Running   0          74s\n")),(0,a.kt)("h3",{id:"check-installation"},"Check installation"),(0,a.kt)("p",null,"Let's now check if we can successfully connect to the MLflow Server."),(0,a.kt)("p",null,"First, we will perform port forwarding in order to connect from the client node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/mlflow-server-service -n mlflow-system 5000:5000\n")),(0,a.kt)("p",null,"Open a web browser and connect to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:5000"},"localhost:5000")," and the following screen will be output."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mlflow-install",src:l(2852).Z,width:"2882",height:"1464"})))}u.isMDXComponent=!0},1817:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/create-bucket-58bd2a673744c0144ffb14a2aeeef821.png"},4642:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/minio-install-587ecd302eecc621dbb568c124c80ccf.png"},1047:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/mlflow-bucket-63b427bd7a5147b8bae2ac69c57facff.png"},2852:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/mlflow-install-b3920befde2af7fdbf3677ab12036440.png"}}]);