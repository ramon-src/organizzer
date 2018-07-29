let Organizzer = class Organizzer {
    
    constructor () {

    }

    get getOrder() {
        return this._order
    }
    set setOrder(order) {
        this._order = order
    }
    get getCol() {
        return this._column;
    }
    set setCol(column) {
        this._column = column
    }
    get getScreen() {
        return this._screenSize;
    }
    set setScreen(screenSize) {
        this._screenSize = screenSize
    }
    
    build() {
        return {
            order: this._order,
            column: this._column,
            screenSize: this._screenSize
        }
    }
}

module.exports = Organizzer