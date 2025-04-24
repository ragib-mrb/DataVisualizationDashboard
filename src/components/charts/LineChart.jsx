import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import Navigation from "../Navigation";
import SelectDate from "../SelectDate";
import SelectMonth from "../SelectMonth";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const LineChart = ({
  chartData,
  marks,
  onSelectedMonth,
  selectedDateRange,
  onSelectedDateRange,
}) => {
  return (
    <div className="container d-grid gap-0 row-gap-3 mt-5">
      <div className="row">
        <div className="col-2">
          <Navigation />
        </div>
        <div className="col-8">
          <Line options={options} data={chartData} />
        </div>
        <div className="col-2"></div>``
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-4">
          <SelectMonth onSelectedMonth={onSelectedMonth} />
        </div>
        <div className="col-4">
          <SelectDate
            date={selectedDateRange}
            marks={marks}
            onSelectedDateRange={onSelectedDateRange}
          />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default LineChart;
