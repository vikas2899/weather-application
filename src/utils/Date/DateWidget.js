import { useState, useEffect } from "react";

import "./DateWidget.css";

function DateWidget() {
  let [state, setState] = useState({
    dateString: "",
    month: "",
    year: "",
  });

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    let date = new Date();
    let str = `${weekday[date.getDay()]}, ${
      month[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
    setState({
      dateString: str,
      month: month[date.getMonth()],
      year: date.getFullYear(),
    });
  }, []);

  return (
    <div>
      <h2 className="date-header">{`${state.month} ${state.year}`}</h2>
      <p className="date-text">{state.dateString}</p>
    </div>
  );
}

export default DateWidget;
