# webpack-gulp-typescript-boilerplate

Minimal dev environment to start project based on gulp, webpack and typescript

## Installing

```
npm install webpack -g
npm install typescript -g
npm install
```

## Usage

```
npm start
```

webserver will open http://0.0.0.0:3000 on your default browser

add a cat name to cats array in 'app/js/cats.ts' you will see modification in your browser ( livereload will automatically refresh your page in the browser on save )

## Configuration
if you want to change host and port, use the file under 'config/development.js' and to change webpack entry files under 'config/webpackFilesInput.js'

## Dependencies

* babel-core
* babel-loader
* gulp
* gulp-webserver
* webpack
* webpack-stream
