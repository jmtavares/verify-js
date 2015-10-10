describe('Verify Boolean Unit testing', function () {
    beforeEach(function () {
        JasminePromiseMatchers.install();
    });

    afterEach(function () {
        JasminePromiseMatchers.uninstall();
    });

    describe('Boolean.isBoolean | Boolean.isNotBoolean', function () {
        it('should exist', function () {
            expect(Boolean.isBoolean).toBeDefined();
            expect(Boolean.isNotBoolean).toBeDefined();
        });

        it('should resolve | reject', function (done) {
            var input = true;

            expect(Boolean.isBoolean(input)).toBeResolved();
            expect(Boolean.isNotBoolean(input)).toBeRejected(done);
        });

        it('should reject | resolve', function (done) {
            var input = 'true';

            expect(Boolean.isBoolean(input)).toBeRejected();
            expect(Boolean.isNotBoolean(input)).toBeResolved(done);
        });
    });
});
