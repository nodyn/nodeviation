try {
    var reporter = require('nodeunit').reporters.default;
}
catch(e) {
    console.log("Cannot find nodeunit module.");
    console.log("You can download submodules for this project by doing:");
    console.log("");
    console.log("    git submodule init");
    console.log("    git submodule update");
    console.log("");
    process.exit();
}

var tests = ['test' ];

if ( process.argv.length > 2 ) {
  tests = [];
  for ( i = 0 ; i < process.argv.length - 2 ; ++i ) {
    tests.push( process.argv[i+2] );
  }
}
reporter.run( tests );

