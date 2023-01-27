var iphonePrice = 79000;
var myBudget = 95000;
// if iphone price is less than my budget. I will buy the iphone
/**
 *  if iphone price is less than my budget
 *      i will buy the iphone
 * 
 * 
 * if (condition) {
 *      // will execute if the condition is true
 * }
 * 
 * */ 

if (iphonePrice < myBudget){
    console.log('i phone kine futani marbo');
}

var chickenPrice = 500;
var myMoney = 50;
// if (chickenPrice <= myMoney){
//     console.log('Murgir raan khamu and haddi chibamu!!!');
// }
// if (chickenPrice > myMoney){
//     console.log('Smashed potato and lentils soup');
// }

/**
 * if chiken er price is less than my budget
 * i will eat chiken
 * na hoi: else
 * */ 

if(chickenPrice < myMoney) {
    console.log('I will eat Chicken');
}
else{
    console.log('I will eat potato');
}


//Multiple Conditionals

// var isGraduated = true;
// var salary = 75000;
// var cars = 1;

// if(isGraduated == true){
//     console.log('Eso biye kore feli')
// }
// else{
//     console.log('tor Kopale Biya nai')
// }

// if(isGraduated == true && salary > 50000){
//     console.log('Eso biye kore feli')
// }
// else{
//     console.log('tor Kopale Biya nai')
// }

// if(isGraduated == true && salary > 50000 && cars >= 1){
//     console.log('Eso biye kore feli')
// }
// else{
//     console.log('tor Kopale Biya nai')
// }


var isGraduated = false;
var salary = 61000;
var cars = 0;

if(isGraduated === true || salary > 50000 || cars >= 1){
    console.log('Eso Prem kori');
}
else{
    console.log('tomar friend er mobile number dao')
}

if ( isGraduated === true && (salary > 50000 || cars >=1)){

}

//Multi-stage Conditional

var money = 68;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if(danishPrice < money) {
    console.log('Dan Dan danish khamu');
}
else if (butterBread < money) {
    console.log('Butter bon khamu')
}
else if(toastBiscuit < money){
    console.log('chubai chubai toast biscuit khamu')
}
else {
    console.log('Khali cha e sasther jonno valo')
}

//Nested Conditionals

var math = true;
var geometry = true;
var straightLint = false;

if(math == true){
    if(geometry == true){
        if(straightLint == true){

        }
        else{
            console.log('baka pothe cholba na')
        }
    }
    else{
        console.log('pithagorous hoite parba na')
    }
}
else{

}