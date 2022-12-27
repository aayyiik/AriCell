class PhoneItem extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    set phone(phone) {
      this._phone = phone;
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
          }
          .fan-art-phone {
            width: 20%;
            max-height: 900px;
            object-fit: cover;
            object-position: center;
          }
          .phone-info {
            padding: 24px;
          }
          .phone-info > h2 {
            font-weight: lighter;
          }
          .phone-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
          }
 
        </style>
        <img class="fan-art-phone" src="${this._phone.image}" alt="Fan Art">
        <div class="phone-info">
          <table class="table" border="1px">
          <tr>
              <th>Phone Name</th>
              <th>Brand</th>
              <th>Slug</th>
          </tr>
          <tr>
              <td>${this._phone.phone_name}</td>
              <td>${this._phone.brand}</td>
              <td>${this._phone.slug}</td>
          </tr>
        </table>
        </div>
      `;
    }
  }
  
  customElements.define('phone-item', PhoneItem);