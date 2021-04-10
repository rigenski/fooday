import "./components/product-list.js";
import "./components/search-input.js";
import DataSource from "./data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-input");
  const productListElement = document.querySelector("product-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchProduct(searchElement.value);
      renderResult(result);
    } catch (mess) {
      fallbackResult(mess);
    }
  };

  const renderResult = (results) => {
    productListElement.products = results;
  };
  const fallbackResult = (mess) => {
    productListElement.renderError(mess);
  };

  window.onload = onButtonSearchClicked;
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
