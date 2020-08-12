function buzzer() {
  console.log('completed!');
}

// setTimeout(buzzer, 500);

// setInterval(buzzer, 500);

function setInmediateInteval(functionToRun, ms) {
  // Right away call that function
  functionToRun();
  // Run a regular interval
  return setInterval(functionToRun, ms);
}

// setInmediateInteval(buzzer, 1000);

function destroy() {
  document.body.innerHTML = `
    <h1 class="display-1 text-center">DESTROYED!</h1>
  `;
}

const bombTimer = setTimeout(destroy, 2000);

window.addEventListener('click', function() {
  document.body.innerHTML = `
    <h1 class="display-1 text-center">YOU SAVED THE WORLD!</h1>
  `;

  clearTimeout(bombTimer);
});
