const Display = require('./Display')

class Bootstrapper {

    constructor(selector) {
        this._selector = selector
    }

    start() {
        display = new Display()
        display.init()

        const containers = document.getElementsByClassName(this._selector)
        
        containers.forEach(element => {
            element.addEventListener('click', () => {
                display.setVisible()
            })  
        })
    }
}