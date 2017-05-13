
const assert = require( "assert" );
const backd = require( "./backd.js" );

let callback = backd( function callback( error, result, option ){
	return [ error, result, option ];
} );

let error = new Error( "test error" );
let result = "result";
let option = { "hello": "world" };

assert.deepEqual( callback( error, result, option ), [ error, result, option ], "should be deeply equal" );

assert.deepEqual( callback( "yeah", "sample" ), [ error, result, option ], "should be deeply equal" );

console.log( "ok" );
