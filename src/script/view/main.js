import '../component/search-bar.js';
import '../component/phone-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const phoneListElement = document.querySelector('phone-list');
  

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchPhone(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    phoneListElement.phones = results;
  };

  const fallbackResult = message => {
    phoneListElement.renderError(message);
  };

  searchElement.clickEvent= onButtonSearchClicked;
};

export default main;