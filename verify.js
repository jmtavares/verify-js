/*
* @overview verifyjs - Verify all kind of data using Promises (Object, Array, String, Number, Boolean, Function).
* @copyright Copyright (c) 2015 Jose Tavares
* @license MIT License - https://github.com/yconoclast/verifyjs/blob/master/LICENSE
* @version 1.0.0
*/
(function(root) {
    // Use polyfill for setImmediate for performance gains
    var asap = typeof setImmediate === "function" && setImmediate || function(fn) {
        setTimeout(fn, 1);
    };
    // Polyfill for Function.prototype.bind
    function bind(fn, thisArg) {
        return function() {
            fn.apply(thisArg, arguments);
        };
    }
    var isArray = Array.isArray || function(value) {
        return Object.prototype.toString.call(value) === "[object Array]";
    };
    function Promise(fn) {
        if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
        if (typeof fn !== "function") throw new TypeError("not a function");
        this._state = null;
        this._value = null;
        this._deferreds = [];
        doResolve(fn, bind(resolve, this), bind(reject, this));
    }
    function handle(deferred) {
        var me = this;
        if (this._state === null) {
            this._deferreds.push(deferred);
            return;
        }
        asap(function() {
            var cb = me._state ? deferred.onFulfilled : deferred.onRejected;
            if (cb === null) {
                (me._state ? deferred.resolve : deferred.reject)(me._value);
                return;
            }
            var ret;
            try {
                ret = cb(me._value);
            } catch (e) {
                deferred.reject(e);
                return;
            }
            deferred.resolve(ret);
        });
    }
    function resolve(newValue) {
        try {
            //Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
            if (newValue === this) throw new TypeError("A promise cannot be resolved with itself.");
            if (newValue && (typeof newValue === "object" || typeof newValue === "function")) {
                var then = newValue.then;
                if (typeof then === "function") {
                    doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
                    return;
                }
            }
            this._state = true;
            this._value = newValue;
            finale.call(this);
        } catch (e) {
            reject.call(this, e);
        }
    }
    function reject(newValue) {
        this._state = false;
        this._value = newValue;
        finale.call(this);
    }
    function finale() {
        for (var i = 0, len = this._deferreds.length; i < len; i++) {
            handle.call(this, this._deferreds[i]);
        }
        this._deferreds = null;
    }
    function Handler(onFulfilled, onRejected, resolve, reject) {
        this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
        this.onRejected = typeof onRejected === "function" ? onRejected : null;
        this.resolve = resolve;
        this.reject = reject;
    }
    /**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
    function doResolve(fn, onFulfilled, onRejected) {
        var done = false;
        try {
            fn(function(value) {
                if (done) return;
                done = true;
                onFulfilled(value);
            }, function(reason) {
                if (done) return;
                done = true;
                onRejected(reason);
            });
        } catch (ex) {
            if (done) return;
            done = true;
            onRejected(ex);
        }
    }
    Promise.prototype["catch"] = function(onRejected) {
        return this.then(null, onRejected);
    };
    Promise.prototype.then = function(onFulfilled, onRejected) {
        var me = this;
        return new Promise(function(resolve, reject) {
            handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
        });
    };
    Promise.all = function() {
        var args = Array.prototype.slice.call(arguments.length === 1 && isArray(arguments[0]) ? arguments[0] : arguments);
        return new Promise(function(resolve, reject) {
            if (args.length === 0) return resolve([]);
            var remaining = args.length;
            function res(i, val) {
                try {
                    if (val && (typeof val === "object" || typeof val === "function")) {
                        var then = val.then;
                        if (typeof then === "function") {
                            then.call(val, function(val) {
                                res(i, val);
                            }, reject);
                            return;
                        }
                    }
                    args[i] = val;
                    if (--remaining === 0) {
                        resolve(args);
                    }
                } catch (ex) {
                    reject(ex);
                }
            }
            for (var i = 0; i < args.length; i++) {
                res(i, args[i]);
            }
        });
    };
    Promise.resolve = function(value) {
        if (value && typeof value === "object" && value.constructor === Promise) {
            return value;
        }
        return new Promise(function(resolve) {
            resolve(value);
        });
    };
    Promise.reject = function(value) {
        return new Promise(function(resolve, reject) {
            reject(value);
        });
    };
    Promise.race = function(values) {
        return new Promise(function(resolve, reject) {
            for (var i = 0, len = values.length; i < len; i++) {
                values[i].then(resolve, reject);
            }
        });
    };
    /**
	 * Set the immediate function to execute callbacks
	 * @param fn {function} Function to execute
	 * @private
	 */
    Promise._setImmediateFn = function _setImmediateFn(fn) {
        asap = fn;
    };
    if (typeof module !== "undefined" && module.exports) {
        module.exports = Promise;
    } else if (!root.Promise) {
        root.Promise = Promise;
    }
})(this);

"use strict";

(function() {
    Array.isEmpty = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return obj instanceof Array && obj.length === 0;
        }
    };
    Array.isNotEmpty = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return obj instanceof Array && obj.length !== 0;
        }
    };
    Array.hasXElements = function(obj, x) {
        return new Promise(function(resolve, reject) {
            validate(obj, x) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return obj instanceof Array && obj.length === x;
        }
    };
})();

"use strict";

(function() {
    Boolean.isBoolean = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return typeof obj === "boolean";
        }
    };
    Boolean.isNotBoolean = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return typeof obj !== "boolean";
        }
    };
})();

"use strict";

(function() {
    Function.isFunction = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return typeof obj === "function";
        }
    };
    Function.isNotFunction = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return typeof obj !== "function";
        }
    };
})();

"use strict";

(function() {
    Number.isNumber = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return typeof obj === "number";
        }
    };
    Number.isNotNumber = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return typeof obj !== "number";
        }
    };
})();

"use strict";

(function() {
    Object.isObject = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return typeof obj === "object";
        }
    };
    Object.isNotObject = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return typeof obj !== "object";
        }
    };
    Object.isDefined = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return obj !== undefined && obj !== null;
        }
    };
    Object.isNotDefined = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return obj === undefined || obj === null;
        }
    };
    Object.isNull = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return obj === null;
        }
    };
    Object.isNotNull = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return obj !== null;
        }
    };
    Object.isUndefined = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return obj === undefined;
        }
    };
    Object.isNotUndefined = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return obj !== undefined;
        }
    };
    Object.isInstanceOf = function(obj, instance) {
        return new Promise(function(resolve, reject) {
            validate(obj, instance) ? resolve(obj) : reject(obj);
        });
        function validate(obj, instance) {
            return obj instanceof instance;
        }
    };
    Object.isNotInstanceOf = function(obj, instance) {
        return new Promise(function(resolve, reject) {
            validate(obj, instance) ? resolve(obj) : reject(obj);
        });
        function validate(obj, instance) {
            return !(obj instanceof instance);
        }
    };
    Object.hasOwnProperties = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return Object.getOwnPropertyNames(obj).length !== 0;
        }
    };
})();

"use strict";

(function() {
    String.isString = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return typeof obj === "string";
        }
    };
    String.isNotString = function(obj) {
        return new Promise(function(resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });
        function validate(obj) {
            return typeof obj !== "string";
        }
    };
})();