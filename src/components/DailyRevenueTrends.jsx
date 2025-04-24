import { useEffect, useState } from "react";

import { getDataAsArray } from "../../utils/helpers";
import { DATA_SOURCE } from "../../utils/constants";
import LineChart from "./charts/LineChart";

function DailyRevenueTrends({ label }) {
  const [orders, setOrders] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState([1, 30]);
  const [selectedMonth, setSelectedMonth] = useState(4);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

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

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (orders) {
      filterItems(orders);
    }
  }, [selectedDateRange, selectedMonth]);

  const fetchData = async () => {
    if (!orders) {
      const items = await getDataAsArray(DATA_SOURCE);
      filterItems(items);
      setOrders(items);
    }
  };

  const filterItems = (items) => {
    let dailySales = [];

    items.forEach((item) => {
      if (
        new Date(item.Date).getMonth() + 1 === selectedMonth &&
        new Date(item.Date).getDate() >= selectedDateRange[0] &&
        new Date(item.Date).getDate() <= selectedDateRange[1] &&
        item.Qty > 0
      ) {
        dailySales[item.Date] =
          dailySales[item.Date] !== undefined ? item.Amount * item.Qty : 0;
      }
    });

    setChartData({
      labels: Object.keys(dailySales),
      datasets: [
        {
          label: label,
          data: Object.values(dailySales),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
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
    setSelectedMonth(month);
  };

  const handleSelectedDateRange = (dateRange) =>
    setSelectedDateRange(dateRange);

  return (
    <LineChart
      chartData={chartData}
      marks={marks}
      selectedDateRange={selectedDateRange}
      onSelectedMonth={handleSelectedMonth}
      onSelectedDateRange={handleSelectedDateRange}
    />
  );
}

export default DailyRevenueTrends;
