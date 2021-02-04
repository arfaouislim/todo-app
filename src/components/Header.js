import React, { useRef } from "react";
import "./header.css";

export default function Header({ onTodoAdd, setNewTodoEntry }) {
  const newTodoNameRef = useRef();

  const handleAddTodo = (e) => {
    if (e.keyCode == 13) {
      var name = newTodoNameRef.current.value;
      if (name === "") {
        return;
      }
      onTodoAdd(name);
      newTodoNameRef.current.value = "";
    }
  };

  return (
    <header>
      <h1>todos</h1>
      <input
        ref={newTodoNameRef}
        className="new-todo"
        placeholder="What needs to be done ?"
        onKeyDown={handleAddTodo}
      />
    </header>
  );
}
