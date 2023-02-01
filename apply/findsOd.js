function getSum(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        const index=i;
        const element=numbers[index]
        sum=sum+element;
        console.log(index,element,sum);
    }
      
}

const myNumber=[20,30,40,50,70,80]
getSum(myNumber);