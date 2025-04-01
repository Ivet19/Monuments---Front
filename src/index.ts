import getApp from "./components/App/getApp";

const rootElement = document.querySelector(".root");

if (!rootElement) {
  throw new Error("Root container is missing");
}

const App = getApp();

rootElement.appendChild(App);
