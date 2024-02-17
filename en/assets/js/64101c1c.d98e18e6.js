"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[4826],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(o),k=a,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||r;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},8626:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={title:"2. Notebooks",description:"",sidebar_position:2,contributors:["Jaeyeon Kim"]},i=void 0,l={unversionedId:"kubeflow-dashboard-guide/notebooks",id:"version-1.0/kubeflow-dashboard-guide/notebooks",title:"2. Notebooks",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/kubeflow-dashboard-guide/notebooks.md",sourceDirName:"kubeflow-dashboard-guide",slug:"/kubeflow-dashboard-guide/notebooks",permalink:"/mlops-for-all.github.io/en/docs/1.0/kubeflow-dashboard-guide/notebooks",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/kubeflow-dashboard-guide/notebooks.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162146,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:2,frontMatter:{title:"2. Notebooks",description:"",sidebar_position:2,contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"1. Central Dashboard",permalink:"/mlops-for-all.github.io/en/docs/1.0/kubeflow-dashboard-guide/intro"},next:{title:"3. Tensorboards",permalink:"/mlops-for-all.github.io/en/docs/1.0/kubeflow-dashboard-guide/tensorboards"}},s={},p=[{value:"Launch Notebook Server",id:"launch-notebook-server",level:2},{value:"Accessing the Notebook Server",id:"accessing-the-notebook-server",level:2},{value:"Stopping the Notebook Server",id:"stopping-the-notebook-server",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"launch-notebook-server"},"Launch Notebook Server"),(0,a.kt)("p",null,"Click on the Notebooks tab on the left side of the Central Dashboard."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"left-tabs",src:o(7173).Z,width:"3940",height:"1278"})),(0,a.kt)("p",null,"You will see a similar screen."),(0,a.kt)("p",null,"The Notebooks tab is a page where users can independently create and access jupyter notebook and code server environments (hereinafter referred to as a notebook server)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"notebook-home",src:o(8419).Z,width:"5008",height:"2682"})),(0,a.kt)("p",null,'Click the "+ NEW NOTEBOOK" button at the top right. '),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new-notebook",src:o(929).Z,width:"1900",height:"312"})),(0,a.kt)("p",null,"When the screen shown below appears, now specify the spec (Spec) of the notebook server to be created."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create",src:o(1049).Z,width:"1738",height:"1674"})),(0,a.kt)("details",null,(0,a.kt)("summary",null,"For details for spec:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Specifies a name to identify the notebook server."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"namespace"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Cannot be changed. (It is automatically set to the namespace of the currently logged-in user account.)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Image"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Selects the image to use from pre-installed JupyterLab images with Python packages like sklearn, pytorch, tensorflow, etc.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you want to use an image that utilizes GPU within the notebook server, refer to the ",(0,a.kt)("strong",{parentName:"li"},"GPUs")," section below."))),(0,a.kt)("li",{parentName:"ul"},"If you want to use a custom notebook server that includes additional packages or source code, you can create a custom image and deploy it for use."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CPU / RAM"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Specifies the amount of resources required.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"cpu: in core units",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Represents the number of virtual cores, and can also be specified as a float value such as ",(0,a.kt)("inlineCode",{parentName:"li"},"1.5"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"2.7"),", etc."))),(0,a.kt)("li",{parentName:"ul"},"memory: in Gi units"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GPUs"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Specifies the number of GPUs to allocate to the Jupyter notebook.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"None"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When GPU resources are not required."))),(0,a.kt)("li",{parentName:"ul"},"1, 2, 4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Allocates 1, 2, or 4 GPUs."))))),(0,a.kt)("li",{parentName:"ul"},"GPU Vendor:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you have followed the ",(0,a.kt)("a",{parentName:"li",href:"/mlops-for-all.github.io/en/docs/1.0/setup-kubernetes/setup-nvidia-gpu"},"(Optional) Setup GPU")," guide and installed the NVIDIA GPU plugin, select NVIDIA."))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Workspace Volume"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Specifies the amount of disk space required within the notebook server."),(0,a.kt)("li",{parentName:"ul"},"Do not change the Type and Name fields unless you want to increase the disk space or change the AccessMode.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Check the ",(0,a.kt)("strong",{parentName:"li"},"\"Don't use Persistent Storage for User's home\"")," checkbox only if it is not necessary to save the notebook server's work. ",(0,a.kt)("strong",{parentName:"li"},"It is generally recommended not to check this option.")),(0,a.kt)("li",{parentName:"ul"},'If you want to use a pre-existing Persistent Volume Claim (PVC), select Type as "Existing" and enter the name of the PVC to use.'))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data Volumes"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If additional storage resources are required, click the ",(0,a.kt)("strong",{parentName:"li"},'"+ ADD VOLUME"')," button to create them."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"Configurations, Affinity/Tolerations, Miscellaneous Settings"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"These are generally not needed, so detailed explanations are omitted in ",(0,a.kt)("em",{parentName:"li"},"MLOps for All"),"."))))),(0,a.kt)("p",null,"If you followed the ",(0,a.kt)("a",{parentName:"p",href:"/mlops-for-all.github.io/en/docs/1.0/setup-kubernetes/setup-nvidia-gpu"},"Setup GPU (Optional)"),", select NVIDIA if you have installed the nvidia gpu plugin."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"creating",src:o(2733).Z,width:"1928",height:"400"})),(0,a.kt)("p",null,"After creation, the ",(0,a.kt)("strong",{parentName:"p"},"Status")," will change to a green check mark icon, and the ",(0,a.kt)("strong",{parentName:"p"},"CONNECT button")," will be activated.\n",(0,a.kt)("img",{alt:"created",src:o(2374).Z,width:"1852",height:"352"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"accessing-the-notebook-server"},"Accessing the Notebook Server"),(0,a.kt)("p",null,"Clicking the ",(0,a.kt)("strong",{parentName:"p"},"CONNECT button")," will open a new browser window, where you will see the following screen:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"notebook-access",src:o(7534).Z,width:"2898",height:"1990"})),(0,a.kt)("p",null,"You can use the Notebook, Console, and Terminal icons in the ",(0,a.kt)("strong",{parentName:"p"},"Launcher")," to start using them."),(0,a.kt)("p",null,"  Notebook Interface"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"notebook-console",src:o(654).Z,width:"2850",height:"736"})),(0,a.kt)("p",null,"  Terminal Interface"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"terminal-console",src:o(3710).Z,width:"2834",height:"806"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"stopping-the-notebook-server"},"Stopping the Notebook Server"),(0,a.kt)("p",null,"If you haven't used the notebook server for an extended period of time, you can stop it to optimize resource usage in the Kubernetes cluster. ",(0,a.kt)("strong",{parentName:"p"},"Note that stopping the notebook server will result in the deletion of all data stored outside the Workspace Volume or Data Volume specified when creating the notebook server."),(0,a.kt)("br",{parentName:"p"}),"\n","If you haven't changed the path during notebook server creation, the default Workspace Volume path is ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/jovyan")," inside the notebook server, so any data stored outside the ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/jovyan")," directory will be deleted."),(0,a.kt)("p",null,"Clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"STOP")," button as shown below will stop the notebook server:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"notebook-stop",src:o(3192).Z,width:"1832",height:"1014"})),(0,a.kt)("p",null,"Once the server is stopped, the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONNECT")," button will be disabled. To restart the notebook server and use it again, click the ",(0,a.kt)("inlineCode",{parentName:"p"},"PLAY")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"notebook-restart",src:o(2039).Z,width:"1888",height:"932"})))}d.isMDXComponent=!0},1049:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create-b349ef65d07ce46d18eb743995e83328.png"},2374:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/created-ea0c6e5b069a3bf68ec30dd2d9c8fda9.png"},2733:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/creating-fea15b81993043e41562213ce27be9c8.png"},7173:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/left-tabs-4290df638df45a698ebc615a5bcb5b86.png"},929:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/new-notebook-f462329837ba1224dad0fdd5065aa161.png"},7534:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/notebook-access-04af482a0de3bf472671bb8106d2124d.png"},654:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/notebook-console-57b91be5611c7bc685da1b29c792a45c.png"},8419:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/notebook-home-bc23928c112e027b46359aad251a8b69.png"},2039:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/notebook-restart-6550d536547af1c9e19f8ab05946ee9d.png"},3192:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/notebook-stop-bcc860736062b5cfb5831bab545dc60c.png"},3710:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/terminal-console-7fb950f9bf731144081feb0afb245bed.png"}}]);