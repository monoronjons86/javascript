// 1 * 2 * 3 * 4 * 5 * 7

function factorial(numbers){
    let result=1;
    for(let i=1;i<=7;i++){
        result=result*i;
    }
    return result;

}
const result=factorial(7);
console.log(result);