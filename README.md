## Getting started with the repository  

1. Install Node  
  https://nodejs.org/en/

2. Install the grunt CLI  
  `npm install -g grunt-cli`  

3. Clone repository and submodules  
  `git clone --recursive https://github.com/cyberblast/screeps.ocs.internal.package.git`

4. Install dependencies  
  `npm i`  

5. Create a screeps.json file (copy example.screeps.json) & enter login data

6. Use commands
  * to build (without deployment)  
  `grunt`  
  * to build & deploy  
  `grunt deploy`  
  * to build & publish to a folder (define in screeps.json)  
  `grunt publish`  
  * to build & deploy while developing  
  `grunt watch`  

7. After your first deployment using this repository, please call `delete Memory.modules;` from within the screeps console, to update module references. *required only once*  

8. You may want to create a directory called `overrides`. Here you'll be able to place `custom.*` and `viral.*` files that will be merged eventually.  
Please note, that it is required to call `getPath('<originalModuleNameWithoutExtension>', true)`, when adding a new `custom` or `viral` file to bust the cache and enable it.  
[More about custom overrides](https://github.com/ScreepsOCS/screeps.behaviour-action-pattern/wiki/Custom-Module-Overrides)  

## Links

[Public repository](https://github.com/ScreepsOCS/screeps.behaviour-action-pattern)  
[Internal repository](https://github.com/cyberblast/screeps.ocs.internal)  
[Internal package repository](https://github.com/cyberblast/screeps.ocs.internal.package)  
[Wiki](https://github.com/ScreepsOCS/screeps.behaviour-action-pattern/wiki)  
[OCS Constitution](https://screepsocs.github.io/screeps.ocs/OCS_Constitution)  
[OCS on slack](https://screeps.slack.com/messages/ocs)  
[Alliance map](http://www.leagueofautomatednations.com/a/OCS)  
[mail](mailto://ocs@cyberblast.org)  
