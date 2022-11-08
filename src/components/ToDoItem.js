import React from "react";
import { GrClose } from "react-icons/gr";
import classes from "./ToDoItem.module.css";

function ToDoItem({ item, onRemoveToDo, onComplete }) {
  return (
    <li className={classes["list-item"]} id={item.id}>
      <input
        type="checkbox"
        id={item.id}
        className={!item.completed ? "checkbox" : "checkbox--checked"}
        onChange={() => onComplete(item.id)}
        defaultChecked={item.completed}
      />
      <label htmlFor={item.id} className={classes.label}>
        {item.task}
      </label>

      <button
        className={classes["close-icon"]}
        onClick={() => onRemoveToDo(item.id)}
      >
        <GrClose />
      </button>
    </li>
  );
}

export default ToDoItem;
