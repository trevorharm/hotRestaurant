// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// guests data (DATA)
// =============================================================
var guest = [];
//   {
//     customer: "yoda",
//     id: "Yoda",
//     email: "Jedi Master",
//     phone: 900,
//   },
//   {
//     customer: "yoda",
//     id: "Yoda",
//     email: "Jedi Master",
//     phone: 900,
//   },
//   {
//     customer: "yoda",
//     id: "Yoda",
//     email: "Jedi Master",
//     phone: 900,
//   }
// ];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/all", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/images/41993-das-loft-sofitel-19to1.jpeg", function(req, res) {
  res.sendFile(path.join(__dirname, "/images/41993-das-loft-sofitel-19to1.jpeg"));
})

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/", function(req, res) {
  var chosen = req.params.guest;


  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < guest.length; i++) {
      if (chosen === guest[i].routeName) {
        return res.json(guest[i]);
      }
    }

    return res.json(false);
  }
  return res.json(guest);
});

// Create New guest - takes in JSON input
app.post("/api/new", function(req, res) {
  //console.log("RES", req.body);
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newguest = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //newguest.routeName = newguest.name.replace(/\s+/g, "").toLowerCase();

  console.log(newguest);

  guest.push(newguest);

  res.json(newguest);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
