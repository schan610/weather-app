// This module controls the data flow to the user interface
import * as model from "./model.js";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import weatherView from "./views/weatherView.js";


const controlSearch = async function () {
  try {
    const query = searchView.getQuery();
    await model.loadSearchResults(query);
    resultsView.render(model.state.search.results);
    if (model.state.search.results.length === 0) {
      throw new Error(`No search results found in your query.`);
    }
  } catch (err) {
    // render error message
    resultsView.renderError(err.message);
  }
};

controlResults = function (id) {
  const curCity = model.getActiveCity(id);
  weatherView.render(curCity);
  console.log(curCity);
};

const init = function () {
  searchView.addHandlerSearch(controlSearch);
  resultsView.addHandlerResults(controlResults);
};

init();
