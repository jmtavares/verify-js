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
