import React from "react";
import "./index.scss"; // Import SCSS file

const AttendenceCircle = ({ percentage }) => {
  return <div  className="attendence-circle" style={{
    background:`radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(rgb(28, 90, 197) ${percentage}%, pink 0)`
  }}/>;
};

// index.jsx in /src/components/AttendanceCircle

export default AttendenceCircle;
