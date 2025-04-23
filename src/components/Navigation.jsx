import { Link, NavLink } from "react-router";

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
    </div>
  );
};

export default Navigation;
