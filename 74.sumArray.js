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

const myNumbers = [10, 8, 9, 11, 19, 25, 29, 20, 22];
getSumOfArray(myNumbers);