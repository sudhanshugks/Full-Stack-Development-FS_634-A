import React from "react";

export default function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <li>
      <span
        onClick={() => toggleTodo(todo._id, todo.completed)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo._id)}>❌</button>
    </li>
  );
}
