class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item long-logo" href="index.html">
                    
                </a>
            
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu__collapsed" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        
            <div id="navbar-menu__collapsed" class="navbar-menu navbar-start ">
                <div class="navbar-start">
                    <a class="navbar-item has-text-dark" href='index.html'>
                        Home
                    </a>

                    <a class="navbar-item has-text-dark" href="./about_us.html">
                    About us
                    </a>

                    <a class="navbar-item has-text-dark" href="./results.html">
                        Recipe list
                    </a>
                </div>

                <a class="navbar-item centered-logo long-logo" href="index.html">
                
                </a>
            
                <div class="navbar-end">
                    <div class="navbar-item">
                        <a class="navbar-item has-text-dark" href='https://github.com/SupaStar/ProyectoFinalBedu' target='_blank'>
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