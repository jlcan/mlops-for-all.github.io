"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[4299],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(t),d=o,f=s["".concat(l,".").concat(d)]||s[d]||c[d]||a;return t?r.createElement(f,p(p({ref:n},m),{},{components:t})):r.createElement(f,p({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[s]="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=t[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4977:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={title:"4. Component - Write",description:"",sidebar_position:4,contributors:["Jongseob Jeon"]},p=void 0,i={unversionedId:"kubeflow/basic-component",id:"kubeflow/basic-component",title:"4. Component - Write",description:"",source:"@site/docs/kubeflow/basic-component.md",sourceDirName:"kubeflow",slug:"/kubeflow/basic-component",permalink:"/mlops-for-all.github.io/docs/kubeflow/basic-component",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/kubeflow/basic-component.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708162774,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:4,frontMatter:{title:"4. Component - Write",description:"",sidebar_position:4,contributors:["Jongseob Jeon"]},sidebar:"tutorialSidebar",previous:{title:"3. Install Requirements",permalink:"/mlops-for-all.github.io/docs/kubeflow/basic-requirements"},next:{title:"5. Pipeline - Write",permalink:"/mlops-for-all.github.io/docs/kubeflow/basic-pipeline"}},l={},u=[{value:"Component",id:"component",level:2},{value:"Component Contents",id:"component-contents",level:2},{value:"Component Wrapper",id:"component-wrapper",level:2},{value:"Define a standalone Python function",id:"define-a-standalone-python-function",level:3},{value:"Convert to Kubeflow Format",id:"convert-to-kubeflow-format",level:3},{value:"Share component with yaml file",id:"share-component-with-yaml-file",level:3},{value:"How Kubeflow executes component",id:"how-kubeflow-executes-component",level:2},{value:"References:",id:"references",level:2}],m={toc:u},s="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"component"},"Component"),(0,o.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8(Component)\ub97c \uc791\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ub0b4\uc6a9\uc744 \uc791\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\ucef4\ud3ec\ub10c\ud2b8 \ucf58\ud150\uce20(Component Contents) \uc791\uc131"),(0,o.kt)("li",{parentName:"ol"},"\ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c(Component Wrapper) \uc791\uc131")),(0,o.kt)("p",null,"\uc774\uc81c \uac01 \uacfc\uc815\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"component-contents"},"Component Contents"),(0,o.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8 \ucf58\ud150\uce20\ub294 \uc6b0\ub9ac\uac00 \ud754\ud788 \uc791\uc131\ud558\ub294 \ud30c\uc774\uc36c \ucf54\ub4dc\uc640 \ub2e4\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc608\ub97c \ub4e4\uc5b4\uc11c \uc22b\uc790\ub97c \uc785\ub825\uc73c\ub85c \ubc1b\uace0 \uc785\ub825\ubc1b\uc740 \uc22b\uc790\ub97c \ucd9c\ub825\ud55c \ub4a4 \ubc18\ud658\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc791\uc131\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\ud30c\uc774\uc36c \ucf54\ub4dc\ub85c \uc791\uc131\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print(number)\n")),(0,o.kt)("p",null,"\uadf8\ub7f0\ub370 \uc774 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\uba74 \uc5d0\ub7ec\uac00 \ub098\uace0 \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294\ub370 \uadf8 \uc774\uc720\ub294 \ucd9c\ub825\ud574\uc57c \ud560 ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),"\uac00 \uc815\uc758\ub418\uc5b4 \uc788\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mlops-for-all.github.io/docs/kubeflow/kubeflow-concepts"},"Kubeflow Concepts"),"\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," \uc640 \uac19\uc774 \ucef4\ud3ec\ub10c\ud2b8 \ucf58\ud150\uce20\uc5d0\uc11c \ud544\uc694\ud55c \uac12\ub4e4\uc740 ",(0,o.kt)("strong",{parentName:"p"},"Config"),"\ub85c \uc815\uc758\ud55c\ub2e4\uace0 \ud588\uc2b5\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8 \ucf58\ud150\uce20\ub97c \uc2e4\ud589\uc2dc\ud0a4\uae30 \uc704\ud574 \ud544\uc694\ud55c Config\ub4e4\uc740 \ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c\uc5d0\uc11c \uc804\ub2ec\uc774 \ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"component-wrapper"},"Component Wrapper"),(0,o.kt)("h3",{id:"define-a-standalone-python-function"},"Define a standalone Python function"),(0,o.kt)("p",null,"\uc774\uc81c \ud544\uc694\ud55c Config\ub97c \uc804\ub2ec\ud560 \uc218 \uc788\ub3c4\ub85d \ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c\ub97c \ub9cc\ub4e4\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ubcc4\ub3c4\uc758 Config \uc5c6\uc774 \ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c\ub85c \uac10\uc300 \uacbd\uc6b0 \ub2e4\uc74c\uacfc \uac19\uc774 \ub429\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def print_and_return_number():\n    print(number)\n    return number\n")),(0,o.kt)("p",null,"\uc774\uc81c \ucf58\ud150\uce20\uc5d0\uc11c \ud544\uc694\ud55c Config\ub97c \ub798\ud37c\uc758 argument\ub85c \ucd94\uac00\ud569\ub2c8\ub2e4. \ub2e4\ub9cc, argument \ub9cc\uc744 \uc801\ub294 \uac83\uc774 \uc544\ub2c8\ub77c argument\uc758 \ud0c0\uc785 \ud78c\ud2b8\ub3c4 \uc791\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. Kubeflow\uc5d0\uc11c\ub294 \ud30c\uc774\ud504\ub77c\uc778\uc744 Kubeflow \ud3ec\ub9f7\uc73c\ub85c \ubcc0\ud658\ud560 \ub54c, \ucef4\ud3ec\ub10c\ud2b8 \uac04\uc758 \uc5f0\uacb0\uc5d0\uc11c \uc815\ud574\uc9c4 \uc785\ub825\uacfc \ucd9c\ub825\uc758 \ud0c0\uc785\uc774 \uc77c\uce58\ud558\ub294\uc9c0 \uccb4\ud06c\ud569\ub2c8\ub2e4. \ub9cc\uc57d \ucef4\ud3ec\ub10c\ud2b8\uac00 \ud544\uc694\ub85c \ud558\ub294 \uc785\ub825\uacfc \ub2e4\ub978 \ucef4\ud3ec\ub10c\ud2b8\ub85c\ubd80\ud130 \uc804\ub2ec\ubc1b\uc740 \ucd9c\ub825\uc758 \ud3ec\ub9f7\uc774 \uc77c\uce58\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \ud30c\uc774\ud504\ub77c\uc778 \uc0dd\uc131\uc744 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\uc81c \ub2e4\uc74c\uacfc \uac19\uc774 argument\uc640 \uadf8 \ud0c0\uc785, \uadf8\ub9ac\uace0 \ubc18\ud658\ud558\ub294 \ud0c0\uc785\uc744 \uc801\uc5b4\uc11c \ucef4\ud3ec\ub10c\ud2b8 \ub798\ud37c\ub97c \uc644\uc131\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n")),(0,o.kt)("p",null,"Kubeflow\uc5d0\uc11c \ubc18\ud658 \uac12\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud0c0\uc785\uc740 json\uc5d0\uc11c \ud45c\ud604\ud560 \uc218 \uc788\ub294 \ud0c0\uc785\ub4e4\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub300\ud45c\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\uba70 \uad8c\uc7a5\ud558\ub294 \ud0c0\uc785\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"int"),(0,o.kt)("li",{parentName:"ul"},"float"),(0,o.kt)("li",{parentName:"ul"},"str")),(0,o.kt)("p",null,"\ub9cc\uc57d \ub2e8\uc77c \uac12\uc774 \uc544\ub2cc \uc5ec\ub7ec \uac12\uc744 \ubc18\ud658\ud558\ub824\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"collections.namedtuple")," \uc744 \uc774\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,o.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/components/pipelines/sdk/python-function-components/#passing-parameters-by-value"},"Kubeflow \uacf5\uc2dd \ubb38\uc11c"),"\ub97c \ucc38\uace0 \ud558\uc2dc\uae38 \ubc14\ub78d\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc608\ub97c \ub4e4\uc5b4\uc11c \uc785\ub825\ubc1b\uc740 \uc22b\uc790\ub97c 2\ub85c \ub098\ub208 \ubaab\uacfc \ub098\uba38\uc9c0\ub97c \ubc18\ud658\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from typing import NamedTuple\n\n\ndef divide_and_return_number(\n    number: int,\n) -> NamedTuple("DivideOutputs", [("quotient", int), ("remainder", int)]):\n    from collections import namedtuple\n\n    quotient, remainder = divmod(number, 2)\n    print("quotient is", quotient)\n    print("remainder is", remainder)\n\n    divide_outputs = namedtuple(\n        "DivideOutputs",\n        [\n            "quotient",\n            "remainder",\n        ],\n    )\n    return divide_outputs(quotient, remainder)\n')),(0,o.kt)("h3",{id:"convert-to-kubeflow-format"},"Convert to Kubeflow Format"),(0,o.kt)("p",null,"\uc774\uc81c \uc791\uc131\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c kubeflow\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud3ec\ub9f7\uc73c\ub85c \ubcc0\ud658\ud574\uc57c \ud569\ub2c8\ub2e4. \ubcc0\ud658\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"kfp.components.create_component_from_func")," \ub97c \ud1b5\ud574\uc11c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc774\ub807\uac8c \ubcc0\ud658\ub41c \ud615\ud0dc\ub294 \ud30c\uc774\uc36c\uc5d0\uc11c \ud568\uc218\ub85c import \ud558\uc5ec\uc11c \ud30c\uc774\ud504\ub77c\uc778\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from kfp.components import create_component_from_func\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n")),(0,o.kt)("h3",{id:"share-component-with-yaml-file"},"Share component with yaml file"),(0,o.kt)("p",null,"\ub9cc\uc57d \ud30c\uc774\uc36c \ucf54\ub4dc\ub85c \uacf5\uc720\ub97c \ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0 YAML \ud30c\uc77c\ub85c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uacf5\uc720\ud574\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ub97c \uc704\ud574\uc11c\ub294 \uc6b0\uc120 \ucef4\ud3ec\ub10c\ud2b8\ub97c YAML \ud30c\uc77c\ub85c \ubcc0\ud658\ud55c \ub4a4 ",(0,o.kt)("inlineCode",{parentName:"p"},"kfp.components.load_component_from_file")," \uc744 \ud1b5\ud574 \ud30c\uc774\ud504\ub77c\uc778\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc6b0\uc120 \uc791\uc131\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c YAML \ud30c\uc77c\ub85c \ubcc0\ud658\ud558\ub294 \uacfc\uc815\uc5d0 \ub300\ud574\uc11c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from kfp.components import create_component_from_func\n\n@create_component_from_func\ndef print_and_return_number(number: int) -> int:\n    print(number)\n    return number\n\nif __name__ == "__main__":\n    print_and_return_number.component_spec.save("print_and_return_number.yaml")\n')),(0,o.kt)("p",null,"\uc791\uc131\ud55c \ud30c\uc774\uc36c \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"print_and_return_number.yaml")," \ud30c\uc77c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4. \ud30c\uc77c\uc744 \ud655\uc778\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'name: Print and return number\ninputs:\n- {name: number, type: Integer}\noutputs:\n- {name: Output, type: Integer}\nimplementation:\n  container:\n    image: python:3.7\n    command:\n    - sh\n    - -ec\n    - |\n      program_path=$(mktemp)\n      printf "%s" "$0" > "$program_path"\n      python3 -u "$program_path" "$@"\n    - |\n      def print_and_return_number(number):\n          print(number)\n          return number\n\n      def _serialize_int(int_value: int) -> str:\n          if isinstance(int_value, str):\n              return int_value\n          if not isinstance(int_value, int):\n              raise TypeError(\'Value "{}" has type "{}" instead of int.\'.format(str(int_value), str(type(int_value))))\n          return str(int_value)\n\n      import argparse\n      _parser = argparse.ArgumentParser(prog=\'Print and return number\', description=\'\')\n      _parser.add_argument("--number", dest="number", type=int, required=True, default=argparse.SUPPRESS)\n      _parser.add_argument("----output-paths", dest="_output_paths", type=str, nargs=1)\n      _parsed_args = vars(_parser.parse_args())\n      _output_files = _parsed_args.pop("_output_paths", [])\n\n      _outputs = print_and_return_number(**_parsed_args)\n\n      _outputs = [_outputs]\n\n      _output_serializers = [\n          _serialize_int,\n\n      ]\n\n      import os\n      for idx, output_file in enumerate(_output_files):\n          try:\n              os.makedirs(os.path.dirname(output_file))\n          except OSError:\n              pass\n          with open(output_file, \'w\') as f:\n              f.write(_output_serializers[idx](_outputs[idx]))\n    args:\n    - --number\n    - {inputValue: number}\n    - \'----output-paths\'\n    - {outputPath: Output}\n')),(0,o.kt)("p",null,"\uc774\uc81c \uc0dd\uc131\ub41c \ud30c\uc77c\uc744 \uacf5\uc720\ud574\uc11c \ud30c\uc774\ud504\ub77c\uc778\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from kfp.components import load_component_from_file\n\nprint_and_return_number = load_component_from_file("print_and_return_number.yaml")\n')),(0,o.kt)("h2",{id:"how-kubeflow-executes-component"},"How Kubeflow executes component"),(0,o.kt)("p",null,"Kubeflow\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc2e4\ud589\ub418\ub294 \uc21c\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"docker pull <image>"),": \uc815\uc758\ub41c \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc2e4\ud589 \ud658\uacbd \uc815\ubcf4\uac00 \ub2f4\uae34 \uc774\ubbf8\uc9c0\ub97c pull"),(0,o.kt)("li",{parentName:"ol"},"run ",(0,o.kt)("inlineCode",{parentName:"li"},"command"),": pull \ud55c \uc774\ubbf8\uc9c0\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8 \ucf58\ud150\uce20\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4.  ")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"print_and_return_number.yaml")," \ub97c \uc608\uc2dc\ub85c \ub4e4\uc790\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"@create_component_from_func")," \uc758 default image \ub294 python:3.7 \uc774\ubbc0\ub85c \ud574\ub2f9 \uc774\ubbf8\uc9c0\ub97c \uae30\uc900\uc73c\ub85c \ucef4\ud3ec\ub10c\ud2b8 \ucf58\ud150\uce20\ub97c \uc2e4\ud589\ud558\uac8c \ub429\ub2c8\ub2e4.  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"docker pull python:3.7")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"print(number)"))),(0,o.kt)("h2",{id:"references"},"References:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.kubeflow.org/docs/components/pipelines/sdk/python-function-components/#getting-started-with-python-function-based-components"},"Getting Started With Python function based components"))))}c.isMDXComponent=!0}}]);