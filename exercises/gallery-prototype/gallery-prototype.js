function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery found!');
  }

  this.gallery = gallery;

  // Select the elements needed
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  // Bind out methods to the instance when we need them
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  // These are our event listeners
  this.images.forEach(image =>
    image.addEventListener('click', event =>
      this.showImage(event.currentTarget)
    )
  );

  // Loop over each image
  this.images.forEach(image => {
    // Attach an event listener to each one
    image.addEventListener('keyup', event => {
      // When is a keyUp'd, check if it was Enter
      if (event.key === 'Enter') {
        // If it was, show that image
        this.showImage(event.currentTarget);
      }
    });
  });

  this.modal.addEventListener('click', this.handleClickOutside);
}

Gallery.prototype.openModal = function() {
  console.info('Opening Modal...');
  // First check if the modal is already open
  if (this.modal.matches('.open')) {
    console.info('Madal already open');
    return; // stop the function from running
  }
  this.modal.classList.add('open');

  // Event listeners to be bound when we open the modal:
  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPrevImage);
};

Gallery.prototype.closeModal = function() {
  this.modal.classList.remove('open');
  // todo: add event listeners for clicks and keyboard
  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPrevImage);
};

Gallery.prototype.handleClickOutside = function(event) {
  if (event.target === event.currentTarget) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyUp = function(event) {
  if (event.key === 'Escape') return this.closeModal();
  if (event.key === 'ArrowRight') return this.showNextImage();
  if (event.key === 'ArrowLeft') return this.showPrevImage();
};

Gallery.prototype.showNextImage = function(event) {
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
  );
};

Gallery.prototype.showPrevImage = function(event) {
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild
  );
};

Gallery.prototype.showImage = function(imageElement) {
  console.log(imageElement);
  if (!imageElement) {
    console.info('no image to show');
    return;
  }

  // update this modal with the info
  this.modal.querySelector('img').src = imageElement.src;
  this.modal.querySelector('h2').textContent = imageElement.title;
  this.modal.querySelector('figure p').textContent =
    imageElement.dataset.description;
  this.currentImage = imageElement;
  this.openModal();
};

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
