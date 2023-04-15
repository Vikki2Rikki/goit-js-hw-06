
const refs = {
   input: document.querySelector('input#name-input'),
   nameLable: document.querySelector('span#name-output'),
};

refs.input.addEventListener('input', onInputValue);

function onInputValue(event){
refs.nameLable.textContent = event.currentTarget.value;
};