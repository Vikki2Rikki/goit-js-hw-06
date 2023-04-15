const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientItemContainerEl = document.querySelector('.js-ingredients-item');

const makeIngredientItem = ingredients => {
return ingredients.map(element => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.classList.add('item');
  ingredientItemEl.textContent = element;

  return ingredientItemEl;
});
}
const elements = makeIngredientItem(ingredients);
ingredientItemContainerEl.append(...elements);

