describe('Verify Unit testing', function () {
    beforeEach(function (){
        JasminePromiseMatchers.install();
    });

    afterEach(function (){
        JasminePromiseMatchers.uninstall();
    });

    describe('Object.isDefined', function () {

        it('should exists', function () {
            expect(Object.isDefined).toBeDefined();
        });

        it('should reject input', function (done) {
            var input;

            expect(Object.isDefined(input)).toBeRejected(done);
        });

        it('should reject input', function (done) {
            var input = null;

            expect(Object.isDefined(input)).toBeRejected(done);
        });

        it('should resolve input', function (done) {
            var input = {};

            expect(Object.isDefined(input)).toBeResolved(done);
        });
    });
});
