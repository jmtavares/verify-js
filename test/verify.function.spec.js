describe('Verify Function Unit testing', function () {
    beforeEach(function () {
        JasminePromiseMatchers.install();
    });

    afterEach(function () {
        JasminePromiseMatchers.uninstall();
    });

    describe('Function.isString | String.isNotString', function () {
        it('should exist', function () {
            expect(Function.isFunction).toBeDefined();
            expect(Function.isNotFunction).toBeDefined();
        });

        it('should resolve | reject', function (done) {
            var input = function () {};

            expect(Function.isFunction(input)).toBeResolved();
            expect(Function.isNotFunction(input)).toBeRejected(done);
        });

        it('should reject | resolve', function (done) {
            var input = {};

            expect(Function.isFunction(input)).toBeRejected();
            expect(Function.isNotFunction(input)).toBeResolved(done);
        });
    });
});
