import moment from "moment";
import React, { useState } from "react";
import LeftArrow from "../../assets/leftArrow.svg";
import RightArrow from "../../assets/rightArrow.svg";
import "./index.scss";


const getWeeks = (date) => {
  const currentDay = moment().date();
  const isDateThisMonth = date.isSame(moment(), "month");

  const lastDayOfMonth = date.endOf("month").day();
  const firstDayOfMonth = date.startOf("month").day();
  const daysInMonth = date.daysInMonth();

  const prevMonth = date.clone().subtract(1, "month");
  const daysInPrevMonth = prevMonth.daysInMonth();

  const days = [];

  console.log({ daysInPrevMonth, firstDayOfMonth });

  for (
    let day = daysInPrevMonth - firstDayOfMonth + 1;
    day <= daysInPrevMonth;
    day++
  ) {
    days.push({
      value: day,
      isToday: false,
      isSelectedMonth: false,
    });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    if (!isDateThisMonth) {
      days.push({
        value: day,
        isToday: false,
        isSelectedMonth: true,
      });
      continue;
    }
    days.push({
      value: day,
      isToday: day === currentDay,
      isSelectedMonth: true,
    });
  }

  for (let day = 1; day <= 6 - lastDayOfMonth; day++) {
    days.push({
      value: day,
      isToday: false,
      isSelectedMonth: false,
    });
  }

  return days;
};

const Calendar = ({ year = 2024, month = moment().month() + 1 }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [presentYear, setPresentYear] = useState(new Date().getMonth());
  const [clickedArrow, setClickedArrow] = useState(null);

  const goToNextMonth = () => {
    let nextMonth = currentMonth + 1;
    let nextYear = presentYear;

    if (nextMonth > 11) {
      nextMonth = 0;
      nextYear++;
    }

    setCurrentMonth(nextMonth);
    setClickedArrow("next");
    setTimeout(() => setClickedArrow(null), 300); // Reset clickedArrow after 300ms
    setPresentYear(nextYear);
  };

  const goToPreviousMonth = () => {
    let nextMonth = currentMonth - 1;
    let nextYear = presentYear;

    if (nextMonth < 0) {
      nextMonth = 11;
      nextYear--;
    }

    setCurrentMonth(nextMonth);
    setPresentYear(nextYear);
    setClickedArrow("next");
    setTimeout(() => setClickedArrow(null), 300); // Reset clickedArrow after 300ms
  };
  const date = moment();
  const currentYear = date.year();

  const targetDate = moment(`${currentYear}-${currentMonth + 1}`, "YYYY-MM");
  const monthName = targetDate.format("MMMM");
  const weekdays = moment.weekdaysShort();

  console.log(monthName);
  console.log(weekdays);

  const days = getWeeks(targetDate);
  console.log(days);

  return (
    
      <div>
        <div className="calender_header">
          <div className="month">
            <img
              onClick={goToPreviousMonth}
              className={clickedArrow === "prev" ? "arrow-transition" : ""}
              src={LeftArrow}
              alt="Previous Month"
            />
            <h1 className="h1__month bold">
              {moment().month(currentMonth).format("MMMM")}
            </h1>

            <img
              onClick={goToNextMonth}
              src={RightArrow}
              alt="Next Month"
              className={clickedArrow === "next" ? "arrow-transition" : ""}
            />
          </div>

          {/* <div className="buttons_container">
            <button className="buttons " >Year</button>
            <button className="buttons">Month</button>
          </div> */}
        </div>

        <div className="calendar">
          {weekdays.map((weekday) => (
            <div className="calendar__header" key={weekday}>
              <p className="bold">{weekday}</p>
            </div>
          ))}
          {days.map((day, idx) => (
            <div
              className={`calendar__day ${
                !day.isSelectedMonth
                  ? "calendar__day--is-not-selected-month"
                  : ""
              } ${day.isToday ? "calendar__day--is-today" : ""}`}
              key={idx}
            >
              <p>{day.value}</p>
            </div>
          ))}
        </div>
      </div>

  );
};

export default Calendar;
