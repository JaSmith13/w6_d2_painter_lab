const Room = function(area){
    this.area = area
    this.painted = false
}

Room.prototype.hasBeenPainted = function () {
    this.painted = true
}

module.exports = Room