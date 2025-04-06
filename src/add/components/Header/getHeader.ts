const getHeader = (): HTMLElement => {
  const header = document.createElement("header");
  header.className = "main-header";

  header.innerHTML = `
    <div class="header-container">
      <h1 class='main-title'>Add new monument</h1>
      <nav>
        <ul class="links">
          <li>
            <a class="header-link" href="/">Monuments</a>
          </li>
          <li>
            <a class="header-link" href="/add">Add new monument</a>
          </li>
        </ul>
      </nav>
    </div>
    `;

  const links = header.querySelectorAll("a");

  links.forEach((link) => {
    if (window.location.pathname === link.getAttribute("href")) {
      link.classList.add("link--current");
    }
  });

  return header;
};

export default getHeader;
