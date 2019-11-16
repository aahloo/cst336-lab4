const express = require("express");
const app = express();

app.engine('html', require("ejs").renderFile);  // use EJS to render HTML files

// all static files are included in a folder called “public” but you can use a different folder name
app.use(express.static("public"));

// define multiple routes
app.get("/", function(req, res) {
    res.render("index.html");
});

// routes to retrieve the individual celestial bodies' page/info
app.get("/sun", function(req, res) {
    res.render("sun.html");
});

app.get("/mercury", function(req, res) {
    res.render("mercury.html");
});

app.get("/venus", function(req, res) {
    res.render("venus.html");
});

app.get("/earth", function(req, res) {
    res.render("earth.html");
});

app.get("/mars", function(req, res) {
    res.render("mars.html");
});

app.get("/jupiter", function(req, res) {
    res.render("jupiter.html");
});

app.get("/saturn", function(req, res) {
    res.render("saturn.html");
});

app.get("/uranus", function(req, res) {
    res.render("uranus.html");
});

app.get("/neptune", function(req, res) {
    res.render("neptune.html");
});

app.get("/p9", function(req, res) {
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
