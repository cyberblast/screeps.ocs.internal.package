## Getting started with the repository  

1. Install Node  
  https://nodejs.org/en/

2. Install the grunt CLI  
  `npm install -g grunt-cli`  

3. clone repository and submodules  
  `git clone --recursive https://github.com/cyberblast/screeps.ocs.internal.package.git`

4. Install dependencies  
  `npm i`  

5. create a screeps.json file (copy example.screeps.json) & enter login data

6. Use commands
  * to build (without deployment)  
  `grunt`  
  * to build & deploy  
  `grunt deploy`  
  * to build & publish to a folder (define in screeps.json)  
  `grunt publish`  

7. After your first deployment using this repository, please call `delete Memory.modules;` from within the screeps console, to update module references. 
  *required only once*

## Links

[Public repository](https://github.com/ScreepsOCS/screeps.behaviour-action-pattern)  
[Internal repository](https://github.com/cyberblast/screeps.ocs.internal)  
[Internal package repository](https://github.com/cyberblast/screeps.ocs.internal.package)  
[Wiki](https://github.com/ScreepsOCS/screeps.behaviour-action-pattern/wiki)  
[OCS Constitution](https://screepsocs.github.io/screeps.ocs/OCS_Constitution)  
[OCS on slack](https://screeps.slack.com/messages/ocs)  
[Alliance map](http://www.leagueofautomatednations.com/a/OCS)  
[mail](mailto://ocs@cyberblast.org)  
