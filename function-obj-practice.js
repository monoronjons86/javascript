// function sum(a,b,c,d,e){
//     sum=a+b+c+d+e
//     console.log(sum)

// }
// sum(20,30,40,50,55,70,75)

// function add(number1,number2){
//     console.log(number1,number2);
//     var sum=number1+number2
//     return sum;

// }
// var total=add(20,30)
// console.log('total',total);

// function bringSingra(money){
//     var singraPrice=10;
//     var total=money / singraPrice;
//     return total;
// }
// var myTk=200;
//  var avg=bringSingra(myTk);
//  console.log('price',avg);

// var shopingCart={
//     book:3,
//     sunglass:2,
//     keybord:5,
//     mouse:4,
//     pen:24,
//     shoes:2,
// }
// console.log(shopingCart.book)

// const MyInches=12;
// const MyFeet=MyInches/12;
// console.log(MyFeet)

// const dadaInches=144;
// const dadaFeat=dadaInches/12;
// console.log('dadaFeat',dadaFeat);

// const dadaiInches=60;
// const dadiFeat=dadaiInches/12;
// console.log('dadiFeat',dadiFeat);

function inchToFeat(inches){
    const feet=inches/12;
    return feet;

}
const dadaInches=144;
const dadaFeat=inchToFeat(dadaInches);
console.log(dadaFeat)


function milesTokillometar(miles){
    const killometar=miles*1.609;
    return killometar;
}

var killo=2.4;
var tortal=milesTokillometar(killo);
console.log('tortal',tortal)
