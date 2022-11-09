import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import ToDoItem from "./components/ToDoItem";
import Button from "./components/shared/Button";
import useLocalStorage from "use-local-storage";
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence } from "framer-motion";
// filters
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("All");
  const [isInputValid, setIsInputValid] = useState(false);

  const themeToggleHandler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const addNewToDo = (todo) => {
    if (isInputValid) {
      setTodos([{ id: uuidv4(), task: todo, completed: false }, ...todos]);
      setIsInputValid(false);
    }
  };
  const removeToDoHandler = (id) => {
    const removedItem = todos.filter((item) => item.id !== id);
    setTodos(removedItem);
  };
  const completeToDoHandler = (id) => {
    const updatedTasks = todos.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTodos(updatedTasks);
  };
  const filterList = FILTER_NAMES.map((name) => {
    return (
      <Button
        isPressed={name === filter}
        onClick={() => setFilter(name)}
        key={name}
        name={name}
      >
        {name}
      </Button>
    );
  });
  const clearCompletedHandler = () => {
    const updatedTodos = todos.filter((item) => {
      return item.completed !== true;
    });
    setTodos(updatedTodos);
  };
  return (
    <div className="App" data-theme={theme}>
      <Header onThemeToggle={themeToggleHandler} theme={theme} />
      <div className="main-wrapper">
        <div className="wrapper">
          <ToDoForm
            onAddNewToDo={addNewToDo}
            isInputValid={isInputValid}
            setIsInputValid={setIsInputValid}
          />

          <ToDoList
            count={todos.length}
            onClick={clearCompletedHandler}
            filter={filter}
          >
            <AnimatePresence>
              {todos.filter(FILTER_MAP[filter]).map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <ToDoItem
                    item={item}
                    key={item.id}
                    name={item.task}
                    completed={item.completed}
                    onRemoveToDo={removeToDoHandler}
                    onComplete={completeToDoHandler}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </ToDoList>
          <div className="filter-container">{filterList}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
