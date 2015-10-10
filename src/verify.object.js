'use strict';
(function () {
    Object.isObject = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return typeof obj === 'object';
        }
    };

    Object.isNotObject = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return typeof obj !== 'object';
        }
    };

    Object.isDefined = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return obj !== undefined && obj !== null;
        }
    };

    Object.isNotDefined = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return obj === undefined || obj === null;
        }
    };

    Object.isNull = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return obj === null;
        }
    };

    Object.isNotNull = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return obj !== null;
        }
    };

    Object.isUndefined = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return obj === undefined;
        }
    };

    Object.isNotUndefined = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return obj !== undefined;
        }
    };

    Object.isInstanceOf = function (obj, instance) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return obj instanceof instance;
        }
    };

    Object.isNotInstanceOf = function (obj, instance) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return !(obj instanceof instance);
        }
    };

    Object.hasOwnProperties = function (obj) {
        return new Promise(function (resolve, reject) {
            validate(obj) ? resolve(obj) : reject(obj);
        });

        function validate(obj) {
            return Object.getOwnPropertyNames(obj).length !== 0;
        }
    };
})();
