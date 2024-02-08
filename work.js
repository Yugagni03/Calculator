let display= document.querySelector(".display");
let buttons= document.querySelectorAll("button");
let screenVal= "";
for(items of buttons){

items.addEventListener("click",(e)=>{
    buttonText= e.target.innerText;
    console.log(buttonText);

    if(buttonText== 'X'){
        buttonText = '*';
        screenVal += buttonText;
        display.value = screenVal;
    }
    else if(buttonText== 'AC'){
        screenVal= "";
        display.value= screenVal;

    }
    else if(buttonText== '='){
        display.value= eval(screenVal);
    }
    else if(buttonText== 'DEL'){
        display.value= display.value.toString().slice(0 , -1);
    }
    else{
        screenVal += buttonText;
        display.value = screenVal;
    }
}) 

}

