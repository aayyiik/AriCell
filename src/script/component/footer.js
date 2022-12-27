class FooterWeb extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this._shadowRoot.innerHTML = `
        <style>
        footer {
          position: fixed;
          left: 0;
          bottom: 0;
          right: 0;
          background-color: #810CA8;
          color: white;
          text-align: center;
        }
      </style>

      <footer id="footerid">
      <p>2022 - All Rights Reserved - &#169; AriCell -</p>
      </footer>
      `;
        
    }
    
}

customElements.define('footer-web', FooterWeb);