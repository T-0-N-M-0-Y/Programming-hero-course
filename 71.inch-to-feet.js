// Normal way 

var inches = 120;
var feet = inches / 12;
console.log(feet);

//Normal system e multiple math bair korte caile onek bar code likte hobe. But function use korle onek easily kora jabe

//Using Function

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const playerInch = 84;
const calculateFeet = inchToFeet(playerInch);
console.log(calculateFeet);

// Miles to Kilometer 

function roadDistance(miles) {
    const KM = miles * 1.60934;
    return KM;
}

const inputDistance = 2;
const calculateMiles = roadDistance(inputDistance);
console.log(calculateMiles);

//Fahrenheit to Celsius

function temperatureConverter(F) {
    let C = (F - 32) / 1.8;
    C = C.toFixed(2);
    let newNumber = parseFloat(C);
    return newNumber;
}

let calculateC = temperatureConverter(50);
console.log(calculateC);

let calculateC2 = temperatureConverter(103);
console.log(calculateC2);