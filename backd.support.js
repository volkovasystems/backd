"use strict";var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
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
                                                                                                                                                                                                                                                                                                                			"contributors": [
                                                                                                                                                                                                                                                                                                                				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
                                                                                                                                                                                                                                                                                                                				"Vinse Vinalon <vinsevinalon@gmail.com>"
                                                                                                                                                                                                                                                                                                                			],
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
                                                                                                                                                                                                                                                                                                                			"burne": "burne",
                                                                                                                                                                                                                                                                                                                			"falzy": "falzy",
                                                                                                                                                                                                                                                                                                                			"harden": "harden",
                                                                                                                                                                                                                                                                                                                			"kloak": "kloak",
                                                                                                                                                                                                                                                                                                                			"mrkd": "mrkd",
                                                                                                                                                                                                                                                                                                                			"shft": "shft",
                                                                                                                                                                                                                                                                                                                			"truly": "truly",
                                                                                                                                                                                                                                                                                                                			"zelf": "zelf"
                                                                                                                                                                                                                                                                                                                		}
                                                                                                                                                                                                                                                                                                                	@end-include
                                                                                                                                                                                                                                                                                                                */

var burne = require("burne");
var falzy = require("falzy");
var harden = require("harden");
var kloak = require("kloak");
var mrkd = require("mrkd");
var shft = require("shft");
var truly = require("truly");
var zelf = require("zelf");

var CALLED = (0, _for2.default)("called");
var CALLED_ONCE = (0, _symbol2.default)("called-once");
var RESULT = (0, _symbol2.default)("result");

var backd = function backd(method) {
	/*;
                                    	@meta-configuration:
                                    		{
                                    			"method:required": "function",
                                    			"defer": "boolean"
                                    		}
                                    	@end-meta-configuration
                                    */

	var self = zelf(this);

	if (falzy(method) || typeof method != "function") {
		method = function method() {return self;};
	}

	if (mrkd(CALLED_ONCE, method, true)) {
		return method;
	}

	var callback = function callback(error, result, parameter) {
		if (mrkd(CALLED, callback, true)) {
			return callback[RESULT];
		}

		burne(CALLED, callback);

		if (truly(error) && !(error instanceof Error)) {
			throw new Error("invalid error");
		}

		var data = self;
		try {
			/*;
       	@note:
       		Do not modify this apply call here, we cannot use bind since it will
       			try to hard override the context.
       	@end-note
       */
			data = method.apply(self, [error, result].concat(shft(arguments, 2)));

		} catch (error) {
			data = error;
		}

		harden(RESULT, data, callback);

		return data;
	};

	kloak(method, callback, CALLED_ONCE);

	return callback;
};

module.exports = backd;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tkLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYnVybmUiLCJyZXF1aXJlIiwiZmFsenkiLCJoYXJkZW4iLCJrbG9hayIsIm1ya2QiLCJzaGZ0IiwidHJ1bHkiLCJ6ZWxmIiwiQ0FMTEVEIiwiQ0FMTEVEX09OQ0UiLCJSRVNVTFQiLCJiYWNrZCIsIm1ldGhvZCIsInNlbGYiLCJjYWxsYmFjayIsImVycm9yIiwicmVzdWx0IiwicGFyYW1ldGVyIiwiRXJyb3IiLCJkYXRhIiwiYXBwbHkiLCJjb25jYXQiLCJhcmd1bWVudHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiZ1RBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUssT0FBT0wsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNTSxRQUFRTixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1PLE9BQU9QLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1RLFNBQVMsbUJBQVksUUFBWixDQUFmO0FBQ0EsSUFBTUMsY0FBYyxzQkFBUSxhQUFSLENBQXBCO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7O0FBRUEsSUFBTUMsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUNyQzs7Ozs7Ozs7O0FBU0EsS0FBSUMsT0FBT04sS0FBTSxJQUFOLENBQVg7O0FBRUEsS0FBSU4sTUFBT1csTUFBUCxLQUFtQixPQUFPQSxNQUFQLElBQWlCLFVBQXhDLEVBQW9EO0FBQ25EQSxXQUFTLFNBQVNBLE1BQVQsR0FBa0IsQ0FBRSxPQUFPQyxJQUFQLENBQWMsQ0FBM0M7QUFDQTs7QUFFRCxLQUFJVCxLQUFNSyxXQUFOLEVBQW1CRyxNQUFuQixFQUEyQixJQUEzQixDQUFKLEVBQXVDO0FBQ3RDLFNBQU9BLE1BQVA7QUFDQTs7QUFFRCxLQUFJRSxXQUFXLFNBQVNBLFFBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxNQUExQixFQUFrQ0MsU0FBbEMsRUFBNkM7QUFDM0QsTUFBSWIsS0FBTUksTUFBTixFQUFjTSxRQUFkLEVBQXdCLElBQXhCLENBQUosRUFBb0M7QUFDbkMsVUFBT0EsU0FBVUosTUFBVixDQUFQO0FBQ0E7O0FBRURYLFFBQU9TLE1BQVAsRUFBZU0sUUFBZjs7QUFFQSxNQUFJUixNQUFPUyxLQUFQLEtBQWtCLEVBQUdBLGlCQUFpQkcsS0FBcEIsQ0FBdEIsRUFBbUQ7QUFDbEQsU0FBTSxJQUFJQSxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsTUFBSUMsT0FBT04sSUFBWDtBQUNBLE1BQUc7QUFDRjs7Ozs7O0FBTUFNLFVBQU9QLE9BQU9RLEtBQVAsQ0FBY1AsSUFBZCxFQUFvQixDQUFFRSxLQUFGLEVBQVNDLE1BQVQsRUFBa0JLLE1BQWxCLENBQTBCaEIsS0FBTWlCLFNBQU4sRUFBaUIsQ0FBakIsQ0FBMUIsQ0FBcEIsQ0FBUDs7QUFFQSxHQVRELENBU0MsT0FBT1AsS0FBUCxFQUFjO0FBQ2RJLFVBQU9KLEtBQVA7QUFDQTs7QUFFRGIsU0FBUVEsTUFBUixFQUFnQlMsSUFBaEIsRUFBc0JMLFFBQXRCOztBQUVBLFNBQU9LLElBQVA7QUFDQSxFQTVCRDs7QUE4QkFoQixPQUFPUyxNQUFQLEVBQWVFLFFBQWYsRUFBeUJMLFdBQXpCOztBQUVBLFFBQU9LLFFBQVA7QUFDQSxDQXJERDs7QUF1REFTLE9BQU9DLE9BQVAsR0FBaUJiLEtBQWpCIiwiZmlsZSI6ImJhY2tkLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYmFja2RcIixcblx0XHRcdFwicGF0aFwiOiBcImJhY2tkL2JhY2tkLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJiYWNrZC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJiYWNrZFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvYmFja2QuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJiYWNrZC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENhbGwgdGhlIGNhbGxiYWNrIG9uY2UgYnV0IGJldHRlci5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYnVybmVcIjogXCJidXJuZVwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJrbG9ha1wiOiBcImtsb2FrXCIsXG5cdFx0XHRcIm1ya2RcIjogXCJtcmtkXCIsXG5cdFx0XHRcInNoZnRcIjogXCJzaGZ0XCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBidXJuZSA9IHJlcXVpcmUoIFwiYnVybmVcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IGtsb2FrID0gcmVxdWlyZSggXCJrbG9ha1wiICk7XG5jb25zdCBtcmtkID0gcmVxdWlyZSggXCJtcmtkXCIgKTtcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5jb25zdCBDQUxMRUQgPSBTeW1ib2wuZm9yKCBcImNhbGxlZFwiICk7XG5jb25zdCBDQUxMRURfT05DRSA9IFN5bWJvbCggXCJjYWxsZWQtb25jZVwiICk7XG5jb25zdCBSRVNVTFQgPSBTeW1ib2woIFwicmVzdWx0XCIgKTtcblxuY29uc3QgYmFja2QgPSBmdW5jdGlvbiBiYWNrZCggbWV0aG9kICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibWV0aG9kOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XCJkZWZlclwiOiBcImJvb2xlYW5cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0aWYoIGZhbHp5KCBtZXRob2QgKSB8fCB0eXBlb2YgbWV0aG9kICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdG1ldGhvZCA9IGZ1bmN0aW9uIG1ldGhvZCggKXsgcmV0dXJuIHNlbGY7IH07XG5cdH1cblxuXHRpZiggbXJrZCggQ0FMTEVEX09OQ0UsIG1ldGhvZCwgdHJ1ZSApICl7XG5cdFx0cmV0dXJuIG1ldGhvZDtcblx0fVxuXG5cdGxldCBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCBlcnJvciwgcmVzdWx0LCBwYXJhbWV0ZXIgKXtcblx0XHRpZiggbXJrZCggQ0FMTEVELCBjYWxsYmFjaywgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2tbIFJFU1VMVCBdO1xuXHRcdH1cblxuXHRcdGJ1cm5lKCBDQUxMRUQsIGNhbGxiYWNrICk7XG5cblx0XHRpZiggdHJ1bHkoIGVycm9yICkgJiYgISggZXJyb3IgaW5zdGFuY2VvZiBFcnJvciApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlcnJvclwiICk7XG5cdFx0fVxuXG5cdFx0bGV0IGRhdGEgPSBzZWxmO1xuXHRcdHRyeXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHREbyBub3QgbW9kaWZ5IHRoaXMgYXBwbHkgY2FsbCBoZXJlLCB3ZSBjYW5ub3QgdXNlIGJpbmQgc2luY2UgaXQgd2lsbFxuXHRcdFx0XHRcdFx0dHJ5IHRvIGhhcmQgb3ZlcnJpZGUgdGhlIGNvbnRleHQuXG5cdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0Ki9cblx0XHRcdGRhdGEgPSBtZXRob2QuYXBwbHkoIHNlbGYsIFsgZXJyb3IsIHJlc3VsdCBdLmNvbmNhdCggc2hmdCggYXJndW1lbnRzLCAyICkgKSApO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0ZGF0YSA9IGVycm9yO1xuXHRcdH1cblxuXHRcdGhhcmRlbiggUkVTVUxULCBkYXRhLCBjYWxsYmFjayApO1xuXG5cdFx0cmV0dXJuIGRhdGE7XG5cdH07XG5cblx0a2xvYWsoIG1ldGhvZCwgY2FsbGJhY2ssIENBTExFRF9PTkNFICk7XG5cblx0cmV0dXJuIGNhbGxiYWNrO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYWNrZDtcbiJdfQ==
//# sourceMappingURL=backd.support.js.map
