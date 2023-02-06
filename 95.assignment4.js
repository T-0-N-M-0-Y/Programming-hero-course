//Problem No 1: Mind Game

function mindGame(number) { //Function name and Parameter

    if (typeof number !== 'number') { //Checking Validation
        return 'Invalid input'
    }

    else { //Doing The math
        const firstResult = number * 3;
        const secondResult = firstResult + 10;
        const thirdResult = secondResult / 2;
        const finalResult = thirdResult - 5;

        return finalResult; //Returning Result
    }
}

const inputNumber = mindGame(33); //Calling The Function
console.log(inputNumber); //Output



//Problem 2: Finding Even or Odd

function evenOdd(str) { //Function name and Parameter

    const charNumber = str.length; // Counting Character value

    if (typeof str !== 'string') { //Checking Validation
        return 'Invalid input'
    }

    else if (charNumber % 2 !== 0) { // Doing the Math
        return 'odd';
    }
    else {
        return 'even';
    }
}

const inputStr = evenOdd('Tonmoy'); //Calling the Function
console.log(inputStr); //Output



//Problem 3: Is Less or Greater than seven

function isLGSeven(num) { //Function name and Parameter
    const value = num - 7; //Doing the Math

    if (typeof num !== 'number') { //Checking Validation
        return 'Invalid input'
    }

    else if (value < 7) { //Checking Condition
        return value;
    }
    else{
        return num * 2;
    }
}

const inputNum = isLGSeven(290); //Calling the Function
console.log(inputNum); //Output


//Problem 4: Finding Bad data

