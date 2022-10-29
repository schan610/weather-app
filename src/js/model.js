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
  state.search.results = await Promise.all(
    data.map(async (result) => {
      const detail = await AJAX(
        `${API_WEATHER_URL}lat=${result.lat}&lon=${result.lon}&appid=${API_KEY}`
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
      };
    })
  );
};

export const loadSearchResults = async function (city) {
  state.search.query = city;
  const data = await AJAX(
    `${API_GEOCODE_URL}q=${city}&limit=5&appid=${API_KEY}`
  );
  await getSearchResults(data);
};
