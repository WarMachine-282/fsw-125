// File which handle all bounty related task
const express = require("express");
const bountyRouter = express.Router(); // my router variable to handle routes, when constructor is called it returns router variable
const { v4: uuidv4 } = require('uuid'); // My variable importing uuid

// Here is an array of bounty data for my server
const bounty = [
  {
    firstName: "Han",
    lastName: "Solo",
    living: "true",
    bountyAmount: 2000,
    type: "smuggler",
    _id: uuidv4(),
  },
  {
    firstName: "Luke",
    lastName: "Skywalker",
    living: "true",
    bountyAmount: 8000,
    type: "padawan",
    _id: uuidv4(),
  },
  {
    firstName: "Leia",
    lastName: "Organa",
    living: "true",
    bountyAmount: 5000,
    type: "princess",
    _id: uuidv4(),
  },
  {
    firstName: "Obi Wan",
    lastName: "Kenobi",
    living: "false",
    bountyAmount: 10000,
    type: "jedi master",
    _id: uuidv4(),
  },
];

// Routes
bountyRouter.get("/", (req, res) => { // a route to get the data from array
  res.send(bounty);
});

bountyRouter.post("/", (req, res) => { // a route to post data to the array
  const newBounty = req.body; //to add an id to new objects added to array
  newBounty._id = uuidv4();
  bounty.push(newBounty);
  res.send(
    `Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`
  );
});

module.exports = bountyRouter; // exporting variable to server to handle request
