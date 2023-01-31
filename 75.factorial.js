// 1 + 2 + 3 + 4 + 5 + 6 + 7

//Normal
let sum = 0;
for (let i = 1; i <= 7; i++) {
    sum = sum + i;
    console.log(i, sum);
}

//Using Function
function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
    }
    return sum;
}

const math = sumOfNumbers(10);
console.log(math);

//1 * 2 * 3 * 4 * 5 * 6 * 7
function multiplication(number) {
    let sum2 = 1;
    for (let i = 1; i <= number; i++) {
        sum2 = sum2 * i;
    }
    return sum2;
}

const math2 = multiplication(10);
console.log(math2);

// Reverse
function factorial(number) {
    let sum3 = 1;
    for (i = number; i >= 1; i--) {
        sum3 = sum3 * i;
    }
    return sum3;
}

const math3 = factorial(10);
console.log(math3);

// Using While Loop 
function factorial2(number) {
    let i = number;
    let sum4 = 1;
    while (i >= 1) {
        sum4 = sum4 * i;
        console.log(sum4);
        i--;
    }
    return sum4;
}

const math4 = factorial2(10);
console.log(math4);