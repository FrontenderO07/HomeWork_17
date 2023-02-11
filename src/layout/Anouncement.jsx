import React from "react";
import { NavLink } from "react-router-dom";

const Anouncement = () => {
  return (
    <div>
      <NavLink
        to="/anouncements"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "#300c0c" : "#fefbfb",
        })}
      >
        Anouncement
      </NavLink>
    </div>
  );
};

export default Anouncement;
