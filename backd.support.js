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

//# sourceMappingURL=backd.support.js.map