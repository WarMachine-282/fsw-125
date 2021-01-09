const express = require("express");
const morgan = require("morgan");
const app = express();

// Middleware - A function that fires on the inbetween for every route
app.use(express.json()); // Looks for a request body, and turns it into "req.body"
app.use(morgan("dev")) // Logs request to the console

//Routes
app.use("/avengers", require("./routes/avengerRouter.js"))
// telling app to listen to port with callback function showing it is in fact working.
app.use((err, req, res, next) => {
  console.log(err)
  res.send({errMsg: err.message})
})

app.listen(9000, () => {
  console.log("App is listening on port 9000!");
});