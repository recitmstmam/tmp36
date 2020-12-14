let Température = 0
basic.forever(function () {
    Température = smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, AnalogPin.P0)
    basic.showNumber(Température)
    basic.pause(5000)
})
