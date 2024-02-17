"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[8834],{3905:(e,n,t)=>{t.d(n,{Zo:()=>v,kt:()=>y});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},v=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,v=r(e,["components","mdxType","originalType","parentName"]),u=p(t),c=l,y=u["".concat(s,".").concat(c)]||u[c]||h[c]||i;return t?a.createElement(y,o(o({ref:n},v),{},{components:t})):a.createElement(y,o({ref:n},v))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=c;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[u]="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const i={title:"1. Python \uac00\uc0c1\ud658\uacbd \uc124\uce58",sidebar_position:1},o=void 0,r={unversionedId:"appendix/pyenv",id:"appendix/pyenv",title:"1. Python \uac00\uc0c1\ud658\uacbd \uc124\uce58",description:"\ud30c\uc774\uc36c \uac00\uc0c1\ud658\uacbd",source:"@site/docs/appendix/pyenv.md",sourceDirName:"appendix",slug:"/appendix/pyenv",permalink:"/mlops-for-all.github.io/docs/appendix/pyenv",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/appendix/pyenv.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708161574,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 17\uc77c",sidebarPosition:1,frontMatter:{title:"1. Python \uac00\uc0c1\ud658\uacbd \uc124\uce58",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"6. Multi Models",permalink:"/mlops-for-all.github.io/docs/api-deployment/seldon-children"},next:{title:"2. Bare Metal \ud074\ub7ec\uc2a4\ud130\uc6a9 load balancer metallb \uc124\uce58",permalink:"/mlops-for-all.github.io/docs/appendix/metallb"}},s={},p=[{value:"\ud30c\uc774\uc36c \uac00\uc0c1\ud658\uacbd",id:"\ud30c\uc774\uc36c-\uac00\uc0c1\ud658\uacbd",level:2},{value:"pyenv \uc124\uce58",id:"pyenv-\uc124\uce58",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"\uc124\uce58 - macOS",id:"\uc124\uce58---macos",level:3},{value:"\uc124\uce58 - Ubuntu",id:"\uc124\uce58---ubuntu",level:3},{value:"pyenv \uc0ac\uc6a9",id:"pyenv-\uc0ac\uc6a9",level:2},{value:"Python \ubc84\uc804 \uc124\uce58",id:"python-\ubc84\uc804-\uc124\uce58",level:3},{value:"Python \uac00\uc0c1\ud658\uacbd \uc0dd\uc131",id:"python-\uac00\uc0c1\ud658\uacbd-\uc0dd\uc131",level:3},{value:"Python \uac00\uc0c1\ud658\uacbd \uc0ac\uc6a9",id:"python-\uac00\uc0c1\ud658\uacbd-\uc0ac\uc6a9",level:3},{value:"Python \uac00\uc0c1\ud658\uacbd \ube44\ud65c\uc131\ud654",id:"python-\uac00\uc0c1\ud658\uacbd-\ube44\ud65c\uc131\ud654",level:3}],v={toc:p},u="wrapper";function h(e){let{components:n,...t}=e;return(0,l.kt)(u,(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\ud30c\uc774\uc36c-\uac00\uc0c1\ud658\uacbd"},"\ud30c\uc774\uc36c \uac00\uc0c1\ud658\uacbd"),(0,l.kt)("p",null,"Python \ud658\uacbd\uc744 \uc0ac\uc6a9\ud558\ub2e4 \ubcf4\uba74 \uc5ec\ub7ec \ubc84\uc804\uc758 Python \ud658\uacbd\uc744 \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0\ub098, \uc5ec\ub7ec \ud504\ub85c\uc81d\ud2b8\ubcc4 \ud328\ud0a4\uc9c0 \ubc84\uc804\uc744 \ub530\ub85c \uad00\ub9ac\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ucc98\ub7fc Python \ud658\uacbd \ud639\uc740 Python Package \ud658\uacbd\uc744 \uac00\uc0c1\ud654\ud558\uc5ec \uad00\ub9ac\ud558\ub294 \uac83\uc744 \uc27d\uac8c \ub3c4\uc640\uc8fc\ub294 \ub3c4\uad6c\ub85c\ub294 pyenv, conda, virtualenv, venv \ub4f1\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \uc911 ",(0,l.kt)("em",{parentName:"p"},"\ubaa8\ub450\uc758 MLOps"),"\uc5d0\uc11c\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"pyenv"),"\uc640 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv-virtualenv"},"pyenv-virtualenv"),"\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uc744 \ub2e4\ub8f9\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","pyenv\ub294 Python \ubc84\uc804\uc744 \uad00\ub9ac\ud558\ub294 \uac83\uc744 \ub3c4\uc640\uc8fc\uba70, pyenv-virtualenv\ub294 pyenv\uc758 plugin\uc73c\ub85c\uc368 \ud30c\uc774\uc36c \ud328\ud0a4\uc9c0 \ud658\uacbd\uc744 \uad00\ub9ac\ud558\ub294 \uac83\uc744 \ub3c4\uc640\uc90d\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"pyenv-\uc124\uce58"},"pyenv \uc124\uce58"),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"\uc6b4\uc601 \uccb4\uc81c\ubcc4\ub85c Prerequisites\uac00 \ub2e4\ub985\ub2c8\ub2e4. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv/wiki#suggested-build-environment"},"\ub2e4\uc74c \ud398\uc774\uc9c0"),"\ub97c \ucc38\uace0\ud558\uc5ec \ud544\uc218 \ud328\ud0a4\uc9c0\ub4e4\uc744 \uc124\uce58\ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\uc124\uce58---macos"},"\uc124\uce58 - macOS"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"pyenv, pyenv-virtualenv \uc124\uce58")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\nbrew install pyenv\nbrew install pyenv-virtualenv\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"pyenv \uc124\uc815")),(0,l.kt)("p",null,"macOS\uc758 \uacbd\uc6b0 \uce74\ud0c8\ub9ac\ub098 \ubc84\uc804 \uc774\ud6c4 \uae30\ubcf8 shell\uc774 zsh\ub85c \ubcc0\uacbd\ub418\uc5c8\uae30 \ub54c\ubb38\uc5d0 zsh\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\ub97c \uac00\uc815\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'eval \"$(pyenv init -)\"' >> ~/.zshrc\necho 'eval \"$(pyenv virtualenv-init -)\"' >> ~/.zshrc\nsource ~/.zshrc\n")),(0,l.kt)("p",null,"pyenv \uba85\ub839\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub418\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv --help\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv --help\nUsage: pyenv <command> [<args>]\n\nSome useful pyenv commands are:\n   --version   Display the version of pyenv\n   activate    Activate virtual environment\n   commands    List all available pyenv commands\n   deactivate   Deactivate virtual environment\n   exec        Run an executable with the selected Python version\n   global      Set or show the global Python version(s)\n   help        Display help for a command\n   hooks       List hook scripts for a given pyenv command\n   init        Configure the shell environment for pyenv\n   install     Install a Python version using python-build\n   local       Set or show the local application-specific Python version(s)\n   prefix      Display prefix for a Python version\n   rehash      Rehash pyenv shims (run this after installing executables)\n   root        Display the root directory where versions and shims are kept\n   shell       Set or show the shell-specific Python version\n   shims       List existing pyenv shims\n   uninstall   Uninstall a specific Python version\n   version     Show the current Python version(s) and its origin\n   version-file   Detect the file that sets the current pyenv version\n   version-name   Show the current Python version\n   version-origin   Explain how the current Python version is set\n   versions    List all Python versions available to pyenv\n   virtualenv   Create a Python virtualenv using the pyenv-virtualenv plugin\n   virtualenv-delete   Uninstall a specific Python virtualenv\n   virtualenv-init   Configure the shell environment for pyenv-virtualenv\n   virtualenv-prefix   Display real_prefix for a Python virtualenv version\n   virtualenvs   List all Python virtualenvs found in `$PYENV_ROOT/versions/*'.\n   whence      List all Python versions that contain the given executable\n   which       Display the full path to an executable\n\nSee `pyenv help <command>' for information on a specific command.\nFor full documentation, see: https://github.com/pyenv/pyenv#readme\n")),(0,l.kt)("h3",{id:"\uc124\uce58---ubuntu"},"\uc124\uce58 - Ubuntu"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"pyenv, pyenv-virtualenv \uc124\uce58")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://pyenv.run | bash\n")),(0,l.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \ub0b4\uc6a9\uc774 \ucd9c\ub825\ub418\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n  0     0    0     0    0     0      0      0 --:--:-- --:--:--   0     0    0     0    0     0      0      0 --:--:-- --:--:-- 100   270  100   270    0     0    239      0  0:00:01  0:00:01 --:--:--   239\nCloning into '/home/mlops/.pyenv'...\nr\n...\n\uc911\ub7b5...\n...\nremote: Enumerating objects: 10, done.\nremote: Counting objects: 100% (10/10), done.\nremote: Compressing objects: 100% (6/6), done.\nremote: Total 10 (delta 1), reused 6 (delta 0), pack-reused 0\nUnpacking objects: 100% (10/10), 2.92 KiB | 2.92 MiB/s, done.\n\nWARNING: seems you still have not added 'pyenv' to the load path.\n\n\n# See the README for instructions on how to set up\n# your shell environment for Pyenv.\n\n# Load pyenv-virtualenv automatically by adding\n# the following to ~/.bashrc:\n\neval \"$(pyenv virtualenv-init -)\"\n\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"pyenv \uc124\uc815")),(0,l.kt)("p",null,"\uae30\ubcf8 shell\ub85c bash shell\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\ub97c \uac00\uc815\ud558\uc600\uc2b5\ub2c8\ub2e4.\nbash\uc5d0\uc11c pyenv\uc640 pyenv-virtualenv \ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vi ~/.bashrc\n")),(0,l.kt)("p",null,"\ub2e4\uc74c \ubb38\uc790\uc5f4\uc744 \uc785\ub825\ud55c \ud6c4 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export PATH="$HOME/.pyenv/bin:$PATH"\neval "$(pyenv init -)"\neval "$(pyenv virtualenv-init -)"\n')),(0,l.kt)("p",null,"shell\uc744 restart \ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"exec $SHELL\n")),(0,l.kt)("p",null,"pyenv \uba85\ub839\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc218\ud589\ub418\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv --help\n")),(0,l.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ucd9c\ub825\ub418\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc124\uc815\ub41c \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv\npyenv 2.2.2\nUsage: pyenv <command> [<args>]\n\nSome useful pyenv commands are:\n   --version   Display the version of pyenv\n   activate    Activate virtual environment\n   commands    List all available pyenv commands\n   deactivate   Deactivate virtual environment\n   doctor      Verify pyenv installation and development tools to build pythons.\n   exec        Run an executable with the selected Python version\n   global      Set or show the global Python version(s)\n   help        Display help for a command\n   hooks       List hook scripts for a given pyenv command\n   init        Configure the shell environment for pyenv\n   install     Install a Python version using python-build\n   local       Set or show the local application-specific Python version(s)\n   prefix      Display prefix for a Python version\n   rehash      Rehash pyenv shims (run this after installing executables)\n   root        Display the root directory where versions and shims are kept\n   shell       Set or show the shell-specific Python version\n   shims       List existing pyenv shims\n   uninstall   Uninstall a specific Python version\n   version     Show the current Python version(s) and its origin\n   version-file   Detect the file that sets the current pyenv version\n   version-name   Show the current Python version\n   version-origin   Explain how the current Python version is set\n   versions    List all Python versions available to pyenv\n   virtualenv   Create a Python virtualenv using the pyenv-virtualenv plugin\n   virtualenv-delete   Uninstall a specific Python virtualenv\n   virtualenv-init   Configure the shell environment for pyenv-virtualenv\n   virtualenv-prefix   Display real_prefix for a Python virtualenv version\n   virtualenvs   List all Python virtualenvs found in `$PYENV_ROOT/versions/*'.\n   whence      List all Python versions that contain the given executable\n   which       Display the full path to an executable\n\nSee `pyenv help <command>' for information on a specific command.\nFor full documentation, see: https://github.com/pyenv/pyenv#readme\n")),(0,l.kt)("h2",{id:"pyenv-\uc0ac\uc6a9"},"pyenv \uc0ac\uc6a9"),(0,l.kt)("h3",{id:"python-\ubc84\uc804-\uc124\uce58"},"Python \ubc84\uc804 \uc124\uce58"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pyenv install <Python-Version>")," \uba85\ub839\uc744 \ud1b5\ud574 \uc6d0\ud558\ub294 \ud30c\uc774\uc36c \ubc84\uc804\uc744 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ubc88 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 \uc608\uc2dc\ub85c kubeflow\uc5d0\uc11c \uae30\ubcf8\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \ud30c\uc774\uc36c 3.7.12 \ubc84\uc804\uc744 \uc124\uce58\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv install 3.7.12\n")),(0,l.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub418\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uba54\uc2dc\uc9c0\uac00 \ucd9c\ub825\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv install 3.7.12\nDownloading Python-3.7.12.tar.xz...\n-> https://www.python.org/ftp/python/3.7.12/Python-3.7.12.tar.xz\nInstalling Python-3.7.12...\npatching file Doc/library/ctypes.rst\npatching file Lib/test/test_unicode.py\npatching file Modules/_ctypes/_ctypes.c\npatching file Modules/_ctypes/callproc.c\npatching file Modules/_ctypes/ctypes.h\npatching file setup.py\npatching file 'Misc/NEWS.d/next/Core and Builtins/2020-06-30-04-44-29.bpo-41100.PJwA6F.rst'\npatching file Modules/_decimal/libmpdec/mpdecimal.h\nInstalled Python-3.7.12 to /home/mlops/.pyenv/versions/3.7.12\n")),(0,l.kt)("h3",{id:"python-\uac00\uc0c1\ud658\uacbd-\uc0dd\uc131"},"Python \uac00\uc0c1\ud658\uacbd \uc0dd\uc131"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pyenv virtualenv <Installed-Python-Version> <\uac00\uc0c1\ud658\uacbd-\uc774\ub984>")," \uba85\ub839\uc744 \ud1b5\ud574 \uc6d0\ud558\ub294 \ud30c\uc774\uc36c \ubc84\uc804\uc758 \ud30c\uc774\uc36c \uac00\uc0c1\ud658\uacbd\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc608\uc2dc\ub85c Python 3.7.12 \ubc84\uc804\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"demo"),"\ub77c\ub294 \uc774\ub984\uc758 Python \uac00\uc0c1\ud658\uacbd\uc744 \uc0dd\uc131\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv virtualenv 3.7.12 demo\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv virtualenv 3.7.12 demo\nLooking in links: /tmp/tmpffqys0gv\nRequirement already satisfied: setuptools in /home/mlops/.pyenv/versions/3.7.12/envs/demo/lib/python3.7/site-packages (47.1.0)\nRequirement already satisfied: pip in /home/mlops/.pyenv/versions/3.7.12/envs/demo/lib/python3.7/site-packages (20.1.1)\n")),(0,l.kt)("h3",{id:"python-\uac00\uc0c1\ud658\uacbd-\uc0ac\uc6a9"},"Python \uac00\uc0c1\ud658\uacbd \uc0ac\uc6a9"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pyenv activate <\uac00\uc0c1\ud658\uacbd \uc774\ub984>")," \uba85\ub839\uc744 \ud1b5\ud574 \uc704\uc640 \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uc0dd\uc131\ud55c \uac00\uc0c1\ud658\uacbd\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc608\uc2dc\ub85c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"demo"),"\ub77c\ub294 \uc774\ub984\uc758 Python \uac00\uc0c1\ud658\uacbd\uc744 \uc0ac\uc6a9\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv activate demo\n")),(0,l.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 \ud604\uc7ac \uac00\uc0c1\ud658\uacbd\uc758 \uc815\ubcf4\uac00 shell\uc758 \ub9e8 \uc55e\uc5d0 \ucd9c\ub825\ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"  Before"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mlops@ubuntu:~$ pyenv activate demo\n")),(0,l.kt)("p",null,"  After"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv-virtualenv: prompt changing will be removed from future release. configure `export PYENV_VIRTUALENV_DISABLE_PROMPT=1' to simulate the behavior.\n(demo) mlops@ubuntu:~$ \n")),(0,l.kt)("h3",{id:"python-\uac00\uc0c1\ud658\uacbd-\ube44\ud65c\uc131\ud654"},"Python \uac00\uc0c1\ud658\uacbd \ube44\ud65c\uc131\ud654"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"source deactivate")," \uba85\ub839\uc744 \ud1b5\ud574 \ud604\uc7ac \uc0ac\uc6a9 \uc911\uc778 \uac00\uc0c1\ud658\uacbd\uc744 \ube44\ud65c\uc131\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source deactivate\n")),(0,l.kt)("p",null,"  Before"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"(demo) mlops@ubuntu:~$ source deactivate\n")),(0,l.kt)("p",null,"  After"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mlops@ubuntu:~$ \n")))}h.isMDXComponent=!0}}]);