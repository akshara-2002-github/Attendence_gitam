import React from "react";
import "./index.scss"; // Import SCSS file;
import AttendenceLine from "../../components/AttendenceLine";

export default function CourseSchedule() {
  return (
    <div className="container">
      <h1>Course wise percentage</h1>
      <p>
        Attendnce calculation for 8th semester starts from 06 December 2023.
      </p>
      <br className="br4" />
      <div className="grid-table">
        <div class="table-header">Course Code</div>
        <div class="table-header">Course Ttile</div>
        <div class="table-header">Percentage</div>

        <div class="table-cell">HSMCH102 </div>
        <div class="table-cell">
          Universal Human Values 2: Understanding Harmony{" "}
        </div>
        <div class="table-cell">
          <AttendenceLine percentage={60} />
        </div>

        <div class="table-cell">19ECS492 </div>
        <div class="table-cell">Project Phase II</div>
        <div class="table-cell">
          <AttendenceLine percentage={45} />
        </div>

        <div class="table-cell">19ECS448P </div>
        <div class="table-cell">Secure Software Engineering Lab</div>
        <div class="table-cell">
          <AttendenceLine percentage={80} />
        </div>

        <div class="table-cell">19ECS448 </div>
        <div class="table-cell">Secure Software Engineering</div>
        <div class="table-cell">
          <AttendenceLine percentage={75} />
        </div>

        <div class="table-cell">19EME349 </div>
        <div class="table-cell">Total Quality Management </div>
        <div class="table-cell">
          <AttendenceLine percentage={50} />
        </div>
      </div>
    </div>
  );
}
