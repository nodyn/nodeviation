
module.exports = {
  setUp: function(callback) {
    callback();
  },

  tearDown: function(callback) {
    callback();
  },

  noArgs: function(test) {
    var b1 = new Buffer("tacos");
    var b2 = new Buffer("cheese");
    b1.copy(b2,0);
    test.equal(b2.toString(), "tacose")
    test.done();
  }
}
