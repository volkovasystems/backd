"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "backd",
			"path": "backd/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/backd.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"backd": "backd"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const backd = require( "./backd.js" );
//: @end-server

//: @client:
const backd = require( "./backd.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "backd", ( ) => {

	describe( "`backd( function callback( error, result, option ){ return [ error, result, option ] } )`", ( ) => {

		it( "should return array containing the given error, result, and option parameters values", ( ) => {

			let error = new Error( "test error" );
			let result = "result";
			let option = { "hello": "world" };

			let callback = backd( function callback( error, result, option ){
				return [ error, result, option ];
			} );

			assert.deepEqual( callback( error, result, option ), [ error, result, option ] );

		} );

		it( "should return array containing the given error and result parameters values", ( ) => {

			let callback = backd( function callback( error, result, option ){
				return [ error, result, option ];
			} );

			assert.deepEqual( callback( null, "sample" ), [ null, "sample", undefined ] );

		} );

	} );

} );

//: @end-server


//: @client:

describe( "backd", ( ) => {

	describe( "`backd( function callback( error, result, option ){ return [ error, result, option ] } )`", ( ) => {

		it( "should return array containing the given error, result, and option parameters values", ( ) => {

			let error = new Error( "test error" );
			let result = "result";
			let option = { "hello": "world" };

			let callback = backd( function callback( error, result, option ){
				return [ error, result, option ];
			} );

			assert.deepEqual( callback( error, result, option ), [ error, result, option ] );

		} );

		it( "should return array containing the given error and result parameters values", ( ) => {

			let callback = backd( function callback( error, result, option ){
				return [ error, result, option ];
			} );

			assert.deepEqual( callback( null, "sample" ), [ null, "sample", undefined ] );

		} );

	} );

} );

//: @end-client


//: @bridge:

describe( "backd", ( ) => {
} );

//: @end-bridge
