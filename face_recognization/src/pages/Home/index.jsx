import React, { useRef, useState } from "react";

import "./index.scss";

import Person from "../../assets/person.svg"
import Calendar from "../../assets/calendar.svg"
import People from "../../assets/people.svg"
import BlackBook from "../../assets/black-book.svg"
import CameraComponent from "../../components/CameraComponent";
import OverallAttendence from "../OverallAttendence";

const Home = (props) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const toggleCamera = (props) => {
    setIsCameraOpen(!isCameraOpen);
  };

  return (
    <div>
      <div className="mark-attendence">
        <h1 style={{color:"white"}}>ATTENDANCE TRACKING</h1>
        <h3>MY ATTENDANCE TRACKER</h3>
       
      </div>
      <div className="take-attendence">
        <div className="row">
        <h2>ATTENDANCE TRACKING :</h2>
        <h2 style={{color:"#3498fb",paddingLeft:'15px'}}>MY ATTENDANCE TRACKER</h2>
        
        </div>
        <h6>Attendence Management System using Face recognition</h6>

        <button onClick={toggleCamera}>Mark Attendence</button>
      </div>

      <CameraComponent
        isCameraOpen={isCameraOpen}
        setIsCameraOpen={setIsCameraOpen}
        size={25}
      />


      <div className="break-line">
        <div className="box">
           <img src={Person}/>
           <h7 className='bold'>Chat With Us</h7>
        </div>
        <div   className="box">
        <img src={BlackBook}/>
        <h7  className='bold'>About Us</h7>
           
        </div>
        <div  className="box">
        <img src={People}/>
        <h7  className='bold'>Contact Us</h7>
        </div>
        <div  className="box">
        <img src={Calendar}/>
        <h7  className='bold'>Calendar</h7>
        </div>




      </div>

     
    </div>
  );
};

export default Home;
