## filename-id

Create IDs from filenames

## Install

```bash
$ npm install filename-id
```

## Usage

```js
filenameId = require('filename-id')\

filenameId('./foo/bar.html')
// => foo/bar

filenameId('../foo bar/qux')
// => foo-bar/qux
```
