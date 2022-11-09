import React from "react";
import classes from "./ToDoList.module.css";
import Button from "./shared/Button";

function ToDoList(props) {
  return (
    <main className={classes.main}>
      <ul className={classes.list}>{props.children}</ul>
      <div className={classes.footer}>
        {props.filter === "All" && (
          <div className={classes.count}>
            {props.count} {props.count === 1 ? "item" : "items"} left
          </div>
        )}
        {props.filter !== "Active" && props.count > 0 && (
          <Button onClick={props.onClick}>Clear completed</Button>
        )}
      </div>
    </main>
  );
}

export default ToDoList;
