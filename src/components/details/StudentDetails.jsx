import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const StudentDetails = ({ students }) => {
  const [studentDetails, setStudentDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const newStudentItem = students.find((item) => item.id === +id);
    setStudentDetails(newStudentItem);
  }, [students, id]);

  const navigation = useNavigate();
  const goToStudents = () => {
    navigation("/courses/students");
  };
  return (
    <Container>
      <ul>
        <li>
          <h3>{studentDetails.title}</h3>
          <p>
            This is what our example App.js looks like when it is complete. Make
            sure that your AppRouter is underneath your list aka
            nav-list/nav-bar. This will make sure that your nav stays at the top
            of the page and the elements that
          </p>
          <StyledButton onClick={goToStudents}>
            Go to Stusents Page
          </StyledButton>
        </li>
      </ul>
    </Container>
  );
};

export default StudentDetails;

const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  width: 800px;
  margin-left: 400px;
  ul {
    justify-self: center;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    border: 2px solid black;
    padding: 20px;
    margin-bottom: 50px;
    margin-left: 150px;
  }
  li {
    color: black;
    font-size: 20px;
    font-weight: 500;
  }
  p {
    color: black;
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
