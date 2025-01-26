// Get file system package
const fs = require("fs");

// Get path management package
const path = require("path");

// Step1 npm init
// Step2 npm install express
// Step3 call express
const express = require("express");

// Create the server with express
const app = express();

// Create a get request to serve request
app.get("/", function(req,res){
    res.send("<h1>Village is on its way home!</h1>")
})

// Listen to the server
app.listen(3000);