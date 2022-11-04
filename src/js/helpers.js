import { TIMEOUT_SECONDS } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
