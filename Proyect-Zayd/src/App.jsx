import React from "react";
import ReactDOM from "react-dom";
import Countdown from "./Countdown/Countdown";

const startDate = new Date("2023-03-01T09:00:00");
const endDate = new Date("2023-03-05T17:00:00");

ReactDOM.render(
  <Countdown startDate={startDate} endDate={endDate} />,
  document.getElementById("root")
);