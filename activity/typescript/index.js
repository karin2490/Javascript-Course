// Ejercicio 1
console.log("Ejercicio 1");
var getPropertiesArray = function (person) {
    var name = person.name, age = person.age, profession = person.profession;
    return [name, age, profession];
};
var myInfo = {
    name: 'Lucas',
    age: 28,
    profession: 'Full Stack',
};
var resultArray = getPropertiesArray(myInfo);
console.log(resultArray);

// Ejercicio 2
console.log("Ejercicio 2");
var sumOrConcatenate = function (param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else if (typeof param1 === 'string' && typeof param2 === 'string') {
        return "".concat(param1, "-").concat(param2);
    }
    else {
        return "".concat(param1, ":").concat(param2);
    }
};
console.log(sumOrConcatenate(4, 3));
console.log(sumOrConcatenate(4, "hello"));
console.log(sumOrConcatenate("hello", "world"));

// Ejercicio 3
console.log("Ejercicio 3");
var isCar = function (vehicle) {
    return 'pressPedal' in vehicle;
};
var startEngineAndMove = function (vehicle) {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    }
    else {
        vehicle.openThrottle();
    }
};
var myCar = {
    tires: 4,
    turnOnEngine: function () {
        console.log('Engine started for the car');
    },
    pressPedal: function () {
        console.log('Car is moving');
    },
};
var myMotorcycle = {
    tires: 2,
    turnOnEngine: function () {
        console.log('Engine started for the motorcycle');
    },
    openThrottle: function () {
        console.log('Motorcycle is accelerating');
    },
};
startEngineAndMove(myCar);
startEngineAndMove(myMotorcycle);

// Ejercicio 4
console.log("Ejercicio 4");
var removeFirstEntry = function (arr) {
    return arr.slice(1);
};
var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
console.log(newStrArray);
console.log(newNumArray);
console.log(newMixedArray);
