var path = require("path");

module.exports = id;

function id (filename) {
  return path.normalize(filename)
    .replace(/\.[\w\.]+$/, '')
    .replace(/^[\.\/]+/, '')
    .replace(/\/$/, '');
}
