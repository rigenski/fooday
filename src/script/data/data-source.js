import products from "./products.js";

class DataSource {
  static searchProduct(keyword) {
    return new Promise((resolve, reject) => {
      const filteredProducts = products.filter((product) =>
        product.name.toUpperCase().includes(keyword.toUpperCase())
      );
      if (filteredProducts.length) {
        resolve(filteredProducts);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;
