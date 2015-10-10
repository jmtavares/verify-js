Object.isDefined = function(obj) {
    return new Promise(function(resolve, reject) {
        validate() ? resolve() : reject();
    });

    function validate() {
        return obj !== undefined && obj !== null;
    }
};
