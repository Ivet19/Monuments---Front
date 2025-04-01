const getHeader = (): HTMLElement => {
  const header = document.createElement("header");
  header.className = "main-header";

  header.innerHTML = "<h1 class='main-title'>Monuments</h1>";

  return header;
};

export default getHeader;
