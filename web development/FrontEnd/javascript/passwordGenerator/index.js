const inputSlider = document.querySelector("[data-lengthslider]") ; // select input slider using cus
const lengthDisplay = document.querySelector("[data-lengthnumber]");
const passworddisplay = document.querySelector("[data-passworddisplay]");
const copybtn = document.querySelector("[data-copy]");
const copymsg = document.querySelector("[data-copymsg]")
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generatebtn = document.querySelector(".generate-Button");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");


 let password = "";
 let passwordlength = 10 ; 
 let checkCount = 0;
const symbols = "~!#$%^&*()_+:|<>,.[]\?;`";
handleSlider();

setIndicator("#ccc");

 //password length set
 function handleSlider(){
    inputSlider.value = passwordlength;
    lengthDisplay.innerText = passwordlength; 

    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordlength - min)*100/(max - min)) + "% 100%"
 }

 function setIndicator(color){
    indicator.style.backgroundColor = color;
    // indicator.style.shadow 
 }

function getRandomInteger(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomNumber(){
    return getRandomInteger(0,9);
}

function generateLowercase(){
    return String.fromCharCode(getRandomInteger(97,123));
}

function generateUppercase(){
    return String.fromCharCode(getRandomInteger(65,91));
}

function generateSymbol(){
    return symbols.charAt(getRandomInteger(0,symbols.length));
}


function clacStrLength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordlength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent()
{
  try
  {
    await navigator.clipboard.writeText(passworddisplay.value);
    copymsg.innerText = "copied";
  }
  catch(e)
  {
    copymsg.innerText = "Failed";
  }
  //copy wala span visible 
  copymsg.classList.add("active");

  setTimeout((function(){
    copymsg.classList.remove("active"); 
  }),2000);
} 

copybtn.addEventListener('click',()=>{
  if(passworddisplay.value)
  {
    copyContent();
  }
})

inputSlider.addEventListener('input',(e)=> {
  passwordlength = e.target.value;
  handleSlider();
})

function handleCheckBoxChange() {
  checkCount = 0;
  allCheckBox.forEach( (checkbox) => {
      if(checkbox.checked)
          checkCount++;
  });

  //special condition
  if(passwordlength < checkCount ) {
      passwordlength = checkCount;
      handleSlider();
  }
}

allCheckBox.forEach(function(checkbox){
  checkbox.addEventListener('change', handleCheckBoxChange);
})



function shufflePassword(array)
{
  // Fishers Yates Method
  for (let i = array.length - 1; i > 0; i--) {
    //random J, find out using random function
    const j = Math.floor(Math.random() * (i + 1));
    //swap number at i index and j index
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let str = "";
  array.forEach((el) => (str += el));
  return str;
}

generatebtn.addEventListener('click', () => {
  //none of checkBox is selected 
  if(checkCount <= 0)
  {
    return ; 
  }

  if(passwordlength < checkCount)
  {
    passwordlength = checkCount;
    handleSlider();
  }

  // lets start to find new password

  // remove old password
  password = ""; 

  // lets put the stuff mentioned by the checkBoxes
  // if(uppercaseCheck.checked)
  // {
  //   password += generateUppercase(); 
  // }

  // if(lowercaseCheck.checked)
  // {
  //   password += generateLowercase(); 
  // }

  // if(numbersCheck.checked)
  // {
  //   password += getRandomNumber(); 
  // }

  // if(symbolsCheck.checked)
  // {
  //   password += generateSymbol(); 
  // }



   let funcArray = [];
    
  if(uppercaseCheck.checked)
  {
    funcArray.push(generateUppercase);
  }

  if(lowercaseCheck.checked)
  {
    funcArray.push(generateLowercase);
  }

  if(numbersCheck.checked)
  {
    funcArray.push(getRandomNumber);
  }

  if(symbolsCheck.checked)
  {
    funcArray.push(generateSymbol);
  }

  //compusary addition 

  for(let i=0; i < funcArray.length; i++)
  {
    password += funcArray[i]();
  }

  //remaining addition

  for(let i=0; i < (passwordlength-funcArray.length); i++)
  {
    password += funcArray[getRandomInteger(0,funcArray.length)](); 
  } 

  // password shuffle

  password = shufflePassword(Array.from(password)) ;

  // display password in UI

  passworddisplay.value = password;

  //password strength

  clacStrLength(); 




  

  // // let's start the jouney to find new password
  // console.log("Starting the Journey");
  // //remove old password
  // password = "";


  // let funcArr = [];

  // if(uppercaseCheck.checked)
  //     funcArr.push(generateUppercase);

  // if(lowercaseCheck.checked)
  //     funcArr.push(generateLowercase);

  // if(numbersCheck.checked)
  //     funcArr.push(getRandomNumber);

  // if(symbolsCheck.checked)
  //     funcArr.push(generateSymbol);

  // //compulsory addition
  // for(let i=0; i<funcArr.length; i++) {
  //     password += funcArr[i]();
  // }
  // console.log("COmpulsory adddition done");

  // //remaining adddition
  // for(let i=0; i<passwordlength-funcArr.length; i++) {
  //     let randIndex = getRandomInteger(0 , funcArr.length);
  //     console.log("randIndex" + randIndex);
  //     password += funcArr[randIndex]();
  // }
  // console.log("Remaining adddition done");
  // //shuffle the password
  // password = shufflePassword(Array.from(password));
  // console.log("Shuffling done");
  // //show in UI
  // passworddisplay.value = password;
  // console.log("UI adddition done");
  // //calculate strength

})
