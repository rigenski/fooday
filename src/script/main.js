import "./components/product-list.js";
import "./components/category-list.js";
import "./components/search-input.js";
import DataSource from "./data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-input");
  const productListElement = document.querySelector("product-list");
  const categoryListElement = document.querySelector("category-list");
  const bannerElement = document.getElementById("detail-banner");

  /**
   * Search Product
   */
  const SearchProduct = async () => {
    try {
      const result = await DataSource.searchProduct(searchElement.value);
      renderResult(result);
    } catch (mess) {
      fallbackResult(mess);
    }
  };

  /**
   * get Category
   */
  const showCategory = async () => {
    try {
      const result = await DataSource.showCategory();
      renderCategory(result);
    } catch (mess) {
      fallbackCategory(mess);
    }
  };

  /**
   * get Product By Category
   */
  const showProductByCategory = async (category) => {
    try {
      const result = await DataSource.showProductByCategory(category);
      renderProductByCategory(result);
    } catch (mess) {
      fallbackProductByCategory(mess);
    }
  };

  /**
   * random Product for Banner
   */
  const randomProduct = async () => {
    let result;

    result = await DataSource.showRandomProduct();

    bannerElement.innerHTML = `<div class="text-banner  text-center text-md-left">
        <h2 class="font-weight-bold">${result.strMeal
          .substring(0, 6)
          .toUpperCase()} </h2>
        <h5>${result.strCategory.toUpperCase()} | ${result.strArea.toUpperCase()} </h5>
      </div>
      <img
        src="${result.strMealThumb}"
        class="img-fluid rounded-circle shadow"
        width="200px"
        height="200px"
      />`;
  };

  const renderResult = (results) => {
    productListElement.products = results;
  };

  const fallbackResult = (mess) => {
    productListElement.renderError(mess);
  };

  const renderCategory = (results) => {
    categoryListElement.categories = results;
  };

  const fallbackCategory = (mess) => {
    categoryListElement.renderError(mess);
  };

  const renderProductByCategory = (results) => {
    productListElement.products = results;
  };

  const fallbackProductByCategory = (mess) => {
    productListElement.renderError(mess);
  };

  randomProduct();
  showCategory();
  SearchProduct();
  searchElement.keyupEvent = SearchProduct;
  categoryListElement.addEventListener("click", function (e) {
    showProductByCategory(e.target.innerText);
  });
};

export default main;
