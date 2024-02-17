"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[463],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=o,b=m["".concat(i,".").concat(u)]||m[u]||c[u]||s;return t?a.createElement(b,r(r({ref:n},p),{},{components:t})):a.createElement(b,r({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<s;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=t(7462),o=(t(7294),t(3905));const s={title:"3. Seldon-Core",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - Seldon-Core",sidebar_position:3,date:new Date("2021-12-13T00:00:00.000Z"),lastmod:new Date("2021-12-13T00:00:00.000Z"),contributors:["Jaeyeon Kim"]},r=void 0,l={unversionedId:"setup-components/install-components-seldon",id:"version-1.0/setup-components/install-components-seldon",title:"3. Seldon-Core",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - Seldon-Core",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/setup-components/install-components-seldon.md",sourceDirName:"setup-components",slug:"/setup-components/install-components-seldon",permalink:"/en/docs/1.0/setup-components/install-components-seldon",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/setup-components/install-components-seldon.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708160311,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:3,frontMatter:{title:"3. Seldon-Core",description:"\uad6c\uc131\uc694\uc18c \uc124\uce58 - Seldon-Core",sidebar_position:3,date:"2021-12-13T00:00:00.000Z",lastmod:"2021-12-13T00:00:00.000Z",contributors:["Jaeyeon Kim"]},sidebar:"tutorialSidebar",previous:{title:"2. MLflow Tracking Server",permalink:"/en/docs/1.0/setup-components/install-components-mlflow"},next:{title:"4. Prometheus & Grafana",permalink:"/en/docs/1.0/setup-components/install-components-pg"}},i={},d=[{value:"Seldon-Core",id:"seldon-core",level:2},{value:"Installing Seldon-Core",id:"installing-seldon-core",level:2},{value:"Adding Ambassador to the Helm Repository",id:"adding-ambassador-to-the-helm-repository",level:3},{value:"Update Ambassador - Helm Repository",id:"update-ambassador---helm-repository",level:3},{value:"Ambassador - Helm Install",id:"ambassador---helm-install",level:3},{value:"Seldon-Core - Helm Install",id:"seldon-core---helm-install",level:3},{value:"References",id:"references",level:2}],p={toc:d},m="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"seldon-core"},"Seldon-Core"),(0,o.kt)("p",null,"Seldon-Core is one of the open source frameworks that can deploy and manage numerous machine learning models in Kubernetes environments.",(0,o.kt)("br",{parentName:"p"}),"\n","For more details, please refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://www.seldon.io/tech/products/core/"},"product description page")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeldonIO/seldon-core"},"GitHub")," of Seldon-Core and API Deployment part."),(0,o.kt)("h2",{id:"installing-seldon-core"},"Installing Seldon-Core"),(0,o.kt)("p",null,"In order to use Seldon-Core, modules such as Ambassador, which is responsible for Ingress of Kubernetes, and Istio are required ",(0,o.kt)("a",{parentName:"p",href:"https://docs.seldon.io/projects/seldon-core/en/latest/workflow/install.html"},"here"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Seldon-Core officially supports only Ambassador and Istio, and ",(0,o.kt)("em",{parentName:"p"},"MLOps for everyone")," will use Ambassador to use Seldon-core, so we will install Ambassador."),(0,o.kt)("h3",{id:"adding-ambassador-to-the-helm-repository"},"Adding Ambassador to the Helm Repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add datawire https://www.getambassador.io\n")),(0,o.kt)("p",null,"If the following message is displayed, it means it has been added normally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'"datawire" has been added to your repositories\n')),(0,o.kt)("h3",{id:"update-ambassador---helm-repository"},"Update Ambassador - Helm Repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\n")),(0,o.kt)("p",null,"If the following message is output, it means that the update has been completed normally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Hang tight while we grab the latest from your chart repositories...\n...Successfully got an update from the "datawire" chart repository\nUpdate Complete. \u2388Happy Helming!\u2388\n')),(0,o.kt)("h3",{id:"ambassador---helm-install"},"Ambassador - Helm Install"),(0,o.kt)("p",null,"Install version 6.9.3 of the Ambassador Chart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install ambassador datawire/ambassador \\\n  --namespace seldon-system \\\n  --create-namespace \\\n  --set image.repository=quay.io/datawire/ambassador \\\n  --set enableAES=false \\\n  --set crds.keep=false \\\n  --version 6.9.3\n")),(0,o.kt)("p",null,"The following message should be displayed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\uc0dd\ub7b5...\n\nW1206 17:01:36.026326   26635 warnings.go:70] rbac.authorization.k8s.io/v1beta1 Role is deprecated in v1.17+, unavailable in v1.22+; use rbac.authorization.k8s.io/v1 Role\nW1206 17:01:36.029764   26635 warnings.go:70] rbac.authorization.k8s.io/v1beta1 RoleBinding is deprecated in v1.17+, unavailable in v1.22+; use rbac.authorization.k8s.io/v1 RoleBinding\nNAME: ambassador\nLAST DEPLOYED: Mon Dec  6 17:01:34 2021\nNAMESPACE: seldon-system\nSTATUS: deployed\nREVISION: 1\nNOTES:\n-------------------------------------------------------------------------------\n  Congratulations! You've successfully installed Ambassador!\n\n-------------------------------------------------------------------------------\nTo get the IP address of Ambassador, run the following commands:\nNOTE: It may take a few minutes for the LoadBalancer IP to be available.\n     You can watch the status of by running 'kubectl get svc -w  --namespace seldon-system ambassador'\n\n  On GKE/Azure:\n  export SERVICE_IP=$(kubectl get svc --namespace seldon-system ambassador -o jsonpath='{.status.loadBalancer.ingress[0].ip}')\n\n  On AWS:\n  export SERVICE_IP=$(kubectl get svc --namespace seldon-system ambassador -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')\n\n  echo http://$SERVICE_IP:\n\nFor help, visit our Slack at http://a8r.io/Slack or view the documentation online at https://www.getambassador.io.\n")),(0,o.kt)("p",null,"Wait until four pods become running in the seldon-system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n seldon-system\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ambassador-7f596c8b57-4s9xh                  1/1     Running   0          7m15s\nambassador-7f596c8b57-dt6lr                  1/1     Running   0          7m15s\nambassador-7f596c8b57-h5l6f                  1/1     Running   0          7m15s\nambassador-agent-77bccdfcd5-d5jxj            1/1     Running   0          7m15s\n")),(0,o.kt)("h3",{id:"seldon-core---helm-install"},"Seldon-Core - Helm Install"),(0,o.kt)("p",null,"Install version 1.11.2 of the seldon-core-operator Chart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install seldon-core seldon-core-operator \\\n    --repo https://storage.googleapis.com/seldon-charts \\\n    --namespace seldon-system \\\n    --set usageMetrics.enabled=true \\\n    --set ambassador.enabled=true \\\n    --version 1.11.2\n")),(0,o.kt)("p",null,"The following message should be displayed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Skip...\n\nW1206 17:05:38.336391   28181 warnings.go:70] admissionregistration.k8s.io/v1beta1 ValidatingWebhookConfiguration is deprecated in v1.16+, unavailable in v1.22+; use admissionregistration.k8s.io/v1 ValidatingWebhookConfiguration\nNAME: seldon-core\nLAST DEPLOYED: Mon Dec  6 17:05:34 2021\nNAMESPACE: seldon-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n")),(0,o.kt)("p",null,"Wait until one seldon-controller-manager pod is Running in the seldon-system namespace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n seldon-system | grep seldon-controller\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"seldon-controller-manager-8457b8b5c7-r2frm   1/1     Running   0          2m22s\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.seldon.io/projects/seldon-core/en/latest/examples/server_examples.html#examples-server-examples--page-root"},"Example Model Servers with Seldon"))))}c.isMDXComponent=!0}}]);