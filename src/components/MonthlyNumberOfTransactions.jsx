import { useEffect, useState } from "react";

import { getDataAsArray } from "../../utils/helpers";
import PieChart from "./charts/PieChart";
import {
  DATA_SOURCE,
  MONTHS_MAPPER,
  PIE_BACKGROUND_COLOR,
  PIE_BORDER_COLOR,
} from "../../utils/constants";

function MonthlyNumberOfTransactions({ label }) {
  const [products, setProducts] = useState(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (!products) {
      const items = await getDataAsArray(DATA_SOURCE);
      filteredItems(items);
      setProducts(items);
    }
  };

  const filteredItems = (items) => {
    let dailySales = [];
    items.map((item) => {
      let currentMonth = MONTHS_MAPPER[new Date(item.Date).getMonth() + 1];
      if (currentMonth === undefined) {
        return false;
      }
      // Calculating the Total Number of Transactions by Month
      dailySales[currentMonth] =
        dailySales[currentMonth] !== undefined
          ? dailySales[currentMonth] + parseInt(item.Qty)
          : 0;
    });

    setChartData({
      labels: Object.keys(dailySales),
      datasets: [
        {
          label: label,
          data: Object.values(dailySales),
          backgroundColor: PIE_BACKGROUND_COLOR,
          borderColor: PIE_BORDER_COLOR,
          borderWidth: 1,
        },
      ],
    });
  };

  return <PieChart chartData={chartData} />;
}

export default MonthlyNumberOfTransactions;
