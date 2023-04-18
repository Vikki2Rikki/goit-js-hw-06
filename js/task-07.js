
// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const input = document.querySelector('#font-size-control');
const nameLabel = document.querySelector('#text');


console.dir(input);
console.log(nameLabel);

const rangeValue = input.getAttribute('type');
console.log(rangeValue);

input.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event){
   console.log(event);
}