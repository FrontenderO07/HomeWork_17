import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotificationPage = () => {
  const navigation = useNavigate();
  const goToMaterials = () => {
    navigation("/courses/materials");
  };
  return (
    <Container>
      <h3>NotificationPage</h3>
      <p>
        A element changes the current location when it is rendered. It's a
        component wrapper around useNavigate, and accepts all the same arguments
        as props
      </p>
      <StyledButton onClick={goToMaterials}>Go to Materilas Page</StyledButton>
    </Container>
  );
};

export default NotificationPage;

const Container = styled.div`
  align-self: center;
  justify-content: center;
  margin-top: 50px;
  width: 800px;
  margin-left: 400px;
  padding: 40px;
  border: 2px solid black;
  background-color: #916586;
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
