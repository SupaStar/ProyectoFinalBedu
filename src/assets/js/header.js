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
            
                <a role="button" class="navbar-burger " aria-label="menu" aria-expanded="false" data-target="navbar-menu__collapsed" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        
            <div id="navbar-menu__collapsed" class="navbar-menu navbar-start ">
                <div class="navbar-start">
                    <a class="navbar-item">
                        Home
                    </a>

                    <a class="navbar-item" href="./about_us.html">
                    About us
                    </a>

                    <a class="navbar-item">
                        Recipe list
                    </a>
                </div>

                <a class="navbar-item centered-logo" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                </a>
            
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