"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[7005],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),o=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},m=function(e){var n=o(e.components);return r.createElement(s.Provider,{value:n},e.children)},l="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=o(t),d=a,b=l["".concat(s,".").concat(d)]||l[d]||_[d]||p;return t?r.createElement(b,u(u({ref:n},m),{},{components:t})):r.createElement(b,u({ref:n},m))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,u=new Array(p);u[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[l]="string"==typeof e?e:a,u[1]=i;for(var o=2;o<p;o++)u[o]=t[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1736:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>_,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var r=t(7462),a=(t(7294),t(3905));const p={title:"5. Pipeline - Write",description:"",sidebar_position:5,contributors:["Jongseob Jeon"]},u=void 0,i={unversionedId:"kubeflow/basic-pipeline",id:"version-1.0/kubeflow/basic-pipeline",title:"5. Pipeline - Write",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0/kubeflow/basic-pipeline.md",sourceDirName:"kubeflow",slug:"/kubeflow/basic-pipeline",permalink:"/mlops-for-all/en/docs/1.0/kubeflow/basic-pipeline",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/versioned_docs/version-1.0/kubeflow/basic-pipeline.md",tags:[],version:"1.0",lastUpdatedBy:"Jeong",lastUpdatedAt:1708161852,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:5,frontMatter:{title:"5. Pipeline - Write",description:"",sidebar_position:5,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"4. Component - Write",permalink:"/mlops-for-all/en/docs/1.0/kubeflow/basic-component"},next:{title:"6. Pipeline - Upload",permalink:"/mlops-for-all/en/docs/1.0/kubeflow/basic-pipeline-upload"}},s={},o=[{value:"Pipeline",id:"pipeline",level:2},{value:"Component Set",id:"component-set",level:2},{value:"Component Order",id:"component-order",level:2},{value:"Define Order",id:"define-order",level:3},{value:"Single Output",id:"single-output",level:3},{value:"Multi Output",id:"multi-output",level:3},{value:"Write to python code",id:"write-to-python-code",level:3},{value:"Convert to Kubeflow Format",id:"convert-to-kubeflow-format",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:o},l="wrapper";function _(e){let{components:n,...p}=e;return(0,a.kt)(l,(0,r.Z)({},m,p,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pipeline"},"Pipeline"),(0,a.kt)("p",null,"Components do not run independently but rather as components of a pipeline. Therefore, in order to run a component, a pipeline must be written.\nAnd in order to write a pipeline, a set of components and the order of execution of those components is necessary."),(0,a.kt)("p",null,"On this page, we will create a pipeline with a component that takes a number as input and outputs it, and a component that takes two numbers from two components and outputs the sum."),(0,a.kt)("h2",{id:"component-set"},"Component Set"),(0,a.kt)("p",null,"First, let's create the components that will be used in the pipeline."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"print_and_return_number")),(0,a.kt)("p",{parentName:"li"},"This component prints and returns the input number.",(0,a.kt)("br",{parentName:"p"}),"\n","Since the component returns the input value, we specify ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," as the return type hint."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"sum_and_print_numbers")),(0,a.kt)("p",{parentName:"li"},"This component calculates the sum of two input numbers and prints it.",(0,a.kt)("br",{parentName:"p"}),"\n","Similarly, since the component returns the sum, we specify ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," as the return type hint."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@create_component_from_func\ndef sum_and_print_numbers(number_1: int, number_2: int) -> int:\n    sum_num = number_1 + number_2\n    print(sum_num)\n    return sum_num\n")))),(0,a.kt)("h2",{id:"component-order"},"Component Order"),(0,a.kt)("h3",{id:"define-order"},"Define Order"),(0,a.kt)("p",null,"If you have created the necessary set of components, the next step is to define their sequence.",(0,a.kt)("br",{parentName:"p"}),"\n","The diagram below represents the order of the pipeline components to be created on this page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pipeline-0.png",src:t(7114).Z,width:"586",height:"262"})),(0,a.kt)("h3",{id:"single-output"},"Single Output"),(0,a.kt)("p",null,"Now let's translate this sequence into code."),(0,a.kt)("p",null,"First, writing ",(0,a.kt)("inlineCode",{parentName:"p"},"print_and_return_number_1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"print_and_return_number_2")," from the picture above would look like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def example_pipeline():\n    number_1_result = print_and_return_number(number_1)\n    number_2_result = print_and_return_number(number_2)\n")),(0,a.kt)("p",null,"Run the component and store the return values in ",(0,a.kt)("inlineCode",{parentName:"p"},"number_1_result")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"number_2_result"),", respectively.",(0,a.kt)("br",{parentName:"p"}),"\n","The return value of the stored ",(0,a.kt)("inlineCode",{parentName:"p"},"number_1_result")," can be used through ",(0,a.kt)("inlineCode",{parentName:"p"},"number_1_resulst.output"),"."),(0,a.kt)("h3",{id:"multi-output"},"Multi Output"),(0,a.kt)("p",null,"In the example above, the components return a single value, so it can be directly used with ",(0,a.kt)("inlineCode",{parentName:"p"},"output"),".",(0,a.kt)("br",{parentName:"p"}),"\n","However, if there are multiple return values, they will be stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"outputs")," as a dictionary. You can use the keys to access the desired return values.\nLet's consider an example with a component that returns multiple values, like the one mentioned in the ",(0,a.kt)("a",{parentName:"p",href:"/mlops-for-all/en/docs/1.0/kubeflow/basic-component#define-a-standalone-python-function"},"component")," definition. The ",(0,a.kt)("inlineCode",{parentName:"p"},"divide_and_return_number")," component returns ",(0,a.kt)("inlineCode",{parentName:"p"},"quotient")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"remainder"),". Here's an example of passing these two values to ",(0,a.kt)("inlineCode",{parentName:"p"},"print_and_return_number"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def multi_pipeline():\n    divided_result = divde_and_return_number(number)\n    num_1_result = print_and_return_number(divided_result.outputs["quotient"])\n    num_2_result = print_and_return_number(divided_result.outputs["remainder"])\n')),(0,a.kt)("p",null,"Store the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"divide_and_return_number")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"divided_result")," and you can get the values of each by ",(0,a.kt)("inlineCode",{parentName:"p"},'divided_result.outputs["quotient"]')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'divided_result.outputs["remainder"]'),"."),(0,a.kt)("h3",{id:"write-to-python-code"},"Write to python code"),(0,a.kt)("p",null,"Now, let's get back to the main topic and pass the result of these two values to ",(0,a.kt)("inlineCode",{parentName:"p"},"sum_and_print_numbers"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def example_pipeline():\n    number_1_result = print_and_return_number(number_1)\n    number_2_result = print_and_return_number(number_2)\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    )\n")),(0,a.kt)("p",null,"Next, gather the necessary Configs for each component and define it as a pipeline Config."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def example_pipeline(number_1: int, number_2:int):\n    number_1_result = print_and_return_number(number_1)\n    number_2_result = print_and_return_number(number_2)\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    )\n")),(0,a.kt)("h2",{id:"convert-to-kubeflow-format"},"Convert to Kubeflow Format"),(0,a.kt)("p",null,"Finally, convert it into a format that can be used in Kubeflow. The conversion can be done using the ",(0,a.kt)("inlineCode",{parentName:"p"},"kfp.dsl.pipeline")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from kfp.dsl import pipeline\n\n\n@pipeline(name="example_pipeline")\ndef example_pipeline(number_1: int, number_2: int):\n    number_1_result = print_and_return_number(number_1)\n    number_2_result = print_and_return_number(number_2)\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    )\n')),(0,a.kt)("p",null,"In order to run a pipeline in Kubeflow, it needs to be compiled into the designated yaml format as only yaml format is possible, so the created pipeline needs to be compiled into a specific yaml format.\nCompilation can be done using the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'if __name__ == "__main__":\n    import kfp\n    kfp.compiler.Compiler().compile(example_pipeline, "example_pipeline.yaml")\n')),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"As explained earlier, if we gather the content into a Python code, it will look like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import kfp\nfrom kfp.components import create_component_from_func\nfrom kfp.dsl import pipeline\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n\n@create_component_from_func\ndef sum_and_print_numbers(number_1: int, number_2: int):\n    print(number_1 + number_2)\n\n@pipeline(name="example_pipeline")\ndef example_pipeline(number_1: int, number_2: int):\n    number_1_result = print_and_return_number(number_1)\n    number_2_result = print_and_return_number(number_2)\n    sum_result = sum_and_print_numbers(\n        number_1=number_1_result.output, number_2=number_2_result.output\n    )\n\nif __name__ == "__main__":\n    kfp.compiler.Compiler().compile(example_pipeline, "example_pipeline.yaml")\n')),(0,a.kt)("p",null,"The compiled result is as follows."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"example_pipeline.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: argoproj.io/v1alpha1\nkind: Workflow\nmetadata:\n  generateName: example-pipeline-\n  annotations: {pipelines.kubeflow.org/kfp_sdk_version: 1.6.3, pipelines.kubeflow.org/pipeline_compilation_time: \'2021-12-05T13:38:51.566777\',\n    pipelines.kubeflow.org/pipeline_spec: \'{"inputs": [{"name": "number_1", "type":\n      "Integer"}, {"name": "number_2", "type": "Integer"}], "name": "example_pipeline"}\'}\n  labels: {pipelines.kubeflow.org/kfp_sdk_version: 1.6.3}\nspec:\n  entrypoint: example-pipeline\n  templates:\n  - name: example-pipeline\n    inputs:\n      parameters:\n      - {name: number_1}\n      - {name: number_2}\n    dag:\n      tasks:\n      - name: print-and-return-number\n        template: print-and-return-number\n        arguments:\n          parameters:\n          - {name: number_1, value: \'{{inputs.parameters.number_1}}\'}\n      - name: print-and-return-number-2\n        template: print-and-return-number-2\n        arguments:\n          parameters:\n          - {name: number_2, value: \'{{inputs.parameters.number_2}}\'}\n      - name: sum-and-print-numbers\n        template: sum-and-print-numbers\n        dependencies: [print-and-return-number, print-and-return-number-2]\n        arguments:\n          parameters:\n          - {name: print-and-return-number-2-Output, value: \'{{tasks.print-and-return-number-2.outputs.parameters.print-and-return-number-2-Output}}\'}\n          - {name: print-and-return-number-Output, value: \'{{tasks.print-and-return-number.outputs.parameters.print-and-return-number-Output}}\'}\n  - name: print-and-return-number\n    container:\n      args: [--number, \'{{inputs.parameters.number_1}}\', \'----output-paths\', /tmp/outputs/Output/data]\n      command:\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def print_and_return_number(number):\n            print(number)\n            return number\n\n        def _serialize_int(int_value: int) -> str:\n            if isinstance(int_value, str):\n                return int_value\n            if not isinstance(int_value, int):\n                raise TypeError(\'Value "{}" has type "{}" instead of int.\'.format(str(int_value), str(type(int_value))))\n            return str(int_value)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Print and return number\', description=\'\')\n        _parser.add_argument("--number", dest="number", type=int, required=True, default=argparse.SUPPRESS)\n        _parser.add_argument("----output-paths", dest="_output_paths", type=str, nargs=1)\n        _parsed_args = vars(_parser.parse_args())\n        _output_files = _parsed_args.pop("_output_paths", [])\n\n        _outputs = print_and_return_number(**_parsed_args)\n\n        _outputs = [_outputs]\n\n        _output_serializers = [\n            _serialize_int,\n\n        ]\n\n        import os\n        for idx, output_file in enumerate(_output_files):\n            try:\n                os.makedirs(os.path.dirname(output_file))\n            except OSError:\n                pass\n            with open(output_file, \'w\') as f:\n                f.write(_output_serializers[idx](_outputs[idx]))\n      image: python:3.7\n    inputs:\n      parameters:\n      - {name: number_1}\n    outputs:\n      parameters:\n      - name: print-and-return-number-Output\n        valueFrom: {path: /tmp/outputs/Output/data}\n      artifacts:\n      - {name: print-and-return-number-Output, path: /tmp/outputs/Output/data}\n    metadata:\n      labels: {pipelines.kubeflow.org/kfp_sdk_version: 1.6.3, pipelines.kubeflow.org/pipeline-sdk-type: kfp}\n      annotations: {pipelines.kubeflow.org/component_spec: \'{"implementation": {"container":\n          {"args": ["--number", {"inputValue": "number"}, "----output-paths", {"outputPath":\n          "Output"}], "command": ["sh", "-ec", "program_path=$(mktemp)\\nprintf \\"%s\\"\n          \\"$0\\" > \\"$program_path\\"\\npython3 -u \\"$program_path\\" \\"$@\\"\\n", "def\n          print_and_return_number(number):\\n    print(number)\\n    return number\\n\\ndef\n          _serialize_int(int_value: int) -> str:\\n    if isinstance(int_value, str):\\n        return\n          int_value\\n    if not isinstance(int_value, int):\\n        raise TypeError(\'\'Value\n          \\"{}\\" has type \\"{}\\" instead of int.\'\'.format(str(int_value), str(type(int_value))))\\n    return\n          str(int_value)\\n\\nimport argparse\\n_parser = argparse.ArgumentParser(prog=\'\'Print\n          and return number\'\', description=\'\'\'\')\\n_parser.add_argument(\\"--number\\",\n          dest=\\"number\\", type=int, required=True, default=argparse.SUPPRESS)\\n_parser.add_argument(\\"----output-paths\\",\n          dest=\\"_output_paths\\", type=str, nargs=1)\\n_parsed_args = vars(_parser.parse_args())\\n_output_files\n          = _parsed_args.pop(\\"_output_paths\\", [])\\n\\n_outputs = print_and_return_number(**_parsed_args)\\n\\n_outputs\n          = [_outputs]\\n\\n_output_serializers = [\\n    _serialize_int,\\n\\n]\\n\\nimport\n          os\\nfor idx, output_file in enumerate(_output_files):\\n    try:\\n        os.makedirs(os.path.dirname(output_file))\\n    except\n          OSError:\\n        pass\\n    with open(output_file, \'\'w\'\') as f:\\n        f.write(_output_serializers[idx](_outputs[idx]))\\n"],\n          "image": "python:3.7"}}, "inputs": [{"name": "number", "type": "Integer"}],\n          "name": "Print and return number", "outputs": [{"name": "Output", "type":\n          "Integer"}]}\', pipelines.kubeflow.org/component_ref: \'{}\', pipelines.kubeflow.org/arguments.parameters: \'{"number":\n          "{{inputs.parameters.number_1}}"}\'}\n  - name: print-and-return-number-2\n    container:\n      args: [--number, \'{{inputs.parameters.number_2}}\', \'----output-paths\', /tmp/outputs/Output/data]\n      command:\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def print_and_return_number(number):\n            print(number)\n            return number\n\n        def _serialize_int(int_value: int) -> str:\n            if isinstance(int_value, str):\n                return int_value\n            if not isinstance(int_value, int):\n                raise TypeError(\'Value "{}" has type "{}" instead of int.\'.format(str(int_value), str(type(int_value))))\n            return str(int_value)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Print and return number\', description=\'\')\n        _parser.add_argument("--number", dest="number", type=int, required=True, default=argparse.SUPPRESS)\n        _parser.add_argument("----output-paths", dest="_output_paths", type=str, nargs=1)\n        _parsed_args = vars(_parser.parse_args())\n        _output_files = _parsed_args.pop("_output_paths", [])\n\n        _outputs = print_and_return_number(**_parsed_args)\n\n        _outputs = [_outputs]\n\n        _output_serializers = [\n            _serialize_int,\n\n        ]\n\n        import os\n        for idx, output_file in enumerate(_output_files):\n            try:\n                os.makedirs(os.path.dirname(output_file))\n            except OSError:\n                pass\n            with open(output_file, \'w\') as f:\n                f.write(_output_serializers[idx](_outputs[idx]))\n      image: python:3.7\n    inputs:\n      parameters:\n      - {name: number_2}\n    outputs:\n      parameters:\n      - name: print-and-return-number-2-Output\n        valueFrom: {path: /tmp/outputs/Output/data}\n      artifacts:\n      - {name: print-and-return-number-2-Output, path: /tmp/outputs/Output/data}\n    metadata:\n      labels: {pipelines.kubeflow.org/kfp_sdk_version: 1.6.3, pipelines.kubeflow.org/pipeline-sdk-type: kfp}\n      annotations: {pipelines.kubeflow.org/component_spec: \'{"implementation": {"container":\n          {"args": ["--number", {"inputValue": "number"}, "----output-paths", {"outputPath":\n          "Output"}], "command": ["sh", "-ec", "program_path=$(mktemp)\\nprintf \\"%s\\"\n          \\"$0\\" > \\"$program_path\\"\\npython3 -u \\"$program_path\\" \\"$@\\"\\n", "def\n          print_and_return_number(number):\\n    print(number)\\n    return number\\n\\ndef\n          _serialize_int(int_value: int) -> str:\\n    if isinstance(int_value, str):\\n        return\n          int_value\\n    if not isinstance(int_value, int):\\n        raise TypeError(\'\'Value\n          \\"{}\\" has type \\"{}\\" instead of int.\'\'.format(str(int_value), str(type(int_value))))\\n    return\n          str(int_value)\\n\\nimport argparse\\n_parser = argparse.ArgumentParser(prog=\'\'Print\n          and return number\'\', description=\'\'\'\')\\n_parser.add_argument(\\"--number\\",\n          dest=\\"number\\", type=int, required=True, default=argparse.SUPPRESS)\\n_parser.add_argument(\\"----output-paths\\",\n          dest=\\"_output_paths\\", type=str, nargs=1)\\n_parsed_args = vars(_parser.parse_args())\\n_output_files\n          = _parsed_args.pop(\\"_output_paths\\", [])\\n\\n_outputs = print_and_return_number(**_parsed_args)\\n\\n_outputs\n          = [_outputs]\\n\\n_output_serializers = [\\n    _serialize_int,\\n\\n]\\n\\nimport\n          os\\nfor idx, output_file in enumerate(_output_files):\\n    try:\\n        os.makedirs(os.path.dirname(output_file))\\n    except\n          OSError:\\n        pass\\n    with open(output_file, \'\'w\'\') as f:\\n        f.write(_output_serializers[idx](_outputs[idx]))\\n"],\n          "image": "python:3.7"}}, "inputs": [{"name": "number", "type": "Integer"}],\n          "name": "Print and return number", "outputs": [{"name": "Output", "type":\n          "Integer"}]}\', pipelines.kubeflow.org/component_ref: \'{}\', pipelines.kubeflow.org/arguments.parameters: \'{"number":\n          "{{inputs.parameters.number_2}}"}\'}\n  - name: sum-and-print-numbers\n    container:\n      args: [--number-1, \'{{inputs.parameters.print-and-return-number-Output}}\', --number-2,\n        \'{{inputs.parameters.print-and-return-number-2-Output}}\']\n      command:\n      - sh\n      - -ec\n      - |\n        program_path=$(mktemp)\n        printf "%s" "$0" > "$program_path"\n        python3 -u "$program_path" "$@"\n      - |\n        def sum_and_print_numbers(number_1, number_2):\n            print(number_1 + number_2)\n\n        import argparse\n        _parser = argparse.ArgumentParser(prog=\'Sum and print numbers\', description=\'\')\n        _parser.add_argument("--number-1", dest="number_1", type=int, required=True, default=argparse.SUPPRESS)\n        _parser.add_argument("--number-2", dest="number_2", type=int, required=True, default=argparse.SUPPRESS)\n        _parsed_args = vars(_parser.parse_args())\n\n        _outputs = sum_and_print_numbers(**_parsed_args)\n      image: python:3.7\n    inputs:\n      parameters:\n      - {name: print-and-return-number-2-Output}\n      - {name: print-and-return-number-Output}\n    metadata:\n      labels: {pipelines.kubeflow.org/kfp_sdk_version: 1.6.3, pipelines.kubeflow.org/pipeline-sdk-type: kfp}\n      annotations: {pipelines.kubeflow.org/component_spec: \'{"implementation": {"container":\n          {"args": ["--number-1", {"inputValue": "number_1"}, "--number-2", {"inputValue":\n          "number_2"}], "command": ["sh", "-ec", "program_path=$(mktemp)\\nprintf \\"%s\\"\n          \\"$0\\" > \\"$program_path\\"\\npython3 -u \\"$program_path\\" \\"$@\\"\\n", "def\n          sum_and_print_numbers(number_1, number_2):\\n    print(number_1 + number_2)\\n\\nimport\n          argparse\\n_parser = argparse.ArgumentParser(prog=\'\'Sum and print numbers\'\',\n          description=\'\'\'\')\\n_parser.add_argument(\\"--number-1\\", dest=\\"number_1\\",\n          type=int, required=True, default=argparse.SUPPRESS)\\n_parser.add_argument(\\"--number-2\\",\n          dest=\\"number_2\\", type=int, required=True, default=argparse.SUPPRESS)\\n_parsed_args\n          = vars(_parser.parse_args())\\n\\n_outputs = sum_and_print_numbers(**_parsed_args)\\n"],\n          "image": "python:3.7"}}, "inputs": [{"name": "number_1", "type": "Integer"},\n          {"name": "number_2", "type": "Integer"}], "name": "Sum and print numbers"}\',\n        pipelines.kubeflow.org/component_ref: \'{}\', pipelines.kubeflow.org/arguments.parameters: \'{"number_1":\n          "{{inputs.parameters.print-and-return-number-Output}}", "number_2": "{{inputs.parameters.print-and-return-number-2-Output}}"}\'}\n  arguments:\n    parameters:\n    - {name: number_1}\n    - {name: number_2}\n  serviceAccountName: pipeline-runner\n'))))}_.isMDXComponent=!0},7114:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/pipeline-0-c62220ce65ed4a187b70947bccb0f1e6.png"}}]);