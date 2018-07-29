const Display = class Display {

    get get() {
        return document.getElementsByClassName('organizzer-column')
    }

    setVisible() {
        this.get().style.display = 'block';
    }

    set setValue(value) {
        document.getElementsByClassName('organizzer-column').value = value 
    }    

    createHtml() {
        this._display = 
        `<div class="organizzer-container" style="display: none;">
            <input class="organizzer-column" type="number>
            <button class="organizzer-save">V</button>
        </div>`
    }

    appendDisplayToBody() {
        document.body.innerHTML = this._display
    }

    init() {
        let container = document.getElementsByClassName('organizzer-container')
        if (container) {
            container.remove()
        }
        this.createHtml()
        this.appendDisplayToBody() 
        this.setValue = 12
    }

    save() {
        return document.getElementsByClassName('organizzer-column').value
    }
}

module.exports = Display[]