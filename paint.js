const Paint = function(volume, colour){
    this.volume = volume
    this.colour = colour

}

Paint.prototype.isCanEmpty = function () {
    if(this.volume === 0){
        return true
    }
    return false
}

Paint.prototype.emptyCan = function () {
    this.volume = 0
}

module.exports = Paint