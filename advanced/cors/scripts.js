const baseUrl = 'http://www.recipepuppy.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('form.search');
const recipesElement = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const response = await fetch(`${proxy}${baseUrl}?q=${query}`);
  const data = await response.json();
  return data;
}

async function handleSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget;
  // Turn the form off
  formElement.submit.disabled = true;

  // submit the search
  const recipes = await fetchRecipes(form.query.value);
  formElement.submit.disabled = false;
  displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
  const html = recipes.map(
    recipe => `<div class="recipe">
      <h2>${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
    </div>`
  );
  recipesElement.innerHTML = html.join(' ');
}

form.addEventListener('submit', handleSubmit);

fetchRecipes('pizza');
