import icons from "../../img/feather-sprite.svg";

class ResultsView {
  _parentEl = document.querySelector(".results");

  generateMarkup(data) {
    return data
      .map((result, index) => {
        return `<button class="result" id = "${index}">
   <i class="result__icon wi wi-owm-${result.weather.id}"></i>
   <div class="result__info">
     <h3 class="heading-tertiary">${result.name}${
          result.state ? `, ${result.state}` : ""
        }</h3>
     <p class="result__info__country-text">${result.country}</p>
   </div>
 </button>`;
      })
      .join("");
  }

  render(data) {
    this._clear();
    const markup = this.generateMarkup(data);
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(error) {
    const markup = `<div class="error">
    <svg class="icons">
      <use href="${icons}#alert-triangle"/>
    </svg>

    <p class="error__message">${error}</p>
  </div>`;

    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
  _clear() {
    this._parentEl.innerHTML = "";
  }

  addHandlerResults(handler) {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();
      const btn = e.target.closest(".result");
      if (!btn) return;
      this._clear();
      const id = btn.getAttribute("id");
      handler(id);
    });
  }
}

export default new ResultsView();
