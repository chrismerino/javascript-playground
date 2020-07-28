console.log('it works');
const item = document.querySelector('.item');

const imgWidth = '500x500';
const imgSrc = `https://source.unsplash.com/random/${imgWidth}`;
const imgDesc = `Cute <img onload="alert('Hacked')" src="https://source.unsplash.com/random/100x100" />`;

const myHTML = `
<div class="wrapper2">
  <h2>Cute ${imgDesc}</h2>
  <img src="${imgSrc}" alt="${imgDesc}"/>
</div>
`;

const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
