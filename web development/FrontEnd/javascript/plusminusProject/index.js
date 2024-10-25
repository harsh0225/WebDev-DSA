const  countValue = document.querySelector('#counter');

function decrement(){
    //get the value from UI
    let value = parseInt(countValue.innerText)
    //update the value
    value = value - 1;
    //set the updated value onto UI 
    countValue.innerText = value;
}


function increment(){
    //get the value from UI
    let value = parseInt(countValue.innerText);
    //update the value
    value = value + 1;
    //set the updated value onto UI 
    countValue.innerText = value;
}




