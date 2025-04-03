import getHeader from "./getHeader";

const screen = document.createElement("div");
beforeEach(() => {
  screen.innerHTML = "";
});

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments' inside a heading", () => {
      const expectedAppTitle = "Monuments";

      const Header = getHeader();

      screen.appendChild(Header);

      const appTitle = screen.querySelector("h1");

      expect(appTitle).not.toBeNull();
      expect(appTitle?.textContent).toBe(expectedAppTitle);
    });

    test("Then it should show 'Monuments' as a link", () => {
      const expectedTextContent = "Monuments";
      const expectedPath = "/monuments";

      const Header = getHeader();

      screen.appendChild(Header);

      const appLinks = screen.querySelectorAll("a");
      const links = [...appLinks];
      const appLink = links
        .filter((link) => link.textContent === "Monuments")
        .at(0);

      expect(appLink).not.toBeNull();
      expect(appLink?.textContent).toBe(expectedTextContent);
      expect(appLink?.pathname).toBe(expectedPath);
    });

    test("Then it should show 'Add new monument' as a link", () => {
      const expectedTextContent = "Add new monument";
      const expectedPath = "/add-new-monument";

      const Header = getHeader();

      screen.appendChild(Header);

      const appLinks = screen.querySelectorAll("a");
      const links = [...appLinks];
      const appLink = links
        .filter((link) => link.textContent === "Add new monument")
        .at(0);

      expect(appLink).not.toBeNull();
      expect(appLink?.textContent).toBe(expectedTextContent);
      expect(appLink?.pathname).toBe(expectedPath);
    });
  });
});
