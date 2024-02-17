"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[5036],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>_});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=m(t),u=l,_=p["".concat(s,".").concat(u)]||p[u]||c[u]||r;return t?a.createElement(_,o(o({ref:n},d),{},{components:t})):a.createElement(_,o({ref:n},d))}));function _(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4678:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=t(7462),l=(t(7294),t(3905));const r={title:"6. Multi Models",description:"",sidebar_position:6,contributors:["Jongseob Jeon"]},o=void 0,i={unversionedId:"api-deployment/seldon-children",id:"api-deployment/seldon-children",title:"6. Multi Models",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/api-deployment/seldon-children.md",sourceDirName:"api-deployment",slug:"/api-deployment/seldon-children",permalink:"/mlops-for-all.github.io/en/docs/api-deployment/seldon-children",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/api-deployment/seldon-children.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162774,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:6,frontMatter:{title:"6. Multi Models",description:"",sidebar_position:6,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"5. Model from MLflow",permalink:"/mlops-for-all.github.io/en/docs/api-deployment/seldon-mlflow"},next:{title:"1. Install Python virtual environment",permalink:"/mlops-for-all.github.io/en/docs/appendix/pyenv"}},s={},m=[],d={toc:m},p="wrapper";function c(e){let{components:n,...r}=e;return(0,l.kt)(p,(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Previously, the methods explained were all targeted at a single model. On this page, we will look at how to connect multiple models. "),(0,l.kt)("p",null,"First, we will create a pipeline that creates two models. We will add a StandardScaler to the SVC model we used before and store it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from functools import partial\n\nimport kfp\nfrom kfp.components import InputPath, OutputPath, create_component_from_func\n\n\n@partial(\n    create_component_from_func,\n    packages_to_install=["pandas", "scikit-learn"],\n)\ndef load_iris_data(\n    data_path: OutputPath("csv"),\n    target_path: OutputPath("csv"),\n):\n    import pandas as pd\n    from sklearn.datasets import load_iris\n\n    iris = load_iris()\n\n    data = pd.DataFrame(iris["data"], columns=iris["feature_names"])\n    target = pd.DataFrame(iris["target"], columns=["target"])\n\n    data.to_csv(data_path, index=False)\n    target.to_csv(target_path, index=False)\n\n@partial(\n    create_component_from_func,\n    packages_to_install=["dill", "pandas", "scikit-learn", "mlflow"],\n)\ndef train_scaler_from_csv(\n    data_path: InputPath("csv"),\n    scaled_data_path: OutputPath("csv"),\n    model_path: OutputPath("dill"),\n    input_example_path: OutputPath("dill"),\n    signature_path: OutputPath("dill"),\n    conda_env_path: OutputPath("dill"),\n):\n    import dill\n    import pandas as pd\n    from sklearn.preprocessing import StandardScaler\n\n    from mlflow.models.signature import infer_signature\n    from mlflow.utils.environment import _mlflow_conda_env\n\n    data = pd.read_csv(data_path)\n\n    scaler = StandardScaler()\n    scaled_data = scaler.fit_transform(data)\n    scaled_data = pd.DataFrame(scaled_data, columns=data.columns, index=data.index)\n\n    scaled_data.to_csv(scaled_data_path, index=False)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(scaler, file_writer)\n\n    input_example = data.sample(1)\n    with open(input_example_path, "wb") as file_writer:\n        dill.dump(input_example, file_writer)\n\n    signature = infer_signature(data, scaler.transform(data))\n    with open(signature_path, "wb") as file_writer:\n        dill.dump(signature, file_writer)\n\n    conda_env = _mlflow_conda_env(\n        additional_pip_deps=["scikit-learn"],\n        install_mlflow=False\n    )\n    with open(conda_env_path, "wb") as file_writer:\n        dill.dump(conda_env, file_writer)\n\n\n@partial(\n    create_component_from_func,\n    packages_to_install=["dill", "pandas", "scikit-learn", "mlflow"],\n)\ndef train_svc_from_csv(\n    train_data_path: InputPath("csv"),\n    train_target_path: InputPath("csv"),\n    model_path: OutputPath("dill"),\n    input_example_path: OutputPath("dill"),\n    signature_path: OutputPath("dill"),\n    conda_env_path: OutputPath("dill"),\n    kernel: str,\n):\n    import dill\n    import pandas as pd\n    from sklearn.svm import SVC\n\n    from mlflow.models.signature import infer_signature\n    from mlflow.utils.environment import _mlflow_conda_env\n\n    train_data = pd.read_csv(train_data_path)\n    train_target = pd.read_csv(train_target_path)\n\n    clf = SVC(kernel=kernel)\n    clf.fit(train_data, train_target)\n\n    with open(model_path, mode="wb") as file_writer:\n        dill.dump(clf, file_writer)\n\n    input_example = train_data.sample(1)\n    with open(input_example_path, "wb") as file_writer:\n        dill.dump(input_example, file_writer)\n\n    signature = infer_signature(train_data, clf.predict(train_data))\n    with open(signature_path, "wb") as file_writer:\n        dill.dump(signature, file_writer)\n\n    conda_env = _mlflow_conda_env(\n        additional_pip_deps=["scikit-learn"],\n        install_mlflow=False\n    )\n    with open(conda_env_path, "wb") as file_writer:\n        dill.dump(conda_env, file_writer)\n\n\n@partial(\n    create_component_from_func,\n    packages_to_install=["dill", "pandas", "scikit-learn", "mlflow", "boto3"],\n)\ndef upload_sklearn_model_to_mlflow(\n    model_name: str,\n    model_path: InputPath("dill"),\n    input_example_path: InputPath("dill"),\n    signature_path: InputPath("dill"),\n    conda_env_path: InputPath("dill"),\n):\n    import os\n    import dill\n    from mlflow.sklearn import save_model\n    \n    from mlflow.tracking.client import MlflowClient\n\n    os.environ["MLFLOW_S3_ENDPOINT_URL"] = "http://minio-service.kubeflow.svc:9000"\n    os.environ["AWS_ACCESS_KEY_ID"] = "minio"\n    os.environ["AWS_SECRET_ACCESS_KEY"] = "minio123"\n\n    client = MlflowClient("http://mlflow-server-service.mlflow-system.svc:5000")\n\n    with open(model_path, mode="rb") as file_reader:\n        clf = dill.load(file_reader)\n\n    with open(input_example_path, "rb") as file_reader:\n        input_example = dill.load(file_reader)\n\n    with open(signature_path, "rb") as file_reader:\n        signature = dill.load(file_reader)\n\n    with open(conda_env_path, "rb") as file_reader:\n        conda_env = dill.load(file_reader)\n    save_model(\n        sk_model=clf,\n        path=model_name,\n        serialization_format="cloudpickle",\n        conda_env=conda_env,\n        signature=signature,\n        input_example=input_example,\n    )\n    run = client.create_run(experiment_id="0")\n    client.log_artifact(run.info.run_id, model_name)\n\n\nfrom kfp.dsl import pipeline\n\n\n@pipeline(name="multi_model_pipeline")\ndef multi_model_pipeline(kernel: str = "rbf"):\n    iris_data = load_iris_data()\n    scaled_data = train_scaler_from_csv(data=iris_data.outputs["data"])\n    _ = upload_sklearn_model_to_mlflow(\n        model_name="scaler",\n        model=scaled_data.outputs["model"],\n        input_example=scaled_data.outputs["input_example"],\n        signature=scaled_data.outputs["signature"],\n        conda_env=scaled_data.outputs["conda_env"],\n    )\n    model = train_svc_from_csv(\n        train_data=scaled_data.outputs["scaled_data"],\n        train_target=iris_data.outputs["target"],\n        kernel=kernel,\n    )\n    _ = upload_sklearn_model_to_mlflow(\n        model_name="svc",\n        model=model.outputs["model"],\n        input_example=model.outputs["input_example"],\n        signature=model.outputs["signature"],\n        conda_env=model.outputs["conda_env"],\n    )\n\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(multi_model_pipeline, "multi_model_pipeline.yaml")\n\n')),(0,l.kt)("p",null,"If you upload the pipeline, it will look like this.\n",(0,l.kt)("img",{alt:"children-kubeflow.png",src:t(1092).Z,width:"2698",height:"1886"})),(0,l.kt)("p",null,"When you check the MLflow dashboard, two models will be generated, as shown below. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"children-mlflow.png",src:t(536).Z,width:"3006",height:"1744"})),(0,l.kt)("p",null,"After checking the run_id of each one, define the SeldonDeployment spec as follows."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: machinelearning.seldon.io/v1\nkind: SeldonDeployment\nmetadata:\n  name: multi-model-example\n  namespace: kubeflow-user-example-com\nspec:\n  name: model\n  predictors:\n  - name: model\n\n    componentSpecs:\n    - spec:\n        volumes:\n        - name: model-provision-location\n          emptyDir: {}\n\n        initContainers:\n        - name: scaler-initializer\n          image: gcr.io/kfserving/storage-initializer:v0.4.0\n          args:\n            - "s3://mlflow/mlflow/artifacts/0/7f445015a0e94519b003d316478766ef/artifacts/scaler"\n            - "/mnt/models"\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n          envFrom:\n          - secretRef:\n              name: seldon-init-container-secret\n        - name: svc-initializer\n          image: gcr.io/kfserving/storage-initializer:v0.4.0\n          args:\n            - "s3://mlflow/mlflow/artifacts/0/87eb168e76264b39a24b0e5ca0fe922b/artifacts/svc"\n            - "/mnt/models"\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n          envFrom:\n          - secretRef:\n              name: seldon-init-container-secret\n\n        containers:\n        - name: scaler\n          image: seldonio/mlflowserver:1.8.0-dev\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n            readOnly: true\n          securityContext:\n            privileged: true\n            runAsUser: 0\n            runAsGroup: 0\n        - name: svc\n          image: seldonio/mlflowserver:1.8.0-dev\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n            readOnly: true\n          securityContext:\n            privileged: true\n            runAsUser: 0\n            runAsGroup: 0\n\n    graph:\n      name: scaler\n      type: MODEL\n      parameters:\n      - name: model_uri\n        type: STRING\n        value: "/mnt/models"\n      - name: predict_method\n        type: STRING\n        value: "transform"\n      children:\n      - name: svc\n        type: MODEL\n        parameters:\n        - name: model_uri\n          type: STRING\n          value: "/mnt/models"\n')),(0,l.kt)("p",null,"Two models have been created so each model's initContainer and container must be defined. This field takes input as an array and the order does not matter. The order in which the models are executed is defined in the graph."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'graph:\n  name: scaler\n  type: MODEL\n  parameters:\n  - name: model_uri\n    type: STRING\n    value: "/mnt/models"\n  - name: predict_method\n    type: STRING\n    value: "transform"\n  children:\n  - name: svc\n    type: MODEL\n    parameters:\n    - name: model_uri\n      type: STRING\n      value: "/mnt/models"\n')),(0,l.kt)("p",null,"The operation of the graph is to convert the initial value received into a predefined predict_method and then pass it to the model defined as children. In this case, the data is passed from scaler -> svc."),(0,l.kt)("p",null,"Now let's create the above specifications in a yaml file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cat <<EOF > multi-model.yaml\napiVersion: machinelearning.seldon.io/v1\nkind: SeldonDeployment\nmetadata:\n  name: multi-model-example\n  namespace: kubeflow-user-example-com\nspec:\n  name: model\n  predictors:\n  - name: model\n\n    componentSpecs:\n    - spec:\n        volumes:\n        - name: model-provision-location\n          emptyDir: {}\n\n        initContainers:\n        - name: scaler-initializer\n          image: gcr.io/kfserving/storage-initializer:v0.4.0\n          args:\n            - "s3://mlflow/mlflow/artifacts/0/7f445015a0e94519b003d316478766ef/artifacts/scaler"\n            - "/mnt/models"\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n          envFrom:\n          - secretRef:\n              name: seldon-init-container-secret\n        - name: svc-initializer\n          image: gcr.io/kfserving/storage-initializer:v0.4.0\n          args:\n            - "s3://mlflow/mlflow/artifacts/0/87eb168e76264b39a24b0e5ca0fe922b/artifacts/svc"\n            - "/mnt/models"\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n          envFrom:\n          - secretRef:\n              name: seldon-init-container-secret\n\n        containers:\n        - name: scaler\n          image: ghcr.io/mlops-for-all/mlflowserver\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n            readOnly: true\n          securityContext:\n            privileged: true\n            runAsUser: 0\n            runAsGroup: 0\n        - name: svc\n          image: ghcr.io/mlops-for-all/mlflowserver\n          volumeMounts:\n          - mountPath: /mnt/models\n            name: model-provision-location\n            readOnly: true\n          securityContext:\n            privileged: true\n            runAsUser: 0\n            runAsGroup: 0\n\n    graph:\n      name: scaler\n      type: MODEL\n      parameters:\n      - name: model_uri\n        type: STRING\n        value: "/mnt/models"\n      - name: predict_method\n        type: STRING\n        value: "transform"\n      children:\n      - name: svc\n        type: MODEL\n        parameters:\n        - name: model_uri\n          type: STRING\n          value: "/mnt/models"\nEOF\n')),(0,l.kt)("p",null,"Create an API through the following command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f multi-model.yaml\n")),(0,l.kt)("p",null,"If properly performed, it will be outputted as follows."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"seldondeployment.machinelearning.seldon.io/multi-model-example created\n")),(0,l.kt)("p",null,"Check to see if it has been generated normally."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po -n kubeflow-user-example-com | grep multi-model-example\n")),(0,l.kt)("p",null,"If it is created normally, a similar pod will be created."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"multi-model-example-model-0-scaler-svc-9955fb795-n9ffw   4/4     Running     0          2m30s\n")))}c.isMDXComponent=!0},1092:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/children-kubeflow-5100745b1be1aa100dd153b1785ad218.png"},536:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/children-mlflow-5190d0e3f19a5772de21d1b08ece4822.png"}}]);