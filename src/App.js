import "./App.css";
import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const [todos, setTodos] = useLocalStorage("todos", []);
  const themeToggleHandler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const addNewToDo = (todo) => {
    setTodos([
      { id: Math.random() * 10, task: todo, completed: false },
      ...todos,
    ]);
  };
  return (
    <div className="App" data-theme={theme}>
      <Header onThemeToggle={themeToggleHandler} theme={theme} />
      <ToDoForm onAddNewToDo={addNewToDo} />
      <main className="main-wrapper">
        <ToDoList count={todos.length} />
      </main>
    </div>
  );
}

export default App;
