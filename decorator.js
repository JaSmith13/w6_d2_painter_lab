const Decorator = function(name) {
    this.name = name
    this.paintStock = []
}

Decorator.prototype.addCan = function(paintCan) {
    this.paintStock.push(paintCan)
}

Decorator.prototype.totalPaint = function() {
    let total = 0
    for (let paint of this.paintStock){
        total += paint.volume
    }
    return total
}

Decorator.prototype.hasEnoughPaint = function(room) {
    let totalPaint = this.totalPaint()
    if(totalPaint >= room.area){
        return true
    }
    return false
}

Decorator.prototype.paintRoom = function(room) {
    if(this.hasEnoughPaint){
        room.painted = true
    }
}

Decorator.prototype.removeEmptyCans = function() {
    for (let paint of this.paintStock){
        if (paint.volume === 0){
            this.paintStock.splice(this.paintStock.indexOf(paint), 1)
        }
    }
}

module.exports = Decorator
