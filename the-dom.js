// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const heading = document.querySelector('h2');

// console.log(p);
// console.log(imgs);

// console.log(heading.textContent);
// heading.textContent = 'Chris';
// console.log(heading.textContent);

// Classes
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.toggle('round');

console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
