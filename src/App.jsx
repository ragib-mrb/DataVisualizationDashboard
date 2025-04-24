import { Routes, Route, Navigate } from "react-router";
import DailySales from "./components/DailySales";
import MonthlySales from "./components/MonthlySales";
import DailyNumberOfTransactions from "./components/DailyNumberOfTransactions";
import MonthlyNumberOfTransactions from "./components/MonthlyNumberOfTransactions";

import DailyRevenueTrends from "./components/DailyRevenueTrends";
import MonthlyRevenueTrends from "./components/MonthlyRevenueTrends";

MonthlyNumberOfTransactions;

// This component is responsible for managing the Application's Routes.

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/daily-sales" replace />} />
      <Route
        path="/daily-sales"
        element={<DailySales label={"Number of Orders"} />}
      />
      <Route
        path="/monthly-sales"
        element={<MonthlySales label={"Number of Orders"} />}
      />
      <Route
        path="/daily-number-of-transactions"
        element={<DailyNumberOfTransactions label={"Number of Transactions"} />}
      />
      <Route
        path="/monthly-number-of-transactions"
        element={
          <MonthlyNumberOfTransactions label={"Number of Transactions"} />
        }
      />
      <Route
        path="/daily-revenue-trends"
        element={<DailyRevenueTrends label={"Revenue"} />}
      />
      <Route
        path="/monthly-revenue-trends"
        element={<MonthlyRevenueTrends label={"Revenue"} />}
      />
    </Routes>
  );
};

export default App;
