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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:

describe("backd", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`backd( function callback( error, result, option ){ return [ error, result, option ] } )`", function () {

		it("should return array containing the given error, result, and option parameters values", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let error = new Error( "test error" );
   					let result = "result";
   					let option = { "hello": "world" };
   
   					let callback = backd( function callback( error, result, option ){
   						return [ error, result, option ];
   					} );
   
   					return JSON.stringify( callback( error, result, option ) );
   
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, '[{},"result",{"hello":"world"}]');

		});

		it("should return array containing the given error and result parameters values", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let callback = backd( function callback( error, result, option ){
   						return [ error, result, option ];
   					} );
   
   					return JSON.stringify( callback( null, "sample" ) );
   
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, '[null,"sample",null]');

		});

	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7Ozs7QUFTQTs7QUFFQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87O0FBRXpCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLDJGQUFWLEVBQXVHLFlBQU87O0FBRTdHSSxLQUFJLHNGQUFKLEVBQTRGLFlBQU87QUFDbEc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLGlDQUF0Qjs7QUFFQSxHQXpCRDs7QUEyQkFGLEtBQUksNkVBQUosRUFBbUYsWUFBTztBQUN6RjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLHNCQUF0Qjs7QUFFQSxHQXJCRDs7QUF1QkEsRUFwREQ7O0FBc0RBLENBMUREOztBQTREQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYmFja2RcIixcblx0XHRcdFwicGF0aFwiOiBcImJhY2tkL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9iYWNrZC5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwiYmFja2RcIjogXCJiYWNrZFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcImJhY2tkXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImBiYWNrZCggZnVuY3Rpb24gY2FsbGJhY2soIGVycm9yLCByZXN1bHQsIG9wdGlvbiApeyByZXR1cm4gWyBlcnJvciwgcmVzdWx0LCBvcHRpb24gXSB9IClgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGdpdmVuIGVycm9yLCByZXN1bHQsIGFuZCBvcHRpb24gcGFyYW1ldGVycyB2YWx1ZXNcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGxldCBlcnJvciA9IG5ldyBFcnJvciggXCJ0ZXN0IGVycm9yXCIgKTtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gXCJyZXN1bHRcIjtcblx0XHRcdFx0XHRsZXQgb3B0aW9uID0geyBcImhlbGxvXCI6IFwid29ybGRcIiB9O1xuXG5cdFx0XHRcdFx0bGV0IGNhbGxiYWNrID0gYmFja2QoIGZ1bmN0aW9uIGNhbGxiYWNrKCBlcnJvciwgcmVzdWx0LCBvcHRpb24gKXtcblx0XHRcdFx0XHRcdHJldHVybiBbIGVycm9yLCByZXN1bHQsIG9wdGlvbiBdO1xuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggY2FsbGJhY2soIGVycm9yLCByZXN1bHQsIG9wdGlvbiApICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgJ1t7fSxcInJlc3VsdFwiLHtcImhlbGxvXCI6XCJ3b3JsZFwifV0nICk7XG5cblx0XHR9ICk7XG5cblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGdpdmVuIGVycm9yIGFuZCByZXN1bHQgcGFyYW1ldGVycyB2YWx1ZXNcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGxldCBjYWxsYmFjayA9IGJhY2tkKCBmdW5jdGlvbiBjYWxsYmFjayggZXJyb3IsIHJlc3VsdCwgb3B0aW9uICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gWyBlcnJvciwgcmVzdWx0LCBvcHRpb24gXTtcblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoIGNhbGxiYWNrKCBudWxsLCBcInNhbXBsZVwiICkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCAnW251bGwsXCJzYW1wbGVcIixudWxsXScgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtYnJpZGdlXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
