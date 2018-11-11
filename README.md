# React Starter

> The TypeScript React Starter

I assume that you're already using [Node.js](https://nodejs.org/) with [npm](https://www.npmjs.com/)

## Getting Started

Install dependencies:
```bash
$ npm start
```

Project layout should look like the following:

```text
	React Starter
	├── dist
	├── node_modules
	├── src
	│	├── common
	│	│	└── scss
	│	│		└── _vars.scss
	│	├── components
	│	│	├── component-folder-name
	│	│	│	├── _style-name.scss
	│	│	│	└── component-name.tsx
	│	│	└── ...
	│	├── public
	│	│	└── index.html
	│	├── root
	│	│	├── _root.scss
	│	│	└── root.tsx
	│	├── index.tsx
	│	└── scss.d.ts
	├── .gitignore
	├── babel.config.js
	├── package.json
	├── package-lock.json
	├── postcss.config.js
	├── README.md
	├── stylelint.config.js
	├── tsconfig.json
	├── tslint.json
	└── webpack.config.ts
```

## Usage

### Development

Running the project:
```bash
$ npm run serve
```

### Production

Creating a production build:
```bash
$ npm run build
```

### Linting

Lint TypeScript and scss:
```bash
$ npm run lint
```

### Unit Testing

Testing the project:
```bash
$ npm test
```

### Documentation

Generate Documentation:
```bash
$ npm run doc
```

## Introduction

The main purpose of this React Starter is to...

## Dependencies

#### Framework

|Name|Status|Install Size|Description|
|:--:|:----:|:----------:|:----------|
|<a href="https://github.com/facebook/react"><img width="48" height="48" src="https://cdn.worldvectorlogo.com/logos/react.svg"></a>|![react-npm]|![react-size]|A JavaScript library for building user interfaces|


[react-npm]: https://img.shields.io/npm/v/react.svg
[react-size]: https://packagephobia.now.sh/badge?p=react

#### Transpiling

|Name|Status|Install Size|Description|
|:--:|:----:|:----------:|:----------|
|<a href="https://github.com/babel/babel-loader"><img width="48" height="48" title="babel-loader" src="https://worldvectorlogo.com/logos/babel-10.svg"></a>|![babel-npm]|![babel-size]|Loads TypeScript like JavaScript and transpiles to ES5 using <a href="https://github.com/babel/babel">Babel</a>|


[babel-npm]: https://img.shields.io/npm/v/babel-loader.svg
[babel-size]: https://packagephobia.now.sh/badge?p=babel-loader

#### Styling

|Name|Status|Install Size|Description|
|:--:|:----:|:----------:|:----------|
|<a href="https://github.com/webpack/style-loader">`<style>`</a>|![style-npm]|![style-size]|Add exports of a module as style to DOM|
|<a href="https://github.com/webpack/css-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/css-3.svg"></a>|![css-npm]|![css-size]|Loads CSS file with resolved imports and returns CSS code|
|<a href="https://github.com/postcss/postcss-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/postcss.svg"></a>|![postcss-npm]|![postcss-size]|Loads and transforms a CSS/SSS file using [PostCSS](http://postcss.org)|
|<a href="https://github.com/jtangelder/sass-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/sass-1.svg"></a>|![sass-npm]|![sass-size]|Loads and compiles a Sass/SCSS file|


[style-npm]: https://img.shields.io/npm/v/style-loader.svg
[style-size]: https://packagephobia.now.sh/badge?p=style-loader
[css-npm]: https://img.shields.io/npm/v/css-loader.svg
[css-size]: https://packagephobia.now.sh/badge?p=css-loader
[postcss-npm]: https://img.shields.io/npm/v/postcss-loader.svg
[postcss-size]: https://packagephobia.now.sh/badge?p=postcss-loader
[sass-npm]: https://img.shields.io/npm/v/sass-loader.svg
[sass-size]: https://packagephobia.now.sh/badge?p=sass-loader

#### Linting, Testing & Documentation

|Name|Status|Install Size|Description|
|:--:|:----:|:----------:|:----------|
|<a href="https://github.com/webpack/mocha-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/mocha.svg"></a>|![jest-npm]|![jest-size]|Tests with mocha (Browser/NodeJS)|
|<a href="https://github.com/MoOx/eslint-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/eslint.svg"></a>|![eslint-npm]|![eslint-size]|PreLoader for linting code using ESLint|
|<a href="https://github.com/webpack-contrib/jshint-loader"><img width="48" height="20.64" src="http://jshint.com/res/jshint-dark.png"></a>|![jshint-npm]|![jshint-size]|PreLoader for linting code using JSHint|

[jest-npm]: https://img.shields.io/npm/v/mocha-loader.svg
[jest-size]: https://packagephobia.now.sh/badge?p=mocha-loader
[eslint-npm]: https://img.shields.io/npm/v/eslint-loader.svg
[eslint-size]: https://packagephobia.now.sh/badge?p=eslint-loader
[jshint-npm]: https://img.shields.io/npm/v/jshint-loader.svg
[jshint-size]: https://packagephobia.now.sh/badge?p=jshint-loader
[jscs-npm]: https://img.shields.io/npm/v/jscs-loader.svg
[jscs-size]: https://packagephobia.now.sh/badge?p=jscs-loader

#### Plugins

|Name|Status|Install Size|Description|
|:--:|:----:|:----------:|:----------|
|<a href="https://github.com/ampedandwired/html-webpack-plugin"><img width="48" height="48" src="https://cdn.worldvectorlogo.com/logos/html-5.svg"></a>|![html-plugin-npm]|![html-plugin-size]|Simplifies creation of HTML files (`index.html`) to serve your bundles|
|<a href="https://github.com/webpack-contrib/stylelint-webpack-plugin"><img width="48" height="48" src="https://cdn.worldvectorlogo.com/logos/stylelint.svg"></a>|![style-lint-npm]|![style-lint-size]|A Stylelint plugin for linting|
|<a href="https://github.com/webpack-contrib/mini-css-extract-plugin"><img width="48" height="48" src="https://cdn.worldvectorlogo.com/logos/css-3.svg"></a>|![mini-css-npm]|![mini-css-size]|Extracts CSS into separate files. It creates a CSS file per JS file which contains CSS|
|[purgecss-webpack-plugin][purge-css]|![purge-css-npm]|![purge-css-size]|Plugin to remove unused css|


[html-plugin-npm]: https://img.shields.io/npm/v/html-webpack-plugin.svg
[html-plugin-size]: https://packagephobia.now.sh/badge?p=html-webpack-plugin
[style-lint-npm]: https://img.shields.io/npm/v/stylelint-webpack-plugin.svg
[style-lint-size]: https://packagephobia.now.sh/badge?p=stylelint-webpack-plugin
[mini-css-npm]: https://img.shields.io/npm/v/mini-css-extract-plugin.svg
[mini-css-size]: https://packagephobia.now.sh/badge?p=mini-css-extract-plugin
[purge-css]: https://github.com/FullHuman/purgecss-webpack-plugin
[purge-css-npm]: https://img.shields.io/npm/v/purgecss-webpack-plugin.svg
[purge-css-size]: https://packagephobia.now.sh/badge?p=purgecss-webpack-plugin

## Donation

If you want me to support with a cup of Tea...