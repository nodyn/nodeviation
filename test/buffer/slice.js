

exports.noArgs = function(test) {
  var buf = new Buffer( "original" );
  var slice = buf.slice();
  test.equal( "original", slice.toString());
  buf[1] = 66;
  test.equal( "oBiginal", slice.toString());
  slice[3] = 66;
  test.equal( "oBiBinal", slice.toString());
  test.done();
}
