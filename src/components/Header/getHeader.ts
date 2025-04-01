const getHeader = (): HTMLElement => {
  const Header = document.createElement("header");

  Header.innerHTML = "<h1 class='main-title'>Monuments</h1>";

  return Header;
};

export default getHeader;
