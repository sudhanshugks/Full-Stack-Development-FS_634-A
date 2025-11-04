import React, { useEffect, useState } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "./api";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const { data } = await getTodos();
    setTodos(data);
  };

  useEffect(() => { fetchTodos(); }, []);

  const addTodo = async (text) => {
    await createTodo({ text });
    fetchTodos();
  };

  const toggleTodo = async (id, completed) => {
    await updateTodo(id, { completed: !completed });
    fetchTodos();
  };

  const removeTodo = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div className="app-container">
      <h1>📝 Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}
