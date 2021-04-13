class CategoryItem extends HTMLElement {
  set category(category) {
    this._category = category;
    this.render();
  }

  render() {
    this.innerHTML = `
    <li class="mb-2 list-unstyled">
        <p class="text-basic mb-0" id="${this._category.strCategory}" role="button">${this._category.strCategory}</p>
    </li>`;
  }
}

customElements.define("category-item", CategoryItem);
