import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router";

import "bootstrap/dist/css/bootstrap.css";

import "./app.css";
import App from "./App.jsx";
import DailySales from "./components/DailySales.jsx";
import MonthlySales from "./components/MonthlySales.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/daily-sales" element={<DailySales />} />
        <Route path="/monthly-sales" element={<MonthlySales />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
