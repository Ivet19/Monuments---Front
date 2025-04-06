import "@fontsource/poiret-one/index.css";
import "./components/Header/Header.css";
import "./components/Form/Form.css";
import "./styles.css";
import getApp from "./components/App/getApp";

const rootElement = document.querySelector(".root");

if (!rootElement) {
  throw new Error("Root container is missing");
}

const App = getApp();

rootElement.appendChild(App);
