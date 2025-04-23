import { useEffect, useState } from "react";
import { getDataAsArray } from "../utils/parseData";

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

import { labels } from "../utils/labels";
import RangeSelector from "./components/RangeSelector";
import Navigation from "./components/Navigation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
    },
  },
};

export const dataChart = {
  labels,
  datasets: [
    {
      label: "Daily Sales",
      data: [10, 20, 30, 40, 50, 60, 70],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    // {
    //   label: "Dataset 2",
    //   data: [70, 60, 50, 40, 30, 20, 10],
    //   borderColor: "rgb(53, 162, 235)",
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
  ],
};

function App() {
  const [data, setData] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState([5, 25]);
  const [selectedMonth, setselectedMonth] = useState(5);

  const filteredItemByRange = (items) => {
    const dailySales = [];

    const filteredItems = items.filter((item) => {
      if (
        new Date(item.Date).getMonth() + 1 === selectedMonth &&
        new Date(item.Date).getDate() >= selectedDateRange[0] &&
        new Date(item.Date).getDate() <= selectedDateRange[1]
      ) {
        dailySales[item.Date] =
          dailySales[item.Date] !== undefined ? ++dailySales[item.Date] : 0;

        return true;
      }

      return false;
    });

    return { filteredItems, dailySales };
  };

  const fetchData = async () => {
    if (!data) {
      const items = await getDataAsArray("../data-source/AmazonSaleReport.csv");

      const filteredData = filteredItemByRange(items);

      console.log(
        "filteredItems",
        filteredData.filteredItems,
        filteredData.dailySales
      );

      setData(filteredData.filteredItems);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container d-grid gap-0 row-gap-3">
        <div className="row">
          <div className="col-2">
            <Navigation />
          </div>
          <div className="col-8">
            <Line options={options} data={dataChart} />
          </div>
          <div className="col-2"></div>
        </div>
        <RangeSelector />
      </div>
    </>
  );
}

export default App;
