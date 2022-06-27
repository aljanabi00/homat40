class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
   <nav id="nav" class="navbar-holder">
  <div class="logo">
    <a href="/">
      <img src="logos/logo_orange.svg" alt="logo" id="orange_logo"/>
    </a>
  </div>
  <div class="navbar">

        <a href="/hosts">
          المضايف
          <div class="underlind"></div>
        </a>

        <a href="/map">
          الخارطة
          <div class="underlind"></div>
        </a>

        <a href="/stories">
          القصص
          <div class="underlind"></div>
        </a>

  </div>
</nav>

   `;
    document.getElementById("orange_logo").src = document.getElementById("1234").src;
  }
}

customElements.define("header-component", Header);
