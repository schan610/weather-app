// This script contains reusable functions
export const AJAX = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok)
      throw new Error(`Something went wrong. Please try again later!`);

    return data;
  } catch (err) {
    throw err;
  }
};
