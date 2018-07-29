const Display = class Display {

    get get() {
        return this._display
    }

    set setValue(value) {
        document.getElementsByClassName('organizzer-column').value = value 
    }    

    createHtml() {
        this._display = 
        `<div class="organizzer-container">
            <input class="organizzer-column" type="number>
            <button class="organizzer-save">V</button>
        </div>`
    }

    appendDisplayToBody() {
        document.body.innerHTML = this._display
    }

    init() {
        this.createHtml()
        this.appendDisplayToBody() 
        this.setValue = 12
    }

    save() {
        return document.getElementsByClassName('organizzer-column').value
    }
}

module.exports = Display