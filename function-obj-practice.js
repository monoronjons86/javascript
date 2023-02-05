// function sum(a,b,c,d,e){
//     sum=a+b+c+d+e
//     console.log(sum)

// }
// sum(20,30,40,50,55,70,75)

function add(number1,number2){
    console.log(number1,number2);
    var sum=number1+number2
    return sum;

}
var total=add(20,30)
console.log('total',total);

function bringSingra(money){
    var singraPrice=10;
    var total=money / singraPrice;
    return total;
}
var myTk=200;
 var avg=bringSingra(myTk);
 console.log('price',avg);