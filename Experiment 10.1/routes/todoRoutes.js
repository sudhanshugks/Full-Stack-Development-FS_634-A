import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Update
router.put("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

export default router;
