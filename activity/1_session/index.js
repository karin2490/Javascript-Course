// Ejercicio 1
console.log("Ejercicio 1");
import "./aboutme.js";

// Ejercicio 2

console.log("Ejercicio 2");
console.log("Respuesta= Se ejecuta primero el archivo 'aboutme.js' porque los archivos o modulos que son importados se evaluan al importarse ")

// Ejercicio 3

console.log("Ejercicio 3");

console.log("Numeros divisibles entre 7:")
for(var i=0;i<101;i++){
   if(i%7===0){
    console.log("\n"+i+" es divisible entre 7")
   }
}

// Ejercicio 4

console.log("Ejercicio 4");

console.log("Respuesta= Para evitar que la variable 'i' se declare de forma global en JavaScript, se puede utilizar 'let' o 'const'"+
" en lugar de 'var'. \n Con 'let o 'const', la variable soso existira dentro del bloque donde se declara, y no se filtrara hacia"+
" el ambito global.'")



// Ejercicio 5

console.log("Ejercicio 5");

console.log("Respuesta= Usando las estiquetas '<script>': \n - No hay soporte para modularidad, el comportamiento es el tradicional"+
" y todo el codigo dentro del archivo JavaScipt incluido con '<script>' se ejecuta en el ambito global del documento."+
" \n Usando la etiqueta '<script type='module'>': \n - En este caso si hay soporte para modularidad, el codigo dentro de un archivo"+
" JavaScript cargado como un modulo no se agrega automaticamente al ambito global del documento, lo que hace que las variables y "+
"las funciones no estan automaticamente disponibles fuera del modulo. \n - Es requerido el uso de 'import' y 'export'. \n "+
"- Los scripts cargados como modulos se descargan de forma asincrona y no bloquean la renderizacion de la pagina, a menos que se especifique lo contrario. \n "+
"- Los modulos se ejecutan en modo estricto automaticamente, sin necesidad de agregar 'use strict' al comienzo del archivo")

// Ejercicio 6

console.log("Ejercicio 6");

const formatter={
   prefix: "Hello ",
   append:function(str){
      console.log(this.prefix+str);
   }
};

//La siguiente forma no es correcta usarla en el mundo real
// formatter.__proto__.toLowerString=function(str){
//    console.log(str.toLowerCase());
// };

//mejor usaremos Object.setPrototypeOf
const toLowerStringMethod = function(str) {
   console.log(str.toLowerCase());
 };

 // Añadir el método al prototipo de formatter usando Object.setPrototypeOf
Object.setPrototypeOf(formatter, { toLowerString: toLowerStringMethod });

formatter.append("World");
formatter.toLowerString("I'm Lucas")


