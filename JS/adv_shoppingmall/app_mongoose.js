const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middlewares/auth-middleware");

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

router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password }).exec();

  if (!user) {
    res.status(401).send({ errorMessage: "email or password is not match" });
    return;
  }

  const token = jwt.sign({ userId: user.userId }, "this_is_my_secret");
  res.send({
    token,
  });
});

router.get("/users/me", authMiddleware, async (req, res) => {
  const { user } = res.locals;
  console.log(user);
  res.send({
    user: {
      email: user.email,
      nickname: user.nickname,
    },
  });
});

app.use("/api", express.urlencoded({ extended: false }), router);
app.use(express.static("assets"));

app.listen(8080, () => {
  console.log("서버가 요청을 받을 준비가 됐어요");
});
