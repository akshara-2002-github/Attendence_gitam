import React from 'react'
import './index.scss'

const AttendenceLine = ({ percentage }) => {
    const width = 300; // Adjust width of the bar
    const height = 20; // Adjust height of the bar
    const strokeWidth = 10; // Adjust stroke width
    const progressWidth = (percentage / 100) * (width - strokeWidth); // Calculate progress width
  
    return (
      <svg className="line-percentage-bar" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <rect className="background-bar" x="0" y="0" width={width} height={height} />
        <rect className="progress-bar" x="0" y="0" width={progressWidth} height={height} />
      </svg>
    )
  };
export default AttendenceLine
 