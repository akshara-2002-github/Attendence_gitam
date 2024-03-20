import React from 'react'
import AttendenceCircle from '../../components/AttendenceCircle'
export default function OverallAttendence() {
  return (
 


    <div className='percentage '>

      <h1 className='heading'>Overall Attendence</h1>
      <AttendenceCircle percentage={80} />
    </div>

   
  )
}
