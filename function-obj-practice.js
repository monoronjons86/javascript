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

// function inchToFeat(inches){
//     const feet=inches/12;
//     return feet;

// }
// const dadaInches=144;
// const dadaFeat=inchToFeat(dadaInches);
// console.log(dadaFeat)


// function milesTokillometar(miles){
//     const killometar=miles*1.609;
//     return killometar;
// }

// var killo=2.4;
// var tortal=milesTokillometar(killo);
// console.log('tortal',tortal);

//IsEven practice
// function IsEven(number){
//     const remainder=number%2
//     // console.log(remainder);
//     if(remainder==0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const myNumber=IsEven(49);
// console.log(myNumber);
// const herNumber=IsEven(50);
// console.log(herNumber);

// function isLeeapYear(year){
//     const remainder=year%4;
//     if(remainder==0){
//         return true;
//     }
//     else{
//         return false;
//     }

// }
// const IsMyleepYear=isLeeapYear(1933);
// console.log('IsMyleepYear',IsMyleepYear);

// const herLeepYear=isLeeapYear(1960);
// console.log('herleepYear',herLeepYear);

// // array declare of  the function
// function getSum(numbers){
//     let sum=0;
//     for(let i=0;i<numbers.length;i++){
//         const index=i;
//         const element=numbers[index];
//         sum=sum+element;
//         console.log(index,element,sum);
//     }
//     return sum;
// }
// const MyNumber=[12,65,85,95,45,30,90];
// getSum(MyNumber);


// function getOddNumber(numbers){
//     const oddNumbers=[];
//     for(let i=0;i<numbers.length;i++){
//         const oddNumbers=[];
//         const index=i;
//         const element=numbers[index];
//         if(element%2 !==0){
//             console.log(index,element);
//             oddNumbers.push(element)
//         }
//     }
//     return oddNumbers;

// }
// const MyNumber=[10,15,20,25,30,35,40]
// const herNumber= getOddNumber(MyNumber);
// console.log(herNumber);
// function sumOfNumber(){
//     let sum=0;
//     for(let i=0;i<=Number;i++){
//         sum=sum+i
//         console.log(i,sum)
//     }
//     return sum;
// }

function multiplication(number){
      result=1;
    for(let i=1;i<=number;i++){
         result=result*i;
    }
    return result;
}
const result=multiplication(7);
console.log(result);
