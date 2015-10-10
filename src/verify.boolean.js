'use strict';
(function () {
    Boolean.isBoolean = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return typeof obj === 'boolean';
        }
    };

    Boolean.isNotBoolean = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return typeof obj !== 'boolean';
        }
    };
})();


