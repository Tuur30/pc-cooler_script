function SerialWrite () {
    serial.writeValue("Celcius", temperatuur_celcius)
    serial.writeValue("Kelvin", temperatur_kelvin)
    serial.writeValue("Farenheit", temperatuur_farenheit)
    serial.writeValue("Aan/Uit", Fan_aanuit)
}
function CalculateTemperatures () {
    temperatuur_farenheit = input.temperature() * 1.8 + 32
    temperatur_kelvin = 273.15 + input.temperature()
    temperatuur_celcius = input.temperature()
}
function Compare () {
    if (Start_temperatuur + 5 <= temperatuur_celcius) {
        pins.analogWritePin(AnalogPin.P0, 1023)
        Fan_aanuit = 1
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
        Fan_aanuit = 0
    }
}
let temperatuur_farenheit = 0
let temperatur_kelvin = 0
let temperatuur_celcius = 0
let Fan_aanuit = 0
let Start_temperatuur = 0
Start_temperatuur = input.temperature()
Fan_aanuit = 0
basic.forever(function () {
    CalculateTemperatures()
    SerialWrite()
    Compare()
})
