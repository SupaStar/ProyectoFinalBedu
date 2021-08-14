import { logo } from ".";

class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <footer class="footer desktop-footer">
          <img src=${logo} class='footer-logo'/>

          <p>Lorem ipsum[1] dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. </p>

        </footer>

        <footer class="footer mobile-footer">
          <blockquote class='container is-fluid content '>
          <p>
              Lorem ipsum[1] dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. 
          <br /> <br/>
          <cite style="float:right"> - Lorem ipsum dolor</cite>
          </p>
          </blockquote>
        </footer>
        `
    }
  }
  
customElements.define('footer-component', Footer);