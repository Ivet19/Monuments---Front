import getMonumentCard from "../MonumentCard/getMonumentCard";
import Monument from "../../types";

const getMonumentsList = (monuments: Monument[]): HTMLElement => {
  const monumentsListElement = document.createElement("ul");
  monumentsListElement.classList.add("monuments");

  monuments.forEach((monument) => {
    const monumentWrapper = document.createElement("li");

    const MonumentCard = getMonumentCard(monument);
    monumentWrapper.appendChild(MonumentCard);

    monumentsListElement.appendChild(monumentWrapper);
  });

  return monumentsListElement;
};

export default getMonumentsList;
