import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    let galleryItem = ` <div class="gallery__item">
  <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>
</div>`;
    return galleryItem;
  })
  .join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener("click", onGalleryImageClick);
let gallery = new SimpleLightbox(".gallery a");
gallery.options.captionDelay = 250;
gallery.options.captionsData = "alt";
function onGalleryImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}
