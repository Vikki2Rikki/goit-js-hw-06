function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorLabel = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener('click', onChangeBackgroundColorPage);

function onChangeBackgroundColorPage(event){
  document.body.style.backgroundColor = getRandomHexColor();
//console.log(document.body.style.backgroundColor);
 colorLabel.textContent = document.body.style.backgroundColor;
}


