class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <blockquote class='container is-fluid content '>
            <p>
                Lorem ipsum[1] dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. 
            <br />
            <cite>Lorem ipsum dolor</cite>.
            </p>
            </blockquote>
        </footer>
        `
    }
  }
  
customElements.define('footer-component', Footer);