describe('Verify Array Unit testing', function () {
    beforeEach(function () {
        JasminePromiseMatchers.install();
    });

    afterEach(function () {
        JasminePromiseMatchers.uninstall();
    });

    describe('Array.isEmpty | Object.isNotEmpty', function () {
        it('should exist', function () {
            expect(Array.isEmpty).toBeDefined();
            expect(Array.isNotEmpty).toBeDefined();
        });

        it('should resolve | reject', function (done) {
            var input = [];

            expect(Array.isEmpty(input)).toBeResolved();
            expect(Array.isNotEmpty(input)).toBeRejected(done);
        });

        it('should reject | resolve', function (done) {
            var input = [1, 2];

            expect(Array.isEmpty(input)).toBeRejected();
            expect(Array.isNotEmpty(input)).toBeResolved(done);
        });
    });

    describe('Array.hasXElements', function () {
        it('should exist', function () {
            expect(Array.hasXElements).toBeDefined();
        });

        it('should resolve', function (done) {
            var input = [1, 2];

            expect(Array.hasXElements(input, 2)).toBeResolved(done);
        });

        it('should reject', function (done) {
            var input = [1, 2];

            expect(Array.hasXElements(input, 3)).toBeRejected(done);
        });
    });
});
