function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery found!');
  }

  // Select the elements needed
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    // First check if the modal is already openModal
    if (modal.matches('.open')) {
      console.info('modal already opened');
      return;
    }

    modal.classList.add('open');

    // Event listeners to be bound when we open the modal:
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    // todo: add event listeners for clicks and keyboard
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function handleClickOutside(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') return closeModal();
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
  }

  function showNextImage(event) {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage(event) {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(imageElement) {
    console.log(imageElement);
    if (!imageElement) {
      console.info('no image to show');
      return;
    }

    // update this modal with the info
    modal.querySelector('img').src = imageElement.src;
    modal.querySelector('h2').textContent = imageElement.title;
    modal.querySelector('figure p').textContent =
      imageElement.dataset.description;
    currentImage = imageElement;
    openModal();
  }

  // These are our event listeners
  images.forEach(image =>
    image.addEventListener('click', event => showImage(event.currentTarget))
  );

  // Loop over each image
  images.forEach(image => {
    // Attach an event listener to each one
    image.addEventListener('keyup', event => {
      // When is a keyUp'd, check if it was Enter
      if (event.key === 'Enter') {
        // If it was, show that image
        showImage(event.currentTarget);
      }
    });
  });

  modal.addEventListener('click', handleClickOutside);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
