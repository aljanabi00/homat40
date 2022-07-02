class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {

   this.innerHTML = `
   <!-- Change on MENU BAR (Delete UL) -->
    <nav id="nav" class="menu_bar">
        <div class="menu_logo">
            <a href="/">
                <img src="logos/logo_orange.svg" alt="logo" id="orange_logo"/>
            </a>
        </div>
        <div class="menu_items">
            <a href="/hosts">
                المضايف
                <div class="underline"></div>
            </a>
            <a href="/map">
                الخارطة
                <div class="underline"></div>
            </a>
            <a href="/stories">
                القصص
                <div class="underline"></div>
            </a>
        </div>
    </nav>
    `;

    document.getElementById("orange_logo").src = document.getElementById("1234").src;
  }
}

customElements.define("header-component", Header);
