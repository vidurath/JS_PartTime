function playTheGame() {
  if (confirm("Would you like to play the game!") == true) {
    one();
  } else {
    alert("No problem, Goodbye");
  }
}

function one() {
  let promptNum = prompt("Enter a number between 0 and 10");
  console.log(promptNum);
  if (isNaN(promptNum)) {
    console.log("Sorry Not a number, Goodbye");
  } else {
    if (promptNum >= 0 && promptNum <= 10) {
      let computerNumber = Math.floor(Math.random() * 11);
      
      console.log(computerNumber);
      test(promptNum, computerNumber);
    } else {
      alert("Sorry it’s not a good number, Goodbye");
    }
  }
}

function test(userNumber, computerNumber) {
  numberList = [];
  console.log("usernumber =" + userNumber);
  console.log("computerNumber =" + computerNumber);

  for (let x = numberList.length; x <= 3; x++) {
    if (x === 3) {
      alert("Out of chances");
    } else {
      let newprompt = prompt(`Enter a number between 0 and 10 [ATTEMPT No. ${x + 1}]`);
      userNumber = newprompt;

      if (userNumber == computerNumber){
        alert("WINNER");
        return;
      } else if (userNumber > computerNumber){
        alert("Your number is bigger than the computer guess!");
        console.log("usernumber =" + userNumber);
        console.log("computerNumber =" + computerNumber);
        numberList.push(newprompt);
      } else if (userNumber < computerNumber) {
        alert("Your number is smaller than the computer guess!");
        console.log("usernumber =" + userNumber);
        console.log("computerNumber =" + computerNumber);
        numberList.push(newprompt);
      }
    }
  }
}
