import "@fontsource/poiret-one/index.css";
import "./components/App/App.css";
import "./components/Header/Header.css";
import "./styles.css";
import getApp from "./components/App/getApp";
import getMonuments from "./client/getMonuments";

const rootElement = document.querySelector(".root");

if (!rootElement) {
  throw new Error("Root container is missing");
}

const App = getApp();

rootElement.appendChild(App);

getMonuments();
