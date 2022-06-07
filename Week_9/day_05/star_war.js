let button = document.getElementById("button");
button.addEventListener("click", function () {
  let character = find_star_wars_character();

  character
    .then((data) => {
      console.log(data);
      display_character_properties(data);
      return data.homeworld;
    })
    .then((homeworldurl) => {
      return get_homeworld(homeworldurl);
    })
    .then((planet_properties) => {
      console.log(planet_properties);
      console.log(planet_properties.name);

      let planet = document.createElement("h4");
      planet.innerText = "Home Workd" + planet_properties.name;
    })
    .catch((err) => {
      console.log("An error occurred");
      console.log(err);
      container.innerText = "";
      let error = document.createElement("h2");
      error.innerText = "Oh No!That person isnt available";
      container.appendChild(error);
    });
});

async function find_star_wars_character() {
  console.log("test!!!");
  let container = document.getElementById("container");
  container.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin-pulse fa-5x"></i>';

  let loading = document.createElement("h2");
  loading.innerText = "Loading...";
  container.appendChild(loading);

  let num = Math.round(Math.random() * 82) + 1;

  let url = `https://swapi.tech/api/people/${num}`;

  let character = await fetch(url);
  let data = await character.json();

  return data.result.properties;
}

async function get_homeworld(homeworldurl) {
  let homeworld = await fetch(homeworldurl);
  let planet = await homeworld.json();

  return planet.result.properties;
}

function display_character_properties(data) {
  container.innerText = "";

  let name = document.createElement("h2");
  let height = document.createElement("h4");
  let gender = document.createElement("h4");
  let birth_year = document.createElement("h4");

  name.innerText = data.name;
  height.innerText = "Height : " + data.height;

  container.appendChild(name);
  container.appendChild(height);
}
