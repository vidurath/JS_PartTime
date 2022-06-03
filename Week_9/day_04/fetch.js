let url = "http://time.jsontest.com/";

fetch(url)
  .then(function (response) {
    console.log(response);

    let data = response.json();
  })
  .catch(function (error) {
    console.log("An error occurred");
    console.log(error);
  });

// console.log("Starting ...");

// const func = () => {
//   console.log("Working ...");
//   fetch("https://api.sunrise-sunset.org/json?lat=-20.3484&lng=57.5522")
//     .then((resp) => resp.json()) //return a promise
//     .then((resp) =>
//       console.log(`The hour of the sunrise in Mauritius is:
//               ${resp.results.sunrise}`)
//     )
//     .catch(function (error) {
//       console.log(`We got the error ${error}`);
//     });
//   console.log("Work Done ...");
// };

// func();

// Exercise 1 Giphy API (Week8, day4)

// let url_giphy =
//   "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// fetch(url_giphy).then((response) => {
//   console.log(JSON.parse(response.text()));
// });
