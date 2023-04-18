
let amount = 0;

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onCountSimbol);
inputEl.addEventListener('input', onCountSimbol);

function onCountSimbol(event){
const string = event.currentTarget.value;
amount = string.length;
   if(amount !== 6){
    inputEl.classList.add('invalid');
   } else {
   inputEl.classList.replace('invalid','valid');
   }

   }

