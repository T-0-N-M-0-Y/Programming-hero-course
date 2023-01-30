//This is how to  Declare array

//Integer Value
var friendsAge = [15, 19, 21, 27, 29, 28]; //0 to 5
var picnicFee = [100, 200, 2000, 1980, 2500, 1200]; //0 to 5

//String
var friendsNmae = ['eshan', 'ayan', 'sazzad', 'sadhin', 'tarek', 'nayeem']; //0 to 5

//Output System
console.log(friendsAge);
console.log(picnicFee);
console.log(friendsNmae);

//get elements
var elements = friendsAge[5];
console.log(elements);

//set elements
friendsAge[1] = 23;
console.log(friendsAge);

//Find index of an element
var positionOfIndex = friendsAge.indexOf(29);
console.log(positionOfIndex);

// Add items in 1st elements
friendsAge.unshift(25);
console.log(friendsAge);

// Remove items from 1st elements
picnicFee.shift(100);
console.log(picnicFee);

// Slice Elements 
picnicFee.slice(2, 4);
console.log(picnicFee);

//Includes elements
friendsNmae.includes('Tarek');
console.log(friendsNmae);