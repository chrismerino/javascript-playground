function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, ramdomNumber = Math.random()) {
  return ramdomNumber * (max - min) + min;
}

// Async for of loop
async function draw(element) {
  console.log(element);
  const text = element.textContent;
  let soFar = '';
  for (const letter of text) {
    console.log(letter);
    soFar += letter;
    element.textContent = soFar;

    // Wait for some amount of time
    const { typeMin, typeMax } = element.dataset;
    const amountToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountToWait);
  }
}

// Recursion

document.querySelectorAll('[data-type]').forEach(draw);
