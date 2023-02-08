// const numbers=[45,65,23,98,19];
// // for(let i=0;i<numbers.length;i++){
// //     const number=numbers[i];
// //     console.log(number);
// // }

// for(const number of numbers){
//     console.log(number);
// }

const products=[
    {id:1,name:'walton phone', price:1900},
    {id:1,name:'xiami phone one night', price:1300},
    {id:1,name:'iphone phone', price:10000},
    {id:1,name:'lenovo yoga laptop', price:60000},
    {id:1,name:'Dell laptop', price:46000},
    {id:1,name:'Samsung phone', price:18000},
    {id:1,name:'Asus laptop', price:45000}
]

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products,search){
    const matched=[];
    for(const product of products){
       if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product)
       }
    }
    return matched;
}
const result=matchedProducts(products,'phone');
console.log(result);
