class SearchInput extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(e) {
    this._clickEvent = e;
    this.render();
  }

  get value() {
    return this.querySelector("#search-input").value;
  }

  render() {
    this.innerHTML = `<div id="form-search">
    <input
      class="form-control px-4 rounded-pill border-0"
      type="text"
      placeholder="Search food ..."
      id="search-input"
    />
    <div id="search-submit" class="position-absolute">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="currentColor"
    class="bi bi-search"
    viewBox="0 0 16 16"
  >
    <path
      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
    />
  </svg>
  </div>
  </div>`;

    this.querySelector("#search-submit").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-input", SearchInput);
