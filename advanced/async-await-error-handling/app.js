function wait(ms = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

function makePizza(toppings = []) {
  return new Promise(function(resolve, reject) {
    // Reject if people try to add pineapple
    if (toppings.includes('pineapple')) {
      reject('Seriously? Get out!');
    }

    const amountOfTimeToBake = 500 + toppings.length * 200;
    // Wait 1 second for the pizza to cook.
    setTimeout(function() {
      // When you are ready, you can resolve this promise.
      resolve(`Here is your pizza with the toppings ${toppings.join(' ')}`);
    }, amountOfTimeToBake);
  });
}

// METHOD 1 Using TRY-CATCH
// async function go() {
//   try {
//     const pizza = await makePizza(['pineapple']);
//     console.log(pizza);
//   } catch (error) {
//     console.log(error);
//   }
// }

// METHOD 2, using Catch directly inline
// function handleError(error) {
//   return `Oops... There is an error of type "${error}"`;
// }

// async function go() {
//   const pizza = await makePizza(['pineapple']).catch(handleError);
//   console.log(pizza);
// }

// METHOD 3
// function handleError(error) {
//   console.log(error);
// }

// async function go() {
//   const pizza = await makePizza(['pineapple']);
//   console.log(pizza);
// }

// go()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(handleError);

// METHOD 4
function handleError(error) {
  console.log(error);
}

async function go() {
  const pizza = await makePizza(['pineapple']);
  console.log(pizza);
}

// // Catch the error at Runtime
// go()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(handleError);

// OR can also make a safe function with a High Order Function

function makeSafe(fn, errorHandler) {
  return function() {
    fn().catch(errorHandler);
  };
}

const safeGo = makeSafe(go, handleError);

safeGo();
