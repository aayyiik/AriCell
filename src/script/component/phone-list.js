import './phone-item.js';

class PhoneList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set phones(phones) {
    this._phones = phones;
    this.render();
  }


  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
  render() {
    this.shadowDOM.innerHTML = '';
  
    this._phones.forEach(phone => {
      const phoneItemElement = document.createElement('phone-item');
      phoneItemElement.phone = phone;
      this.shadowDOM.appendChild(phoneItemElement);
    });
  }
}

customElements.define('phone-list', PhoneList);