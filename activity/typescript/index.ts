// Ejercicio 1
console.log("Ejercicio 1");

interface Person {
    name: string;
    age: number;
    profession: string;
  }
  

  const getPropertiesArray = (person: Person): (string | number)[] => {
    const { name, age, profession } = person;
    return [name, age, profession];
  };
  

  const myInfo: Person = {
    name: 'Lucas',
    age: 28,
    profession: 'Full Stack',
  };
  
  const resultArray = getPropertiesArray(myInfo);
  console.log(resultArray); 
  

// Ejercicio 2
console.log("Ejercicio 2");

const sumOrConcatenate = (param1: number | string, param2: number | string): number | string => {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2;
    } else if (typeof param1 === 'string' && typeof param2 === 'string') {
      return `${param1}-${param2}`;
    } else {
      return `${param1}:${param2}`;
    }
  };
  

  console.log(sumOrConcatenate(4, 3)); 
  console.log(sumOrConcatenate(4, "hello")); 
  console.log(sumOrConcatenate("hello", "world")); 


// Ejercicio 3
console.log("Ejercicio 3");

interface Car {
    tires: number;
    turnOnEngine(): void;
    pressPedal(): void;
  }
  
  interface Motorcycle {
    tires: number;
    turnOnEngine(): void;
    openThrottle(): void;
  }

  const isCar = (vehicle: Car | Motorcycle): vehicle is Car => {
    return 'pressPedal' in vehicle;
  };

  const startEngineAndMove = (vehicle: Car | Motorcycle): void => {
    vehicle.turnOnEngine();
    
    if (isCar(vehicle)) {
      vehicle.pressPedal();
    } else {
      vehicle.openThrottle();
    }
  };

  const myCar: Car = {
    tires: 4,
    turnOnEngine() {
      console.log('Engine started for the car');
    },
    pressPedal() {
      console.log('Car is moving');
    },
  };
  
  const myMotorcycle: Motorcycle = {
    tires: 2,
    turnOnEngine() {
      console.log('Engine started for the motorcycle');
    },
    openThrottle() {
      console.log('Motorcycle is accelerating');
    },
  };
  
  startEngineAndMove(myCar); 
  startEngineAndMove(myMotorcycle); 


// Ejercicio 4
console.log("Ejercicio 4");

const removeFirstEntry = <T>(arr: T[]): T[] => {
    return arr.slice(1);
  };
  
  const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
  const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
  const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
  const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];
  
  const newStrArray = removeFirstEntry(strArray);
  const newNumArray = removeFirstEntry(numArray);
  const newMixedArray = removeFirstEntry(mixedArray);
  
  console.log(newStrArray); 
  console.log(newNumArray); 
  console.log(newMixedArray); 