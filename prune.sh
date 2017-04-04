#!/usr/bin/env bash

prune() {
    module=$1
    cd "./ocs.${module}"
    git pull origin dev
    git fetch -p
    git branch -r | awk '{print $1}' | egrep -v -f /dev/fd/0 <(git branch -vv | grep origin) | awk '{print $1}' | xargs git branch -D
    cd ./..
}

prune public
prune internal