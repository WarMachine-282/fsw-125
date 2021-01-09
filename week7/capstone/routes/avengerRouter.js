// File which handle all avenger related task
const express = require("express");
const avengerRouter = express.Router(); // my router variable to handle routes, when constructor is called it returns router variable
const { v4: uuidv4 } = require('uuid'); // My variable importing uuid

// Here is an array of avenger data for my server
const avengers = [
  {
    avenger: "Captain America",
    living: "True",
    conception: 1941,
    powers: "Strength",
    _id: uuidv4(),
  },
  {
    avenger: "Iron Man",
    living: "False",
    conception: 1963,
    powers: "Flight",
    _id: uuidv4(),
  },
  {
    avenger: "Thor",
    living: "True",
    conception: 1962,
    powers: "Electric manipulation",
    _id: uuidv4(),
  },
  {
    avenger: "Hulk",
    living: "True",
    conception: 1962,
    powers: "Strength",
    _id: uuidv4(),
  },
  {
    avenger: "Vision",
    living: "false",
    conception: 1968,
    powers: "Flight",
    _id: uuidv4(),
  },
  {
    avenger: "Scarlet Witch",
    living: "True",
    conception: 1964,
    powers: "Telekinesis",
    _id: uuidv4(),
  },
  {
    avenger: "Falcon",
    living: "True",
    conception: 1969,
    powers: "Flight",
    _id: uuidv4(),
  },
  {
    avenger: "Black Widow",
    living: "false",
    conception: 1964,
    powers: "Espionage",
    _id: uuidv4(),
  },
  {
    avenger: "Captain Marvel",
    living: "True",
    conception: 1964,
    powers: "Flight",
    _id: uuidv4(),
  },
];

// Routes

//Get  all request
avengerRouter.get("/", (req, res) => { // a route to get the data from array
  res.send(avengers);
});
//Get one request
avengerRouter.get("/:avengerId", (req, res, next) => {
    const avengerId = req.params.avengerId
    const foundAvenger = avengers.find(avenger => avenger._id === avengerId)
    if(!foundAvenger) {
      const error = new Error(`The avenger with id of ${avengerId} NOT FOUND.`)
      res.status(500)
      return next(error)
    }
    res.status(500).send(foundAvenger)
})
// Search power
avengerRouter.get("/search/avenger", (req, res) => {
  const avenger = req.query.type.toLowerCase();
  console.log(avenger)
  const filteredPower = avengers.filter(newAvenger => newAvenger.avenger.toLowerCase().includes(avenger) ? newAvenger : null);
  res.send(filteredPower);
});
//Post request
avengerRouter.post("/", (req, res) => { // a route to post data to the array
  const newAvenger = req.body; //to add an id to new objects added to array
  newAvenger._id === uuidv4();
  avengers.push(newAvenger);
  res.status(201).send(newAvenger);
});
//Delete request
avengerRouter.delete("/:avengerId", (req, res) => {
const avengerId = req.params.avengerId // pulling & keeping track of Id 
const avengerIndex = avengers.findIndex(avenger => avenger._id === avengerId) //finding the index in the list
avengers.splice(avengerIndex, 1) // delete one item from list
res.send("Successfully deleted avenger!")
})
//Put request
avengerRouter.put("/:avengerId", (req, res) => {
    const avengerId = req.params.avengerId
    const updateObject = req.body
    const avengerIndex = avengers.findIndex(avenger => avenger._id === avengerId)
    const updatedAvenger = Object.assign(avengers[avengerIndex], updateObject) 
    //First param is finding the object and second is what we'd like to replace it with merging both params
    res.status(201).send(updatedAvenger)
})

module.exports = avengerRouter; // exporting variable to server to handle request
