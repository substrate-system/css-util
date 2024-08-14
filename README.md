# CSS util
![tests](https://github.com/substrate-system/css-util/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/css-util?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![install size](https://packagephobia.com/badge?p=@substrate-system/css-util)](https://packagephobia.com/result?p=@substrate-system/css-util)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

Common CSS

[See a live demo](https://substrate-system.github.io/css-util/)

<!-- toc -->

## install

```sh
npm i -S @substrate-system/css-util
```

## use
This exposes CSS only.

### Import CSS

```js
import '@substrate-system/css-util/css'
```

Or minified:
```js
import '@substrate-system/css-util/css/min'
```

### pre-built
This package contains minified CSS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/css-util/dist/style.min.css ./public/css-util.css
```

#### HTML
```html
<head>
    <link rel="stylesheet" href="./css-util.css">
</head>
<body>
    <!-- ... -->
</body>
```
