import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galSel = document.querySelector(".gallery");

const imagesMap = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item gallery__link" href="${original}"><img class="gallery__image" src=${preview} data-source=${original} alt="${description}" title="${description}"></img></a>`
  )
  .join("");

galSel.insertAdjacentHTML("beforeend", imagesMap);

const gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
  gallery.defaultOptions.captionDelay = 250;
});
