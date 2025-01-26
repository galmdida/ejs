// Get file system package
const fs = require("fs");

// Get path management package
const path = require("path");

// Install ejs

// Step1 npm init
// Step2 npm install express
// Step3 call express
const express = require("express");

// Create the server with express
const app = express();

// Create templeting engine
app.set("views", path.join(__dirname,"views"));

// Create view engine
app.set("view engine", "ejs");

// Serve static files such as css, js, and images
app.use(express.static("public"));

// Covert form data to js array
app.use(express.urlencoded({extended: false}));

// Change the file extentions to ejs and save it view folder

// Respond to the request
app.get("/",function(req,res){
    res.render("index");
})

// For restaurant
app.get("/restaurants", function(req,res){
    res.render("restaurants");
})

// About
app.get("/about", function(req,res){
    res.render("about");
})

// Recommend
app.get("/recommend", function(req,res){
    res.render("recommend");
})

// Parse data
// Recommend to parse, save, and redirect page
app.post("/recommend", function(req,res){
    // 1. set incoming data
    const restaurant = req.body;

    // 2. Create path to the file
    const filePath = path.join(__dirname, "data", "restaurantSubmitted.json");

    // 3. Read the existing file
    const fileData = fs.readFileSync(filePath);

    // 4. Parse the existing data
    const restaurantSaved = JSON.parse(fileData);

    // 5. push incoming data
    restaurantSaved.push(restaurant);

    // 6. Write the file in string form
    fs.writeFileSync(filePath,JSON.stringify(restaurantSaved));
    
    // 7. Send successful message, use html file - confirm and redirect page to avoid double submission
    res.redirect("/confirm")
})

// Confirm
app.get("/confirm", function(req,res){
    res.render("confirm");
})

// Listen to the server
app.listen(3000);