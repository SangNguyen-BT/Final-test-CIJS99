import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>#todo</h1>
      <ul>
        <Link to="/all" className="hidden">
          <button className="btn">All</button>
        </Link>
        <Link to="/active" className="hidden">
          <button className="btn">Active</button>
        </Link>
        <Link to="/completed" className="hidden">
          <button className="btn">Completed</button>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
