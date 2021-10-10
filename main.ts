input.onPinPressed(TouchPin.P0, function () {
    i = randint(1, 3)
    if (i == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (i == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.clearScreen()
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        . . # . .
        # . # . #
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    lấy_ngẫu_nhiên = randint(1, 6)
    if (lấy_ngẫu_nhiên == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        if (lấy_ngẫu_nhiên == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                . . . . .
                . . . . .
                `)
        } else {
            if (lấy_ngẫu_nhiên == 3) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # . # . #
                    . . . . .
                    . . . . .
                    `)
            } else {
                if (lấy_ngẫu_nhiên == 4) {
                    basic.showLeds(`
                        # . . . #
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . #
                        `)
                } else {
                    if (lấy_ngẫu_nhiên == 5) {
                        basic.showLeds(`
                            # . . . #
                            . . . . .
                            . . # . .
                            . . . . .
                            # . . . #
                            `)
                    } else {
                        if (lấy_ngẫu_nhiên == 6) {
                            basic.showLeds(`
                                # . # . #
                                . . . . .
                                . . . . .
                                . . . . .
                                # . # . #
                                `)
                        }
                    }
                }
            }
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("chao minh la robot")
    basic.showIcon(IconNames.Happy)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Skull)
        basic.showIcon(IconNames.Ghost)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # . # . #
        # . # . #
        . # # # .
        . . # . .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
let lấy_ngẫu_nhiên = 0
let i = 0
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
	
})
