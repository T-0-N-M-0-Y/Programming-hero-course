const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'aamir'],
    movies: [{name: 'no. 1', year: 2015}, {name: 'king khan', year: 2018}],
    act: function(){
        console.log('acting like Sakib khan');
    },
    car: {
        brand: 'tesla',
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}

// console.log(student.car);
console.log(nayok.act);
nayok.act();


// Array 

// const products = [
//     {name: 'phone', price: 12000},
//     {name: 'laptop', price: 32000},
// ]

// products[0];
// products[1];

// const products = [15, 56, 87]
const products = {
    '0': 15,
    '1': 56,
    '2': 87
}

//arguments

function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments[4]);
}

add(12, 13, 45, 89, 78);