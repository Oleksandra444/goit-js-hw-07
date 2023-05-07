import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const ulGallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

let modalInstance = null;

        
function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
     return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" width="320"/></a></li>`;
})
        .join('');
}

ulGallery.insertAdjacentHTML('beforeend', galleryMarkup);
ulGallery.addEventListener('click', onGalleryClick);


function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const largeImageURL = event.target.dataset.source;
    const largeImageAlt = event.target.alt;
    // console.log(largeImageURL);
    const instance = basicLightbox.create(
      `<img src="${largeImageURL}" alt="${largeImageAlt}" />`
    );
    modalInstance = instance;

    
    instance.show();

    document.addEventListener('keydown', onModalKeyDown);
}

function onModalKeyDown(event) {
  if (event.code === 'Escape') {
    
    modalInstance.close();
    
    document.removeEventListener('keydown', onModalKeyDown);
  }
}



  





