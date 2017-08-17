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



//: @client:
var backd = require("./backd.support.js");
//: @end-client







//: @client:

describe("backd", function () {

	describe("`backd( function callback( error, result, option ){ return [ error, result, option ] } )`", function () {

		it("should return array containing the given error, result, and option parameters values", function () {

			var error = new Error("test error");
			var result = "result";
			var option = { "hello": "world" };

			var callback = backd(function callback(error, result, option) {
				return [error, result, option];
			});

			assert.deepEqual(callback(error, result, option), [error, result, option]);

		});

		it("should return array containing the given error and result parameters values", function () {

			var callback = backd(function callback(error, result, option) {
				return [error, result, option];
			});

			assert.deepEqual(callback(null, "sample"), [null, "sample", undefined]);

		});

	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiYmFja2QiLCJkZXNjcmliZSIsIml0IiwiZXJyb3IiLCJFcnJvciIsInJlc3VsdCIsIm9wdGlvbiIsImNhbGxiYWNrIiwiZGVlcEVxdWFsIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLG9CQUFULENBQWQ7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87O0FBRXpCQSxVQUFVLDJGQUFWLEVBQXVHLFlBQU87O0FBRTdHQyxLQUFJLHNGQUFKLEVBQTRGLFlBQU87O0FBRWxHLE9BQUlDLFFBQVEsSUFBSUMsS0FBSixDQUFXLFlBQVgsQ0FBWjtBQUNBLE9BQUlDLFNBQVMsUUFBYjtBQUNBLE9BQUlDLFNBQVMsRUFBRSxTQUFTLE9BQVgsRUFBYjs7QUFFQSxPQUFJQyxXQUFXUCxNQUFPLFNBQVNPLFFBQVQsQ0FBbUJKLEtBQW5CLEVBQTBCRSxNQUExQixFQUFrQ0MsTUFBbEMsRUFBMEM7QUFDL0QsV0FBTyxDQUFFSCxLQUFGLEVBQVNFLE1BQVQsRUFBaUJDLE1BQWpCLENBQVA7QUFDQSxJQUZjLENBQWY7O0FBSUFSLFVBQU9VLFNBQVAsQ0FBa0JELFNBQVVKLEtBQVYsRUFBaUJFLE1BQWpCLEVBQXlCQyxNQUF6QixDQUFsQixFQUFxRCxDQUFFSCxLQUFGLEVBQVNFLE1BQVQsRUFBaUJDLE1BQWpCLENBQXJEOztBQUVBLEdBWkQ7O0FBY0FKLEtBQUksNkVBQUosRUFBbUYsWUFBTzs7QUFFekYsT0FBSUssV0FBV1AsTUFBTyxTQUFTTyxRQUFULENBQW1CSixLQUFuQixFQUEwQkUsTUFBMUIsRUFBa0NDLE1BQWxDLEVBQTBDO0FBQy9ELFdBQU8sQ0FBRUgsS0FBRixFQUFTRSxNQUFULEVBQWlCQyxNQUFqQixDQUFQO0FBQ0EsSUFGYyxDQUFmOztBQUlBUixVQUFPVSxTQUFQLENBQWtCRCxTQUFVLElBQVYsRUFBZ0IsUUFBaEIsQ0FBbEIsRUFBOEMsQ0FBRSxJQUFGLEVBQVEsUUFBUixFQUFrQkUsU0FBbEIsQ0FBOUM7O0FBRUEsR0FSRDs7QUFVQSxFQTFCRDs7QUE0QkEsQ0E5QkQ7O0FBZ0NBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYmFja2RcIixcblx0XHRcdFwicGF0aFwiOiBcImJhY2tkL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9iYWNrZC5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwiYmFja2RcIjogXCJiYWNrZFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgYmFja2QgPSByZXF1aXJlKCBcIi4vYmFja2Quc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcImJhY2tkXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYGJhY2tkKCBmdW5jdGlvbiBjYWxsYmFjayggZXJyb3IsIHJlc3VsdCwgb3B0aW9uICl7IHJldHVybiBbIGVycm9yLCByZXN1bHQsIG9wdGlvbiBdIH0gKWBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gYXJyYXkgY29udGFpbmluZyB0aGUgZ2l2ZW4gZXJyb3IsIHJlc3VsdCwgYW5kIG9wdGlvbiBwYXJhbWV0ZXJzIHZhbHVlc1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgZXJyb3IgPSBuZXcgRXJyb3IoIFwidGVzdCBlcnJvclwiICk7XG5cdFx0XHRsZXQgcmVzdWx0ID0gXCJyZXN1bHRcIjtcblx0XHRcdGxldCBvcHRpb24gPSB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiIH07XG5cblx0XHRcdGxldCBjYWxsYmFjayA9IGJhY2tkKCBmdW5jdGlvbiBjYWxsYmFjayggZXJyb3IsIHJlc3VsdCwgb3B0aW9uICl7XG5cdFx0XHRcdHJldHVybiBbIGVycm9yLCByZXN1bHQsIG9wdGlvbiBdO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBjYWxsYmFjayggZXJyb3IsIHJlc3VsdCwgb3B0aW9uICksIFsgZXJyb3IsIHJlc3VsdCwgb3B0aW9uIF0gKTtcblxuXHRcdH0gKTtcblxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gYXJyYXkgY29udGFpbmluZyB0aGUgZ2l2ZW4gZXJyb3IgYW5kIHJlc3VsdCBwYXJhbWV0ZXJzIHZhbHVlc1wiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgY2FsbGJhY2sgPSBiYWNrZCggZnVuY3Rpb24gY2FsbGJhY2soIGVycm9yLCByZXN1bHQsIG9wdGlvbiApe1xuXHRcdFx0XHRyZXR1cm4gWyBlcnJvciwgcmVzdWx0LCBvcHRpb24gXTtcblx0XHRcdH0gKTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggY2FsbGJhY2soIG51bGwsIFwic2FtcGxlXCIgKSwgWyBudWxsLCBcInNhbXBsZVwiLCB1bmRlZmluZWQgXSApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
