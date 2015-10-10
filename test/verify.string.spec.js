describe('Verify String Unit testing', function () {
    beforeEach(function () {
        JasminePromiseMatchers.install();
    });

    afterEach(function () {
        JasminePromiseMatchers.uninstall();
    });

    describe('String.isString | String.isNotString', function () {
        it('should exist', function () {
            expect(String.isString).toBeDefined();
            expect(String.isNotString).toBeDefined();
        });

        it('should resolve | reject', function (done) {
            var input = 'hello';

            expect(String.isString(input)).toBeResolved();
            expect(String.isNotString(input)).toBeRejected(done);
        });

        it('should reject | resolve', function (done) {
            var input = {};

            expect(String.isString(input)).toBeRejected();
            expect(String.isNotString(input)).toBeResolved(done);
        });
    });
});
