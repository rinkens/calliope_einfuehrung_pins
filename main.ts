basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showString("0")
    } else if (input.pinIsPressed(TouchPin.P1)) {
        basic.showString("1")
    } else if (input.pinIsPressed(TouchPin.P2)) {
        basic.showString("2")
    } else if (input.pinIsPressed(TouchPin.P3)) {
        basic.showString("3")
    }
    if (!(input.pinIsPressed(TouchPin.P0)) && !(input.pinIsPressed(TouchPin.P1)) && (!(input.pinIsPressed(TouchPin.P2)) && !(input.pinIsPressed(TouchPin.P3)))) {
        basic.clearScreen()
    }
})
