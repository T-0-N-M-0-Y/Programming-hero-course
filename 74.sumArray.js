function getSumOfArray(numbers) {
    let sumOfArray = 0;
    for (let i = 0; i < numbers.length; i++) {
        const number = i;
        const elements = numbers[number];
        // console.log(number, elements);
        sumOfArray = sumOfArray + elements;
        console.log(sumOfArray);
    }
    return sumOfArray;
}

//Get Odd Numbers

function getOddNumbers(numbers) {

    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const number2 = i;
        const element = numbers[number2];
        if (element % 2 !== 0 ) {
            console.log(number2, element);
            oddNumbers.push(element);
        }      
    }
    return oddNumbers;
}

const myNumbers = [10, 8, 9, 11, 19, 25, 29, 20, 22];
getSumOfArray(myNumbers);

const oddNumbers = getOddNumbers(myNumbers);
console.log(oddNumbers);


//Get Sum Of Odd Numbers
function findOddSum(odd) {
    let sumArray = 0;
    for (let i = 0; i < odd.length; i++) {
        const number = i;
        const element = odd[number];
        //   console.log(number, element);
        if (element % 2 !== 0) {
            console.log(number, element);
            sumArray = sumArray + element;
        }
    }
    return sumArray;
}

const myNumber = [5, 7, 8, 10, 45, 30];
const oddNum = findOddSum(myNumber);
console.log(oddNum);


