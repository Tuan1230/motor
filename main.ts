let motor = 0
input.onButtonPressed(Button.A, function () {
    motor = 1
    pins.digitalWritePin(DigitalPin.P0, motor)
    pins.digitalWritePin(DigitalPin.P1, motor)
    pins.digitalWritePin(DigitalPin.P2, motor)
    basic.showNumber(motor)
})
input.onButtonPressed(Button.B, function () {
    motor = 0
    pins.digitalWritePin(DigitalPin.P0, motor)
    pins.digitalWritePin(DigitalPin.P1, motor)
    pins.digitalWritePin(DigitalPin.P2, motor)
    basic.showNumber(motor)
})
basic.forever(function () {
	
})
