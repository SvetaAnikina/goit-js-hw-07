import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    let galleryItem = ` <div class="gallery__item">
  <a class="gallery__link" href=${original}">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
    return galleryItem;
  })
  .join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = galleryMarkup;
galleryEl.addEventListener("click", onGalleryImageClick);

function onGalleryImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src = ${event.target.dataset.source}>`
  );

  instance.show();
  document.addEventListener("keydown", (event) => {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  });
}
