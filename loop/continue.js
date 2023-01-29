var numbers=[20,25,62,35,40,45,50,55,60,65,70,90,100,120,130]
for(var i=0;i<numbers.length;i++){
    var number=numbers[i];
    if(number>50){
        continue;
    }
    console.log(number);
}