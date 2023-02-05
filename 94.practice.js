// Inch To Feet

function inchToFeet(inches) {
    let feet = inches / 12;

    return feet;
}

let inputInch = inchToFeet(144);
console.log(inputInch);

// Centimeter to Meter

function centimeterToMeter(centimeter) {
    let meter = centimeter / 100;

    return meter;
}

let inputMeter = centimeterToMeter(1000);
console.log(inputMeter);


//Book Requirements

function paperRequirements(bookQuantity) {
    const book1 = 100;
    const book2 = 200;
    const book3 = 300;

    const book1Requirements = book1 * bookQuantity;
    const book2Requirements = book2 * bookQuantity;
    const book3Requirements = book3 * bookQuantity;

    const totalPages = book1Requirements + book2Requirements + book3Requirements;
    return totalPages;
}

const inputQuantity = paperRequirements(5);
console.log(inputQuantity);

//Long String output

var friendsName = ['sajid', 'mamun', 'kamal', 'jubayer bin Rashed', 'chinku'];

function bestFriend(friends) {

    let friend1 = friendsName.indexOf('sajid');
    let friend2 = friendsName.indexOf('mamun');
    let friend3 = friendsName.indexOf('kamal');
    let friend4 = friendsName.indexOf('jubayer bin Rashed');
    let friend5 = friendsName.indexOf('Chinku');

    for (var i = 0; i < friends.length; i++) {

        if (friend1 > friend2 && friend1 > friend3) {
            return 'sajid is  my Best Friends';
        }
        else if (friend2 > friend1 && friend2 > friend3) {
            return 'mamun is  my Best Friends';
        }
        else if (friend3 > friend4 && friend3 > friend5) {
            return 'kamal is my Best Friends';
        }
        else if (friend4 > friend3 && friend4 > friend5) {
            return 'jubayer is my Best Friends';
        }
        else {
            return "chinku Have no best Friend";
        }
    }
}

let friendBest = bestFriend(friendsName);
console.log(friendBest);