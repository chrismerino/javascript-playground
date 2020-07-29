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
  // The other way is this
  console.log(event.currentTarget.querySelector('[name="email"]'));

  // This is one way
  // console.log(event.currentTarget.name.value);
  // console.log(event.currentTarget.email.value);
  // console.log(event.currentTarget.agree.checked);

  const name = event.currentTarget.name.value;
  if (name.includes('Chris')) {
    alert('Sorry bro');
    event.preventDefault();
  }
});

function logEvents(event) {
  console.log(event.type);
  // console.log(event.currentTarget.value); Google this later!
  console.log(event.target.value);
}

signUpForm.addEventListener('keyup', logEvents);

// Accesibility to make sure people don't get confused!

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You clicked the photo!');
  }
}

const photo = document.querySelector('.photo');
photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
