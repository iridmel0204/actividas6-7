radio.onReceivedNumber(function (receivedNumber) {
    led.setBrightness(led.brightness() + receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(-25)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("POWER")
})
radio.onReceivedString(function (receivedString) {
    let RECIVEDSTRING = 0
    if (RECIVEDSTRING == 0) {
        ENCENDIDO = !(ENCENDIDO)
        led.setBrightness(125)
        led.enable(ENCENDIDO)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(25)
})
let ENCENDIDO = false
radio.setGroup(1)
