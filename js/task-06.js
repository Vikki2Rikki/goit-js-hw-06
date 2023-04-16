// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('input', onInputChange);
inputEl.addEventListener('blur', onCountSimbol);

// inputEl.getAttribute('data-length');
// console.log(inputEl.getAttribute('data-length'));

function onInputChange(event){
   console.log(event.currentTarget.value.length);;
}
function onCountSimbol(event){
   console.log(event);
   if(event.currentTarget.value.length === inputEl.getAttribute('data-length')){
      inputEl.classList.add('valid');
   };
   inputEl.classList.add('invalid');
   }

// function onCountSimbol(){
// if(inputEl[data-length] === 6){
//    inputEl.classList.add('valid');
// };
// inputEl.classList.add('invalid');
// }
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }