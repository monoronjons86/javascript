// //using break for loop
// for(var i=0;i<=20;i++){
//     console.log(i);
//     if(i>10){
//         break;
//     }
// }

// //using break while loop
// var roastGiven=0;
// while(roastGiven<10){
//     console.log('Roast dan,give item anci');
//     roastGiven++;
//     if(roastGiven>4){
//         break;
//     }

// }

var items=['bottle','mouse','sunglass','pen','notebook'];
for(var i=0;i<items.length;i++){
    var item=items[i];
    if(item=='pen'){
        break;
    }
    console.log(item);
}


var numbers=[20,30,40,50,60,70,80,90,100,110,120,130];

for(var i=0;i<numbers.length;i++){
    var number=numbers[i];
    if(number>100){
        break;
    }
    console.log(number);
}