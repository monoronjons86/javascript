let serial=0;
document.getElementById('first-card').addEventListener('click',function(){
    serial=serial+1;
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
    serial=serial+1;
//   console.log(e.target.parentNode.parentNode.children[0].innerText);
  const pName=e.target.parentNode.parentNode.children[0].innerText;
  const pPrice=e.target.parentNode.parentNode.children[2].children[0].innerText;
  const pQuantity=e.target.parentNode.parentNode.children[3].children[0].innerText;
  
  const sumTotal=parseInt(pPrice)+parseInt(pQuantity);
  displayData(pName,pPrice,pQuantity,sumTotal);

});

document.getElementById('third-card').addEventListener('click',function(){
    serial=serial+1;
    //get the dat7a
    const productName=document.getElementById('third-title').innerText;
    const productPrice=document.getElementById('third-price').innerText;
    const productQuantity=document.getElementById('third-quantity').innerText;
    // console.log( productName, productPrice, productQuantity);

    const priceTotal=parseInt(productPrice)-parseInt(productQuantity) ;
    console.log(priceTotal);
    

     //show the data 
     displayData(productName,productPrice,productQuantity,priceTotal); 
});
























//common function to display data

function displayData(nameOfP,priceOfP,QuantityOfp,resultP){
    const container=document.getElementById('table-container')

    const tr=document.createElement("tr");
    tr.innerHTML=`
     <td>${serial}</td>
     <td>${nameOfP}</td>
     <td>${priceOfP}</td>
     <td>${QuantityOfp}</td>
     <td>${resultP}</td>
    `;
    container.appendChild(tr);
}

function displayData(productName,productPrice,productQuantity,priceTotal){
    const container=document.getElementById('table-container')

    const tr=document.createElement("tr");
    tr.innerHTML=`
     <td>${serial}</td>
     <td>${productName}</td>
     <td>${productPrice}</td>
     <td>${productQuantity}</td>
     <td>${priceTotal}</td>
    `;
    container.appendChild(tr);
}