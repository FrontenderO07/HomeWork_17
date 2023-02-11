import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MaterialsLayout = () => {
  return (
    <div>
      <NavListStlye>
        <ul>
          <li>
            <NavLink
              to="subbmited"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
                background: isActive ? "#ab268c" : "#fefbfb",
              })}
            >
              Subbmited
            </NavLink>
          </li>
          <li>
            <NavLink
              to="waiting"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
                background: isActive ? "#ca238a" : "#fefbfb",
              })}
            >
              Waiting
            </NavLink>
          </li>
          <li>
            <NavLink
              to="late"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
                background: isActive ? "#bc37a8" : "#fefbfb",
              })}
            >
              Late
            </NavLink>
          </li>
        </ul>
      </NavListStlye>
    </div>
  );
};

export default MaterialsLayout;

const NavListStlye = styled.nav`
  display: flex;
  list-style: none;
  color: white;
  font-size: 20px;
  justify-content: space-around;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    width: 400px;
    justify-content: space-between;
  }
  li {
    cursor: pointer;
    font-size: 25px;
  }
`;
