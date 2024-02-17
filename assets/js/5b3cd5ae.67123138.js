"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[2375],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(t),c=l,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=t(7462),l=(t(7294),t(3905));const r={title:"4. Seldon Fields",description:"",sidebar_position:4,contributors:["Jongseob Jeon"]},o=void 0,i={unversionedId:"api-deployment/seldon-fields",id:"api-deployment/seldon-fields",title:"4. Seldon Fields",description:"",source:"@site/docs/api-deployment/seldon-fields.md",sourceDirName:"api-deployment",slug:"/api-deployment/seldon-fields",permalink:"/mlops-for-all.github.io/docs/api-deployment/seldon-fields",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/api-deployment/seldon-fields.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162146,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:4,frontMatter:{title:"4. Seldon Fields",description:"",sidebar_position:4,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"3. Seldon Monitoring",permalink:"/mlops-for-all.github.io/docs/api-deployment/seldon-pg"},next:{title:"5. Model from MLflow",permalink:"/mlops-for-all.github.io/docs/api-deployment/seldon-mlflow"}},p={},m=[{value:"How Seldon Core works?",id:"how-seldon-core-works",level:2},{value:"SeldonDeployment Spec",id:"seldondeployment-spec",level:2},{value:"componentSpecs",id:"componentspecs",level:2},{value:"volumes",id:"volumes",level:3},{value:"initContainer",id:"initcontainer",level:3},{value:"name",id:"name",level:4},{value:"image",id:"image",level:4},{value:"args",id:"args",level:4},{value:"volumeMounts",id:"volumemounts",level:3},{value:"container",id:"container",level:3},{value:"name",id:"name-1",level:4},{value:"image",id:"image-1",level:4},{value:"volumeMounts",id:"volumemounts-1",level:4},{value:"securityContext",id:"securitycontext",level:4},{value:"graph",id:"graph",level:2},{value:"name",id:"name-2",level:3},{value:"type",id:"type",level:3},{value:"parameters",id:"parameters",level:3},{value:"children",id:"children",level:3}],s={toc:m},d="wrapper";function u(e){let{components:n,...r}=e;return(0,l.kt)(d,(0,a.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"how-seldon-core-works"},"How Seldon Core works?"),(0,l.kt)("p",null,"Seldon Core\uac00 API \uc11c\ubc84\ub97c \uc0dd\uc131\ud558\ub294 \uacfc\uc815\uc744 \uc694\uc57d\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"seldon-fields-0.png",src:t(3438).Z,width:"2784",height:"1000"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"initContainer\ub294 \ubaa8\ub378 \uc800\uc7a5\uc18c\uc5d0\uc11c \ud544\uc694\ud55c \ubaa8\ub378\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ub2e4\uc6b4\ub85c\ub4dc\ubc1b\uc740 \ubaa8\ub378\uc744 container\ub85c \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"container\ub294 \uc804\ub2ec\ubc1b\uc740 \ubaa8\ub378\uc744 \uac10\uc2fc API \uc11c\ubc84\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc0dd\uc131\ub41c API \uc11c\ubc84 \uc8fc\uc18c\ub85c API\ub97c \uc694\uccad\ud558\uc5ec \ubaa8\ub378\uc758 \ucd94\ub860 \uac12\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"seldondeployment-spec"},"SeldonDeployment Spec"),(0,l.kt)("p",null,"Seldon Core\ub97c \uc0ac\uc6a9\ud560 \ub54c, \uc8fc\ub85c \uc0ac\uc6a9\ud558\uac8c \ub418\ub294 \ucee4\uc2a4\ud140 \ub9ac\uc18c\uc2a4\uc778 SeldonDeployment\ub97c \uc815\uc758\ud558\ub294 yaml \ud30c\uc77c\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: machinelearning.seldon.io/v1\nkind: SeldonDeployment\nmetadata:\n  name: seldon-example\n  namespace: kubeflow-user-example-com\nspec:\n  name: model\n  predictors:\n  - name: model\n\n    componentSpecs:\n    - spec:\n        volumes:\n        - name: model-provision-location\n          emptyDir: {}\n\n        initContainers:\n        - name: model-initializer\n          image: gcr.io/kfserving/storage-initializer:v0.4.0\n          args:\n            - "gs://seldon-models/v1.12.0-dev/sklearn/iris"\n            - "/mnt/models"\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n\n        containers:\n        - name: model\n          image: seldonio/sklearnserver:1.8.0-dev\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n            readOnly: true\n          securityContext:\n            privileged: true\n            runAsUser: 0\n            runAsGroup: 0\n\n    graph:\n      name: model\n      type: MODEL\n      parameters:\n      - name: model_uri\n        type: STRING\n        value: "/mnt/models"\n      children: []\n\n')),(0,l.kt)("p",null,"SeldonDeployment spe \uc911 ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"predictors")," \ud544\ub4dc\ub294 required \ud544\ub4dc\uc785\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc0c1\uc5d0\uc11c pod\uc758 \uad6c\ubd84\uc744 \uc704\ud55c \uc774\ub984\uc73c\ub85c \ud06c\uac8c \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"predictors"),"\ub294 \ud55c \uac1c\ub85c \uad6c\uc131\ub41c array\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"componentSpecs")," \uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"graph")," \uac00 \uc815\uc758\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc5ec\uae30\uc11c\ub3c4 ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\uc740 pod\uc758 \uad6c\ubd84\uc744 \uc704\ud55c \uc774\ub984\uc73c\ub85c \ud06c\uac8c \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.  "),(0,l.kt)("p",null,"\uc774\uc81c ",(0,l.kt)("inlineCode",{parentName:"p"},"componentSpecs")," \uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"graph"),"\uc5d0\uc11c \uc815\uc758\ud574\uc57c \ud560 \ud544\ub4dc\ub4e4\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"componentspecs"},"componentSpecs"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"componentSpecs")," \ub294 \ud558\ub098\ub85c \uad6c\uc131\ub41c array\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"spec")," \ud0a4\uac12\uc774 \uc815\uc758\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"spec")," \uc5d0\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"volumes"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"initContainers"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"containers")," \uc758 \ud544\ub4dc\uac00 \uc815\uc758\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"volumes"},"volumes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"volumes:\n- name: model-provision-location\n  emptyDir: {}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"volumes"),"\uc740 initContainer\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc\ubc1b\ub294 \ubaa8\ub378\uc744 \uc800\uc7a5\ud558\uae30 \uc704\ud55c \uacf5\uac04\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","array\ub85c \uc785\ub825\uc744 \ubc1b\uc73c\uba70 array\uc758 \uad6c\uc131 \uc694\uc18c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"p"},"emptyDir")," \uc785\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc774 \uac12\ub4e4\uc740 \ubaa8\ub378\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ubc1b\uace0 \uc62e\uae38 \ub54c \ud55c\ubc88 \uc0ac\uc6a9\ub418\ubbc0\ub85c \ud06c\uac8c \uc218\uc815\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"initcontainer"},"initContainer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'- name: model-initializer\n  image: gcr.io/kfserving/storage-initializer:v0.4.0\n  args:\n    - "gs://seldon-models/v1.12.0-dev/sklearn/iris"\n    - "/mnt/models"\n  volumeMounts:\n  - mountPath: /mnt/models\n    name: model-provision-location\n')),(0,l.kt)("p",null,"initContainer\ub294 API\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ubaa8\ub378\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ubc1b\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uadf8\ub798\uc11c \uc0ac\uc6a9\ub418\ub294 \ud544\ub4dc\ub4e4\uc740 \ubaa8\ub378 \uc800\uc7a5\uc18c(Model Registry)\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ubc1b\uc744 \ub54c \ud544\uc694\ud55c \uc815\ubcf4\ub4e4\uc744 \uc815\ud574\uc90d\ub2c8\ub2e4."),(0,l.kt)("p",null,"initContainer\uc758 \uac12\uc740 n\uac1c\uc758 array\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc73c\uba70 \uc0ac\uc6a9\ud558\ub294 \ubaa8\ub378\ub9c8\ub2e4 \uac01\uac01 \uc9c0\uc815\ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"name"},"name"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc0c1\uc758 pod\uc758 \uc774\ub984\uc785\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ub514\ubc84\uae45\uc744 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"{model_name}-initializer")," \ub85c \uc0ac\uc6a9\ud558\uae38 \uad8c\uc7a5\ud569\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"image"},"image"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"image")," \ub294 \ubaa8\ub378\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uae30 \uc704\ud574 \uc0ac\uc6a9\ud560 \uc774\ubbf8\uc9c0 \uc774\ub984\uc785\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","seldon core\uc5d0\uc11c \uad8c\uc7a5\ud558\ub294 \uc774\ubbf8\uc9c0\ub294 \ud06c\uac8c \ub450 \uac00\uc9c0\uc785\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"gcr.io/kfserving/storage-initializer:v0.4.0"),(0,l.kt)("li",{parentName:"ul"},"seldonio/rclone-storage-initializer:1.13.0-dev")),(0,l.kt)("p",null,"\uac01\uac01\uc758 \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \ub2e4\uc74c\uc744 \ucc38\uace0 \ubc14\ub78d\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.seldon.io/projects/seldon-core/en/latest/servers/kfserving-storage-initializer.html"},"kfserving")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/SeldonIO/seldon-core/tree/master/components/rclone-storage-initializer"},"rclone"))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps")," \uc5d0\uc11c\ub294 kfserving\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"args"},"args"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'args:\n  - "gs://seldon-models/v1.12.0-dev/sklearn/iris"\n  - "/mnt/models"\n')),(0,l.kt)("p",null,"gcr.io/kfserving/storage-initializer:v0.4.0 \ub3c4\ucee4 \uc774\ubbf8\uc9c0\uac00 \uc2e4\ud589(",(0,l.kt)("inlineCode",{parentName:"p"},"run"),")\ub420 \ub54c \uc785\ub825\ubc1b\ub294 argument\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","array\ub85c \uad6c\uc131\ub418\uba70 \uccab \ubc88\uc9f8 array\uc758 \uac12\uc740 \ub2e4\uc6b4\ub85c\ub4dc\ubc1b\uc744 \ubaa8\ub378\uc758 \uc8fc\uc18c\ub97c \uc801\uc2b5\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ub450 \ubc88\uc9f8 array\uc758 \uac12\uc740 \ub2e4\uc6b4\ub85c\ub4dc\ubc1b\uc740 \ubaa8\ub378\uc744 \uc800\uc7a5\ud560 \uc8fc\uc18c\ub97c \uc801\uc2b5\ub2c8\ub2e4. (seldon core\uc5d0\uc11c\ub294 \uc8fc\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"/mnt/models"),"\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4.)"),(0,l.kt)("h3",{id:"volumemounts"},"volumeMounts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"volumeMounts:\n  - mountPath: /mnt/models\n    name: model-provision-location\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"volumneMounts"),"\ub294 volumes\uc5d0\uc11c \uc124\uba85\ud55c \uac83\uacfc \uac19\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"/mnt/models"),"\ub97c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc0c1\uc5d0\uc11c \uacf5\uc720\ud560 \uc218 \uc788\ub3c4\ub85d \ubcfc\ub968\uc744 \ubd99\uc5ec\uc8fc\ub294 \ud544\ub4dc\uc785\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 Volume"),"\uc744 \ucc38\uc870 \ubc14\ub78d\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"container"},"container"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"containers:\n- name: model\n  image: seldonio/sklearnserver:1.8.0-dev\n  volumeMounts:\n  - mountPath: /mnt/models\n    name: model-provision-location\n    readOnly: true\n  securityContext:\n    privileged: true\n    runAsUser: 0\n    runAsGroup: 0\n")),(0,l.kt)("p",null,"container\ub294 \uc2e4\uc81c\ub85c \ubaa8\ub378\uc774 API \ud615\uc2dd\uc73c\ub85c \uc2e4\ud589\ub420 \ub54c\uc758 \uc124\uc815\uc744 \uc815\uc758\ud558\ub294 \ud544\ub4dc\uc785\ub2c8\ub2e4.  "),(0,l.kt)("h4",{id:"name-1"},"name"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc0c1\uc758 pod\uc758 \uc774\ub984\uc785\ub2c8\ub2e4. \uc0ac\uc6a9\ud558\ub294 \ubaa8\ub378\uc758 \uc774\ub984\uc744 \uc801\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"image-1"},"image"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"image")," \ub294 \ubaa8\ub378\uc744 API\ub85c \ub9cc\ub4dc\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc774\ubbf8\uc9c0\uc785\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc774\ubbf8\uc9c0\uc5d0\ub294 \ubaa8\ub378\uc774 \ub85c\ub4dc\ub420 \ub54c \ud544\uc694\ud55c \ud328\ud0a4\uc9c0\ub4e4\uc774 \ubaa8\ub450 \uc124\uce58\ub418\uc5b4 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"Seldon Core\uc5d0\uc11c \uc9c0\uc6d0\ud558\ub294 \uacf5\uc2dd \uc774\ubbf8\uc9c0\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"seldonio/sklearnserver"),(0,l.kt)("li",{parentName:"ul"},"seldonio/mlflowserver"),(0,l.kt)("li",{parentName:"ul"},"seldonio/xgboostserver"),(0,l.kt)("li",{parentName:"ul"},"seldonio/tfserving")),(0,l.kt)("h4",{id:"volumemounts-1"},"volumeMounts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"volumeMounts:\n- mountPath: /mnt/models\n  name: model-provision-location\n  readOnly: true\n")),(0,l.kt)("p",null,"initContainer\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc\ubc1b\uc740 \ub370\uc774\ud130\uac00 \uc788\ub294 \uacbd\ub85c\ub97c \uc54c\ub824\uc8fc\ub294 \ud544\ub4dc\uc785\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc774\ub54c \ubaa8\ub378\uc774 \uc218\uc815\ub418\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"readOnly: true"),"\ub3c4 \uac19\uc774 \uc8fc\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"securitycontext"},"securityContext"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"securityContext:\n  privileged: true\n  runAsUser: 0\n  runAsGroup: 0\n")),(0,l.kt)("p",null,"\ud544\uc694\ud55c \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud560 \ub54c pod\uc774 \uad8c\ud55c\uc774 \uc5c6\uc5b4\uc11c \ud328\ud0a4\uc9c0 \uc124\uce58\ub97c \uc218\ud589\ud558\uc9c0 \ubabb\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\uc774\ub97c \uc704\ud574\uc11c root \uad8c\ud55c\uc744 \ubd80\uc5ec\ud569\ub2c8\ub2e4. (\ub2e4\ub9cc \uc774 \uc791\uc5c5\uc740 \uc2e4\uc81c \uc11c\ube59 \uc2dc \ubcf4\uc548 \ubb38\uc81c\uac00 \uc0dd\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4.)"),(0,l.kt)("h2",{id:"graph"},"graph"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'graph:\n  name: model\n  type: MODEL\n  parameters:\n  - name: model_uri\n    type: STRING\n    value: "/mnt/models"\n  children: []\n')),(0,l.kt)("p",null,"\ubaa8\ub378\uc774 \ub3d9\uc791\ud558\ub294 \uc21c\uc11c\ub97c \uc815\uc758\ud55c \ud544\ub4dc\uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"name-2"},"name"),(0,l.kt)("p",null,"\ubaa8\ub378 \uadf8\ub798\ud504\uc758 \uc774\ub984\uc785\ub2c8\ub2e4. container\uc5d0\uc11c \uc815\uc758\ub41c \uc774\ub984\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"type"},"type"),(0,l.kt)("p",null,"type\uc740 \ud06c\uac8c 4\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"TRANSFORMER"),(0,l.kt)("li",{parentName:"ol"},"MODEL"),(0,l.kt)("li",{parentName:"ol"},"OUTPUT_TRANSFORMER"),(0,l.kt)("li",{parentName:"ol"},"ROUTER")),(0,l.kt)("p",null,"\uac01 type\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc124\uba85\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.seldon.io/projects/seldon-core/en/latest/examples/graph-metadata.html"},"Seldon Core Complex Graphs Metadata Example"),"\uc744 \ucc38\uc870 \ubc14\ub78d\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"parameters"},"parameters"),(0,l.kt)("p",null,"class init \uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uac12\ub4e4\uc785\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","sklearnserver\uc5d0\uc11c \ud544\uc694\ud55c \uac12\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SeldonIO/seldon-core/blob/master/servers/sklearnserver/sklearnserver/SKLearnServer.py"},"\ub2e4\uc74c \ud30c\uc77c"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class SKLearnServer(SeldonComponent):\n    def __init__(self, model_uri: str = None, method: str = "predict_proba"):\n')),(0,l.kt)("p",null,"\ucf54\ub4dc\ub97c \ubcf4\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"model_uri"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"method"),"\ub97c \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"children"},"children"),(0,l.kt)("p",null,"\uc21c\uc11c\ub3c4\ub97c \uc791\uc131\ud560 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \ub2e4\uc74c \ud398\uc774\uc9c0\uc5d0\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."))}u.isMDXComponent=!0},3438:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/seldon-fields-0-7794367220b87e1aba920b6aad6f9bf8.png"}}]);