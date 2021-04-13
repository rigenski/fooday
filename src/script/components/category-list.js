import "./category-item.js";

class CategoryList extends HTMLElement {
  set categories(categories) {
    this._categories = categories;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._categories.forEach((category) => {
      const categoryItemElement = document.createElement("category-item");
      categoryItemElement.setAttribute("class", "mb-2");
      categoryItemElement.category = category;
      this.appendChild(categoryItemElement);
    });
  }

  renderError(mess) {
    this.innerHTML = "";
    this.innerHTML += `<div class="w-100 text-center">
    <p class="placeholder">${mess}</p></div>`;
  }
}

customElements.define("category-list", CategoryList);
