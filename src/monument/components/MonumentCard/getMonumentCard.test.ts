import getMonumentCard from "./getMonumentCard";
import { sagradaFamilia } from "../../data/fixtures";

const screen = document.createElement("div");
beforeEach(() => {
  screen.innerHTML = "";
});

describe("Given the MonumentCard component", () => {
  describe("When it renders Simpson's house", () => {
    test("Then it should show 'Simpson's house' inside a heading", () => {
      const expectedMonumentName = "Sagrada Familia";

      const MonumentCard = getMonumentCard(sagradaFamilia);

      screen.appendChild(MonumentCard);

      const actualMonumentName = screen.querySelector("h2");

      expect(actualMonumentName).not.toBeNull();
      expect(actualMonumentName?.textContent).toBe(expectedMonumentName);
    });

    test("Then it should show an image of the Sagrada Familia", () => {
      const expectedImageDescription = `general view of the ${sagradaFamilia.name} monument`;

      const MonumentCard = getMonumentCard(sagradaFamilia);

      screen.appendChild(MonumentCard);

      const actualMonumentImage = screen.querySelector("img");

      expect(actualMonumentImage).not.toBeNull();
      expect(actualMonumentImage?.alt).toBe(expectedImageDescription);
    });

    test("Then it should show the description 'A breathtaking basilica, blending Gothic and modernist architecture, still under construction.'", () => {
      const expectedDescription = sagradaFamilia.description;

      const MonumentCard = getMonumentCard(sagradaFamilia);

      screen.appendChild(MonumentCard);

      const actualMonumentDescription = [...screen.querySelectorAll(`*`)].find(
        (element) => element.textContent === sagradaFamilia.description,
      );

      expect(actualMonumentDescription).not.toBeNull();
      expect(actualMonumentDescription?.textContent).toBe(expectedDescription);
    });

    test("Then it should show that is located in 'Barcelona, Spain'", () => {
      const expectedMonumentLocation = `${sagradaFamilia.city}, ${sagradaFamilia.country}`;

      const MonumentCard = getMonumentCard(sagradaFamilia);

      screen.appendChild(MonumentCard);

      const actualMonumentLocation = [...screen.querySelectorAll(`*`)].find(
        (element) =>
          element.textContent ===
          `${sagradaFamilia.city}, ${sagradaFamilia.country}`,
      );

      expect(actualMonumentLocation).not.toBeNull();
      expect(actualMonumentLocation?.textContent).toBe(
        expectedMonumentLocation,
      );
    });
  });
});
