### What is this?

This is a todolist with alarm.

### How to set up a developt environment on windows

Here are steps of setting up a deveplot enviroment on a clear Win7/Win8.

#### install chocolatey

Chocolatey is a software package management tool for windows. It is used to install other tools. To install, go to  [https://chocolatey.org/](https://chocolatey.org/) and follow the instructions.

#### setup chocolatey to use proxy for download

if you are behind a firewall and can't direct download some package, your can set up a http proxy, and set chocolatey to use it. Just set these two enviroment vairables in your command window.

```
set http_proxy # http://127.0.0.1:8123
set https_proxy # http://127.0.0.1:8123
```

#### install git

git is used by bower and used for version controls.

```
choco install git
git --version
# git version 1.9.5.msysgit.1
```

#### install npm

npm is used by grunt. Although this is not a node.js project, npm is a componet of node.js, so we must install nodejs.

```
choco install nodejs
npm --version
# 2.5.1
```

#### install bower

bower is a front-end package management tool, it is used to download front-end libraies and assets.

```
npm install -g bower
bower --version
# 1.3.12
```

#### install grunt

grunt is a task runner, it is used to run tasks in batchs and automatic generate source code with plugins. It is an effciency tool.

```
npm install -g grunt-cli
grunt --version
grunt-cli v0.1.13
```

#### install missing packages in project folder

run following commands to install missing package

```
npm install # install grunt, grunt plugins etc.
bower install # install jquery, requirejs, underscope, backbone etc.
```

see `package.json` for npm packages detail.
see `bower.json` for bower packages detail.

#### How to generate `package.json` and `bower.json` for a brand new project

 Take notes here just for record.

 If you start a brand new project, use these commands to setup npm `package.json` and bower `bower.json`.

Setup `package.json`

```
npm init

npm install grunt --save-dev
npm install grunt-contrib-jshint  -save-dev
npm install grunt-contrib-uglify  -save-dev
npm install grunt-bower-requirejs --save-dev
npm install grunt-contrib-qunit --save-dev
```

Setup `bower.json`

```
bower install underscore --save
bower install backbone --save
bower install jquery --save
bower install requirejs --save
bower install font-awesome --save
bower install backbone.localStorage --save
bower install qunit --save-dev
```
