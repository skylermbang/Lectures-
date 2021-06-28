// import the module
let express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

let app = express();
//connect to mongo db
const db = mongoose.connect("mongodb://localhost/bookAPI");
// rtourer
//let bookRouter = express.Router();
// create port   but we dont have so go to 3000?
var port = process.env.PORT || 3000;
const Book = require("./models/bookModel");

const bookRouter = require("./routes/bookRouter")(Book);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/bookshelf", bookRouter);

// basic get with req and res
app.get("/", (req, res) => {
  res.send(" Welcome to Skyler world! and youmeworld an dalso hanna");
});
// listenr
app.listen(port, () => {
  console.log("running on port ahahah  " + port);
});
