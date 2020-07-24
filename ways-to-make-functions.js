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
const inchToCM = inches => inches * 2.54;

// Another example of Arrow Functions!
const add = (a, b = 3) => a + b;
