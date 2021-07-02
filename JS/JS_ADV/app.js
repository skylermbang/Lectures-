const express = require("express");
const bodyParser = require("body-parser");
const Todo = require("./models/todo");

// connect to mongoose
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todo-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi!");
});

router.post("/todos", async (req, res) => {
  const { value } = req.body;
  const maxOrderTodo = await Todo.findOne().sort("-order").exec(); // promise so have to add await

  let order = 1;

  if (maxOrderTodo) {
    order = maxOrderTodo.order + 1;
  }

  const todo = new Todo({ value, order });
  await todo.save();

  res.send({ todo });
});

router.get("/todos", async (req, res) => {
  const todos = await Todo.find().sort("-order").exec();

  res.send({ todos });
});

router.patch("/todos/:todoId", async (req, res) => {
  const { todoId } = req.params;
  const { order } = req.body;

  const todo = await Todo.findById(todoId).exec();

  if ({ order }) {
    const targetTodo = await Todo.findOne({ order }).exec();
    if (targetTodo) {
      targetTodo.order = todo.order;
      await targetTodo.save();
    }
    todo.order = order;
    await todo.save();
  }
  res.send({});
});

router.delete("/todos/:todoId", async (req, res) => {
  const { todoId } = req.params;
  const isExist = await Todo.find({ todoId });
  console.log(todoId, isExist);
  if (isExist) {
    await Todo.deleteOne({ todoId });
  }
  res.send({ result: sucess });
});

app.use("/api", bodyParser.json(), router);
app.use(express.static("./assets"));

app.listen(8080, () => {
  console.log("서버가 켜졌어요!");
});
