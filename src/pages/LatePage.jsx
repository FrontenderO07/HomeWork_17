import React from "react";
import styled from "styled-components";

const LatePage = () => {
  return (
    <Container>
      <h2>LatePage</h2>
    </Container>
  );
};

export default LatePage;

const Container = styled.div`
  width: 1055px;
  background-color: #048258;
  margin-left: 480px;
  padding: 119px 200px;
  h2 {
    color: aliceblue;
    font-size: 35px;
  }
`;
