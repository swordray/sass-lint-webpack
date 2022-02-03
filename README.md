# Sass-lint Webpack Plugin

Sass-lint plugin for Webpack 4+

## Requirements

* [sass-lint](https://github.com/sasstools/sass-lint)
* [Webpack](http://webpack.js.org/) 4+

## Installation

### Yarn

```bash
yarn add -D sass-lint sass-lint-webpack
```

### NPM

```bash
npm install -D sass-lint sass-lint-webpack
```

## Usage

Add following lines to your Webpack config file (eg. `webpack.config.js`).

```js
const SassLintPlugin = require('sass-lint-webpack')

module.export = {
  // ...
  plugins: [
    // ...
    new SassLintPlugin(),
  ],
}
```

### Options

Normally the `.sass-lint.yml` file is all you need. It is also possible to manually pass options to sass-lint.

* files - a glob pattern or single file path as a lint target
* [options](https://github.com/sasstools/sass-lint#options) - user specified rules/options passed in
* [configPath](https://github.com/sasstools/sass-lint/blob/master/docs/options/config-file.md) - path to a config file

## Sponsors

* [BaiLu ShuYuan](https://bailushuyuan.org)

## License

Copyright (c) 2022 Jianqiu Xiao <swordray@gmail.com> under the MIT License.
