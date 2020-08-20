const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const userElement = document.querySelector('.user');

const handleError = error => (userElement.textContent = error);

async function displayUser(username) {
  userElement.textContent = 'Loading...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  userElement.textContent = `${data.name} - ${data.company}`;
}

displayUser('chrismerino').catch(handleError);
