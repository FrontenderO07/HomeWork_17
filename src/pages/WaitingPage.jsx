import React from "react";
import styled from "styled-components";

const WaitingPage = () => {
  return (
    <Container>
      <h2>WaitingPage</h2>
    </Container>
  );
};

export default WaitingPage;

const Container = styled.div`
  width: 1055px;

  background-color: #048258;
  padding: 20px;
  margin-left: 480px;
  padding: 119px 200px;
  h2 {
    color: aliceblue;
    font-size: 35px;
  }
`;
