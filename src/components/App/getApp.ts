import getHeader from "../Header/getHeader";
import getMonumentsList from "../../monument/components/MonumentsList/getMonumentsList";
import monuments from "../../monument/data/monuments";

const getApp = (): HTMLElement => {
  const App = document.createElement("div");
  App.classList.add("main-container");

  const Header = getHeader();

  const MonumentsList = getMonumentsList(monuments);

  App.append(Header, MonumentsList);

  return App;
};

export default getApp;
