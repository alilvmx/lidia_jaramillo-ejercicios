//Ejercicio 1: Definir la base y la altura de un triángulo 

var base = 20; 
var altura = 5; 

var area = (base * altura) / 2; 
console.log('el área del triángulo es: ' + area) ; 

// Ejercicio 2:  Convertir grados Celsius a Fahrenheit.

var Celsius = 25; 
var Fahrenheit = (Celsius * 10/5); 
 console.log (Celsius + 'grados en celcius equivalen a ' + Fahrenheit); 

 //ejercicio 3: Encontrar el máximo de dos números.

 var numero1 = 5;
 var numero2 = 10; 

 var maximo; 
 
 if (numero1 > numero2) {
    maximo = numero1;
 } else {
    maximo =numero2;
 }



 console.log ('el maximo de ' + numero1 + 'y' + numero2 + 'es' + maximo); 

 // ejercicio 4: Calcular el factorial de un número.
 
 var  numero = 5; 
 var factorial = 1; 

 for (var i = 1; i <= numero; i++) {
      factorial *= i; 
 }

 console.log('El factorial de ' + numero + ' es ' + factorial); 

 // Ejercicio 5: Verificar si un número es primo. 

 var numero = 17; 

 var esPrimo = true;


 if (numero <= 1) {
    esPrimo = false;
 } else {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
 }

 if (esPrimo) {
    console.log(numero + " es un número primo.");
 } else {
    console.log(numero + " no es un número primo.");
 }

 // Ejercicio 6: Revertir una cadena de texto.

 var texto = "Hola, mundo!"; 

 var textoRevertido = "";
 
 for (var i = texto.length - 1; i >= 0; i--) {
     textoRevertido += texto[i];
 }
 
 console.log("Texto original: " + texto);
 console.log("Texto revertido: " + textoRevertido);

// Ejercicio 7: Calcular la suma de los primeros N números naturales.

var N = 5; 

var suma = 0;

for (var i = 1; i <= N; i++) {
    suma += i;
}

console.log("La suma de los primeros " + N + " números naturales es: " + suma);

// Ejercicio 8: Encontrar el elemento más grande en un arreglo.

var arreglo = [12, 45, 67, 8, 23, 56];
var maximo = arreglo[0];
for (var i = 1; i < arreglo.length; i++) {
   if (arreglo[i] > maximo) {
       maximo = arreglo[i];
   }
}
console.log("El elemento más grande en el arreglo es: " + maximo);

//Ejercicio 9 :Verificar si una palabra es un palíndromo.

var palabra = "reconocer"; 
palabra = palabra.toLowerCase().replace(/\s/g, '');
var palabraRevertida = palabra.split('').reverse().join('');

if (palabra === palabraRevertida) {
   console.log(palabra + " es un palíndromo.");
} else {
   console.log(palabra + " no es un palíndromo.");
}

//Ejercicio 10 :Generar un número aleatorio en un rango dado. 

var minimo = 1; 
var maximo = 100; 


var numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;


console.log("Número aleatorio en el rango [" + minimo + ", " + maximo + "]: " + numeroAleatorio);





































