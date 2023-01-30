/*function functionName(parametars){
    //function body
    //return
}
functionName(parametars value);*/ 

function getAverage(assignment1,assignment2,assignment3){
    const total=assignment1+assignment2+assignment3;
    const Average=total/3;
    return Average;
}

const assignment1Marks=60;
const assignment2Marks=58;
const assignment3Marks=59;

var MyAverage=getAverage(assignment1Marks,assignment2Marks,assignment3Marks)

console.log('MyAverage is so fair', MyAverage)