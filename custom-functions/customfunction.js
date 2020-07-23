// Function definition
function calculateBill(billAmmount, taxRate) {
  // this is a function body
  console.log('Running Calculate Bill!!');
  const total = billAmmount * (1 + taxRate);
  console.log(total);
  return total;
}

const totalReturned = calculateBill(100, 0.13);
const totalReturned2 = calculateBill(200, 0.13);
console.log(`Your total is $${totalReturned}, and total2 is ${totalReturned2}`);
