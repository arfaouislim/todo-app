import React from "react";
import "./todosList.css";
import Todo from "./Todo";

export default function TodosList({ todosList, listToDisplay, setTodosList }) {
  //Toggle todo
  function onToggleTodo(id) {
    const newTodosList = [...listToDisplay];
    const todo = newTodosList.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodosList(newTodosList);
  }
  // Delete todo
  function onDeleteTodo(id) {
    const newTodosList = todosList.filter((todo) => todo.id !== id);
    setTodosList(newTodosList);
  }

  return (
    <ul className="todo-list">
      {listToDisplay.map((todo) => (
        <li
          key={todo.id}
          className={todo.completed ? "complete" : "incomplete"}
        >
          <Todo
            todo={todo}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}
