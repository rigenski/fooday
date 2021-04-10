import "./product-item.js";

class ProductList extends HTMLElement {
  set products(products) {
    this._products = products;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._products.forEach((product) => {
      const productItemElement = document.createElement("product-item");
      productItemElement.setAttribute("class", "col-lg-3 col-6 mb-4 px-2");
      productItemElement.product = product;
      this.appendChild(productItemElement);
    });
  }

  renderItem() {}

  renderError(mess) {
    this.innerHTML = "";
    this.innerHTML += `<div class="w-100 text-center py-5">
    <h2 class="placeholder py-5">${mess}</h2></div>`;
  }
}

customElements.define("product-list", ProductList);
