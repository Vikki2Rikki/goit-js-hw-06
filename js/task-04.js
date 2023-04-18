
const refs = {
   decrimentButton : document.querySelector('[data-action="decrement"]'),
   incrementButton : document.querySelector('[data-action="increment"]'),
   counterValueLabele : document.querySelector('#value'),
}
let counterValue = 0;

refs.decrimentButton.addEventListener('click', onDecrimentNumber);

refs.incrementButton.addEventListener('click',onIncrementNumber);

function onDecrimentNumber(){
  counterValue -= 1;
  refs.counterValueLabele.textContent = counterValue;
}

function onIncrementNumber(){
   counterValue += 1;
  refs.counterValueLabele.textContent = counterValue;
 
};




