class ProductItem extends HTMLElement {
  set product(product) {
    this._product = product;
    this.render();
  }

  render() {
    this.innerHTML = `
                <div class="card rounded-lg">
                  <img
                    src="${this._product.strMealThumb}"
                    class="card-img-top"
                    height="160px"
                  />
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold mb-1">
                      ${this._product.strMeal.substring(0, 12)}
                    </h5>
                    
                  </div>
                </div>`;
  }
}

customElements.define("product-item", ProductItem);
