import React from "react";
import classes from "./Header.module.css";
import { IconContext } from "react-icons";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

function Header(props) {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h1>TODO</h1>
        <IconContext.Provider value={{ size: "20px" }}>
          <BsFillMoonFill
            style={{ cursor: "pointer" }}
            onClick={props.onThemeToggle}
          />
        </IconContext.Provider>
      </div>
    </header>
  );
}

export default Header;
