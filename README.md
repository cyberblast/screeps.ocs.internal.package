## Getting started with the repository  

### Prerequisites 

* On Unix/Linux Distrubutions  
  You must have SSH keys linked to your GitHub account before following these instrucitons.  See https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account for details on setting this up.  
  
* On Windows  
  If you are not familiar in using a CLI (command line interface), it is recommened that you use Github Desktop https://desktop.github.com/, it is quite simple.  
  If you don't want to use Github Desktop, you must have SSH keys linked to your GitHub account before following these instructions (at least for *Installation: 3. Clone repository and submodules*).  
  
  To use **powershell**, you may have to do the following steps: 
  * Install OpenSSH  
    https://github.com/PowerShell/Win32-OpenSSH/wiki/Install-Win32-OpenSSH 
  * Install Git  
    https://git-scm.com/download/win
  * Install posh-git  
    https://github.com/dahlbyk/posh-git/blob/master/README.md
  * Extend PATH variable
    * Press "windows key" + "pause/break"
    * Click `Advanced system settings`
    * Click `Environment Variables`
    * In the `System Variables` area, locate the `Path` variable, highlight it and click `Edit`
    * Add path variables for git and OpenSSH (depending on where you put them)
      * C:\Program Files\Git
      * C:\Program Files\Git\bin
      * C:\Program Files\Git\cmd
      * C:\Program Files\OpenSSH
      
    
  * Add SSH keys to your github account  
    https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account

  Alternatively, you can use the git bash (included in git) or git shell (included in Github Desktop) or maybe your IDE or ...

### Installation

1. Install Node  
  https://nodejs.org/en/

2. Install the grunt CLI (using admin rights/sudo if required)  
  `npm install -g grunt-cli`  

3. Clone repository and submodules  
  * via CLI  
    `git clone --recursive https://github.com/cyberblast/screeps.ocs.internal.package.git`  
  * via Github Desktop  
    Click the plus sign (+) at the top left corner, click clone and select `cyberblast`, then `screeps.ocs.internal.package`.  

4. Install dependencies after changing directory into the newly cloned work area  
  `cd creeps.ocs.internal.package`  
  `npm i`

5. Create a screeps.json file (copy example.screeps.json) & enter screeps account login data  
  `cp example.screeps.json screeps.json`

### Usage

1. Commands
  * to build (without deployment)  
  `grunt`  
  * to build & deploy  
  `grunt deploy [--branch=<customBranch>]`
  * to build & deploy automatically upon saving  
  `grunt watch [--branch=<customBranch>]`
  * to build & publish to a folder (define in screeps.json)  
  `grunt publish`
  
2. After your first deployment using this repository, please call `delete Memory.modules;` from within the screeps console, to update module references.  
  *required only once, or maybe upon changes regarding module loading*  

3. You may want to create a directory called `overrides`. Here you'll be able to place `custom.*` and `viral.*` files that will be merged eventually.  
Please note, that it is required to call `getPath('<originalModuleNameWithoutExtension>', true)`, when adding a new `custom.*` or `viral.*` file to bust the cache and enable it.  
[More about custom overrides](https://github.com/ScreepsOCS/screeps.behaviour-action-pattern/wiki/Custom-Module-Overrides)  

4. Deploy Options
  * `--branch` : Use with `grunt deploy` or `grunt watch` to deploy code to a custom screeps branch. Will deploy to branch defined in screeps.json when not specifying --branch on command.

## Advanced Branch Management

### Reintegrate Documentation

* Create feature mixin branch.

`grunt reintegrate:_BRANCH_[:clean]`

Creates _\_BRANCH\__ from reintegrate.json:_$target_.reset and merges all branches in reintegrate.json:_$target_.merge

* Fetch all submodules

`grunt gitfetch`

Runs git fetch on `ocs.internal`, `ocs.personal`, and `overries` (if overrides contains `.git`).

### Reintegrate Guide

If you find that you want to try multiple feature branches you can use the `reintegrate` feature to automatically merge them into your code.

1. Make sure that all of your virals and personalizations are located in the `overrides/` directory or project root.

2. Modify `/reintegrate.json` or create a copy in your `overrides/` directory. Change the `"reset"` property to indicate
the branch which you are merging features into (usually `dev`). Add feature branches into the `"merge"` property (make sure
to include the remote to keep this tidy, e.g. `origin/my-feature-branch`)

3. Decide on a branch name for your integration work. The example used here is `integrationBranch`

4. Run the grunt tasks to update and reintegrate the features you want to use:

`grunt gitfetch reintegrate:integrationBranch`

5. If anything fails try removing feature branches to find a clean mixture. Experienced git users can make use of `git config rerere.enabled true` and manually resolve merge conflicts.

6. To test the current `dev` branches, simply run `grunt gitfetch reintegrate:integrationBranch:clean`

## Links

[Public repository](https://github.com/ScreepsOCS/screeps.behaviour-action-pattern)  
[Internal repository](https://github.com/cyberblast/screeps.ocs.internal)  
[Internal package repository](https://github.com/cyberblast/screeps.ocs.internal.package)  
[Wiki](https://github.com/ScreepsOCS/screeps.behaviour-action-pattern/wiki)  
[OCS Constitution](https://screepsocs.github.io/screeps.ocs/OCS_Constitution)  
[OCS on slack](https://screeps.slack.com/messages/ocs)  
[Alliance map](http://www.leagueofautomatednations.com/a/OCS)  
[mail](mailto://ocs@cyberblast.org)  

