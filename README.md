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
import '@substrate-system/css-util'
```

Or minified:
```js
import '@substrate-system/css-util/min'
```

### pre-built
This package contains minified CSS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/css-util/dist/index.min.css ./public/css-util.css
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

## modules

### `visually-hidden`

```js
import '@substrate-system/css-util/visually-hidden'

// or minified
import '@substrate-system/css-util/min/visually-hidden'
```

Corresponds to the class `.visaully-hidden`. This is explained in the article [Accessible Icon Buttons](https://www.sarasoueidan.com/blog/accessible-icon-buttons/). It is a utility class to hide content visually while keeping it screen-reader accessible.

### `arrow`
Factor out the css for back / next arrows, so there is less duplication.

```js
import '@substrate-system/css-util/arrow'
```

#### minified
```js
import '@substrate-system/css-util/min/arrow'
```
