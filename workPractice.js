// var MyFriend=['abul','kobul','babul','dabul','korim']
// MyFriend[3]='topul';
// console.log(MyFriend);

// var mytk=90000
// var mac=800000;
// var gamLaptop=6000;
// var lenvo=4000;
// var laptop=2000;
// if(mytk>mac){
//     console.log('mac kinmu')
// }
// else if(mytk<gamLaptop){
// console.log('gamlaptop kinmu')
// }
// else if(mytk<lenvo){
//     console.log('lenvo kinbo')
// }
// else if(mytk<laptop){
//     console.log('laptop kinbo')
// }
// else{
//     console.log('mobile a code kore chalamu')
// }


// for(var i=1;i<=39;i++){
//     console.log('aj amar mon vlo nai')
// }
function findingBadData(number){
    let count =0 ;
    for(let i = 0; i <= number.length; i++){
      const element = number[i];
      if(element < 0) count++;
    }
    return count;
  }
  let totaldata = findingBadData([ -4, -9, -5, -33, -55,]);
  console.log(totaldata);