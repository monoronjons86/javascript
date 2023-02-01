// console.log(4/2);
// console.log(98/2);
// console.log(144/2);
// console.log(1286/2);

// console.log(7/2);
// console.log(83/2);
// console.log(145/2);
// console.log(1287/2);

// console.log(4%2);
// console.log(98%2);
// console.log(144%2);
// console.log(1286%2);

function iseven(number){
    const remainder=number%2;
    // console.log(remainder);
    if(remainder===0){
        // console.log('number is even')
        return true;
    }
    else{
        // console.log('number is odd')
        return false;
    }

}
const myNumberIsEven=iseven(303);
console.log(myNumberIsEven);
iseven(300);
