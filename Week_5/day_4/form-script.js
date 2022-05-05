let form = document.forms["survey-form"];

// console.log(form.elements);
// console.log(form.elements['name']);
// console.log(form.elements['number']);

// form.elements['name'].value = "Tom Hardy";

// form.elements['number'].addEventListener("input", event => {
//     console.log(event.target.value);
// });

//get the select form
let dropdown = document.getElementById("dropdown");

// dropdown.options[1].selected = true;
dropdown.value = "learner";

console.log(dropdown.value);

const checkbox2 = document.querySelectorAll("input[type='checkbox']");

checkbox2[1].checked = true;
checkbox2[3].checked = true;
