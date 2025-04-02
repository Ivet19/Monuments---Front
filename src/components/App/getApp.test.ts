import getApp from "./getApp";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments' inside a heading", () => {
      const screen = document.createElement("div");
      const expectedAppTitle = "Monuments";

      const App = getApp();
      screen.appendChild(App);

      const appMainHeading = screen.querySelector("h1");
      const AppTittle = appMainHeading?.textContent;

      expect(appMainHeading).not.toBeNull();
      expect(AppTittle).toBe(expectedAppTitle);
    });
  });
});
