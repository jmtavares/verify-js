describe('Verify Number Unit testing', function () {
    beforeEach(function () {
        JasminePromiseMatchers.install();
    });

    afterEach(function () {
        JasminePromiseMatchers.uninstall();
    });

    describe('Number.isNumber | Number.isNotNumber', function () {
        it('should exist', function () {
            expect(Number.isNumber).toBeDefined();
            expect(Number.isNotNumber).toBeDefined();
        });

        it('should resolve | reject', function (done) {
            var input = 1;

            expect(Number.isNumber(input)).toBeResolved();
            expect(Number.isNotNumber(input)).toBeRejected(done);
        });

        it('should reject | resolve', function (done) {
            var input = {};

            expect(Number.isNumber(input)).toBeRejected();
            expect(Number.isNotNumber(input)).toBeResolved(done);
        });
    });
});
