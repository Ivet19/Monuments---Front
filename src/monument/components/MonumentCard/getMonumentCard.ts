import "./MonumentCard.css";
import Monument from "../../types";

const getMonumentCard = (monument: Monument): HTMLElement => {
  const monumentCard = document.createElement("article");
  monumentCard.classList.add("monument");

  monumentCard.innerHTML = `
  <h2 class="monument__name">${monument.name}</h2>
  <div class="monument__info">
    <img class"monument__image" src="${monument.imageUrl}" width="280px" alt="general view of the ${monument.name} monument">
    <p class="monument__description">${monument.description}</p>
    <p class="monument__location">${monument.city}, ${monument.country}</p>
  </div>
  `;

  return monumentCard;
};

export default getMonumentCard;
