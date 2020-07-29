const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  event.preventDefault();
  const shouldChangePage = confirm(
    'This website might be malicious!, do you wish to proceed?'
  );

  if (!shouldChangePage) {
    event.preventDefault();
  }

  console.log(shouldChangePage);
});

// This is a good way to gather info from a form input
const signUpForm = document.querySelector('[name="signup"]');
signUpForm.addEventListener('submit', function(event) {
  console.log(event.currentTarget.name);
  console.log(event.currentTarget.email);
  event.preventDefault();
});
