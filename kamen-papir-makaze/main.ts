input.onButtonPressed(Button.A, function () {
    if (pokrenuto == 1) {
        izabrano = 1
        pokrenuto = 2
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        basic.showNumber(sekunde)
        basic.pause(1000)
        sekunde = sekunde - 1
    }
    basic.clearScreen()
    pokrenuto = 1
})
input.onButtonPressed(Button.B, function () {
    if (pokrenuto == 1) {
        izabrano = 2
        pokrenuto = 2
    }
})
input.onGesture(Gesture.Shake, function () {
    if (pokrenuto == 1) {
        izabrano = 3
        pokrenuto = 2
    }
})
let izabrano = 0
let pokrenuto = 0
let sekunde = 0
sekunde = 2
pokrenuto = 0
izabrano = 0
basic.showString("S")
basic.forever(function () {
    if (pokrenuto == 2) {
        if (izabrano == randint(1, 3)) {
            basic.showIcon(IconNames.Yes)
            basic.pause(2000)
            izabrano = 0
            pokrenuto = 0
            sekunde = 5
            basic.clearScreen()
            basic.showString("S")
        } else {
            basic.showIcon(IconNames.No)
            basic.pause(2000)
            izabrano = 0
            pokrenuto = 0
            sekunde = 5
            basic.clearScreen()
            basic.showString("S")
        }
    }
})
