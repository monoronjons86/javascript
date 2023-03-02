function getPin(){
    const pin=generatePin();
    const pinString=pin+'';
    if(pinString.length===4)
    {
        return pin;
    }
    else{
        console.log('pin not 3 digit',pin)
        return getPin();
    }
}
function generatePin(){
    const random=Math.round(Math.random()*10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click',function(){
    const pin=getPin();
    const displayPinField=document.getElementById('display-pin');
    displayPinField.value =pin;
});

document.getElementById('calculator').addEventListener('click',function(event){
    const Number=event.target.innerText;
    const typedNumberField=document.getElementById('typed-numbers');
    if(isNaN(Number)){
        if(Number==='c'){
            typedNumberField.value=' ';
        }
    }
    else{
        const previousTypedNumber=typedNumberField.value;
        const newTypedNumber=previousTypedNumber + Number;
        typedNumberField.value=newTypedNumber;
    }

});
  
