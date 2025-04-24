import { useEffect, useState } from "react";

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

import { getDataAsArray } from "../../utils/helpers";

import Navigation from "./Navigation";
import SelectDate from "./SelectDate";
import SelectMonth from "./SelectMonth";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function NumberOfTransactions() {
  const [products, setProducts] = useState(null);
  const [selectedMonth, setselectedMonth] = useState(4);
  const [selectedDateRange, setSelectedDateRange] = useState([1, 30]);
  const [marks, setMarks] = useState([
    {
      value: 1,
      label: "1",
    },
    {
      value: 30,
      label: "30",
    },
  ]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Daily Sales",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });
  const [options, setOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Daily Sales",
      },
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (products) {
      filteredItemByRange(products);
    }
  }, [selectedDateRange, selectedMonth]);

  const fetchData = async () => {
    if (!products) {
      const items = await getDataAsArray("../data-source/AmazonSaleReport.csv");
      filteredItemByRange(items);
      setProducts(items);
    }
  };

  const handleSelectedMonth = (month, dateRange) => {
    setMarks([
      {
        value: dateRange[0],
        label: dateRange[0],
      },
      {
        value: dateRange[1],
        label: dateRange[1],
      },
    ]);
    setSelectedDateRange(dateRange);
    setselectedMonth(month);
  };

  const handleSelectedDateRange = (dateRange) =>
    setSelectedDateRange(dateRange);

  const filteredItemByRange = (items) => {
    let dailySales = [];
    items.forEach((item) => {
      if (
        new Date(item.Date).getMonth() + 1 === selectedMonth &&
        new Date(item.Date).getDate() >= selectedDateRange[0] &&
        new Date(item.Date).getDate() <= selectedDateRange[1]
      ) {
        dailySales[item.Date] =
          dailySales[item.Date] !== undefined ? ++dailySales[item.Date] : 0;
      }
    });
    setChartData({
      labels: Object.keys(dailySales),
      datasets: [
        {
          label: "Daily Sales",
          data: Object.values(dailySales),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
  };

  return (
    <>
      <div className="container d-grid gap-0 row-gap-3 mt-5">
        <div className="row">
          <div className="col-2">
            <Navigation />
          </div>
          <div className="col-8">
            <Line options={options} data={chartData} />
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4">
            <SelectMonth onSelectedMonth={handleSelectedMonth} />
          </div>
          <div className="col-4">
            <SelectDate
              date={selectedDateRange}
              marks={marks}
              onSetSelectedDateRange={handleSelectedDateRange}
            />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}

export default NumberOfTransactions;
