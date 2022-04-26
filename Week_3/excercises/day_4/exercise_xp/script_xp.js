console.log("(Exercises XP)");
console.log("\nExercises 1 : Simple If/Else Statement");

let x = 5;
let y = 2;

if (x > y) {
  console.log(`${x} is the biggest number`);
} else {
  console.log(`${y} is the biggest number`);
}

console.log("\nExercises 2 : Chihuahua");
let newDog = "Chihuahua";

let newDogLength = newDog.length;
console.log(newDogLength);

console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog === "Chihuahua") {
  console.log("I love Chihuahuas,it's my favourite dog breed");
} else {
  console.log("I dont care, I prefer cats");
}

console.log("\nExercises 3 : Even Or Odd");
// let numInput = prompt("Enter a number?");

// if (numInput % 2 == 0) {
//   console.log(
//     `"${numInput} is an even number". Where ${numInput} is the actual number the user chose.`
//   );
// } else {
//   console.log(
//     `"${numInput} is an odd number". Where ${numInput} is the actual number the user chose.`
//   );
// }

console.log("\nExercises 4 : Group Chat");

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let otherUsersLength = users.length - 2;

if (users.length === 1) {
  console.log(`${users[0]} is online`);
} else if (users.length === 2) {
  console.log(`${users[0]} and ${users[1]} is online`);
} else if (users.length > 2) {
  console.log(
    `${users[0]} , ${users[1]} and ${otherUsersLength} more is online`
  );
}
