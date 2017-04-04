#!/usr/bin/env bash

reintegrate() {
    module=$1
    cd "./ocs.${module,,}"
    echo -e ${TEXT}Copying $BRANCHTEXT$TEXT reintegrate to $MOD$module$R
    cp ./../overrides/reintegrate.json ./reintegrate-$BRANCH.json
    echo -e ${TEXT}Adding $BRANCHTEXT$TEXT reintegrate to git$R
    git add reintegrate-$BRANCH.json >/dev/null 2>&1
    git commit -m $BRANCH >/dev/null 2>&1
    echo -e ${TEXT}Pushing to $MOD$module\'s $BRANCHTEXT$TEXT branch$R
    git push -f upstream $BRANCH >/dev/null 2>&1
    echo -e ${UPDATE}Finished $module$R$N
    cd ./..
}

BRANCH=${1:-canary}

R="\033[0m"
N="\n"
TEXT="${R}\033[32m"
BRANCHTEXT="\033[1;93m$BRANCH$R"
UPDATE="\033[96m"
MOD="\033[95m"

echo -e ${TEXT}Pushing $BRANCHTEXT$TEXT to GitHub$R$N

echo -e ${UPDATE}Starting Public$R
reintegrate Public

echo -e ${UPDATE}Starting Internal$R
reintegrate Internal

echo -e ${UPDATE}Complete'!'$R
read -rsn1
exit