
function coverStarArray(stars) {
    var star = stars.toString().substring(0, 1)
    console.log("stars")
    var array = []

    for (var i = 1; i <= 5; i++) {
        if (i <= star) {
            array.push(1)
        } else {
            array.push(0)
        }
    }
    return array
}

module.exports = {
    coverStarArray: coverStarArray
}