'use strict';
(function () {
    Function.isFunction = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return typeof obj === 'function';
        }
    };

    Function.isNotFunction = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return typeof obj !== 'function';
        }
    };
})();


