var id = require("./");

it('removes filename extensions', function(){
  expect(id('foo.html')).to.equal('foo');
  expect(id('foo.tar.gz')).to.equal('foo');
  expect(id('span.egg/corge.html')).to.equal('span.egg/corge');
});

it('returns absolute paths', function(){
  expect(id('./foo.html')).to.equal('foo');
  expect(id('/foo/bar/qux.tar.gz')).to.equal('foo/bar/qux');
  expect(id('../span.egg/corge./qux/hello.world')).to.equal('span.egg/corge./qux/hello');
  expect(id('../../../span eggs/hello world/../qux/corge.html')).to.equal('span eggs/qux/corge');
});
