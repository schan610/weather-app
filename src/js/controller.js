import * as model from "./model.js";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";

const controlSearch = async function () {
  const query = searchView.getQuery();
  await model.loadSearchResults(query);
  console.log(model.state.search.results);

  resultsView.render(model.state.search.results);
};

const init = function () {
  searchView.addHandlerSearch(controlSearch);
};

init();
