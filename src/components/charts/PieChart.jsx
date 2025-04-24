import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import Heading from "../Heading";
import Navigation from "../Navigation";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ chartData }) => {
  return (
    <div className="container d-grid gap-0 row-gap-3 mt-5">
      <Heading />
      <div className="row">
        <div className="col-3">
          <Navigation />
        </div>
        <div className="col-5">
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
