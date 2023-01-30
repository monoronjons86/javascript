function add(number1,number2){
    console.log(number1,number2);
    var sum=number1+number2;
    //console.log(sum)
    return sum;
}
//add(40,50)

var total=add(80,20);
// console.log('total',total);

function bringSingra(money){
    var singraPrice=10;
    var quantity=money/singraPrice
    return quantity;

}
var singaras=bringSingra(200)
console.log(singaras);