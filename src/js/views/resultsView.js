class ResultsView {
  _parentEl = document.querySelector(".results");

  generateMarkup(result) {
    return `<button class="result">
          <i class="result__icon wi wi-owm-${result.weather.id}"></i>
          <div class="result__info">
            <h3 class="heading-tertiary">${result.name}${
      result.state ? `, ${result.state}` : ""
    }</h3>
            <p class="result__info__country-text">${result.country}</p>
          </div>
        </button>`;
  }

  _clear() {
    this._parentEl.innerHTML = "";
  }

  render(data) {
    this._clear();
    const markup = data.map((result) => this.generateMarkup(result)).join("");
    console.log(markup);
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new ResultsView();
