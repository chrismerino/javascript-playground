const myDate = new Date('August 11, 2025');
console.dir(myDate);

const names = ['chris', `middle`, 'name'];

// Dates don't have literal syntax

function Pizza(toppings = [], customer) {
  console.log('Making a Pizza');

  // Save the toppings that were passed in to this instance of Pizza
  this.toppings = toppings;
  this.customer = customer;
  this.id = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const pepperoniPizza = new Pizza(['pepperoni'], 'Chris');
const italianPizza = new Pizza(['pepperoni', 'mushrooms', 'onion'], 'Lucy');

const button1 = document.querySelector('.one');
const button2 = document.querySelector('.two');

// This Keyword
// function tellMeAboutTheButton() {
//   console.log('outside', this);
//   setTimeout(() => {
//     // This in an arrow function inherits the upper scope value.
//     console.log('inside', this);
//     this.textContent = 'You Clicked Me';
//   }, 1000);
// }

// button1.addEventListener('click', tellMeAboutTheButton);
// button2.addEventListener('click', tellMeAboutTheButton);
