"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[9259],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=d(t),c=a,h=p["".concat(s,".").concat(c)]||p[c]||u[c]||r;return t?o.createElement(h,l(l({ref:n},m),{},{components:t})):o.createElement(h,l({ref:n},m))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(7462),a=(t(7294),t(3905));const r={title:"4. Seldon Fields",description:"",sidebar_position:4,contributors:["Jongseob Jeon"]},l=void 0,i={unversionedId:"api-deployment/seldon-fields",id:"version-1.0/api-deployment/seldon-fields",title:"4. Seldon Fields",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/api-deployment/seldon-fields.md",sourceDirName:"api-deployment",slug:"/api-deployment/seldon-fields",permalink:"/en/docs/1.0/api-deployment/seldon-fields",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/api-deployment/seldon-fields.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708160311,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:4,frontMatter:{title:"4. Seldon Fields",description:"",sidebar_position:4,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"3. Seldon Monitoring",permalink:"/en/docs/1.0/api-deployment/seldon-pg"},next:{title:"5. Model from MLflow",permalink:"/en/docs/1.0/api-deployment/seldon-mlflow"}},s={},d=[{value:"componentSpecs",id:"componentspecs",level:2},{value:"volumes",id:"volumes",level:3},{value:"name",id:"name",level:4},{value:"image",id:"image",level:4},{value:"args",id:"args",level:4},{value:"volumeMounts",id:"volumemounts",level:3},{value:"container",id:"container",level:3},{value:"name",id:"name-1",level:4},{value:"image",id:"image-1",level:4},{value:"volumeMounts",id:"volumemounts-1",level:4},{value:"securityContext",id:"securitycontext",level:4},{value:"graph",id:"graph",level:2},{value:"name",id:"name-2",level:3},{value:"type",id:"type",level:3},{value:"parameters",id:"parameters",level:3},{value:"children",id:"children",level:3}],m={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Summary of how Seldon Core creates an API server:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"initContainer downloads the required model from the model repository."),(0,a.kt)("li",{parentName:"ol"},"The downloaded model is passed to the container."),(0,a.kt)("li",{parentName:"ol"},"The container runs an API server enclosing the model."),(0,a.kt)("li",{parentName:"ol"},"The API can be requested at the generated API server address to receive the inference values from the model.")),(0,a.kt)("p",null,"The yaml file defining the custom resource, SeldonDeployment, which is most commonly used when using Seldon Core is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: machinelearning.seldon.io/v1\nkind: SeldonDeployment\nmetadata:\n  name: seldon-example\n  namespace: kubeflow-user-example-com\nspec:\n  name: model\n  predictors:\n  - name: model\n\n    componentSpecs:\n    - spec:\n        volumes:\n        - name: model-provision-location\n          emptyDir: {}\n\n        initContainers:\n        - name: model-initializer\n          image: gcr.io/kfserving/storage-initializer:v0.4.0\n          args:\n            - "gs://seldon-models/v1.12.0-dev/sklearn/iris"\n            - "/mnt/models"\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n\n        containers:\n        - name: model\n          image: seldonio/sklearnserver:1.8.0-dev\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n            readOnly: true\n          securityContext:\n            privileged: true\n            runAsUser: 0\n            runAsGroup: 0\n\n    graph:\n      name: model\n      type: MODEL\n      parameters:\n      - name: model_uri\n        type: STRING\n        value: "/mnt/models"\n      children: []\n\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"predictors")," fields of SeldonDeployment are required fields. ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," is mainly used as a name to differentiate pods in Kubernetes and does not have a major effect. ",(0,a.kt)("inlineCode",{parentName:"p"},"predictors")," must be a single array consisting of ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"componentSpecs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"graph")," defined. Here also, ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," is mainly used as a name to differentiate pods in Kubernetes and does not have a major effect."),(0,a.kt)("p",null,"Now let's take a look at the fields that need to be defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"componentSpecs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"graph"),"."),(0,a.kt)("h2",{id:"componentspecs"},"componentSpecs"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"componentSpecs")," must be a single array consisting of the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," key. The ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," must have the fields ",(0,a.kt)("inlineCode",{parentName:"p"},"volumes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"initContainers")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"containers")," defined."),(0,a.kt)("h3",{id:"volumes"},"volumes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"volumes:\n- name: model-provision-location\n  emptyDir: {}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Volumes")," refer to the space used to store the models downloaded from the initContainer, which is received as an array with the components ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"emptyDir"),". These values are used only once when downloading and moving the models, so they do not need to be modified significantly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'- name: model-initializer\n  image: gcr.io/kfserving/storage-initializer:v0.4.0\n  args:\n    - "gs://seldon-models/v1.12.0-dev/sklearn/iris"\n    - "/mnt/models"\n  volumeMounts:\n  - mountPath: /mnt/models\n    name: model-provision-location\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"args")," field contains the system arguments necessary to download the model from the model repository and move it to the specified model path. It provides the required parameters for the initContainer to perform the downloading and storage operations."),(0,a.kt)("p",null,"initContainer is responsible for downloading the model to be used from the API, so the fields used determine the information needed to download data from the model registry. "),(0,a.kt)("p",null,"The value of initContainer consists of n arrays, and each model needs to be specified separately."),(0,a.kt)("h4",{id:"name"},"name"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"name")," is the name of the pod in Kubernetes, and it is recommended to use ",(0,a.kt)("inlineCode",{parentName:"p"},"{model_name}-initializer")," for debugging. "),(0,a.kt)("h4",{id:"image"},"image"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"image")," is the name of the image used to download the model, and there are two recommended images by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gcr.io/kfserving/storage-initializer:v0.4.0"),(0,a.kt)("li",{parentName:"ul"},"seldonio/rclone-storage-initializer:1.13.0-dev")),(0,a.kt)("p",null,"For more detailed information, please refer to the following resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.seldon.io/projects/seldon-core/en/latest/servers/kfserving-storage-initializer.html"},"kfserving")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeldonIO/seldon-core/tree/master/components/rclone-storage-initializer"},"rclone"))),(0,a.kt)("p",null,"In MLOps for ALL, we use kfserving for downloading and storing models."),(0,a.kt)("h4",{id:"args"},"args"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'args:\n  - "gs://seldon-models/v1.12.0-dev/sklearn/iris"\n  - "/mnt/models"\n')),(0,a.kt)("p",null,"When the gcr.io/kfserving/storage-initializer:v0.4.0 Docker image is run (",(0,a.kt)("inlineCode",{parentName:"p"},"run"),"), it takes an argument in the form of an array. The first array value is the address of the model to be downloaded. The second array value is the address where the downloaded model will be stored (Seldon Core usually stores it in ",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt/models"),")."),(0,a.kt)("h3",{id:"volumemounts"},"volumeMounts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"volumeMounts:\n  - mountPath: /mnt/models\n    name: model-provision-location\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"volumeMounts")," is a field that attaches volumes to the Kubernetes to share ",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt/models")," as described in volumes. For more information, refer to Kubernetes Volume ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"Kubernetes Volume"),'."'),(0,a.kt)("h3",{id:"container"},"container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"containers:\n- name: model\n  image: seldonio/sklearnserver:1.8.0-dev\n  volumeMounts:\n  - mountPath: /mnt/models\n    name: model-provision-location\n    readOnly: true\n  securityContext:\n    privileged: true\n    runAsUser: 0\n    runAsGroup: 0\n")),(0,a.kt)("p",null," Container defines the fields that determine the configuration when the model is run in an API form."),(0,a.kt)("h4",{id:"name-1"},"name"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," field refers to the name of the pod in Kubernetes. It should be the name of the model being used."),(0,a.kt)("h4",{id:"image-1"},"image"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," field represents the image used to convert the model into an API. The image should have all the necessary packages installed when the model is loaded."),(0,a.kt)("p",null,"Seldon Core provides official images for different types of models, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"seldonio/sklearnserver"),(0,a.kt)("li",{parentName:"ul"},"seldonio/mlflowserver"),(0,a.kt)("li",{parentName:"ul"},"seldonio/xgboostserver"),(0,a.kt)("li",{parentName:"ul"},"seldonio/tfserving")),(0,a.kt)("p",null,"You can choose the appropriate image based on the type of model you are using."),(0,a.kt)("h4",{id:"volumemounts-1"},"volumeMounts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"volumeMounts:\n- mountPath: /mnt/models\n  name: model-provision-location\n  readOnly: true\n")),(0,a.kt)("p",null,"This is a field that tells the path where the data downloaded from initContainer is located. Here, to prevent the model from being modified, ",(0,a.kt)("inlineCode",{parentName:"p"},"readOnly: true")," will also be given."),(0,a.kt)("h4",{id:"securitycontext"},"securityContext"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"securityContext:\n  privileged: true\n  runAsUser: 0\n  runAsGroup: 0\n")),(0,a.kt)("p",null,"When installing necessary packages, pod may not be able to perform the package installation due to lack of permission. To address this, root permission is granted (although this could cause security issues when in actual service)."),(0,a.kt)("h2",{id:"graph"},"graph"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'graph:\n  name: model\n  type: MODEL\n  parameters:\n  - name: model_uri\n    type: STRING\n    value: "/mnt/models"\n  children: []\n')),(0,a.kt)("p",null,"This is a field that defines the order in which the model operates."),(0,a.kt)("h3",{id:"name-2"},"name"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," field refers to the name of the model graph. It should match the name defined in the container."),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," field can have four different values:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"TRANSFORMER"),(0,a.kt)("li",{parentName:"ol"},"MODEL"),(0,a.kt)("li",{parentName:"ol"},"OUTPUT_TRANSFORMER"),(0,a.kt)("li",{parentName:"ol"},"ROUTER")),(0,a.kt)("p",null,"For detailed explanations of each type, you can refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.seldon.io/projects/seldon-core/en/latest/examples/graph-metadata.html"},"Seldon Core Complex Graphs Metadata Example"),"."),(0,a.kt)("h3",{id:"parameters"},"parameters"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"parameters")," field contains values used in the class init. For the sklearnserver, you can find the required values in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeldonIO/seldon-core/blob/master/servers/sklearnserver/sklearnserver/SKLearnServer.py"},"following file"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class SKLearnServer(SeldonComponent):\n    def __init__(self, model_uri: str = None, method: str = "predict_proba"):\n')),(0,a.kt)("p",null,"If you look at the code, you can define ",(0,a.kt)("inlineCode",{parentName:"p"},"model_uri")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"method"),"."),(0,a.kt)("h3",{id:"children"},"children"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," field is used when creating the sequence diagram. More details about this field will be explained on the following page."))}u.isMDXComponent=!0}}]);