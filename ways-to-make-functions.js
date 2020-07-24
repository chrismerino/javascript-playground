// Anonymous Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

/* // Function Expression
function inchToCM(inches) {
  return inches * 2.54;
} */

/* // Anonymous Function
const inchToCM = function(inches) {
  return inches * 2.54;
}; */

// Arrow Function
// const inchToCM = inches => inches * 2.54;

// Another example of Arrow Functions!
// const add = (a, b = 3) => a + b;

/* function makeABaby(firstName, lastName) {
  const baby = {
    name: `${firstName} ${lastName}`,
    age: 0,
  };
  return baby;
} */

/* const makeABaby = (firstName, lastName) => ({
  name: `${firstName} ${lastName}`,
  age: 0,
}); */

// IIFE
// Inmediately Invoked Function Expression
/* (function(age) {
  return `You are cool and age ${age}`;
})(10); */

// Methods!
// Methods are functions that live inside of an object

const chris = {
  name: 'Chris Merino',
  // Method!
  sayHi() {
    console.log('Hey Chris');
    return 'Hey Chris';
  },
  // Short Hand Method!
  yellHi() {
    console.log('Hey Chris');
  },
  // Arrow Function -- Arrow Functions take the scope of the parent
  wisperHi: () => console.log('Hii Chris, Im a mouse'),
};

// Callback Functions
// Click Callback
const button = document.querySelector('.clickMe');
console.log(button);

function handleClick() {
  console.log('Great Clicking!');
}

button.addEventListener('click', handleClick);
