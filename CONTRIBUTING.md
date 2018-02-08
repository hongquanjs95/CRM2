# Contributing Guide

Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will
always be given.

## Setting up your environment

After forking to your own github org, do the following steps to get started:

## clone your fork to your local machine
$ git clone https://github.com/hongquanjs95/CRM.git
$ cd  CRM
$ git status (check options your git)
emulator -list-avds
emulator -avd Nexus5
## step into use Git bash
$ git add * (add all to commit)
$ git add [package] (add 1 file)
$ git rm -f [package] (delete a file)
$ git commit -m "Messenger" (Commit with messenger)
$ git commit -a -m "Skipped check to commit"
$ git commit --amend -m "Back Commit" (Undo commit)
$ git remote rename [Old Name] [New Name] (use to change origin to your name)
// $ git branch "Your Branch" (Switch master to your Branch)
// $ git checkout "Your Branch"
// $ git branch -d "Your Branch"
$ git push origin master (need account)
$ git tag v1.0 (tag)
$ git tag -a v1.0 -m "Version 1.0"
$ git push --tags
$ git show v1.0 (show with tag v1.0)
$ git log (show log)
$ git log -p (show full log) --author (by use) --grep (by key) --until (before day) --since, --after (beetween day)
exp: git log --author=a@b.com --pretty="%tag"

## step into local expo (in use)
$ npm i -g create-react-native-app
$ create-react-native-app my-project
$ cd my-project
$ yarn start

## step into local none expo
$ npm install -g react-native-cli
$ react-native init my-project
$ cd my-project
$ npm start

# install dependencies with npm
$ npm install
$ npm install -g yarn
$ npm install [package]
$ npm restart
$ npm rebuild
$ npm uninstall [package]
$ npm cache clean
$ rm -rf node_modules && npm install (reinstall)

# install dependencies with yarn
$ yarn install
$ yarn add [package]
$ yarn install --force (rebuild)
$ yarn remove [package]
$ yarn cache clean [package]
$ yarn upgrade (reinstall)
# delete and reinstall node
rm -rf node_modules && npm install
npm start -- --reset-cache

# run packager for development
$ react-native start
$ npm start

### Developing on Android
react-native eject
react-native link
react-native run-android
