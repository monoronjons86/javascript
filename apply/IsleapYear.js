// function isLeapYear(year){
//     const remainder=year%4;
//     if(remainder===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const myLeapYear= isLeapYear(2002);
// console.log('my year',myLeapYear);

function IsLeapYear(year){
    const remainder=year%4;
    if(remainder===0){
        return true;
    }
    else{
        return false;
    }
}
const myYear=IsLeapYear(2004);
console.log('my year:',myYear);
const herYear=IsLeapYear(2005);
console.log('her year:',herYear);