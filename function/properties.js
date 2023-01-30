var shoppingCart={
    book:3,
    sunglass:1,
    pen:5,
    mouse:7,
    keyboard:4
}

//when you  know the property name.use dot notation
var penCount=shoppingCart.pen;

var penCount2=shoppingCart['pen']
var properties=Object.keys(shoppingCart);
var propertyValues=Object.values(shoppingCart)
console.log(properties);
// console.log(shoppingCart)