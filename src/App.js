import "./App.css";
import Header from "./components/Header";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const themeToggleHandler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <Header onThemeToggle={themeToggleHandler} theme={theme} />
    </div>
  );
}

export default App;
