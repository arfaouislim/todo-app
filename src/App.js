import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodosList from "./components/TodosList";
import Footer from "./components/Footer";
import uuid from "uuid/dist/v4";

import "./App.css";

function App() {
  // declaration of todolist
  const [todosList, setTodosList] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  /* declaration of filter it  takes  0 to display  All  todos , it takes  1 to filter  Active todos
   and 2 for the  Completed ones*/
  const [filter, setFilter] = useState(0);
  // active todos
  const activeTodosList = todosList.filter((todo) => !todo.completed);
  // completed todos
  const completedTodosList = todosList.filter((todo) => todo.completed);
  // Based on the active filter we assign the list to display
  const listToDisplay =
    filter === 0
      ? todosList
      : filter === 1
      ? activeTodosList
      : completedTodosList;

  //Clear completed todos
  function clearCompletedTodos() {
    setTodosList(activeTodosList);
  }

  // saving todos list in local storage
  useEffect(() => {
    return localStorage.setItem("todos", JSON.stringify(todosList));
  }, [todosList]);

  return (
    <section className="todoApp">
      <Header
        todosList={todosList}
        onTodoAdd={(name) => {
          setTodosList((prevTodoList) => {
            return [
              ...prevTodoList,
              { id: uuid(), title: name, completed: false },
            ];
          });
        }}
      />
      <TodosList
        todosList={todosList}
        listToDisplay={listToDisplay}
        setTodosList={setTodosList}
        activeTodosList={activeTodosList}
      />
      <Footer
        activeTodosList={activeTodosList}
        todosList={todosList}
        filter={filter}
        onFilter={(filter) => setFilter(filter)}
        clearCompletedTodos={clearCompletedTodos}
      />
    </section>
  );
}

export default App;
