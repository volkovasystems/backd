/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "backd",
			"path": "backd/backd.js",
			"file": "backd.js",
			"module": "backd",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/backd.git",
			"test": "backd-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Call the callback once but better.
	@end-module-documentation

	@include:
		{
			"budge": "budge",
			"burne": "burne",
			"falzy": "falzy",
			"harden": "harden",
			"kloak": "kloak",
			"mrkd": "mrkd",
			"protype": "protype",
			"truly": "truly",
			"zelf": "zelf"
		}
	@end-include
*/

const budge = require( "budge" );
const burne = require( "burne" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const kloak = require( "kloak" );
const mrkd = require( "mrkd" );
const protype = require( "protype" );
const truly = require( "truly" );
const zelf = require( "zelf" );

const CALLED = Symbol.for( "called" );
const CALLED_ONCE = Symbol( "called-once" );
const RESULT = Symbol( "result" );

const backd = function backd( method ){
	/*;
		@meta-configuration:
			{
				"method:required": "function",
				"defer": "boolean"
			}
		@end-meta-configuration
	*/

	let self = zelf( this );

	if( falzy( method ) || !protype( method, FUNCTION ) ){
		method = function method( ){ return self; };
	}

	if( mrkd( CALLED_ONCE, method, true ) ){
		return method;
	}

	let callback = function callback( error, result, parameter ){
		if( mrkd( CALLED, callback, true ) ){
			return callback[ RESULT ];
		}

		burne( CALLED, callback );

		if( truly( error ) && !( error instanceof Error ) ){
			throw new Error( "invalid error" );
		}

		let data = self;
		try{
			/*;
				@note:
					Do not modify this apply call here, we cannot use bind since it will
						try to hard override the context.
				@end-note
			*/
			data = method.apply( self, [ error, result ].concat( budge( arguments, 2 ) ) );

		}catch( error ){
			data = error;
		}

		harden( RESULT, data, callback );

		return data;
	};

	kloak( method, callback, CALLED_ONCE );

	return callback;
};

module.exports = backd;
