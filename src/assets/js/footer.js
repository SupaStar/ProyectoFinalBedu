import ".";

class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `

        <footer class='footer'>
          <div>
            <img src='./img/tasteU_logo-03-01.png' class='footer-logo'/>

            <ul class='footer-links'>
              <li><a href='index.html'>Home</a></li>
              <li><a href='about_us.html'>About us</a></li>
              <li><a href='results.html'>Recipe list</a></li>
              <li><a href='https://github.com/SupaStar/ProyectoFinalBedu' target='_blank'>GitHub repo</a></li>
            </ul>
          </div>
          <p class='is-small has-text-centered mt-6'>Taste U© 2021 by Equipo 19</p>
        </footer>
        `
    }
  }
  
customElements.define('footer-component', Footer);
