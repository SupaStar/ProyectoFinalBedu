class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                </a>

                <a role="button" id='navbar-burguer' class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-element" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbar-element" id='navbar-menu' class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                    Home
                    </a>

                    <a class="navbar-item">
                    About us
                    </a>

                    <a class="navbar-item">
                        Recipe list
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <a class="navbar-item">
                            <span class="icon">
                                <i class="fab fa-github"></i>
                            </span>
                            <span>Repository</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
        `
    }
  }
  
customElements.define('header-component', Header);