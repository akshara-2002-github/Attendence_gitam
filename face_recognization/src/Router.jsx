import { Routes, Route } from "react-router-dom";
import React from "react";

import "./styles/index.scss";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Home from "./pages/Home";
import OverallAttendence from "./pages/OverallAttendence";
import CourseSchedule from "./pages/CourseSchedule";
import Calendar from "./pages/Calender";

const WrapNavigation = ({ children }) => {
  return (
    <div >
      <Header />
      <div >{children}</div>
      {/* <InterestsPage/> */}
      {/* <Footer /> */}
    </div>
  );
};

const Router = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <WrapNavigation>
            <Home />
          </WrapNavigation>
        }
      />
      <Route
        path="/overall"
        element={
          <WrapNavigation>
            <OverallAttendence />
          </WrapNavigation>
        }
      />

      <Route
        path="/schedule"
        element={
          <WrapNavigation>
            <CourseSchedule />
          </WrapNavigation>
        }
      />
      <Route
        path="/calender"
        element={
          <WrapNavigation>
            <Calendar/>
          </WrapNavigation>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Router;
