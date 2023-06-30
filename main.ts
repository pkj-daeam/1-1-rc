radio.setGroup(1)
let setupc = input.acceleration(Dimension.X)
let setupa = input.acceleration(Dimension.Y)
basic.forever(function () {
    // -1024 to 1024
    if (setupc + 100 < input.acceleration(Dimension.X)) {
        radio.sendString("r")
        basic.pause(500)
        radio.sendString("d")
    } else if (setupc - 100 > input.acceleration(Dimension.X)) {
        radio.sendString("l")
        basic.pause(500)
        radio.sendString("d")
    } else if (setupa - 80 > input.acceleration(Dimension.Y)) {
        radio.sendString("b")
        basic.pause(500)
        radio.sendString("c")
    } else if (setupa + 80 < input.acceleration(Dimension.Y)) {
        radio.sendString("a")
        basic.pause(500)
        radio.sendString("c")
    }
})
