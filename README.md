# React Starter

> The TypeScript React Starter

I assume that you're already using [Node.js](https://nodejs.org/) with [npm](https://www.npmjs.com/).

## Getting Started

Install dependencies:
```bash
npm start
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
npm run serve
```

### Production

Creating a production build:
```bash
npm run build
```

### Linting

Lint TypeScript and scss:
```bash
npm run lint
```

### Unit Testing

Testing the project:
```bash
npm test
```

### Documentation

Generate Documentation:
```bash
npm run doc
```

## Concepts

#### Styling

|Name|Status|Install Size|Description|
|:--:|:----:|:----------:|:----------|
|<a href="https://github.com/webpack/style-loader">`<style>`</a>|![style-npm]|![style-size]|Add exports of a module as style to DOM|
|<a href="https://github.com/webpack/css-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/css-3.svg"></a>|![css-npm]|![css-size]|Loads CSS file with resolved imports and returns CSS code|
|<a href="https://github.com/webpack/less-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/less-63.svg"></a>|![less-npm]|![less-size]|Loads and compiles a LESS file|
|<a href="https://github.com/jtangelder/sass-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/sass-1.svg"></a>|![sass-npm]|![sass-size]|Loads and compiles a Sass/SCSS file|
|<a href="https://github.com/shama/stylus-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/stylus.svg"></a>|![stylus-npm]|![stylus-size]|Loads and compiles a Stylus file|
|<a href="https://github.com/postcss/postcss-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/postcss.svg"></a>|![postcss-npm]|![postcss-size]|Loads and transforms a CSS/SSS file using [PostCSS](http://postcss.org)|


[style-npm]: https://img.shields.io/npm/v/style-loader.svg
[style-size]: https://packagephobia.now.sh/badge?p=style-loader
[css-npm]: https://img.shields.io/npm/v/css-loader.svg
[css-size]: https://packagephobia.now.sh/badge?p=css-loader
[less-npm]: https://img.shields.io/npm/v/less-loader.svg
[less-size]: https://packagephobia.now.sh/badge?p=less-loader
[sass-npm]: https://img.shields.io/npm/v/sass-loader.svg
[sass-size]: https://packagephobia.now.sh/badge?p=sass-loader
[stylus-npm]: https://img.shields.io/npm/v/stylus-loader.svg
[stylus-size]: https://packagephobia.now.sh/badge?p=stylus-loader
[postcss-npm]: https://img.shields.io/npm/v/postcss-loader.svg
[postcss-size]: https://packagephobia.now.sh/badge?p=postcss-loader