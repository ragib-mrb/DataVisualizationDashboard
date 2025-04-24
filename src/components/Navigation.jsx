import { NavLink } from "react-router";

// This component is responsible for managing the Application's Navigation.

const Navigation = () => {
  return (
    <div className="list-group">
      <NavLink
        to="/daily-sales"
        reloadDocument
        className="list-group-item list-group-item-action"
      >
        Daily Sales
      </NavLink>

      <NavLink
        to="/monthly-sales"
        reloadDocument
        className="list-group-item list-group-item-action"
      >
        Monthly Sales
      </NavLink>

      <NavLink
        to="/daily-number-of-transactions"
        reloadDocument
        className="list-group-item list-group-item-action"
      >
        Number of Transactions (Daily)
      </NavLink>
      <NavLink
        to="/monthly-number-of-transactions"
        reloadDocument
        className="list-group-item list-group-item-action"
      >
        Number of Transactions (Monthly)
      </NavLink>

      <NavLink
        to="/daily-revenue-trends"
        reloadDocument
        className="list-group-item list-group-item-action"
      >
        Revenue Trends (Daily)
      </NavLink>
      <NavLink
        to="/monthly-revenue-trends"
        reloadDocument
        className="list-group-item list-group-item-action"
      >
        Revenue Trends (Monthly)
      </NavLink>
    </div>
  );
};

export default Navigation;
