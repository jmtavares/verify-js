'use strict';
(function () {
    String.isString = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return typeof obj === 'string';
        }
    };

    String.isNotString = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return typeof obj !== 'string';
        }
    };
})();


