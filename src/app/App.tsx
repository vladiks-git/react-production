import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/ClassNames/classNames";

import { useTheme } from "app/providers/ThemeProvider";

import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", { test: true }, [theme])}>
      <Navbar />
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <button onClick={toggleTheme}> change theme</button>
      <AppRouter />
    </div>
  );
};

export default App;
