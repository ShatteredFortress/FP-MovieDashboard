import React from "react";
import "./Sidebar.css";
import { HiHome } from "react-icons/hi";
import { MdLocalMovies } from "react-icons/md";
import { IoTv, IoAccessibility } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const [active, setActive] = React.useState(false);

  return (
    <div className="sidebar">
      <div className="logoContainer">
        <img src="/images/logo.png" alt="logo" className="logo" />
      </div>
      <div className="buttons">
        <NavLink
          to="/"
          exact={true}
          className="navlink"
          activeClassName="routeActive"
        >
          <IconContext.Provider
            value={{
              className: "sidebarIcons",
              title: "Home page",
            }}
          >
            <HiHome />
          </IconContext.Provider>
          Home
        </NavLink>
        <NavLink to="/movies" className="navlink" activeClassName="routeActive">
          <IconContext.Provider
            value={{ className: "sidebarIcons", title: "Movies page" }}
          >
            <MdLocalMovies />
          </IconContext.Provider>
          Movies
        </NavLink>
        <NavLink to="/shows" className="navlink" activeClassName="routeActive">
          <IconContext.Provider
            value={{ className: "sidebarIcons", title: "TV shows page" }}
          >
            <IoTv />
          </IconContext.Provider>
          TV Shows
        </NavLink>
        <NavLink
          to="/authors"
          className="navlink"
          activeClassName="routeActive"
        >
          <IconContext.Provider
            value={{ className: "sidebarIcons", title: "Authors page" }}
          >
            <IoAccessibility />
          </IconContext.Provider>
          Authors
        </NavLink>
        <NavLink
          to="/features"
          className="navlink"
          activeClassName="routeActive"
        >
          <IconContext.Provider
            value={{ className: "sidebarIcons", title: "Features page" }}
          >
            <IoAccessibility />
          </IconContext.Provider>
          Features
        </NavLink>
        <NavLink
          to="/favoritemovies"
          className="navlink"
          activeClassName="routeActive"
        >
          <IconContext.Provider
            value={{ className: "sidebarIcons", title: "Favorites page" }}
          >
            <IoAccessibility />
          </IconContext.Provider>
          Favorite Movies
        </NavLink>
      </div>
    </div>
  );
}
