"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export const getPantanoStatus = async (): Promise<PantanoResponse> => {
//   let response = await fetch(
//     `https://saihtajo.chtajo.es/ajax.php?url=%2Ftr%2Fajax_datos_estacion%2Festacion%3AE_19`,
//     {
//       method: "GET",
//     }
//   );
//   console.log(response.status);
//   console.log(response.statusText);
//   console.log(response.formData());
//   console.log(response.status);
//   console.log(response.status);
//   return response.json();
// };
// getPantanoStatus().then((response) => {
//   console.log(response);
// });
// fetch(
//     `https://saihtajo.chtajo.es/ajax.php?url=%2Ftr%2Fajax_datos_estacion%2Festacion%3AE_19`,
//     {
//       method: "GET",
//       headers: {
//         "Accept": "*/*",
//         "User-Agent": "Thunder Client (https://www.thunderclient.com)"
//       }
//     }
//   ).then(res => res.text())
//   .then(text => console.log(text))
var headersList = {
    Accept: "*/*",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
};
fetch("https://saihtajo.chtajo.es/ajax.php?url=%2Ftr%2Fajax_datos_estacion%2Festacion%3AE_19", {
    method: "GET",
    headers: headersList,
}).then(function (res) { return res.text(); })
    .then(function (text) { return console.log(text); });
