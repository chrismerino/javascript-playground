const terms = document.querySelector('.terms-and-conditions');
const watchForMe = document.querySelector('.watch');
const button = document.querySelector('.accept');

function observerCallback(payload) {
  console.log(payload[0].intersectionRatio);
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;

    // Stop observing the button
    observer.unobserve(terms.lastElementChild);
  }
}

const observer = new IntersectionObserver(observerCallback, {
  root: terms,
  threshold: 1,
});

observer.observe(terms.lastElementChild);

// terms.addEventListener('scroll', function(event) {
//   console.log(event.currentTarget.scrollTop);
//   console.log(event.currentTarget.scrollHeight);
// });
