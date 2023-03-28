import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RatingPages = () => {
  const navigate = useNavigate();
  const goToStudents = () => {
    navigate(-1);
  };
  return (
    <Container>
      <h3>Rating Page</h3>
      <p>
        A element changes the current location when it is rendered. It's a
        component wrapper around useNavigate, and accepts all the same arguments
        as props
      </p>
      <StyledButton onClick={goToStudents}>Go To Students page</StyledButton>
    </Container>
  );
};

export default RatingPages;

const Container = styled.div`
  align-self: center;
  justify-content: center;
  margin-top: 50px;
  width: 800px;
  margin-left: 500px;
  padding: 40px;
  border: 2px solid black;
  background-color: #8f6885a0;
  h3 {
    color: white;
    margin-bottom: 30px;
    font-weight: 300;
    font-size: 40px;
  }
  p {
    color: azure;
    font-size: 20px;
    margin-bottom: 30px;
    font-weight: 500;
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
