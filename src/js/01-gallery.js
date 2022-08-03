import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'simplelightbox/dist/simple-lightbox.min.js';
console.dir(SimpleLightbox);

// Add imports above this line
import { galleryItems } from './gallery-items';
console.log(galleryItems);
// Change code below this line

const gallery = document.querySelector('.gallery');

const markupGalary = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`,
  ''
);
gallery.innerHTML = markupGalary;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(lightbox);

// const markupGalary = galleryItems.reduce(
//   (acc, { preview, original, description }) =>
//     acc +
//     `<div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//             <img
//                 class="gallery__image"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}"
//             />
//         </a>
//     </div>`,
//   ''
// );
// gallery.innerHTML = markupGalary;

// gallery.addEventListener('click', onImageClick);

// function onImageClick(e) {
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }
//   e.preventDefault();
//   onOpenModal(e);
// }

// function onOpenModal(e) {
//   const instance = basicLightbox.create(`
//     <img src="${e.target.dataset.source}" width="1280" height="960">
// `);
//   instance.show();
//   addEventListener('keydown', onEscapePress);

//   function onEscapePress(e) {
//     const ESC_KEY_CODE = 'Escape';
//     const isEscape = e.code === ESC_KEY_CODE;

//     if (isEscape) {
//       instance.close();
//     }
//   }
// }
