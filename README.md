## Getting started with the repository  

1. Install Node  
  https://nodejs.org/en/

2. Install the grunt CLI  
  `npm install -g grunt-cli`  

3. clone repository and submodules
  `git clone --recursive https://github.com/cyberblast/screeps.ocs.internal.package.git`

4. Install dependencies  
  `npm i`  

5. load submodules  
  `git submodule init`  
  `git submodule update --recursive --remote`  

5. create a screeps.json file (copy example.screeps.json) & enter login data

6. Use commands
  * to build (without deployment)  
  `grunt`  
  * to build & deploy  
  `grunt deploy`  
  * to build, compress & deploy  
  `grunt compress-deploy`  


### For a first quickstart regarding the code: __Please have a look at the [Wiki](https://github.com/ScreepsOCS/screeps.behaviour-action-pattern/wiki)!__

## Links

[OCS Constitution](https://github.com/ScreepsGamers/OCS)  
[OCS on slack](https://screeps.slack.com/messages/ocs)  
[Alliance map](http://www.leagueofautomatednations.com/a/OCS)  
[Public repository](https://github.com/ScreepsOCS/screeps.behaviour-action-pattern)  
[Internal repository](https://github.com/cyberblast/screeps.ocs.internal)  
[Internal package repository](https://github.com/cyberblast/screeps.ocs.internal.package)  
[mail](mailto://ocs@cyberblast.org)  
