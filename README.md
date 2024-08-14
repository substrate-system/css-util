# CSS util
[![install size](https://packagephobia.com/badge?p=@substrate-system/css-util)](https://packagephobia.com/result?p=@substrate-system/css-util)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

Common CSS

[See a live demo](https://substrate-system.github.io/css-util/)

<!-- toc -->

- [install](#install)
- [use](#use)
  * [Import CSS](#import-css)
  * [pre-built](#pre-built)

<!-- tocstop -->

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
