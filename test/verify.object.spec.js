describe('Verify Object Unit testing', function () {
    beforeEach(function () {
        JasminePromiseMatchers.install();
    });

    afterEach(function () {
        JasminePromiseMatchers.uninstall();
    });

    describe('Object.isObject | Object.isNotObject', function () {
        it('should exist', function () {
            expect(Object.isObject).toBeDefined();
            expect(Object.isNotObject).toBeDefined();
        });

        it('should resolve | reject', function (done) {
            var input = {};

            expect(Object.isObject(input)).toBeResolved();
            expect(Object.isNotObject(input)).toBeRejected(done);
        });

        it('should reject | resolve', function (done) {
            var input = 1;

            expect(Object.isObject(input)).toBeRejected();
            expect(Object.isNotObject(input)).toBeResolved(done);
        });
    });

    describe('Object.isDefined | Object.isNotDefined', function () {
        it('should exist', function () {
            expect(Object.isDefined).toBeDefined();
            expect(Object.isNotDefined).toBeDefined();
        });

        it('should reject | resolve', function (done) {
            var input;

            expect(Object.isDefined(input)).toBeRejected();
            expect(Object.isNotDefined(input)).toBeResolved(done);
        });

        it('should reject | resolve', function (done) {
            var input = null;

            expect(Object.isDefined(input)).toBeRejected();
            expect(Object.isNotDefined(input)).toBeResolved(done);
        });

        it('should resolve | reject', function (done) {
            var input = {};

            expect(Object.isDefined(input)).toBeResolved();
            expect(Object.isNotDefined(input)).toBeRejected(done);
        });
    });

    describe('Object.isNull | Object.isNotNull', function () {
        it('should exist', function () {
            expect(Object.isNull).toBeDefined();
            expect(Object.isNotNull).toBeDefined();
        });

        it('should resolve | reject', function (done) {
            var input = null;

            expect(Object.isNull(input)).toBeResolved();
            expect(Object.isNotNull(input)).toBeRejected(done);
        });

        it('should reject | resolve', function (done) {
            var input;

            expect(Object.isNull(input)).toBeRejected();
            expect(Object.isNotNull(input)).toBeResolved(done);
        });
    });

    describe('Object.isUndefined | Object.isNotUndefined', function () {
        it('should exist', function () {
            expect(Object.isUndefined).toBeDefined();
            expect(Object.isNotUndefined).toBeDefined();
        });

        it('should resolve | reject', function (done) {
            var input;

            expect(Object.isUndefined(input)).toBeResolved();
            expect(Object.isNotUndefined(input)).toBeRejected(done);
        });

        it('should reject | resolve', function (done) {
            var input = {};

            expect(Object.isUndefined(input)).toBeRejected();
            expect(Object.isNotUndefined(input)).toBeResolved(done);
        });
    });
});
