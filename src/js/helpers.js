export const AJAX = async function (url) {
  const data = fetch(url).then((response) => response.json());
  return data;
};
