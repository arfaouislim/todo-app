import React from "react";
import "./footer.css";

const formatLeftItems = (number) => {
  return number === 1 ? `${number} item left` : `${number} items left`;
};

export default function Footer({
  activeTodosList,
  onFilter,
  clearCompletedTodos,
}) {
  return (
    <footer>
      <span>{formatLeftItems(activeTodosList.length)}</span>
      <ul className="filters">
        <li>
          <button className="" onClick={() => onFilter(0)}>
            All
          </button>
        </li>
        <li>
          <button
            className=""
            onClick={() => {
              onFilter(1);
            }}
          >
            Active
          </button>
        </li>
        <li>
          <button className="" onClick={() => onFilter(2)}>
            Completed
          </button>
        </li>
        <li>
          <button className="" onClick={clearCompletedTodos}>
            Clear completed
          </button>
        </li>
      </ul>
    </footer>
  );
}
