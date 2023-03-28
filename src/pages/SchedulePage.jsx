import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SchedulePage = () => {
  const navigation = useNavigate();

  const gotToNotification = () => {
    navigation("/notifications");
  };
  return (
    <Container>
      <h3>SchedulePage</h3>
      <p>
        I ran into a similar issue; I wanted a default route handler if none of
        the route handler matched. My solutions is to use a wildcard as the path
        value. ie Also make sure it is the last entry in your routes definition.
      </p>
      <StyledButton onClick={gotToNotification}>
        Go to Notification Page
      </StyledButton>
    </Container>
  );
};

export default SchedulePage;

const Container = styled.div`
  align-self: center;
  justify-content: center;
  margin-top: 50px;
  width: 800px;
  margin-left: 300px;
  padding: 40px;
  border: 2px solid black;
  background-color: #8a6580;
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
