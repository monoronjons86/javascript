document.getElementById('first-card').addEventListener('click',function(){
    //get the dat7a
    const productName=document.getElementById('first-name').innerText;
    const productPrice=document.getElementById('first-price').innerText;
    const productQuantity=document.getElementById('first-quantity').innerText;
    console.log(typeof productName, typeof productPrice,typeof   productQuantity);

    const priceTotal=parseInt(productPrice) *parseInt(productQuantity) ;
    console.log(priceTotal);



    const container=document.getElementById('table-container')


     //show the data 
    const tr=document.createElement("tr");
    tr.innerHTML=`
     <td>${1}</td>
     <td>${productName}</td>
     <td>${productPrice}</td>
     <td>${productQuantity}</td>
     <td>${priceTotal}</td>


    
    `;
    container.appendChild(tr);
    
   
});