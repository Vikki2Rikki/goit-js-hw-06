// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const refs = {
   decrimentButton : document.querySelector('[data-action="decrement"]'),
   incrementButton : document.querySelector('[data-action="increment"]'),
   counterValue : document.querySelector('#value'),
}
refs.decrimentButton.addEventListener('click', onDecrimentNumber);

refs.incrementButton.addEventListener('click',onIncrementNumber);

refs.counterValue.textContent = 0;

function onDecrimentNumber(){
  console.log("-");
   refs.counterValue -= 1;
   console.log(refs.counterValue);
};

function onIncrementNumber(event){
   console.log(event);
   refs.counterValue.textContent += 1;
   console.log(refs.counterValue);
  
};




