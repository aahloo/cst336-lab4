const express = require("express");
const app = express();
app.engine('html', require("ejs").renderFile);  // use EJS to render HTML files

// all static files are included in a folder called “public” but you can use a different folder name
app.use(express.static("public"));

// define multiple routes
app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/mercury", function(req, res) {
    res.render("mercury.html");
});

app.get("/venus", function(req, res) {
    res.render("venus.html");
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
