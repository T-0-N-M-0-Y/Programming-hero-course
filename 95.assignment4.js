//Problem No 1: Mind Game

function mindGame(number) { //Function name and Parameter

    if (typeof number !== 'number') { //Checking Validation
        return 'Invalid input! Plz Give A Valid number'
    }
    else {

        // const firstResult = number * 3;  //Just For Understanding
        // const secondResult = firstResult + 10;
        // const thirdResult = secondResult / 2;
        // const finalResult = thirdResult - 5;

        const finalResult = ((((number * 3) + 10) / 2) - 5) //Doing the Calculation
        return finalResult; //Returning Result
    }
}

const inputNumber = mindGame(5); //Calling The Function & Giving the input
console.log(inputNumber); //Output



//Problem 2: Finding Even or Odd

function evenOdd(str) { //Function name and Parameter
    const charNumber = str.length; // Counting Character value

    if (typeof str !== 'string') { //Checking Validation
        return 'Invalid input! Plz Give A Valid string'
    }
    else if (charNumber % 2 !== 0) { //Doing the Calculation
        return 'odd';
    }
    else {
        return 'even';
    }
}

const inputStr = evenOdd('Tonmoy'); //Calling the Function & Giving the input
console.log(inputStr); //Output


//Problem 3: Is Less or Greater than seven

function isLGSeven(num) { //Function name and Parameter
    const value = num - 7; //Doing the Calculation

    if (typeof num !== 'number') { //Checking Validation
        return 'Invalid input! Plz Give A Valid number'
    }
    else if (value < 7) { //Checking Condition
        return value;
    }
    else {
        return num * 2;
    }
}

const inputNum = isLGSeven(15); //Calling the Function & Giving the input
console.log(inputNum); //Output



// //Problem 4: Finding Bad data

function findingBadData(givenArray) { //Function name and Parameter
    const badData = []    //For adding filtered values

    if (Array.isArray(givenArray)) { //Checking Validation
        for (let i = 0; i < givenArray.length; i++) {  //Checking and Looping the Array
            let badNumbers = givenArray[i];
            if (badNumbers < 0) {//Filtering the Negative Numbers
                badData.push(badNumbers); // Pushing the values in array name badData   
            }
        }
        let numOfBadData = badData.length; //Counting the length of BadData
        return numOfBadData; //Returning Result
    }
    else {
        return "Invalid Input! Plz Give A Valid Array"
    }
}

const givenArray = [-4, -9, -5, -33, -55]; //Calling the Function & Giving the input
const inputArray = findingBadData(givenArray);
console.log(inputArray); //Output



// Problem 5: Convert your gems into diamond

function gemsToDiamond(friend1, friend2, friend3) {

    if ((typeof friend1 !== 'number') || (typeof friend2 !== 'number') || (typeof friend3 !== 'number')) { //Checking Validation
        return 'Invalid input! Plz Give All Number' // Returning Error Message
    }

    // Doing The Math
    const friend1Power = 21;
    const friend2Power = 32;
    const friend3Power = 43;

    const friend1Diamond = friend1 * friend1Power;
    const friend2Diamond = friend2 * friend2Power;
    const friend3Diamond = friend3 * friend3Power;

    totalDiamond = friend1Diamond + friend2Diamond + friend3Diamond; //Doing the Calculation

    if (totalDiamond > 1000 * 2) { //Checking Condition
        return totalDiamond - 2000; // Returning Calculated value
    }
    else {
        return totalDiamond; //Returning Total Value
    }
}

let gemsQuantity = gemsToDiamond(20, 200, 50); //Calling the Function & Giving the input
console.log(gemsQuantity); //Output
