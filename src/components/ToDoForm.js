import React, { useRef } from "react";
import classes from "./ToDoForm.module.css";
function ToDoForm({ onAddNewToDo }) {
  const todoRef = useRef(null);
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    onAddNewToDo(todoRef.current.value);
    todoRef.current.value = "";
  };
  return (
    <form className={classes.form} onSubmit={onFormSubmitHandler}>
      <input ref={todoRef} type="text" placeholder="Create a new todo.." />
    </form>
  );
}

export default ToDoForm;
