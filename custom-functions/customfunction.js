// Function definition
function calculateBill(billAmmount, taxRate = 0.13, tipRate = 0.15) {
  return billAmmount + billAmmount * taxRate + billAmmount * tipRate;
}
