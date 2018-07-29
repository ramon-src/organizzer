const Display = require('../../Display')

describe('Display', () => {
    beforeEach(() => {
        display = new Display()
        display.init()
    })

    it('should save with 12 column by default', () => {
        expect(display.save()).toBe(12)
    })

    it('should save column number', () => {
        display.setValue = 2
        expect(display.save()).toBe(2)
    })
})