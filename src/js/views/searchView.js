class SearchView {
  _parentEl = document.querySelector(".search");
  _activeCity = document.querySelector(".active");
  getQuery() {
    const query = this._parentEl.querySelector(".search__input").value;
    return query;
  }

  _clear() {
    this._activeCity.innerHTML = ``;
    this._parentEl.querySelector(".search__input").value = "";
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
      this._clear();
    });
  }
}
export default new SearchView();
