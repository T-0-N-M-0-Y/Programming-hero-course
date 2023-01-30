var student = { 
    id: 115, 
    name: 'Solamin Khan', 
    class: 9, 
    marks: 98
}

var mobile = {
    brand: 'Samsung',
    price: 19000, 
    storage: '64gb',
    camera: '7MP'
}


var myComputer = {
    brand: 'lonovo',
    price: 39000,
    color: 'silver',
    processor: 'i7'
}

console.log(myComputer.processor);
myComputer.processor = 'i79';
console.log(myComputer)

//Examples

var shoppingCart = {
    books: 3, 
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
// alternative System
// When you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];


var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);
console.log(shoppingCart);

var propertyName = 'mouse';

var propertyValue = shoppingCart[propertyName]
// console.log(propertyName, propertyValue);

// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart)