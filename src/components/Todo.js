import React from "react";
import "./todo.css";

export default function Todo({ todo, onToggleTodo, onDeleteTodo }) {
  function handleTodoClick() {
    onToggleTodo(todo.id);
  }

  function handleDeleteTodo() {
    onDeleteTodo(todo.id);
  }

  return (
    <div className="todo">
      <label className="container">
        {todo.title}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleTodoClick}
        />
        <span className="checkmark"></span>
      </label>
      <button className="deleteBtn" onClick={handleDeleteTodo}></button>
    </div>
  );
}
