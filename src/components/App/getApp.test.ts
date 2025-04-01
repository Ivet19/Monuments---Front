import getApp from "./getApp";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments' inside a header", () => {
      const screen = document.createElement("div");

      const App = getApp();
      screen.appendChild(App);

      const appHeader = screen.querySelector("header");

      expect(appHeader).not.toBeNull();
    });
  });
});
