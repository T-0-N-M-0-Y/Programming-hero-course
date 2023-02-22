const numbers = [2, 8, 4, 6, 3];


function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

function doubleItOld(num){
    return num * 2;
}


const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2)
const makeDouble2 = numbers.map(x => x * 2);
// console.log(makeDoubleDirect);
const fiveTimes = [1,2,3,4,5].map(x => x * 5);
console.log(fiveTimes);
/* 
purpose: 
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/

const result = getDoubles(numbers);
console.log(result);
console.log(makeDouble);

const numbers = [12, 56, 87, 44];
const half = numbers.map( n => n/2 )
const thirds = numbers.map(x => x/3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'TOM Solaiman'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters);
const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];

// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
// console.log(items)
console.log(prices);