// instance of express which is saved to a variable called "app"
const express = require("express");
const app = express();

// My array of objects to feed through my server as endpoints
const appetizer = [
  {
    name: "Egg fried rice",
    ingredients: [
      "Cooked chilled rice",
      "Oyster sauce",
      "Sesame oil",
      "Soy sauce",
      "Scallions",
      "Carrots",
      "Eggs",
      "Garlic",
      "Butter",
      "Onions",
    ],
    description: "A flavorful dish which borders on being an appetizer",
  },
];
const sandwich = [
  {
    name: "Banh Mi",
    ingredients: [
      "Cucumber, coriander/cilantro, green onion, chilli",
      "Very crusty baguettes",
      "Vietnamese cold cuts",
      "Maggi Seasoning",
      "Pickled carrot",
      "Pate",
      "Mayo ",
    ],
    description:
      "It tastes like a rich ham sandwich with a hit of Asian freshness.",
  },
];
const drink = [
  {
    name: "Halo Halo",
    ingredients: [
      "crushed or shaved ice",
      "milk (fresh or evaporated)",
      "sugar",
      "sweetened saba or plantain bananas",
      "sweetened sweet potatoes",
      "fresh or sweetened langka",
      "sweetened garbanzos or beans",
      "coconut strips or sweetened macapuno",
      "sweetened red munggo",
      "coconut gel",
      "sago or tapioca pearls or jelly cut into cubes",
      "pinipig",
      "leche flan",
      "ube jam or ube ice cream",
    ],
    description:
      "A concoction of various sweet treats that are put together to culminate into one great cold treat.",
  },
];

// endpoints with callback function
app.get("/appetizer", (req, res) => {
  res.send(appetizer);
});
app.get("/sandwich", (req, res) => {
  res.send(sandwich);
});
app.get("/drink", (req, res) => {
  res.send(drink);
});

// telling app to listen to port with callback function showing it is in fact working.
app.listen(9000, () => {
  console.log("App is listening on port 9000!");
});
