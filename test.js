var test = require('prova');
var id = require("./");

test('removes filename extensions', function (t) {
  t.plan(3);
  t.equal(id('foo.html'), 'foo');
  t.equal(id('foo.tar.gz'), 'foo');
  t.equal(id('span.egg/corge.html'), 'span.egg/corge');
});

test('returns absolute paths', function (t) {
  t.plan(4);
  t.equal(id('./foo.html'), 'foo');
  t.equal(id('/foo/bar/qux.tar.gz'), 'foo/bar/qux');
  t.equal(id('../span.egg/corge./qux/hello.world'), 'span.egg/corge./qux/hello');
  t.equal(id('../../../span eggs/hello world/../qux/corge.html'), 'span eggs/qux/corge');
});

test('directory paths', function (t) {
  t.plan(4);
  t.equal(id('/yo/'), 'yo');
  t.equal(id('/yo/foo'), 'yo/foo');
  t.equal(id('./bar/corge'), 'bar/corge');
  t.equal(id('./bar/corge/qux.html'), 'bar/corge/qux');
});
