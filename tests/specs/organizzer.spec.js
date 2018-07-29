const Organizzer = require('../../organizzer')

describe('Organizzer', () => {

    it('should build organizzer', () => {
        organizzer = new Organizzer();
        organizzer.setScreen = 1080
        organizzer.setOrder = 1
        organizzer.setCol = 1
        const expected = {
            order: 1,
            column: 1,
            screenSize: 1080
        }
        expect(expected).toEqual(organizzer.build())
    })
})