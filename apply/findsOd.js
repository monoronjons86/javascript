function getSum(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        const index=i;
        const element=numbers[index]
        sum=sum+element;
        // console.log(index,element,sum);
    }
      
}

function getOddNumbersofAnArray(numbers){
    const ooddNumbers=[];
    for(let i=0;i<numbers.length; i++){
        const index=i;
        const element=numbers[index];
        if(element%2!==0){
            console.log(index,element);
            ooddNumbers.push(element);
        }
       
    }
    return ooddNumbers;

}

const myNumber=[20,30,40,50,70,80,85,75];
 const oddNumbers=getOddNumbersofAnArray(myNumber);
 console.log(oddNumbers);
getSum(myNumber);