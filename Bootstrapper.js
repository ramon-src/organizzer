class Bootstrapper {

    constructor(selector) {
        this._selector = selector
    }

    start() {
        const containers = document.getElementsByClassName(this._selector)
        
        containers.forEach(element => {
            element.addEventListener('click', () => {
                             
            })  
        })
    }
}