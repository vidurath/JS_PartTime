// Class example

let numbers = [10, 20, 30, 88, 95];
let sum = 0;

/*
                sum    =  0 + 10
    1st loop : sum  = sum + element 
    sum = 10 
                     10  + 20 
    2nd loop : sum = sum + element
    sum = 30
                      30 + 30
    3rd loop : sum = sum + element 
    sum = 60 
                      60 +  88
    4th loop : sum = sum + element 
    sum = 148
                    148 + 95
    5th loop: sum = sum + element
    sum = 243
*/

numbers.forEach((element) => {
  sum = sum + element;
});

// console.log(`The sum is ${sum}`);
// console.log(`The average is ${sum / numbers.length}`);

//

let mybutton = document.getElementById("mybutton");
let display = document.getElementById("displayarea");

function quote() {
  return "Life is good";
}

mybutton.addEventListener("click", (event) => {
  display.innerText = quote();
});

function laugh(number) {
  let text = "";
  number.forEach((element) => {
    let text = "ha";
  });
  return text;
}
/* Write a function laugh( ) that displays the text "ha" n number of times
Calling laugh(4) would display "hahahaha!" */

function laugh(n) {
  let mystring = "";
  for (let x = 0; x < n; x++) {
    mystring += "ha";
  }

  if (n > 10) {
    return "(*evil) " + mystring + "!";
  } else {
    return mystring + "!";
  }
}

console.log(laugh(4)); //hahahaha!
