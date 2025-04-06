import { sagradaFamilia, simpsonsHouse } from "../../data/fixtures";
import getMonumentsList from "./getMonumentsList";

describe("Given the getMonumentsList component and Simpson's house and Sagrada Familia", () => {
  describe("When it renders", () => {
    test("Then it should show the names 'Simpson's house' and 'Sagrada Familia' inside a heading", () => {
      const monuments = [simpsonsHouse, sagradaFamilia];

      const screen = document.createElement("div");
      const MonumentsList = getMonumentsList(monuments);

      screen.appendChild(MonumentsList);

      const monumentNames = screen.querySelectorAll("h2");

      monumentNames.forEach((monumentName, position) => {
        expect(monumentName.textContent).toBe(monuments[position].name);
      });
    });
  });
});
