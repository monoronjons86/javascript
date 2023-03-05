document.getElementById('first-card').addEventListener('click',function(){
    //get the dat7a
    const productName=document.getElementById('first-name').innerText;
    const productPrice=document.getElementById('first-price').innerText;
    const productQuantity=document.getElementById('first-quantity').innerText;
    console.log( productName, productPrice, productQuantity);

    const priceTotal=parseInt(productPrice) *parseInt(productQuantity) ;
    console.log(priceTotal);
    

     //show the data 
     displayData(productName,productPrice,productQuantity,priceTotal);

    
   
});
//using even object form browser
document.getElementById('second-card').addEventListener('click',function(e){
  console.log(e.target.);

});


//common function to display data
function displayData(productName,productPrice,productQuantity,priceTotal){
    const container=document.getElementById('table-container')

    const tr=document.createElement("tr");
    tr.innerHTML=`
     <td>${1}</td>
     <td>${productName}</td>
     <td>${productPrice}</td>
     <td>${productQuantity}</td>
     <td>${priceTotal}</td>
    `;
    container.appendChild(tr);
}