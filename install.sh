#!/bin/bash
set -ex

sudo dnf install -y npm nodejs-typescript

root=$(git rev-parse --show-toplevel)
cd $root
npm run-script build
npm install
if [ ! -d ~/.config/Mailspring ]; then
    echo "Mailspring isn't installed, install it first, then try again"
    exit 1
fi
cd ~/.config/Mailspring
if [ ! -d packages ]; then
    mkdir packages
fi
cd packages
ln -s $root .
