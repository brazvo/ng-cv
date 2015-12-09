# Angular Base Skeleton

This is base skeleton for angular application

## Dependencies

**Node.js** installed, **Bower** installed

### Bower

All dependencies are placed in public/bower.json. Just run
```
bower install
```
in **public** directory

### NPM

All dependencies are placed in package.json. Just run
```
npm install
```
in route directory

## Optimisation
If you want to minify your application JS files, you can do this by this command in public directory:
```
node ../node_modules/requirejs/bin/r.js -o app.build.js
```
It creates public/scripts/main-built.js

If you want to use minified *main-built.js* file change this:
```js
require.config({
    baseUrl: '.',
    paths: {
        //"main": "scripts/main-built",
        "main": "scripts/main"
    }
});
require(["main"]);
```
to
```js
require.config({
    baseUrl: '.',
    paths: {
        "main": "scripts/main-built",
        //"main": "scripts/main"
    }
});
require(["main"]);
```
in index.html file.

## Application Run
Run command in root directory
```
node server.js
```
and then type into your web browser http://localhost:8080/