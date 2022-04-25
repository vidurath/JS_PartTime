console.log("(Exercises XP Gold)");
    
//exercise 1
console.log("\nExercises 1 : Favorite Color");
let sentence = ["my","favorite","color","is","blue"];
console.log(`1. ${sentence.join()}`);

console.log("\nExercises 2 : Mixup");

let str1 = "mix";
let str2 = "pod";
let str3 = str1.concat(' ',str2);

let x = str1.slice(0,2);
str1 = str1.replace(str1.slice(0,2),str2.slice(0,2));
str2 = str2.replace(str2.slice(0,2),x);
console.log(`2. \tString 1 = ${str1} \n\tString 2 = ${str2}`);

console.log(`4. ${str3}`);

console.log("\nExercises 3 : Calculator");

let num1 = prompt('Enter the first number');
let num2 = prompt('Enter the second number');
let sum = num1 - num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;

alert(`The sum is ${sum}.The subtraction is ${sub}`);


