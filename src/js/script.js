const city = "london";

// const AJAX = async function (url, uploadData = undefined) {
//   try {
//     const fetchPro = uploadData
//       ? fetch(url, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(uploadData),
//         })
//       : fetch(url);
//     const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECONDS)]);
//     const data = await res.json();

//     if (!res.ok)
//       throw new Error(`${res.status}. ${data.message} Please try again`);
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };

// const getLongLat = async function () {
//   const response = await fetch(
//     "https://api.api-ninjas.com/v1/geocoding?city=london",
//     {
//       method: "GET",
//       headers: { "X-Api-Key": "kP7ClrjAJ+cnONvyTXF0cQ==QznwLMesi0UZrhka" },
//     }
//   );
//   console.log(response);

//   const data = await response.json();
//   console.log(data);
// };

// getLongLat()

// const getWeather = async function () {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=33.95&lon=-117.4&appid=2256b03b0968676221d29f819be2b449&units=imperial`
//   );

//   console.log(response);

//   const data = await response.json();
//   console.log(data);
// };

// getWeather();
