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
//   console.log(e.target.parentNode.parentNode.children[0].innerText);
  const pName=e.target.parentNode.parentNode.children[0].innerText;
  const pPrice=e.target.parentNode.parentNode.children[2].children[0].innerText;
  const pQuantity=e.target.parentNode.parentNode.children[3].children[0].innerText;
  
  const sumTotal=parseInt(productPrice)+parseInt(productQuantity);
  console.log(sumTotal);

});


//common function to display data
function displayData(pName,pPrice,pQuantity,sumTotal){
    const container=document.getElementById('table-container')

    const tr=document.createElement("tr");
    tr.innerHTML=`
     <td>${1}</td>
     <td>${pName}</td>
     <td>${pPrice}</td>
     <td>${pQuantity}</td>
     <td>${sumTotal}</td>
    `;
    container.appendChild(tr);
}

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