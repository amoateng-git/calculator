let display = document.getElementById('display');
function input(val) {
    if(display.innerText==='0'){
        display.innerText = val;
    }
    else{
        display.innerText += val;
    }
}
function clearDisplay() {
    display.innerText= '0';
}
function toggleSign() {
    let value = parseFloat(display.innerText);
    if(!isNaN(value)){
        display.innerText = (value * -1).toString();
    }
}
function calculate() {
    try{
         display.innerText = eval(display.innerText.replace('%','/100'));
    } 
    catch(e){
        display.innerText ='Error';
    }
    
}