"use strict";(self.webpackChunkv_2=self.webpackChunkv_2||[]).push([[4095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"[Practice] Docker command",description:"Practice to use docker command.",sidebar_position:4,contributors:["Jongseob Jeon","Jaeyeon Kim"]},l=void 0,i={unversionedId:"prerequisites/docker/command",id:"prerequisites/docker/command",title:"[Practice] Docker command",description:"Practice to use docker command.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/prerequisites/docker/command.md",sourceDirName:"prerequisites/docker",slug:"/prerequisites/docker/command",permalink:"/mlops-for-all/en/docs/prerequisites/docker/command",draft:!1,editUrl:"https://github.com/mlops-for-all/mlops-for-all.github.io/tree/main/docs/prerequisites/docker/command.md",tags:[],version:"current",lastUpdatedBy:"Jeong",lastUpdatedAt:1708161852,formattedLastUpdatedAt:"Feb 17, 2024",sidebarPosition:4,frontMatter:{title:"[Practice] Docker command",description:"Practice to use docker command.",sidebar_position:4,contributors:["Jongseob Jeon","Jaeyeon Kim"]},sidebar:"preSidebar",previous:{title:"What is Docker?",permalink:"/mlops-for-all/en/docs/prerequisites/docker/"},next:{title:"[Practice] Docker images",permalink:"/mlops-for-all/en/docs/prerequisites/docker/images"}},s={},c=[{value:"1. Normal installation confirmation",id:"1-normal-installation-confirmation",level:2},{value:"2. Docker Pull",id:"2-docker-pull",level:2},{value:"3. Docker images",id:"3-docker-images",level:2},{value:"4. Docker ps",id:"4-docker-ps",level:2},{value:"5. Docker run",id:"5-docker-run",level:2},{value:"6. Docker exec",id:"6-docker-exec",level:2},{value:"7. Docker logs",id:"7-docker-logs",level:2},{value:"8. Docker stop",id:"8-docker-stop",level:2},{value:"10. Docker rmi",id:"10-docker-rmi",level:2},{value:"References",id:"references",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-normal-installation-confirmation"},"1. Normal installation confirmation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run hello-world\n")),(0,r.kt)("p",null,"If installed correctly, you should be able to see the following message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Hello from Docker!\nThis message shows that your installation appears to be working correctly.\n....\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"(For ubuntu)")," If you want to use without sudo, please refer to the following site."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user"},"https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user"))),(0,r.kt)("h2",{id:"2-docker-pull"},"2. Docker Pull"),(0,r.kt)("p",null,"Docker pull is a command to download Docker images from a Docker image registry (a repository where Docker images are stored and shared)."),(0,r.kt)("p",null,"You can check the arguments available in docker pull using the command below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull --help\n")),(0,r.kt)("p",null,"If performed normally, it prints out as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Usage:  docker pull [OPTIONS] NAME[:TAG|@DIGEST]\n\nPull an image or a repository from a registry\n\nOptions:\n  -a, --all-tags                Download all tagged images in the repository\n      --disable-content-trust   Skip image verification (default true)\n      --platform string         Set platform if server is multi-platform capable\n  -q, --quiet                   Suppress verbose output\n")),(0,r.kt)("p",null,"It can be seen here that docker pull takes two types of arguments. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPTIONS]")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"NAME[:TAG|@DIGEST]"))),(0,r.kt)("p",null,"In order to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-q")," options from help, they must be used before the NAME.\nLet's try and pull the ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu:18.04")," image directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ubuntu:18.04\n")),(0,r.kt)("p",null,"If interpreted correctly, the command means to pull an image with the tag ",(0,r.kt)("inlineCode",{parentName:"p"},"18.04")," from an image named ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu"),"."),(0,r.kt)("p",null,"If performed successfully, it will produce an output similar to the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"18.04: Pulling from library/ubuntu\n20d796c36622: Pull complete \nDigest: sha256:42cd9143b6060261187a72716906187294b8b66653b50d70bc7a90ccade5c984\nStatus: Downloaded newer image for ubuntu:18.04\ndocker.io/library/ubuntu:18.04\n")),(0,r.kt)("p",null,"If you perform the above command, you will download the image called 'ubuntu:18.04' from a registry named ",(0,r.kt)("a",{parentName:"p",href:"http://docker.io/library/"},"docker.io/library")," to your laptop."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note that ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"in the future, if you need to get a docker image from a certain ",(0,r.kt)("strong",{parentName:"li"},"private")," registry instead of docker.io or public docker hub, you can use ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/login/"},(0,r.kt)("inlineCode",{parentName:"a"},"docker login"))," to point to the certain registry, then use ",(0,r.kt)("inlineCode",{parentName:"li"},"docker pull"),". Alternatively, you can set up an ",(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/42211380/add-insecure-registry-to-docker"},"insecure registry"),". "),(0,r.kt)("li",{parentName:"ul"},"Also note that ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/save/"},(0,r.kt)("inlineCode",{parentName:"a"},"docker save"))," and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/load/"},(0,r.kt)("inlineCode",{parentName:"a"},"docker load"))," commands are available to store and share docker images in the form of ",(0,r.kt)("inlineCode",{parentName:"li"},".tar")," file in an intranet.")))),(0,r.kt)("h2",{id:"3-docker-images"},"3. Docker images"),(0,r.kt)("p",null,"This is the command to list the Docker images that exist locally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker images --help\n")),(0,r.kt)("p",null,"The arguments available for use in docker images are as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Usage:  docker images [OPTIONS] [REPOSITORY[:TAG]]\n\nList images\n\nOptions:\n  -a, --all             Show all images (default hides intermediate images)\n      --digests         Show digests\n  -f, --filter filter   Filter output based on conditions provided\n      --format string   Pretty-print images using a Go template\n      --no-trunc        Don't truncate output\n  -q, --quiet           Only show image IDs\n")),(0,r.kt)("p",null,"Let's try executing the command below directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker images\n")),(0,r.kt)("p",null,"If you install Docker and proceed with this practice, it will output something similar to this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"REPOSITORY   TAG       IMAGE ID       CREATED      SIZE\nubuntu       18.04     29e70752d7b2   2 days ago   56.7MB\n")),(0,r.kt)("p",null,"If you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-q")," argument among the possible arguments, only the ",(0,r.kt)("inlineCode",{parentName:"p"},"IMAGE ID")," will be printed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker images -q\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"29e70752d7b2\n")),(0,r.kt)("h2",{id:"4-docker-ps"},"4. Docker ps"),(0,r.kt)("p",null,"Command to output the list of currently running Docker containers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps --help\n")),(0,r.kt)("p",null,"Use the following arguments can be used with 'docker ps':"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Usage:  docker ps [OPTIONS]\n\nList containers\n\nOptions:\n  -a, --all             Show all containers (default shows just running)\n  -f, --filter filter   Filter output based on conditions provided\n      --format string   Pretty-print containers using a Go template\n  -n, --last int        Show n last created containers (includes all states) (default -1)\n  -l, --latest          Show the latest created container (includes all states)\n      --no-trunc        Don't truncate output\n  -q, --quiet           Only display container IDs\n  -s, --size            Display total file sizes\n")),(0,r.kt)("p",null,"Let's try running the command below directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,r.kt)("p",null,"If there are no currently running containers, it will be as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES\n")),(0,r.kt)("p",null,"If there is a container running, it will look similar to this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE     COMMAND        CREATED          STATUS          PORTS     NAMES\nc1e8f5e89d8d   ubuntu    "sleep 3600"   13 seconds ago   Up 12 seconds             trusting_newton\n')),(0,r.kt)("h2",{id:"5-docker-run"},"5. Docker run"),(0,r.kt)("p",null,"Command to run a Docker container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --help\n")),(0,r.kt)("p",null,"The command to run docker run is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]\n\nRun a command in a new container\n")),(0,r.kt)("p",null,"What we need to confirm here is that the docker run command takes three types of arguments. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPTIONS]")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"[COMMAND]")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"[ARG...]"))),(0,r.kt)("p",null,"Let's try running a docker container ourselves."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]\ndocker run -it --name demo1 ubuntu:18.04 /bin/bash\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-it"),": Combination of ",(0,r.kt)("inlineCode",{parentName:"li"},"-i")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"-t")," options",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Runs the container and connects it to an interactive terminal"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--name"),": Assigns a name to the container for easier identification instead of using the container ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/bin/bash"),": Specifies the command to be executed in the container upon startup, where ",(0,r.kt)("inlineCode",{parentName:"li"},"/bin/bash")," opens a bash shell.")),(0,r.kt)("p",null,"After running the command, you can exit the container by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"exit")," command."),(0,r.kt)("p",null,"When you enter the previously learned ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps")," command, the following output will be displayed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES\n")),(0,r.kt)("p",null,"It was said that the container being executed was coming out, but for some reason the container that was just executed does not appear. The reason is that ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps")," shows the currently running containers by default. If you want to see the stopped containers too, you must give the ",(0,r.kt)("inlineCode",{parentName:"p"},"-a")," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -a\n")),(0,r.kt)("p",null,"Then the list of terminated containers will also be displayed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE          COMMAND       CREATED         STATUS                     PORTS     NAMES\n4c1aa74a382a   ubuntu:18.04   "/bin/bash"   2 minutes ago   Exited (0) 2 minutes ago             demo1\n')),(0,r.kt)("h2",{id:"6-docker-exec"},"6. Docker exec"),(0,r.kt)("p",null,"Docker exec is a command that is used to issue commands or access the inside of a Docker container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec --help\n")),(0,r.kt)("p",null,"For example, let's try running the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name demo2 ubuntu:18.04 sleep 3600\n")),(0,r.kt)("p",null,"Here, the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," option is a command that allows the Docker container to run in the background so that even if the connection ends to the container, it continues to run."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps")," to check if it is currently running."),(0,r.kt)("p",null,"It can be confirmed that it is running as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE          COMMAND        CREATED         STATUS         PORTS     NAMES\nfc88a83e90f0   ubuntu:18.04   "sleep 3600"   4 seconds ago   Up 3 seconds             demo2\n')),(0,r.kt)("p",null,"Now let's connect to the running docker container through the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker exec")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it demo2 /bin/bash\n")),(0,r.kt)("p",null,"This is the same as the previous ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command, allowing you to access the inside of the container."),(0,r.kt)("p",null,"You can exit using ",(0,r.kt)("inlineCode",{parentName:"p"},"exit"),"."),(0,r.kt)("h2",{id:"7-docker-logs"},"7. Docker logs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs --help\n")),(0,r.kt)("p",null,"I will have the following container be executed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --name demo3 -d busybox sh -c "while true; do $(echo date); sleep 1; done"\n')),(0,r.kt)("p",null,'By using the above command, we have set up a busybox container named "test" as a Docker container in the background and printed the current time once every second.'),(0,r.kt)("p",null,"Now let's check the log with the command below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs demo3\n")),(0,r.kt)("p",null,"If performed normally, it will be similar to below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Sun Mar  6 11:06:49 UTC 2022\nSun Mar  6 11:06:50 UTC 2022\nSun Mar  6 11:06:51 UTC 2022\nSun Mar  6 11:06:52 UTC 2022\nSun Mar  6 11:06:53 UTC 2022\nSun Mar  6 11:06:54 UTC 2022\n")),(0,r.kt)("p",null,"However, if used this way, you can only check the logs taken so far.",(0,r.kt)("br",{parentName:"p"}),"\n","In this case, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," option to keep watching and outputting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs demo3 -f    \n")),(0,r.kt)("h2",{id:"8-docker-stop"},"8. Docker stop"),(0,r.kt)("p",null,"Command to stop a running Docker container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop --help\n")),(0,r.kt)("p",null,"Through ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps"),", you can check the containers currently running, as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE          COMMAND                  CREATED              STATUS              PORTS     NAMES\n730391669c39   busybox        "sh -c \'while true; \u2026"   About a minute ago   Up About a minute             demo3\nfc88a83e90f0   ubuntu:18.04   "sleep 3600"             4 minutes ago        Up 4 minutes                  demo2\n')),(0,r.kt)("p",null,"Now let's try to stop Docker with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker stop"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop demo2\n")),(0,r.kt)("p",null,"After executing, type ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps")," again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS     NAMES\n730391669c39   busybox   "sh -c \'while true; \u2026"   2 minutes ago   Up 2 minutes             demo3\n')),(0,r.kt)("p",null,"Comparing with the above result, you can see that the demo2 container has disappeared from the list of currently running containers.\nThe rest of the containers will also be stopped."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop demo3\n")),(0,r.kt)("p",null,"Docker rm: Command to delete a Docker container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm --help\n")),(0,r.kt)("p",null,"Docker containers are in a stopped state by default. That's why you can see stopped containers using ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps -a"),".\nBut why do we have to delete the stopped containers?",(0,r.kt)("br",{parentName:"p"}),"\n","Even when stopped, the data used in the Docker remains in the container.\nSo you can restart the container through restarting. But this process will use disk.\nSo\nin order to delete the containers that are not used at all, we should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker rm")," command."),(0,r.kt)("p",null," First, let's check the current containers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -a\n")),(0,r.kt)("p",null,"There are three containers as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS                            PORTS     NAMES\n730391669c39   busybox        "sh -c \'while true; \u2026"   4 minutes ago    Exited (137) About a minute ago             demo3\nfc88a83e90f0   ubuntu:18.04   "sleep 3600"             7 minutes ago    Exited (137) 2 minutes ago                  demo2\n4c1aa74a382a   ubuntu:18.04   "/bin/bash"              10 minutes ago   Exited (0) 10 minutes ago                   demo1\n')),(0,r.kt)("p",null,"Let's try to delete the 'demo3' container through the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm demo3\n")),(0,r.kt)("p",null,"The command ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps -a")," reduced it to two lines as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE          COMMAND        CREATED          STATUS                       PORTS     NAMES\nfc88a83e90f0   ubuntu:18.04   "sleep 3600"   13 minutes ago   Exited (137) 8 minutes ago             demo2\n4c1aa74a382a   ubuntu:18.04   "/bin/bash"    16 minutes ago   Exited (0) 16 minutes ago              demo1\n')),(0,r.kt)("p",null,"Delete the remaining containers as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm demo2\ndocker rm demo1\n")),(0,r.kt)("h2",{id:"10-docker-rmi"},"10. Docker rmi"),(0,r.kt)("p",null,"Command to delete a Docker image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rmi --help\n")),(0,r.kt)("p",null,"Use the following commands to check which images are currently on the local."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker images\n")),(0,r.kt)("p",null,"The following is output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"REPOSITORY   TAG       IMAGE ID       CREATED        SIZE\nbusybox      latest    a8440bba1bc0   32 hours ago   1.41MB\nubuntu       18.04     29e70752d7b2   2 days ago     56.7MB\n")),(0,r.kt)("p",null,"I will try to delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"busybox")," image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rmi busybox\n")),(0,r.kt)("p",null,"If you type ",(0,r.kt)("inlineCode",{parentName:"p"},"docker images")," again, the following will appear."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"REPOSITORY   TAG       IMAGE ID       CREATED        SIZE\nubuntu       18.04     29e70752d7b2   2 days ago     56.7MB\n")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"},"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"))))}d.isMDXComponent=!0}}]);