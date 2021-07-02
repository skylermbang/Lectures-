const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

mongoose.connect("mongodb://localhost/shopping-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const app = express();
const router = express.Router();

router.post("/users", async (req, res) => {
  const { nickname, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    res.status(400).send({ errorMessage: " Password not match" });
    return;
  }

  const existsUsers = await User.find({
    $or: [{ email }, { nickname }],
  });
  if (existsUsers.length) {
    res.status(400).send({
      errorMessage: " You already have same nickname or email registered",
    });
    return;
  }

  const user = new User({ email, nickname, password });
  await user.save();
  res.status(201).send({});
});

app.use("/api", express.urlencoded({ extended: false }), router);
app.use(express.static("assets"));

app.listen(8080, () => {
  console.log("서버가 요청을 받을 준비가 됐어요");
});
