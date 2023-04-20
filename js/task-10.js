function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.


const controlsEl = document.querySelector('#controls');
const inputEl = document.querySelector('input[type="number"]')
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContanerEl = document.querySelector('#boxes');

let amount;

// const newBox = document.createElement('div');
// newBox.style.width = '30px';
// newBox.style.height = '30px';
// newBox.style.backgroundColor = getRandomHexColor();
// boxesContanerEl.append(newBox);

inputEl.addEventListener('input', onInputAmount);
createBtn.addEventListener('click', onCreateBoxes);
destroyBtn.addEventListener('click', onDestroyBoxes);

function onInputAmount(){
  amount = inputEl.value;
return console.log(amount);;
};

function onCreateBoxes(){
  for (let index = 0; index < amount; index++) {
    //const element = array[index];
    const newBox = document.createElement('div');
newBox.style.width = '30px';
newBox.style.height = '30px';
newBox.style.backgroundColor = getRandomHexColor();
boxesContanerEl.append(newBox);  
  }
}

function onDestroyBoxes(){
  boxesContanerEl.remove(newBox);
}

// createBtn.addEventListener('click',createBoxes);

// function createBoxes(onInputAmount){
// for (let index = 0; index <= amount ; index++) {
//   const element = array[index];
//   console.log(onInputAmount());
// }
// }




// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
