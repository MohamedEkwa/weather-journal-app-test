// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();
app.use(express.json());

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));
app.use(bodyParser.json());

// Setup Server
const port = 4000;
const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});

// GET route
app.get("/all", (req, res) => {
  console.log(req);
});

// POST route
app.post("/alldata", (req, res) => {
  console.log(req.body);
});
