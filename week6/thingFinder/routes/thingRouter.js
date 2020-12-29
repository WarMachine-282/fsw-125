const express = require("express");
const thingRouter = express.Router(); // router handle
const { v4: uuidv4 } = require("uuid"); //middleware to save _id

//Array of "things"
const things = [
  {
    thing: "ring",
    material: "metal",
    type: "jewelry",
    _id: uuidv4(),
  },
  {
    thing: "milk",
    material: "water",
    type: "drink",
    _id: uuidv4(),
  },
  {
    thing: "button",
    material: "plastic",
    type: "fashion",
    _id: uuidv4(),
  },
  {
    thing: "box",
    material: "cardboard",
    type: "storage",
    _id: uuidv4(),
  },
  {
    thing: "charger",
    material: "plastic",
    type: "electronic",
    _id: uuidv4(),
  },
  {
    thing: "clamp",
    material: "metal",
    type: "tool",
    _id: uuidv4(),
  },
  {
    thing: "mop",
    material: "plastic",
    type: "cleaning",
    _id: uuidv4(),
  },
  {
    thing: "headphone",
    material: "plastic",
    type: "electronic",
    _id: uuidv4(),
  }
];

//Get all things
thingRouter.get("/", (req, res) => {
  res.send(things);
});

//Get type of thing
thingRouter.get("/search/type", (req, res) => {
  const type = req.query.type;
  const filteredThings = things.filter(newThing => newThing.type === type);
  res.send(filteredThings);
});

module.exports = thingRouter;



//-----Make-into-fully-CRUD------------------------------------------------------------------------------------

// //Get one thing
// thingRouter.get("/:thingId", (req, res, next) => {
//     const thingId = req.params.thingId
//     const foundThing = things.find(thing => thing.id === thingId)
//     if(!foundThing) {
//         const error = new Error(`The thing with id of ${thingId} NOT FOUND.`)
//         res.status(500)
//         return next(error)
//     }
//     res.status(200).send(foundThing)
// })
//Post a thing
// thingRouter.post("/", (req, res) => {
//     const newThing = req.body
//     newThing._id == uuid()
//     thing.push(newThing)
//     req.status(201).send(newThing)
// })
//Delete a thing
// thingRouter.delete("/:thingId", (req, res) => {
//     const thingId = req.params.thingId
//     const thingIndex = things.findIndex( thing => thing._id === thingId)
//     things.splice(thingIndex, 1)
//     res.send("Successfully added a thing")
// })
//Update a thing
// thingRouter.put("/:thingId", (req, res) => {
//     const thingId = req.params.thingId
//     const updatedThing =req.body
//     const thingIndex = things.findIndex(thing => thing._id === thingId)
//     const updatedArray = Object.assign(things[thingIndex], updatedArray)
//     res.status(201).send(updatedArray)
// })
