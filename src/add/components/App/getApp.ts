import getNewMonumentForm from "../Form/getForm";
import getHeader from "../Header/getHeader";

const getApp = (): HTMLElement => {
  const App = document.createElement("div");
  App.classList.add("main-container");

  const Header = getHeader();
  const Form = getNewMonumentForm();

  App.append(Header, Form);

  return App;
};

export default getApp;
