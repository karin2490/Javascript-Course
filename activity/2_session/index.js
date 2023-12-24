// Ejercicio 1
console.log("Ejercicio 1");

const getPerson= obj =>{
  return Object.keys(obj)
};

const person={
  name:"Lucas",
  age:27,
  profession:"Developer",
};

const propiedades=getPerson(person);
console.log(propiedades);

// Ejercicio 2
console.log("Ejercicio 2");

console.log("\n 1.-Enumera los distintos valores que puede tener “this” y pon un ejemplo de cada uno en JavaScript:")
console.log("\n Respuesta= \n - En elcontexto global: \n\t console.log(this === window);"+

"\n\n - Dentro de un metodo de objeto:"+
"\n\t const person = {"+
 "\n\t\t name: 'John',"+
 "\n\t\t greet: function() {"+
  "\n\t\t console.log(`Hello, my name is ${this.name}`);"+
  "\n\t\t }"+
"\n };"+
"\n person.greet(); // Salida: Hello, my name is John"+

"\n\n - Dentro de una funcion constructora: \n "+
"\tfunction Car(make, model) {"+
  "\n\t\tthis.make = make;"+
  "\n\t\tthis.model = model;"+
"\n\t\t}"+
"\n\tconst myCar = new Car('Toyota', 'Corolla');"+
"\n\tconsole.log(myCar); // Muestra el objeto Car con sus propiedades make y model"+

"\n\n- En una funcion regular (no metodo de objeto ni arrow function):\n"+
"\tfunction displayThis() {"+
"\n\t\tconsole.log(this);"+
"\n\t}"+
"\n\t displayThis(); // El resultado dependerá del entorno en el que se ejecute"+

"\n\n - En un manejador de eventos"+
"\n\tconst button = document.querySelector('button');"+
"\n\tbutton.addEventListener('click', function() {"+
"\n\t\tconsole.log(this); // Hace referencia al elemento button"+
"\n\t});"

)

console.log("\n 2.- Enumera las diferencias entre arrow functions y function expressions")
console.log("\n Respuesta=\n Arrow functions:\n "+
"\t- Tienen una sintaxis mas compacta y simplificada"+
"\n\t- 'this' toma el valor del 'this' del ambito circundante en el que se define la funcion, no tiene su propio 'this'"+
"\n\t- No tienen su propio objero 'arguments'"+
"\n\t- No pueden ser usadas como constructores."+
"\n Functions expressions:\n"+
"\t- Tienen una sintaxis mas detallada y tradicional con la palabra clave 'function'"+
"\n\t-'this' depende de como se invoca la funcion. Puede cambiar dinamicamente segun el contexto de ejecucion"+
"\n\t-Tienen su propio objetos 'arguments'"+
"\n\t-Pueden ser usadas como constructores"
)

// Ejercicio 3
console.log("Ejercicio 3");

//Codigo que genera un error
class InvertirCadena {
  constructor() {
    this.cadenaInvertir = ''; // Atributo que almacenará la cadena a invertir
  }

  // Arrow function para invertir la cadena y mostrar el resultado
  invertirYMostrar = () => {
    if (this.cadenaInvertir === '') {
      throw new Error('¡Error! La cadena está vacía.');
    } else {
      const cadenaInvertida = this.cadenaInvertir.split('').reverse().join('');
      console.log(cadenaInvertida);
    }
  }
}

// Instancia de la clase InvertirCadena
const invertirCadena = new InvertirCadena();

// Ejecución inicial sin cambiar cadenaInvertir
try {
  invertirCadena.invertirYMostrar();
} catch (error) {
  console.error(error.message);
}

// Cambio del valor de cadenaInvertir y llamada a la función
invertirCadena.cadenaInvertir = 'Hola mundo';
invertirCadena.invertirYMostrar(); // Resultado: "odnum aloH"

// Intento de acceso a un nuevo método (nuevoMetodo)
if (invertirCadena.nuevoMetodo) {
  invertirCadena.nuevoMetodo();
} else {
  console.log('El método nuevoMetodo no está definido.');
}

// Ejercicio 3
//Ahora intentemos hacer el codigo validando antes que la cadena no este vacia
class InvertirCadena1 {
  constructor() {
    this.cadenaInvertir = '';
  }

  invertir = () => {
    if (this.cadenaInvertir === '') {
      throw new Error("La cadena está vacía. No se puede invertir.");
    } else {
      const cadenaInvertida = this.cadenaInvertir.split('').reverse().join('');
      console.log(cadenaInvertida);
    }
  };
}

// Instancia de la clase InvertirCadena
const invertirCadena1 = new InvertirCadena1();

// Ejecución sin cambiar cadenaInvertir (esto lanzará un error si la cadena está vacía)
try {
  invertirCadena1.invertir();
} catch (error) {
  console.error(error.message);
}

// Cambiar el valor de cadenaInvertir y ejecutar la función invertir
invertirCadena1.cadenaInvertir = 'Hola mundo';
invertirCadena1.invertir(); // Resultado: odnum aloH

// Acceder a un nuevo método (previniendo el error)
if (invertirCadena1.nuevoMetodo) {
  invertirCadena1.nuevoMetodo();
} else {
  console.log("El método 'nuevoMetodo' no está definido.");
}


// Ejercicio 4
console.log("Ejercicio 4");

class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === 'admin' && this.password === 'passwd') {
      alert('Usuario logeado');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}


let login = new Login('admin', 'passwd');
login.login(); // Alerta: Usuario logeado

let logbad = new Login('pepe', 'bad');
logbad.login(); // Alerta: Usuario o contraseña incorrectos



// Ejercicio 5






// Ejercicio 6
console.log("Ejercicio 6");
let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
