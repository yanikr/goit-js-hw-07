import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);
const galSel = document.querySelector(".gallery");

galSel.classList.add("gallery__item");

const imagesMap = galleryItems
  .map(
    (technology) =>
      `<a class="gallery__link" href="${technology.original}"><img class="gallery__image" src=${technology.preview} data-source=${technology.original} alt="${technology.description}"></img></a>`
  )
  .join("");

galSel.insertAdjacentHTML("beforeend", imagesMap);

galSel.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instanceCreate = basicLightbox.create(
    `<img src="${evt.target.closest("img").dataset.source}">`
  );

  instanceCreate.show();
  document.addEventListener("keydown", (evt) => {
    const visible = basicLightbox.visible();
    if (visible === false) {
      return;
    }
    if (evt.code === "Escape") {
      instanceCreate.close();
    }
  });
});
