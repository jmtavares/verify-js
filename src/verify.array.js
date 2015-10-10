'use strict';
(function () {
    Array.isEmpty = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return obj instanceof Array && obj.length === 0;
        }
    };

    Array.isNotEmpty = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return obj instanceof Array && obj.length !== 0;
        }
    };

    Array.hasXElements = function (obj, x) {
        return new Promise(function (resolve, reject) {
            validate(obj, x) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return obj instanceof Array && obj.length === x;
        }
    };
})();


