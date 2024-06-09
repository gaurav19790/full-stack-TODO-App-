import mongoose from "mongoose";

mongoose.connect(process.env.URL);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("todos", todoSchema);

export { Todo };
