"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[2759],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return t?o.createElement(f,i(i({ref:n},s),{},{components:t})):o.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var o=t(7462),r=(t(7294),t(3905));const a={title:"4. Component - Write",description:"",sidebar_position:4,contributors:["Jongseob Jeon"]},i=void 0,p={unversionedId:"kubeflow/basic-component",id:"kubeflow/basic-component",title:"4. Component - Write",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/kubeflow/basic-component.md",sourceDirName:"kubeflow",slug:"/kubeflow/basic-component",permalink:"/mlops-for-all/en/docs/kubeflow/basic-component",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow/basic-component.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708161852,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:4,frontMatter:{title:"4. Component - Write",description:"",sidebar_position:4,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"3. Install Requirements",permalink:"/mlops-for-all/en/docs/kubeflow/basic-requirements"},next:{title:"5. Pipeline - Write",permalink:"/mlops-for-all/en/docs/kubeflow/basic-pipeline"}},l={},u=[{value:"Component",id:"component",level:2},{value:"Component Contents",id:"component-contents",level:2},{value:"Component Wrapper",id:"component-wrapper",level:2},{value:"Define a standalone Python function",id:"define-a-standalone-python-function",level:3},{value:"Convert to Kubeflow Format",id:"convert-to-kubeflow-format",level:3},{value:"Share component with yaml file",id:"share-component-with-yaml-file",level:3},{value:"How Kubeflow executes component",id:"how-kubeflow-executes-component",level:2},{value:"References:",id:"references",level:2}],s={toc:u},m="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"component"},"Component"),(0,r.kt)("p",null,"In order to write a component, the following must be written: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Writing Component Contents "),(0,r.kt)("li",{parentName:"ol"},"Writing Component Wrapper ")),(0,r.kt)("p",null,"Now, let's look at each process."),(0,r.kt)("h2",{id:"component-contents"},"Component Contents"),(0,r.kt)("p",null,"Component Contents are no different from the Python code we commonly write.",(0,r.kt)("br",{parentName:"p"}),"\n","For example, let's try writing a component that takes a number as input, prints it, and then returns it.\nWe can write it in Python code like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(number)\n")),(0,r.kt)("p",null,"However, when this code is run, an error occurs and it does not work because the ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," that should be printed is not defined. "),(0,r.kt)("p",null,"As we saw in ",(0,r.kt)("a",{parentName:"p",href:"/mlops-for-all/en/docs/kubeflow/kubeflow-concepts"},"Kubeflow Concepts"),", values like ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," that are required in component content are defined in ",(0,r.kt)("strong",{parentName:"p"},"Config"),". In order to execute component content, the necessary Configs must be passed from the component wrapper."),(0,r.kt)("h2",{id:"component-wrapper"},"Component Wrapper"),(0,r.kt)("h3",{id:"define-a-standalone-python-function"},"Define a standalone Python function"),(0,r.kt)("p",null,"Now we need to create a component wrapper to be able to pass the required Configs."),(0,r.kt)("p",null,"Without a separate Config, it will be like this when wrapped with a component wrapper."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def print_and_return_number():\n    print(number)\n    return number\n")),(0,r.kt)("p",null,"Now we add the required Config for the content as an argument to the wrapper. However, it is not just writing the argument but also writing the type hint of the argument. When Kubeflow converts the pipeline into the Kubeflow format, it checks if the specified input and output types are matched in the connection between the components. If the format of the input required by the component does not match the output received from another component, the pipeline cannot be created."),(0,r.kt)("p",null,"Now we complete the component wrapper by writing down the argument, its type and the type to be returned as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n")),(0,r.kt)("p",null,"In Kubeflow, you can only use types that can be expressed in json as return values. The most commonly used and recommended types are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"int"),(0,r.kt)("li",{parentName:"ul"},"float"),(0,r.kt)("li",{parentName:"ul"},"str")),(0,r.kt)("p",null,"If you want to return multiple values instead of a single value, you must use ",(0,r.kt)("inlineCode",{parentName:"p"},"collections.namedtuple"),".",(0,r.kt)("br",{parentName:"p"}),"\n","For more details, please refer to the Kubeflow official documentation ",(0,r.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/components/pipelines/sdk/python-function-components/#passing-parameters-by-value"},"Kubeflow Official Documentation"),".",(0,r.kt)("br",{parentName:"p"}),"\n","For example, if you want to write a component that returns the quotient and remainder of a number when divided by 2, it should be written as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from typing import NamedTuple\n\n\ndef divide_and_return_number(\n    number: int,\n) -> NamedTuple("DivideOutputs", [("quotient", int), ("remainder", int)]):\n    from collections import namedtuple\n\n    quotient, remainder = divmod(number, 2)\n    print("quotient is", quotient)\n    print("remainder is", remainder)\n\n    divide_outputs = namedtuple(\n        "DivideOutputs",\n        [\n            "quotient",\n            "remainder",\n        ],\n    )\n    return divide_outputs(quotient, remainder)\n')),(0,r.kt)("h3",{id:"convert-to-kubeflow-format"},"Convert to Kubeflow Format"),(0,r.kt)("p",null,"Now you have to convert the written component into a format that can be used in Kubeflow. The conversion can be done through ",(0,r.kt)("inlineCode",{parentName:"p"},"kfp.components.create_component_from_func"),". This converted form can be imported as a function in Python and used in the pipeline."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from kfp.components import create_component_from_func\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n")),(0,r.kt)("h3",{id:"share-component-with-yaml-file"},"Share component with yaml file"),(0,r.kt)("p",null,"If it is not possible to share with Python code, you can share components with a YAML file and use them.\nTo do this, first convert the component to a YAML file and then use it in the pipeline with ",(0,r.kt)("inlineCode",{parentName:"p"},"kfp.components.load_component_from_file"),"."),(0,r.kt)("p",null,"First, let's explain the process of converting the written component to a YAML file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from kfp.components import create_component_from_func\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n\nif __name__ == "__main__":\n    print_and_return_number.component_spec.save("print_and_return_number.yaml")\n')),(0,r.kt)("p",null,"If you run the Python code you wrote, a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"print_and_return_number.yaml")," will be created. When you check the file, it will be as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'name: Print and return number\ninputs:\n- {name: number, type: Integer}\noutputs:\n- {name: Output, type: Integer}\nimplementation:\n  container:\n    image: python:3.7\n    command:\n    - sh\n    - -ec\n    - |\n      program_path=$(mktemp)\n      printf "%s" "$0" > "$program_path"\n      python3 -u "$program_path" "$@"\n    - |\n      def print_and_return_number(number):\n          print(number)\n          return number\n\n      def _serialize_int(int_value: int) -> str:\n          if isinstance(int_value, str):\n              return int_value\n          if not isinstance(int_value, int):\n              raise TypeError(\'Value "{}" has type "{}" instead of int.\'.format(str(int_value), str(type(int_value))))\n          return str(int_value)\n\n      import argparse\n      _parser = argparse.ArgumentParser(prog=\'Print and return number\', description=\'\')\n      _parser.add_argument("--number", dest="number", type=int, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("----output-paths", dest="_output_paths", type=str, nargs=1)\n      _parsed_args = vars(_parser.parse_args())\n      _output_files = _parsed_args.pop("_output_paths", [])\n\n      _outputs = print_and_return_number(**_parsed_args)\n\n      _outputs = [_outputs]\n\n      _output_serializers = [\n          _serialize_int,\n\n      ]\n\n      import os\n      for idx, output_file in enumerate(_output_files):\n          try:\n              os.makedirs(os.path.dirname(output_file))\n          except OSError:\n              pass\n          with open(output_file, \'w\') as f:\n              f.write(_output_serializers[idx](_outputs[idx]))\n    args:\n    - --number\n    - {inputValue: number}\n    - \'----output-paths\'\n    - {outputPath: Output}\n')),(0,r.kt)("p",null,"Now the generated file can be shared and used in the pipeline as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from kfp.components import load_component_from_file\n\nprint_and_return_number = load_component_from_file("print_and_return_number.yaml")\n')),(0,r.kt)("h2",{id:"how-kubeflow-executes-component"},"How Kubeflow executes component"),(0,r.kt)("p",null,"In Kubeflow, the execution order of components is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"docker pull <image>"),": Pull the image containing the execution environment information of the defined component."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"command"),": Execute the component's content within the pulled image.")),(0,r.kt)("p",null,"Taking ",(0,r.kt)("inlineCode",{parentName:"p"},"print_and_return_number.yaml")," as an example, the default image in ",(0,r.kt)("inlineCode",{parentName:"p"},"@create_component_from_func")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"python:3.7"),", so the component's content will be executed based on that image."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"docker pull python:3.7")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"print(number)"))),(0,r.kt)("h2",{id:"references"},"References:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.kubeflow.org/docs/components/pipelines/sdk/python-function-components/#getting-started-with-python-function-based-components"},"Getting Started With Python function based components"))))}c.isMDXComponent=!0}}]);