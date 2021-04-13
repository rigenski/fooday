class NavHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light px-3 py-4 bg-white">
      <div class="container-lg">
        <a class="nav-brand" href="/"
          ><span class="navbar-brand">FO</span
          ><span
            class="navbar-brand"
            style="position: relative; left: -0.76em"
            >ODAY</span
          ></a
        >
        <button
          class="navbar-toggler border-0 px-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-chevron-double-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
            <path
              fill-rule="evenodd"
              d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Categories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Promo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Life</a>
            </li>
          </ul>
          <div class="navbar-actiond-lg-block">
            <button type="button" class="btn rounded-pill pl-lg-2 pl-0">
              Sign In
            </button>
            <button
              type="button"
              class="btn rounded-pill px-3 py-2 border-0 bg-basic text-white"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>`;
  }
}

customElements.define("nav-header", NavHeader);
