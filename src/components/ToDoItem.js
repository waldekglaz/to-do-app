import React from "react";
import { IconContext } from "react-icons";
import { IoCloseOutline } from "react-icons/io5";
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
        <IconContext.Provider value={{ size: "18px", color: "#5B5E7E" }}>
          <IoCloseOutline />
        </IconContext.Provider>
      </button>
    </li>
  );
}

export default ToDoItem;
