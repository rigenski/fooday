import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

class DataSource {
  /**
   * Search Product
   */
  static searchProduct(keyword) {
    return axios.get(`${BASE_URL}search.php?s=${keyword}`).then((response) => {
      if (response.data.meals) {
        return Promise.resolve(response.data.meals);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    });
  }

  /**
   * Show Category
   */
  static showCategory() {
    return axios.get(`${BASE_URL}categories.php`).then((response) => {
      if (response.data.categories) {
        return Promise.resolve(response.data.categories);
      } else {
        return Promise.reject("category is not found");
      }
    });
  }

  /**
   * Show Product By Category
   */
  static showProductByCategory(category) {
    return axios.get(`${BASE_URL}filter.php?c=${category}`).then((response) => {
      if (response.data.meals) {
        return Promise.resolve(response.data.meals);
      } else {
        return Promise.reject("category is not found");
      }
    });
  }

  /**
   * Random Product for Banner
   */

  static showRandomProduct() {
    return axios.get(`${BASE_URL}random.php`).then((response) => {
      if (response.data.meals) {
        return Promise.resolve(response.data.meals[0]);
      } else {
        return Promise.reject("category is not found");
      }
    });
  }
}

export default DataSource;
