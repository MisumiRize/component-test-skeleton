var falsey = require('component-test-skeleton/lib/falsey');

describe('falsey', function() {
    it('is not ok', function() {
        expect(falsey()).not.to.be.ok;
    });
});
