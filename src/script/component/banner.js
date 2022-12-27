class BannerWeb extends HTMLElement{
    connectedCallback() {
        this.src = this.getAttribute('src') || null;
        this.alt = this.getAttribute('alt') || null;
        this.caption = this.getAttribute('caption') || null;
        this.render();
      }
    
      render() {
        this.innerHTML = `
          <style>
            figure {
              border: thin #c0c0c0 solid;
              display: flex;
              flex-flow: column;
              padding: 5px;
              width: 100%;
              margin: auto;
            }
    
            figure > img {
              max-width:100%;
              height: 250px;
            }
    
            figure > figcaption {
              background-color: #fffff;
              color: #222;
              font: italic smaller sans-serif;
              padding: 3px;
              text-align: center;
            }
          </style>
    
          <figure>
            <img src="${this.src}" alt="${this.alt}">
          </figure>
        `;
      }
    
      attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
      }
     
      static get observedAttributes() {
        return ['caption'];
      }
    }
customElements.define('image-figure', BannerWeb);