function getSumOfArray(numbers) {
    let sumofArray = 0;
    for (let i = 0; i < numbers.length; i++) {
        const number = i;
        const elements = numbers[number];
        // console.log(number, elements);
        sumofArray = sumofArray + elements;
        console.log(sumofArray);     
    }
    return sumofArray;
}


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