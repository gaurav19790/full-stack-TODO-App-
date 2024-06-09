import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import { Todo } from "./component/db.js";
import { Createtodo, Updatetodo } from "./component/types.js";
const app = express();
app.use(express.json());
app.use(cors());
configDotenv();
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = Createtodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent wrong input",
    });
    return;
  }
  const dataPresent = await Todo.find({ title: createPayload.title });
  if (dataPresent.length) {
    res.status(411).json({
      msg: "data is present",
    });
    return;
  }
  await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.status(200).json({ msg: "todo created" });
});

app.get("/todos", async (req, res) => {
  const todo = await Todo.find();
  res.json({ todo });
});

app.put("/updatetodo", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = Updatetodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent wrong input",
    });
    return;
  }
  // await Todo.deleteMany({});
  await Todo.findOneAndUpdate({ _id: req.body.id }, { completed: true });
  res.json({
    msg: "todo is updated",
  });
});

app.listen(4000, () => {
  console.log("app is running of port 4000");
});
