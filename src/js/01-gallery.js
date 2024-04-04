// Add imports above this line
import simpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(images){
return images.map(({preview, original, description})=>
`<li class = 'gallery__items'>
  <a class = 'gallery__link' href="${original}">
    <img class = 'gallery__image'
    src="${preview}" 
    data-source = '${original}'
    alt="${description}"/>
  </a>
</li>`
).join('')
}
// Додаю розмітку в DOM
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup)

new simpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250
 })
console.log(galleryItems);
