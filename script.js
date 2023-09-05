
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicación);
console.log("División: " + division);

let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
let fahrenheit = (celsius * 9 / 5) + 32;

console.log("La temperatura en grados Fahrenheit es: " + fahrenheit.toFixed(2));

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

let num = parseInt(prompt("Ingrese un número para calcular su factorial:"));
let factorial = calcularFactorial(num);
console.log("El factorial de " + num + " es: " + factorial);


function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let num = parseInt(prompt("Ingrese un número para verificar si es primo:"));

if (esPrimo(num)) {
    console.log(num + " es un número primo.");
} else {
    console.log(num + " no es un número primo.");
}

function contarPalabras(frase) {
    let palabras = frase.split(" ");
    return palabras.length;
}

let texto = prompt("Ingrese una frase:");
let numPalabras = contarPalabras(texto);
console.log("La frase tiene " + numPalabras + " palabras.");
