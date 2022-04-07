/* celsius-to-fahrenheit.js */
const converters = require('./converters.js');

const celsiusInput = process.argv[2]; 
const fahrenheitValue = converters.celsiusToFahrenheit(celsiusInput);
console.log(`${celsiusInput} graus Celsius = ${fahrenheitValue} graus Fahrenheit`);