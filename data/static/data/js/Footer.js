class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <!-- Change on FOOTER (Delete UL) -->
         <footer class="footer">
          <a href="mailto:homatalarbain@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
          <a href="https://www.instagram.com/homatalarbain/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.facebook.com/%D8%AD%D9%8F%D9%85%D8%A7%D8%A9-%D8%A7%D9%84%D8%A3%D8%B1%D8%A8%D8%B9%D9%8A%D9%86-105763388855867"
          target="_blank"><i class="fa-brands fa-facebook-square"></i></a>
        </footer>
    `;
    }
}

customElements.define("footer-component", Footer);
