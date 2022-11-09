import React, { useRef } from "react";
import classes from "./ToDoForm.module.css";
function ToDoForm({ onAddNewToDo, isInputValid, setIsInputValid }) {
  const todoRef = useRef(null);
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    onAddNewToDo(todoRef.current.value);
    todoRef.current.value = "";
  };
  const onChangeHandler = (userInput) => {
    if (userInput.length > 4) {
      console.log("Input valid");
      setIsInputValid(true);
    } else {
      console.log("Not valid");
      setIsInputValid(false);
    }
  };
  return (
    <form onSubmit={onFormSubmitHandler}>
      <input
        className={
          isInputValid ? classes.input : `${classes.input} ${classes.invalid}`
        }
        ref={todoRef}
        type="text"
        placeholder="Create a new todo.."
        onChange={() => onChangeHandler(todoRef.current.value)}
      />
    </form>
  );
}

export default ToDoForm;
