import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <NavListStlye>
        <ul>
          <li>
            <NavLink
              to="materials"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
                background: isActive ? "#090909" : "#fefbfb",
              })}
            >
              Materials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="students"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
                background: isActive ? "#090909" : "#fefbfb",
              })}
            >
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to="rating"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
                background: isActive ? "#090909" : "#fefbfb",
              })}
            >
              Raintings
            </NavLink>
          </li>
        </ul>
      </NavListStlye>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  background-color: #052ea9;
  padding: 30px;
  width: 100%;
  nav {
    width: 100%;
  }
`;
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
