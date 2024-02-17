"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[2570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(m,r(r({ref:t},s),{},{components:n})):o.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={title:"2. Kubeflow Concepts",description:"",sidebar_position:2,contributors:["Jongseob Jeon"]},r=void 0,l={unversionedId:"kubeflow/kubeflow-concepts",id:"kubeflow/kubeflow-concepts",title:"2. Kubeflow Concepts",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/kubeflow/kubeflow-concepts.md",sourceDirName:"kubeflow",slug:"/kubeflow/kubeflow-concepts",permalink:"/en/docs/kubeflow/kubeflow-concepts",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow/kubeflow-concepts.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162399,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:2,frontMatter:{title:"2. Kubeflow Concepts",description:"",sidebar_position:2,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"1. Kubeflow Introduction",permalink:"/en/docs/kubeflow/kubeflow-intro"},next:{title:"3. Install Requirements",permalink:"/en/docs/kubeflow/basic-requirements"}},c={},p=[{value:"Component",id:"component",level:2},{value:"Component Contents",id:"component-contents",level:3},{value:"Component Wrapper",id:"component-wrapper",level:3},{value:"Artifacts",id:"artifacts",level:3},{value:"Model",id:"model",level:4},{value:"Data",id:"data",level:4},{value:"Metric",id:"metric",level:4},{value:"Pipeline",id:"pipeline",level:2},{value:"Pipeline Config",id:"pipeline-config",level:3},{value:"Run",id:"run",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,o.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"component"},"Component"),(0,a.kt)("p",null,"A component is composed of Component contents and a Component wrapper.\nA single component is delivered to Kubeflow through a Component wrapper and the delivered component executes the defined Component contents and produces artifacts."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"concept-0.png",src:n(4032).Z,width:"1392",height:"704"})),(0,a.kt)("h3",{id:"component-contents"},"Component Contents"),(0,a.kt)("p",null,"There are three components that make up the component contents:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"concept-1.png",src:n(9667).Z,width:"574",height:"436"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Environment"),(0,a.kt)("li",{parentName:"ol"},"Python code w/ Config"),(0,a.kt)("li",{parentName:"ol"},"Generates Artifacts")),(0,a.kt)("p",null,"Let's explore each component with an example.\nHere is a Python code that loads data, trains an SVC (Support Vector Classifier) model, and saves the SVC model."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import dill\nimport pandas as pd\n\nfrom sklearn.svm import SVC\n\ntrain_data = pd.read_csv(train_data_path)\ntrain_target= pd.read_csv(train_target_path)\n\nclf= SVC(\n    kernel=kernel\n)\nclf.fit(train_data)\n\nwith open(model_path, mode="wb") as file_writer:\n     dill.dump(clf, file_writer)\n')),(0,a.kt)("p",null,"The above Python code can be divided into components contents as follows."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"concept-2.png",src:n(5319).Z,width:"832",height:"410"})),(0,a.kt)("p",null,"Environment is the part of the Python code where the packages used in the code are imported.",(0,a.kt)("br",{parentName:"p"}),"\n","Next, Python Code w\\ Config is where the given Config is used to actually perform the training.",(0,a.kt)("br",{parentName:"p"}),"\n","Finally, there is a process to save the artifacts.  "),(0,a.kt)("h3",{id:"component-wrapper"},"Component Wrapper"),(0,a.kt)("p",null,"Component wrappers deliver the necessary Config and execute tasks for component content."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"concept-3.png",src:n(6617).Z,width:"1066",height:"766"})),(0,a.kt)("p",null,"In Kubeflow, component wrappers are defined as functions, similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"train_svc_from_csv")," example above.\nWhen a component wrapper wraps the contents, it looks like the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"concept-4.png",src:n(3954).Z,width:"464",height:"826"})),(0,a.kt)("h3",{id:"artifacts"},"Artifacts"),(0,a.kt)("p",null,"In the explanation above, it was mentioned that the component creates Artifacts. Artifacts is a term used to refer to any form of a file that is generated, such as evaluation results, logs, etc.\nOf the ones that we are interested in, the following are significant: Models, Data, Metrics, and etc."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"concept-5.png",src:n(4445).Z,width:"1700",height:"454"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Model"),(0,a.kt)("li",{parentName:"ul"},"Data"),(0,a.kt)("li",{parentName:"ul"},"Metric"),(0,a.kt)("li",{parentName:"ul"},"etc")),(0,a.kt)("h4",{id:"model"},"Model"),(0,a.kt)("p",null,"We defined the model as follows: "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A model is a form that includes Python code, trained weights and network architecture, and an environment to run it.")),(0,a.kt)("h4",{id:"data"},"Data"),(0,a.kt)("p",null,"Data includes preprocessed features, model predictions, etc. "),(0,a.kt)("h4",{id:"metric"},"Metric"),(0,a.kt)("p",null,"Metric is divided into two categories: dynamic metrics and static metrics."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dynamic metrics refer to values that continuously change during the training process, such as train loss per epoch."),(0,a.kt)("li",{parentName:"ul"},"Static metrics refer to evaluation metrics, such as accuracy, that are calculated after the training is completed.")),(0,a.kt)("h2",{id:"pipeline"},"Pipeline"),(0,a.kt)("p",null,"A pipeline consists of a collection of components and the order in which they are executed. The order forms a directed acyclic graph (DAG), which can include simple conditional statements."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"concept-6.png",src:n(6443).Z,width:"1696",height:"746"})),(0,a.kt)("h3",{id:"pipeline-config"},"Pipeline Config"),(0,a.kt)("p",null,"As mentioned earlier, components require config to be executed. The pipeline config contains the configs for all the components in the pipeline."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"concept-7.png",src:n(7013).Z,width:"1810",height:"432"})),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("p",null,'To execute a pipeline, the pipeline config specific to that pipeline is required. In Kubeflow, an executed pipeline is called a "Run."'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"concept-8.png",src:n(6719).Z,width:"1810",height:"576"})),(0,a.kt)("p",null,"When a pipeline is executed, each component generates artifacts. Kubeflow pipeline assigns a unique ID to each Run, and all artifacts generated during the Run are stored."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"concept-9.png",src:n(9382).Z,width:"1810",height:"592"})),(0,a.kt)("p",null,"Now, let's learn how to write components and pipelines."))}u.isMDXComponent=!0},4032:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-0-c3636a3fe20bb4a74d64d8565b4a51d9.png"},9667:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-1-887ac07d1b11b84ee3fc5d7b882ad4bc.png"},5319:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-2-00e4917a1ec11cff7fc7a3b00c75a9e9.png"},6617:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-3-0916d8982b42a638e986fd955f4b5fd0.png"},3954:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-4-3e6a8ee159e889b5e1bffc58dbb24b85.png"},4445:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-5-31eb60d97518af020d18d30e3b5c5d16.png"},6443:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-6-db0ab4d56f11dcad062bb89374f7ff5b.png"},7013:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-7-277a9b30da3a2fc3519d3453964c5d52.png"},6719:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-8-2350dff71d7f031b8cce3b73f8fd4381.png"},9382:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concept-9-f366186846ec1d019b742bf478928f80.png"}}]);