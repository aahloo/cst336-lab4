
const express = require('express'); // import Express lib 
const app = express(); // reference provides access to Express methods -- name of function matches name of const above

app.engine('html', require('ejs').renderFile);
app.use(express.static("public")); // specify the external src folder

/* Creates the root route, which sends response when root folder of website is requested */

// NOTE: all html files must be placed in /views

app.get("/", function(req, res){
  res.render("index.html"); 
});

app.get("/sun.html", function(req, res){
  res.render("sun.html"); 
});

app.get("/mercury.html", function(req, res) {
    res.render("mercury.html");
});

app.get("/venus.html", function(req, res) {
    res.render("venus.html");
});

app.get("/earth.html", function(req, res) {
    res.render("earth.html");
});

app.get("/mars.html", function(req, res) {
    res.render("mars.html");
});

app.get("/jupiter.html", function(req, res) {
    res.render("jupiter.html");
});

app.get("/saturn.html", function(req, res) {
    res.render("saturn.html");
});

app.get("/uranus.html", function(req, res) {
    res.render("uranus.html");
});

app.get("/neptune.html", function(req, res) {
    res.render("neptune.html");
});

app.get("/p9.html", function(req, res) {
    res.render("p9.html");
});

// server listener for Heroku
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Running Express Server...");
});

/*
// server listener for AWS Cloud9
app.listen("8080", "127.0.0.1", function() {
    console.log("Express Server is running...");
});
*/



