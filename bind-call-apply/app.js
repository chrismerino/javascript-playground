const person = {
  name: 'Chris Merino',
  sayHi() {
    return `Hey ${this.name}`;
  },
};

const jenna = {
  name: 'Jenna',
};

// const sayHi = person.sayHi.bind(person);
const sayHi = person.sayHi.bind(jenna);

// Query Selector Example
// By calling bind against querySelector,
// we need to say when the $ function is run,
// use 'document' as the 'this' value.
const $ = document.querySelector.bind(document);
const wrapper = document.querySelector('.wrapper');
const p = wrapper.querySelector('p');

const bill = {
  total: 1000,
  calculate(taxRate) {
    console.log(this);
    return this.total + this.total * taxRate;
  },
  describe(mealType, drinkType)
};

const total = bill.calculate(0.13);
console.log(total);
const calc = bill.calculate.bind({ total: 500 });
console.log(calc(0.13));

// Bind -> initial bind
// Call -> Binds and runs, same is apply.