class AppBar extends HTMLElement{

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();  
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host{
            display: block;
            width: 100%;
            background-color: #810CA8;            
            color: white;
            box-shadow: 0 4px 8px 0 rgb(129, 12, 168);
        }
        h2{
            text-align: center;
            padding: 16px;
        }
        p{
            font-weight: bold;
            text-align: center;
            font-size: 20px;
            text-align: center;
            padding: 16px;
        }
       </style>
            <p>Katalog Produk Iphone di Ari Cell</p>
      
        `;
    }
}

customElements.define(`app-bar`, AppBar);