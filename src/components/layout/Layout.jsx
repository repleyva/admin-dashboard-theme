import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ThemeAction from "../../redux/actions/ThemeAction";
import Routes from "../Routes";
import Sidebar from "../sidebar/Sidebar";
import Topnav from "../topnav/TopNav";
import "./layout.css";

const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");
    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");
    dispatch(ThemeAction.setMode(themeClass));
    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);
  return (
    <Router>
      <Route
        render={(props) => (
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar {...props} />
            <div className="layout__content">
              <Topnav />
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      ></Route>
    </Router>
  );
};

export default Layout;
