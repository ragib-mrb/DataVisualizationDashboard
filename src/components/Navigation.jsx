import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div className="list-group">
      <NavLink
        to="/daily-sales"
        className="list-group-item list-group-item-action"
      >
        Daily Sales
      </NavLink>

      <NavLink
        to="/monthly-sales"
        className="list-group-item list-group-item-action"
      >
        Monthly Sales
      </NavLink>

      <NavLink
        to="/number-of-transactions"
        className="list-group-item list-group-item-action"
      >
        Number of Transactions
      </NavLink>
      {/* <NavLink
        to="/revenue-trends"
        className="list-group-item list-group-item-action"
      >
        Revenue Trends
      </NavLink> */}
    </div>
  );
};

export default Navigation;
