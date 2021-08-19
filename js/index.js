// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
  btn_pepperoni: true,
  btn_mushrooms: true,
  btn_greenPeppers: true,
  btn_whiteSauce: false,
  btn_glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if(state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if(state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceElement = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauceElement.classList.add('sauce-white');
  } else {
    sauceElement.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustElement = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crustElement.classList.add('crust-gluten-free');
  } else {
    crustElement.classList.remove('crust-gluten-free');
  }
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // selecting all buttons
  const pepperoniBtnElement = document.querySelector('.btn-pepperoni');
  const mushroomsBtnElement = document.querySelector('.btn-mushrooms');
  const greenPepperBtnElement = document.querySelector('.btn-green-peppers');
  const sauceBtnElement = document.querySelector('.btn-sauce');
  const crustBtnElement = document.querySelector('.btn-crust');

  // toggling the correct btn for PEPPERONI
  if (state.btn_pepperoni) {
    pepperoniBtnElement.classList.add('active');
  } else {
    pepperoniBtnElement.classList.remove('active');
  }
  
  // toggling the correct btn for MUSHROOMS
  if (state.btn_mushrooms) {
    mushroomsBtnElement.classList.add('active');
  } else {
    mushroomsBtnElement.classList.remove('active');
  }

  // toggling the correct btn for GREEN PEPPERS
  if (state.btn_greenPeppers) {
    greenPepperBtnElement.classList.add('active');
  } else {
    greenPepperBtnElement.classList.remove('active');
  }

  // toggling the correct btn for WHITE SAUCE
  if (state.btn_whiteSauce) {
    sauceBtnElement.classList.add('active');
  } else {
    sauceBtnElement.classList.remove('active');
  }

  // toggling the correct btn for CRUST
  if (state.btn_glutenFreeCrust) {
    crustBtnElement.classList.add('active');
  } else {
    crustBtnElement.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  
  // toggling the price for PEPPERONI
  if (state.btn_pepperoni) {
    pepperoniBtnElement.classList.add('active');
  } else {
    pepperoniBtnElement.classList.remove('active');
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  state.btn_pepperoni = !state.btn_pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  state.btn_mushrooms = !state.btn_mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  state.btn_greenPeppers = !state.btn_greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  state.btn_whiteSauce = !state.btn_whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  state.btn_glutenFreeCrust = !state.btn_glutenFreeCrust;
  renderEverything();
});
