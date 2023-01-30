//This is How To Declare Function

function nameOfFunction () {
    console.log('Call Dile Aita Output Asbe');
}
nameOfFunction(); //This is how to call function

//This is How to Use Parameters

function fruits(money) { //Parameter is like a special variable
    console.log('Call Deyar somoy () bracket er modde ja deya hobe oita soho Output Asbe');
    console.log(money);
}

fruits(450);

//Multiple Parameter

function sum1 (a, b, c, d){
    console.log(a, b, c, d);
    var sum1 = a + b + c + d;
    console.log(sum1);
}

sum1(1, 2, 3, 4);

//return Examples

function sum (a, b, c, d){
    console.log(a, b, c, d);
    var sum = a + b + c + d;
    return(sum);
}

var total = sum(1, 2, 3, 4); //Function Call korle, left side e variable thakle,tokon return er value hoye jabe left side er variable er value
console.log(total);

//Examples

function getAverage (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my average so far: ', myAverage);

//Examples 2: Call function Multiple times

function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12, 13);
const result2 = add(35, 7);
const finalResult = add(result1, result2);
console.log(finalResult);