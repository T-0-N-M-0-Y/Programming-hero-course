//This is how to Swap Numbers

let first = 5;
let second = 7;

//Wrong Way
first = second;
second = first;

//Way no: 1
const temp = first;
first = second;
second = temp;
console.log(first, second);

// Way no: 2 
[first, second] = [second, first];
console.log(first, second);