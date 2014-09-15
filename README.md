# CodeIsFun

Code your game AI

# Botify-saas Javascript SDK

SDK to help you build and run queries on the Botify-Saas API.


## Developement

### Requirements

This project requires NodeJS and GruntJS to be installed

- https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager
- http://gruntjs.com/getting-started


### Installation

```sh
git clone git@github.com:sem-io/botify-saas-js-sdk.git botify-js-sdk
cd botify-js-sdk
npm install

```

### Workflow

This project includes a grunt configuration to compile it from the coffeescript files.

There is also a task to run a basic server, to run it launch:

```sh
grunt http-server:dev
```

The `watch` task will watch any change on the coffee files and recompile the files
```sh
grunt watch
```

To build the final botify file, run:
```sh
grunt build
```

The test task automatically builds the project before running the tests
```sh
grunt test
```

### Debugging

When debugging tests, you have two options:

- you could use the nodejs debugger http://nodejs.org/api/debugger.html` to
debug the code in the console. Just add a breakpoint with `debugger;` in your
code and start the test taks with:

```sh
node debug $(which grunt) test
```

- or you could use the node-inspector package to debug it in the browser
(https://www.npmjs.org/package/grunt-debug-task), It will open the chrome browser.
To launch it run:

```sh
grunt debug test
```


**Note:** `test` is the name of the grunt task, you could replace it with any other task
