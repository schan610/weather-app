// This module handles retrieving, organizing, and storing the data needed to display the search results and the selected user city.

import { AJAX } from "./helpers";
import { API_KEY, API_GEOCODE_URL, API_WEATHER_URL } from "./config";

export const state = {
  weather: {},
  search: {
    query: "",
    results: [],
  },
};

const getSearchResults = async function (data) {
  // Retrieve search results and update the state into an array of objects
  state.search.results = await Promise.all(
    data.map(async (result) => {
      const detail = await AJAX(
        `${API_WEATHER_URL}lat=${result.lat}&lon=${result.lon}&appid=${API_KEY}&units=imperial`
      );

      const [weather] = detail.weather;
      return {
        name: result.name,
        state: result.country === "US" ? result.state : undefined,
        country: result.country,
        lat: result.lat,
        lon: result.lon,
        main: detail.main,
        weather,
        windSpeed: detail.wind.speed.toFixed(1),
        lastUpdated: getLocalTime(
          detail.timezone,
          new Date(detail.dt * 1000),
          detail.dt
        ),
        curLocalTime: getLocalTime(detail.timezone),
        sunrise: getLocalTime(
          detail.timezone,
          new Date(detail.sys.sunrise * 1000),
          detail.dt
        ),
        sunset: getLocalTime(
          detail.timezone,
          new Date(detail.sys.sunset * 1000),
          detail.dt
        ),
      };
    })
  );
};

export const loadSearchResults = async function (city) {
  try {
    // Retrieve user input
    state.search.query = city;
    const data = await AJAX(
      `${API_GEOCODE_URL}q=${city}&limit=5&appid=${API_KEY}`
    );
    await getSearchResults(data);
  } catch (err) {
    throw err;
  }
};

export const getActiveCity = function (id) {
  // Return user selected city
  return state.search.results[id];
};

const getLocalTime = function (timezone, dt = new Date()) {
  // convert date to UTC format in milliseconds for better accuracy
  const utc = dt.getTime() + dt.getTimezoneOffset() * 60000;
  // get local time with timezone offset
  const localTime = new Date(utc + 1000 * timezone);
  return {
    hours: localTime.getHours(),
    time: `${localTime.getHours()}:` + `0${localTime.getMinutes()}`.slice(-2),
    date: localTime.getDate(),
    month: localTime.toLocaleString("default", { month: "short" }),
    year: localTime.getFullYear(),
  };
};
