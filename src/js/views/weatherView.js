class WeatherView {
  _parentEl = document.querySelector(".active");
  _data;

  generateMarkup(data) {
    return ` <div class="weather">
    <div class="weather__location">
    <p class = "weather__location__update">Last updated: ${
      data.lastUpdated.date
    } ${data.lastUpdated.month}. on ${data.lastUpdated.time}</p>
      <h2 class="heading-secondary">${data.name}${
      data.state ? `, ${data.state}` : ``
    }</h2>
      <p class="weather__location__time">${data.curLocalTime.time} - ${
      data.curLocalTime.date
    } ${data.curLocalTime.month}. ${data.curLocalTime.year}</p>
    </div>
    <div class="overview">
      <div class="overview__description">
        <i class="wi wi-owm-${data.weather.id}"></i>
        <p class="paragraph overview__description__summary">${
          data.weather.description
        }</p>
      </div>
      <div class="overview__temp">
        <p class="overview__degrees"
          >${Math.round(data.main.temp)}<i class="wi wi-fahrenheit"></i
        ></p>
        <p class="paragraph min-max">
        ${Math.round(
          data.main.temp_max
        )}<i class="wi wi-degrees"></i> /  ${Math.round(
      data.main.temp_min
    )}<i class="wi wi-degrees"></i>
        </p>
      </div>
    </div>
    <ul class="detail">
      <li class="detail__item">
        <i class="wi wi-thermometer detail__icon"></i> Feels like ${Math.round(
          data.main.feels_like
        )}
      </li>
      <li class="detail__item">
        <i class="wi wi-sunrise detail__icon"></i> ${data.sunrise.time}
    
      </li>
      <li class="detail__item">
        <i class="wi wi-strong-wind detail__icon"></i> ${data.windSpeed} mph
      </li>

      <li class="detail__item">
        <i class="wi wi-sunset detail__icon"></i>  ${data.sunset.time}
      </li>
      <li class="detail__item">
        <i class="wi wi-raindrop detail__icon"></i> ${data.main.humidity}%
      </li>
    </ul>
  </div>`;
  }

  _clear() {
    this._parentEl.innerHTML = "";
  }
  render(data) {
    this._clear();
    const markup = this.generateMarkup(data);
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new WeatherView();
