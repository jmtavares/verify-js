'use strict';
(function () {
    Number.isNumber = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return typeof obj === 'number';
        }
    };

    Number.isNotNumber = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return typeof obj !== 'number';
        }
    };
})();


