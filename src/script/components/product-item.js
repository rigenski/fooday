class ProductItem extends HTMLElement {
  set product(product) {
    this._product = product;
    this.render();
  }

  render() {
    this.innerHTML = `
                <div class="card rounded-lg">
                  <img
                    src="./assets/images/sample.jpg"
                    class="card-img-top"
                    height="160px"
                  />
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold mb-1">
                      ${this._product.name}
                    </h5>
                    <p class="card-text">${this._product.desc}</p>
                  </div>
                </div>`;
  }
}

customElements.define("product-item", ProductItem);
