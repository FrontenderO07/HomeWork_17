import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const CoursePage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default CoursePage;
