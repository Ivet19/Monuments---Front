import Monument from "../../types";

const getMonumentCard = (monument: Monument): HTMLElement => {
  const monumentCard = document.createElement("article");
  monumentCard.classList.add("monument");

  monumentCard.innerHTML = `
  <div class="monument__info">
    <h2 class="monument__name">${monument.name}</h2>
  </div>
  `;

  return monumentCard;
};

export default getMonumentCard;
