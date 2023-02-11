import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MaterialsLayout from "../../layout/MaterialsLayout";

const MaterialDeatails = ({ materials }) => {
  const [materialDetails, setMaterialDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const newMaterialItem = materials.find((item) => item.id === +id);
    setMaterialDetails(newMaterialItem);
  }, [materials, id]);

  const navigation = useNavigate();
  const goToStudents = () => {
    navigation("/courses/students");
  };
  return (
    <>
      <Container>
        <ul>
          <li>
            <h3>{materialDetails.title}</h3>
            <p>
              This is what our example App.js looks like when it is complete.
              Make sure that your AppRouter is underneath your list aka
            </p>
            <StyledButton onClick={goToStudents}>
              Go to Stusents Page
            </StyledButton>
          </li>
        </ul>
      </Container>
      <Layoutcontainer>
        <MaterialsLayout />
      </Layoutcontainer>
      <Outlet />
    </>
  );
};

export default MaterialDeatails;

const Layoutcontainer = styled.div`
  background-color: #55e955;
  padding: 20px;
`;
const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
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
    margin-bottom: 20px;
    margin-left: 150px;
  }
  li {
    color: black;
    font-size: 20px;
    font-weight: 500;
  }
  p {
    margin-bottom: 30px;
    color: black;
  }
`;
const StyledButton = styled.button`
  border-radius: 20px;
  color: #eee7e7;
  background-color: #047a55;
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;
