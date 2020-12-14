// File which handle all todos related task
const express = require("express");
const todoRouter = express.Router(); // my router variable to handle routes, when constructor is called it returns router variable
const { v4: uuidv4 } = require('uuid'); // My variable importing uuid

// Here is an array of todos data for my server
const todos = [
  {
     title: "Make bed",
     description: "First action of the day!",
     image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
     completed: true,
    _id: uuidv4(),
  },
  {
    title: "Make coffee",
    description: "Will give me much needed energy",
    image: "https://images.unsplash.com/photo-1452415005154-c06158558480?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
    completed: true,
    _id: uuidv4(),
  },
  {
    title: "Finish homework",
    description: "seriously finish!",
    image: "https://images.unsplash.com/photo-1581239125411-f5e754e060c4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXdvcmt8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    completed: false,
    _id: uuidv4(),
  },
  {
    title: "Play ac valhalla",
    description: "Because it's a great game!",
    image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8eGJveHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    completed: true,
    _id: uuidv4(),
  },
];

// Routes

//Get  all request
todoRouter.get("/", (req, res) => { // a route to get the data from array
  res.send(todos);
});
//Get one request
todoRouter.get("/:todosId", (req, res) => {
    const todosId = req.params.todosId
    const foundtodos = todos.find(todos => todos._id === todosId)
    res.send(foundtodos)
})
//Post request
todoRouter.post("/", (req, res) => { // a route to post data to the array
  const newtodos = req.body; //to add an id to new objects added to array
  newtodos._id = uuidv4();
  todos.push(newtodos);
  res.send(
    `Successfully added ${newtodos.title} to the task list!`
  );
});
//Delete request
todoRouter.delete("/:todosId", (req, res) => {
const todosId = req.params.todosId // pulling & keeping track of Id 
const todosIndex = todos.findIndex(todos => todos._id === todosId) //finding the index in the list
todos.splice(todosIndex, 1) // delete one item from list
res.send("Successfully deleted todos!")
})
//Put request
todoRouter.put("/:todosId", (req, res) => {
    const todosId = req.params.todosId
    const updateObject = req.body
    const todosIndex = todos.findIndex(todos => todos._id === todosId)
    const updatedtodos = Object.assign(todos[todosIndex], updateObject) 
    //First param is finding the object and second is what we'd like to replace it with merging both params
    res.send(updatedtodos)
})

module.exports = todoRouter; // exporting variable to server to handle request
