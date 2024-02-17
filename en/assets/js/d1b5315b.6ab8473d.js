"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[9680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={title:"3. Components of MLOps",description:"Describe MLOps Components",sidebar_position:3,date:new Date("2021-12-03T00:00:00.000Z"),lastmod:new Date("2021-12-10T00:00:00.000Z"),contributors:["Youngcheol Jang"]},r=void 0,l={unversionedId:"introduction/component",id:"version-1.0/introduction/component",title:"3. Components of MLOps",description:"Describe MLOps Components",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/introduction/component.md",sourceDirName:"introduction",slug:"/introduction/component",permalink:"/mlops-for-all.github.io/en/docs/1.0/introduction/component",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/introduction/component.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162146,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:3,frontMatter:{title:"3. Components of MLOps",description:"Describe MLOps Components",sidebar_position:3,date:"2021-12-03T00:00:00.000Z",lastmod:"2021-12-10T00:00:00.000Z",contributors:["Youngcheol Jang"]},sidebar:"tutorialSidebar",previous:{title:"2. Levels of MLOps",permalink:"/mlops-for-all.github.io/en/docs/1.0/introduction/levels"},next:{title:"4. Why Kubernetes?",permalink:"/mlops-for-all.github.io/en/docs/1.0/introduction/why_kubernetes"}},s={},p=[{value:"Practitioners guide to MLOps",id:"practitioners-guide-to-mlops",level:2},{value:"1. Experimentation",id:"1-experimentation",level:3},{value:"2. Data Processing",id:"2-data-processing",level:3},{value:"3. Model Training",id:"3-model-training",level:3},{value:"4. Model Evaluation",id:"4-model-evaluation",level:3},{value:"5. Model Serving",id:"5-model-serving",level:3},{value:"6. Online Experimentation",id:"6-online-experimentation",level:3},{value:"7. Model Monitoring",id:"7-model-monitoring",level:3},{value:"8. ML Pipeline",id:"8-ml-pipeline",level:3},{value:"9. Model Registry",id:"9-model-registry",level:3},{value:"10. Dataset and Feature Repository",id:"10-dataset-and-feature-repository",level:3},{value:"11. ML Metadata and Artifact Tracking",id:"11-ml-metadata-and-artifact-tracking",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"practitioners-guide-to-mlops"},"Practitioners guide to MLOps"),(0,a.kt)("p",null,"Google's white paper ","[Practitioners guide to MLOps: A framework for continuous delivery and automation of machine learning]"," published in May 2021 mentions the following core functionalities of MLOps: "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mlops-component",src:n(9324).Z,width:"2352",height:"1890"})),(0,a.kt)("p",null,"Let's look at what each feature does."),(0,a.kt)("h3",{id:"1-experimentation"},"1. Experimentation"),(0,a.kt)("p",null,"Experimentation provides machine learning engineers with the following capabilities for data analysis, prototyping model development, and implementing training functionality:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Integration with version control tools like Git and a notebook (Jupyter Notebook) environment"),(0,a.kt)("li",{parentName:"ul"},"Experiment tracking capabilities including data used, hyperparameters, and evaluation metrics"),(0,a.kt)("li",{parentName:"ul"},"Data and model analysis and visualization capabilities")),(0,a.kt)("h3",{id:"2-data-processing"},"2. Data Processing"),(0,a.kt)("p",null,"Data Processing enables working with large volumes of data during the stages of model development, continuous training, and API deployment by providing the following functionalities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data connectors compatible with various data sources and services"),(0,a.kt)("li",{parentName:"ul"},"Data encoders and decoders compatible with different data formats"),(0,a.kt)("li",{parentName:"ul"},"Data transformation and feature engineering capabilities for different data types"),(0,a.kt)("li",{parentName:"ul"},"Scalable batch and streaming data processing capabilities for training and serving")),(0,a.kt)("h3",{id:"3-model-training"},"3. Model Training"),(0,a.kt)("p",null,"Model Training offers functionalities to efficiently execute algorithms for model training:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Environment provisioning for ML framework execution"),(0,a.kt)("li",{parentName:"ul"},"Distributed training environment for multiple GPUs and distributed training"),(0,a.kt)("li",{parentName:"ul"},"Hyperparameter tuning and optimization capabilities")),(0,a.kt)("h3",{id:"4-model-evaluation"},"4. Model Evaluation"),(0,a.kt)("p",null,"Model evaluation provides the following capabilities to observe the performance of models in both experimental and production environments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Model performance evaluation on evaluation datasets"),(0,a.kt)("li",{parentName:"ul"},"Tracking prediction performance across different continuous training runs"),(0,a.kt)("li",{parentName:"ul"},"Comparison and visualization of performance between different models"),(0,a.kt)("li",{parentName:"ul"},"Model output interpretation using interpretable AI techniques")),(0,a.kt)("h3",{id:"5-model-serving"},"5. Model Serving"),(0,a.kt)("p",null,"Model serving offers functionalities to deploy and serve models in production environments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Low-latency and high-availability inference capabilities"),(0,a.kt)("li",{parentName:"ul"},"Support for various ML model serving frameworks (TensorFlow Serving, TorchServe, NVIDIA Triton, Scikit-learn, XGBoost, etc.)"),(0,a.kt)("li",{parentName:"ul"},"Advanced inference routines, such as preprocessing or postprocessing, and multi-model ensembling for final results"),(0,a.kt)("li",{parentName:"ul"},"Autoscaling capabilities to handle spiking inference requests"),(0,a.kt)("li",{parentName:"ul"},"Logging of inference requests and results")),(0,a.kt)("h3",{id:"6-online-experimentation"},"6. Online Experimentation"),(0,a.kt)("p",null,"Online experimentation provides capabilities to validate the performance of newly generated models when deployed. This functionality should be integrated with a Model Registry to coordinate the deployment of new models."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Canary and shadow deployment features"),(0,a.kt)("li",{parentName:"ul"},"A/B testing capabilities"),(0,a.kt)("li",{parentName:"ul"},"Multi-armed bandit testing functionality")),(0,a.kt)("h3",{id:"7-model-monitoring"},"7. Model Monitoring"),(0,a.kt)("p",null,"Model monitoring enables the monitoring of deployed models in production environments to ensure proper functioning and provides information on model performance degradation and the need for updates."),(0,a.kt)("h3",{id:"8-ml-pipeline"},"8. ML Pipeline"),(0,a.kt)("p",null,"ML Pipeline offers the following functionalities to configure, control, and automate complex ML training and inference workflows in production environments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pipeline execution through various event sources"),(0,a.kt)("li",{parentName:"ul"},"ML metadata tracking and integration for pipeline parameter and artifact management"),(0,a.kt)("li",{parentName:"ul"},"Support for built-in components for common ML tasks and user-defined components"),(0,a.kt)("li",{parentName:"ul"},"Provisioning of different execution environments")),(0,a.kt)("h3",{id:"9-model-registry"},"9. Model Registry"),(0,a.kt)("p",null,"The Model Registry provides the capability to manage the lifecycle of machine learning models in a centralized repository."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Registration, tracking, and versioning of trained and deployed models"),(0,a.kt)("li",{parentName:"ul"},"Storage of information about the required data and runtime packages for deployment")),(0,a.kt)("h3",{id:"10-dataset-and-feature-repository"},"10. Dataset and Feature Repository"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sharing, search, reuse, and versioning capabilities for datasets"),(0,a.kt)("li",{parentName:"ul"},"Real-time processing and low-latency serving capabilities for event streaming and online inference tasks"),(0,a.kt)("li",{parentName:"ul"},"Support for various types of data, such as images, text, and tabular data")),(0,a.kt)("h3",{id:"11-ml-metadata-and-artifact-tracking"},"11. ML Metadata and Artifact Tracking"),(0,a.kt)("p",null,"In each stage of MLOps, various artifacts are generated. ML metadata refers to the information about these artifacts. ML metadata and artifact management provide the following functionalities to manage the location, type, attributes, and associations with experiments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"History management for ML artifacts"),(0,a.kt)("li",{parentName:"ul"},"Tracking and sharing of experiments and pipeline parameter configurations"),(0,a.kt)("li",{parentName:"ul"},"Storage, access, visualization, and download capabilities for ML artifacts"),(0,a.kt)("li",{parentName:"ul"},"Integration with other MLOps functionalities")))}c.isMDXComponent=!0},9324:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mlops-component-540cce1f22f97807b54c5e0dd1fec01e.png"}}]);