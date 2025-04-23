import { useEffect, useState } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { getDataAsArray } from "../../utils/parseData";

import Navigation from "./Navigation";

ChartJS.register(ArcElement, Tooltip, Legend);

const monthsMapper = {
  4: "April",
  5: "May",
  6: "June",
};

function MonthlySales() {
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
      const items = await getDataAsArray("../data-source/AmazonSaleReport.csv");
      filteredItems(items);
      setProducts(items);
    }
  };

  const filteredItems = (items) => {
    let dailySales = [];
    items.map((item) => {
      let currentMonth = monthsMapper[new Date(item.Date).getMonth() + 1];
      if (currentMonth === undefined) {
        return false;
      }
      dailySales[currentMonth] =
        dailySales[currentMonth] !== undefined ? ++dailySales[currentMonth] : 0;
    });

    setChartData({
      labels: Object.keys(dailySales),
      datasets: [
        {
          label: "Number of Sales",
          data: Object.values(dailySales),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
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
            <Pie data={chartData} />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}

export default MonthlySales;
