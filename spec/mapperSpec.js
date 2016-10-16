var mapper = require('.././lib/mapper.js'),
    jsdom = require('jsdom');

describe('Mapper.getResources', () => {
    it('returns an object.', (done) => {
        mapper.getResources('<a href="https://www.renyard.co.uk/"></a><img src="/image.png">').then(
        (obj) => {
            expect(typeof obj).toBe('object');
            done();
        });
    });

    it('retuns an object of links and images.', (done) => {
        mapper.getResources('<a href="https://www.renyard.co.uk/"></a><img src="/image.png">').then(
        (obj) => {
            expect(obj).toEqual({
                links: ['https://www.renyard.co.uk/'],
                assets: ['/image.png']
            });
            done();
        });
    });
});
