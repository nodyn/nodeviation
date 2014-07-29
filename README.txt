To run all tests (non-recursively) in the test/ directory, 
for a given $NODE binary implementation:

  $NODE run.js

To run a specific test:

  $NODE run.js ./test/buffer/copy.js

By convention, any subdirection under test/ should have a matching .js file
to collect the subdirectory tests into a suite so they all run at once.

For instance:

  test/buffer.js

Has these contents:

  module.exports.copy  = require('./buffer/copy.js')
  module.exports.slice = require('./buffer/slice.js')

Any given .js test should be rather specific, and may (or may not) include a setUp or tearDown.

