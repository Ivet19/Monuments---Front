import getHeader from "../Header/getHeader";

const getApp = (): HTMLElement => {
  const App = document.createElement("div");
  App.classList.add("main-container");

  const Header = getHeader();

  App.appendChild(Header);

  return App;
};

export default getApp;
