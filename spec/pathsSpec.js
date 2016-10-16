var paths = require('.././lib/paths.js');

describe('Paths.setHost', () => {
    it('exposes a setHost method', () => {
        expect(typeof paths.setHost).toBe('function');
    });

    it('sets the host property of the module', () => {
        paths.setHost('https://www.renyard.co.uk');
        expect(paths.getHost()).toBe('www.renyard.co.uk');
    });
});

describe('Paths.isInternal', () => {
    it('exposes an isInternal method', () => {
        expect(typeof paths.isInternal).toBe('function');
    });

    it('returns true if the URL is internal', () => {
        expect(paths.isInternal('https://www.renyard.co.uk')).toBe(true);
    });
});
