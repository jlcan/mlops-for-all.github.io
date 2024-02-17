"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[728],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=o,b=c["".concat(i,".").concat(u)]||c[u]||m[u]||s;return t?a.createElement(b,r(r({ref:n},d),{},{components:t})):a.createElement(b,r({ref:n},d))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<s;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const s={title:"3. Seldon-Core",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - Seldon-Core",sidebar_position:3,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-13T00:00:00.000Z"),contributors:["Jaeyeon Kim"]},r=void 0,l={unversionedId:"setup-components/install-components-seldon",id:"version-1.0/setup-components/install-components-seldon",title:"3. Seldon-Core",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - Seldon-Core",source:"@site/versioned_docs/version-1.0/setup-components/install-components-seldon.md",sourceDirName:"setup-components",slug:"/setup-components/install-components-seldon",permalink:"/docs/1.0/setup-components/install-components-seldon",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/setup-components/install-components-seldon.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162399,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:3,frontMatter:{title:"3. Seldon-Core",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - Seldon-Core",sidebar_position:3,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-13T00:00:00.000Z",contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"2. MLflow Tracking Server",permalink:"/docs/1.0/setup-components/install-components-mlflow"},next:{title:"4. Prometheus & Grafana",permalink:"/docs/1.0/setup-components/install-components-pg"}},i={},p=[{value:"Seldon-Core",id:"seldon-core",level:2},{value:"Selon-Core \uc124\uce58",id:"selon-core-\uc124\uce58",level:2},{value:"Ambassador - Helm Repository \ucd94\uac00",id:"ambassador---helm-repository-\ucd94\uac00",level:3},{value:"Ambassador - Helm Repository \uc5c5\ub370\uc774\ud2b8",id:"ambassador---helm-repository-\uc5c5\ub370\uc774\ud2b8",level:3},{value:"Ambassador - Helm Install",id:"ambassador---helm-install",level:3},{value:"Seldon-Core - Helm Install",id:"seldon-core---helm-install",level:3},{value:"References",id:"references",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"seldon-core"},"Seldon-Core"),(0,o.kt)("p",null,"Seldon-Core\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud658\uacbd\uc5d0 \uc218\ub9ce\uc740 \uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378\uc744 \ubc30\ud3ec\ud558\uace0 \uad00\ub9ac\ud560 \uc218 \uc788\ub294 \uc624\ud508\uc18c\uc2a4 \ud504\ub808\uc784\uc6cc\ud06c \uc911 \ud558\ub098\uc785\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ub354 \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 Seldon-Core \uc758 \uacf5\uc2dd ",(0,o.kt)("a",{parentName:"p",href:"https://www.seldon.io/tech/products/core/"},"\uc81c\ud488 \uc124\uba85 \ud398\uc774\uc9c0")," \uc640 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeldonIO/seldon-core"},"\uae43\ud5d9")," \uadf8\ub9ac\uace0 API Deployment \ud30c\ud2b8\ub97c \ucc38\uace0\ud574\uc8fc\uc2dc\uae30\ub97c \ubc14\ub78d\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"selon-core-\uc124\uce58"},"Selon-Core \uc124\uce58"),(0,o.kt)("p",null,"Seldon-Core\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \uc778\uadf8\ub808\uc2a4(Ingress)\ub97c \ub2f4\ub2f9\ud558\ub294 Ambassador \uc640 Istio \uc640 \uac19\uc740 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.seldon.io/projects/seldon-core/en/latest/workflow/install.html"},"\ubaa8\ub4c8\uc774 \ud544\uc694\ud569\ub2c8\ub2e4"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Seldon-Core \uc5d0\uc11c\ub294 Ambassador \uc640 Istio \ub9cc\uc744 \uacf5\uc2dd\uc801\uc73c\ub85c \uc9c0\uc6d0\ud558\uba70, ",(0,o.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c\ub294 Ambassador\ub97c \uc0ac\uc6a9\ud574 Seldon-core\ub97c \uc0ac\uc6a9\ud558\ubbc0\ub85c Ambassador\ub97c \uc124\uce58\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"ambassador---helm-repository-\ucd94\uac00"},"Ambassador - Helm Repository \ucd94\uac00"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add datawire https://www.getambassador.io\n")),(0,o.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ucd9c\ub825\ub418\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \ucd94\uac00\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'"datawire" has been added to your repositories\n')),(0,o.kt)("h3",{id:"ambassador---helm-repository-\uc5c5\ub370\uc774\ud2b8"},"Ambassador - Helm Repository \uc5c5\ub370\uc774\ud2b8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\n")),(0,o.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ucd9c\ub825\ub418\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Hang tight while we grab the latest from your chart repositories...\n...Successfully got an update from the "datawire" chart repository\nUpdate Complete. \u2388Happy Helming!\u2388\n')),(0,o.kt)("h3",{id:"ambassador---helm-install"},"Ambassador - Helm Install"),(0,o.kt)("p",null,"ambassador Chart 6.9.3 \ubc84\uc804\uc744 \uc124\uce58\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install ambassador datawire/ambassador \\\n  --namespace seldon-system \\\n  --create-namespace \\\n  --set image.repository=quay.io/datawire/ambassador \\\n  --set enableAES=false \\\n  --set crds.keep=false \\\n  --version 6.9.3\n")),(0,o.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ucd9c\ub825\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\uc0dd\ub7b5...\n\nW1206 17:01:36.026326   26635 warnings.go:70] rbac.authorization.k8s.io/v1beta1 Role is deprecated in v1.17+, unavailable in v1.22+; use rbac.authorization.k8s.io/v1 Role\nW1206 17:01:36.029764   26635 warnings.go:70] rbac.authorization.k8s.io/v1beta1 RoleBinding is deprecated in v1.17+, unavailable in v1.22+; use rbac.authorization.k8s.io/v1 RoleBinding\nNAME: ambassador\nLAST DEPLOYED: Mon Dec  6 17:01:34 2021\nNAMESPACE: seldon-system\nSTATUS: deployed\nREVISION: 1\nNOTES:\n-------------------------------------------------------------------------------\n  Congratulations! You've successfully installed Ambassador!\n\n-------------------------------------------------------------------------------\nTo get the IP address of Ambassador, run the following commands:\nNOTE: It may take a few minutes for the LoadBalancer IP to be available.\n     You can watch the status of by running 'kubectl get svc -w  --namespace seldon-system ambassador'\n\n  On GKE/Azure:\n  export SERVICE_IP=$(kubectl get svc --namespace seldon-system ambassador -o jsonpath='{.status.loadBalancer.ingress[0].ip}')\n\n  On AWS:\n  export SERVICE_IP=$(kubectl get svc --namespace seldon-system ambassador -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')\n\n  echo http://$SERVICE_IP:\n\nFor help, visit our Slack at http://a8r.io/Slack or view the documentation online at https://www.getambassador.io.\n")),(0,o.kt)("p",null,"seldon-system \uc5d0 4 \uac1c\uc758 pod \uac00 Running \uc774 \ub420 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9bd\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n seldon-system\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ambassador-7f596c8b57-4s9xh                  1/1     Running   0          7m15s\nambassador-7f596c8b57-dt6lr                  1/1     Running   0          7m15s\nambassador-7f596c8b57-h5l6f                  1/1     Running   0          7m15s\nambassador-agent-77bccdfcd5-d5jxj            1/1     Running   0          7m15s\n")),(0,o.kt)("h3",{id:"seldon-core---helm-install"},"Seldon-Core - Helm Install"),(0,o.kt)("p",null,"seldon-core-operator Chart 1.11.2 \ubc84\uc804\uc744 \uc124\uce58\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install seldon-core seldon-core-operator \\\n    --repo https://storage.googleapis.com/seldon-charts \\\n    --namespace seldon-system \\\n    --set usageMetrics.enabled=true \\\n    --set ambassador.enabled=true \\\n    --version 1.11.2\n")),(0,o.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ucd9c\ub825\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\uc0dd\ub7b5...\n\nW1206 17:05:38.336391   28181 warnings.go:70] admissionregistration.k8s.io/v1beta1 ValidatingWebhookConfiguration is deprecated in v1.16+, unavailable in v1.22+; use admissionregistration.k8s.io/v1 ValidatingWebhookConfiguration\nNAME: seldon-core\nLAST DEPLOYED: Mon Dec  6 17:05:34 2021\nNAMESPACE: seldon-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n")),(0,o.kt)("p",null,"seldon-system namespace \uc5d0 1 \uac1c\uc758 seldon-controller-manager pod \uac00 Running \uc774 \ub420 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9bd\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n seldon-system | grep seldon-controller\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"seldon-controller-manager-8457b8b5c7-r2frm   1/1     Running   0          2m22s\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.seldon.io/projects/seldon-core/en/latest/examples/server_examples.html#examples-server-examples--page-root"},"Example Model Servers with Seldon"))))}m.isMDXComponent=!0}}]);