import getMonumentCard from "./getMonumentCard";
import { simpsonsHouse } from "../../data/fixtures";

describe("Given the MonumentCard component", () => {
  describe("When it renders Simpson's house", () => {
    test("Then it should show 'Simpson's house' inside a heading", () => {
      const screen = document.createElement("div");
      const expectedMonumentName = "Simpson's house";

      const MonumentCard = getMonumentCard(simpsonsHouse);

      screen.appendChild(MonumentCard);

      const monumentName = screen.querySelector("h2");

      expect(monumentName).not.toBeNull();
      expect(monumentName?.textContent).toBe(expectedMonumentName);
    });
  });
});
