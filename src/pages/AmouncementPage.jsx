import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AmouncementPage = () => {
  const navigation = useNavigate();
  const goToStudentsPage = () => {
    navigation("/courses/students");
  };
  return (
    <Container>
      <h3>AmouncementPage</h3>
      <p>
        Having a component-based version of the useNavigate hook makes it easier
        to use this feature in a React.Component subclass where hooks are not
        able to be used.
      </p>
      <StyledButton onClick={goToStudentsPage}>
        Go to Students Page
      </StyledButton>
    </Container>
  );
};

export default AmouncementPage;

const Container = styled.div`
  align-self: center;
  justify-content: center;
  margin-top: 50px;
  width: 800px;
  margin-left: 300px;
  padding: 40px;
  border: 2px solid black;
  background-color: #926c88;
  h3 {
    color: white;
    margin-bottom: 30px;
    font-size: 40px;
  }
  p {
    color: azure;
    font-size: 20px;
    margin-bottom: 30px;
  }
`;
const StyledButton = styled.button`
  border-radius: 20px;
  color: #eee7e7;
  background-color: teal;
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;
