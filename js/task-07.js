
const input = document.querySelector('#font-size-control');
const nameLabel = document.querySelector('#text');

input.value = input.getAttribute('min');

input.addEventListener('input', onChangeValue);

function onChangeValue(event){
nameLabel.style.fontSize = event.currentTarget.value + 'px';
}
