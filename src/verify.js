Object.isDefined = function (obj) {
    return new Promise(function (resolve, reject) {
        validate(obj) ? resolve() : reject();
    });

    function validate(obj) {
        return obj !== undefined && obj !== null;
    }
};
