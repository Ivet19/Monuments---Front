import getHeader from "../Header/getHeader";
import getMonumentsList from "../../monument/components/MonumentsList/getMonumentsList";
import monuments from "../../monument/data/monuments";

const getApp = (): HTMLElement => {
  const App = document.createElement("div");
  App.classList.add("main-container");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-content-container");

  const Header = getHeader();

  const MonumentsList = getMonumentsList(monuments);

  mainContainer.appendChild(MonumentsList);

  App.append(Header, mainContainer);

  return App;
};

export default getApp;
