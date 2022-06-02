// console.log("Promises");

// let promise_status = true;
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (promise_status === true) {
//       resolve("Status is true");
//       console.log(promise);
//     } else if (promise_status === false) {
//       reject("Status is false");
//     }
//   });
// }, 3000);

// console.log(promise);

// promise.then(function (result) {
//   console.log(result);
// });

// promise.catch((error) => {
//   console.log("Error: " + error);
// });

// promise.finally((msg) => {
//   console.log("I will be doing all of my exercises.");
// });

// Chaining Promises

// let bankAmount = 1000;
// let expense = 854;

// let transaction = new Promise((resolve, reject) => {
//   if (expense * 1.15 < bankAmount) {
//     console.log("Ok");
//     resolve(expense);
//   } else {
//     reject("Rejected by the bank. Not enough fund");
//   }
// });

// transaction
//   .then((result) => {
//     console.log("The result is the expense: " + result);
//     console.log("Before we need to add taxes: 15%");
//     return result * 1.15;
//   })
//   .then((result) => {
//     console.log("The result is the expense including taxes:" + result);
//     return result;
//   })
//   .then((result) => {
//     bankAmount -= result;
//     console.log(`I have Rs ${bankAmount.toFixed(2)} left in the bank`);
//     return bankAmount;
//   });

// XML HTTP REQUEST

let xhr = new XMLHttpRequest();
let url = "http://time.jsontest.com/";

xhr.timeout = 1000;

xhr.open("GET", url, true);

xhr.setRequestHeader("content-type", "application/json");

// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
// xhr.setRequestHeader("Access-Control-Allow-Headers", "*");
xhr.withCredentials = false;

xhr.send();

xhr.onload = function () {
  if (xhr.status == 200) {
    console.log("OK");
    console.log(xhr.response);
    console.log(JSON.parse(xhr.response).date);
    console.log(xhr.getResponseHeader("content-type"));
    console.log(xhr.getAllResponseHeaders());
  } else {
    console.log("Error");
    alert(`Status code: ${xhr.status} - ${xhr.statusText}`);
  }
};

xhr.ontimeout = function () {
  alert("Timeout!");
};

xhr.onerror = function () {
  alert("Request fail!!!");
};
