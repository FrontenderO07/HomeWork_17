import React from "react";
import Anouncement from "../layout/Anouncement";
import Course from "../layout/Course";
import Notification from "../layout/Notification";
import Schedule from "../layout/Schedule";
import styled from "styled-components";

const Aside = () => {
  return (
    <>
      <Container>
        <h1>Logo</h1>
        <Block>
          <div>
            <ul>
              <li>
                <Course />
              </li>
              <li>
                <Anouncement />
              </li>
              <li>
                <Notification />
              </li>
              <li>
                <Schedule />
              </li>
            </ul>
          </div>
        </Block>
      </Container>
    </>
  );
};

export default Aside;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  background-color: #a19e9b;
  height: 750px;
  h1 {
    color: #630663;
    font-size: 30px;
    font-weight: 800;
    margin-left: 160px;
  }
`;
const Block = styled.div`
  background-color: #a19e9b;
  padding: 0px 20px;

  ul {
    background-color: #827878;
    list-style: none;
    margin-top: 100px;
    padding: 50px;
  }
  li {
    margin-top: 30px;
    font-size: 20px;
    width: 300px;
  }
`;
