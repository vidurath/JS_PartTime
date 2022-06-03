let url = "https://swapi.dev/api/people/1";

// Async function
async function get_character() {
  let character = await fetch(url);

  let data = await character.json();
  console.log(data);
  console.log(data.name, data.birth_year);

  return data;
}
// This function will run in parallel and is asynchronous
let character = get_character();

//then this line is reached, character.name does not exist yet.
console.log(character.name, character.birth_year);

//To use the result from any async function, use the promise
//All async functions ALWAYS return a promise

character
  .then((result) => {
    console.log(result.name);
  })
  .catch((error) => {
    console.log("An error occured");
    console.log(error);
  });

//----------------------

async function retrieveUsers() {
  const response = await fetch("");
  //   return await response.json();
}

let users = retrieveUsers();
users.then((students) => {
  for (let student of students) {
    // console.log(student);
  }
});
