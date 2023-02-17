import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            Gpa-Calculator
          </Link>
        </div>
      </nav>
    </div>
  );
}
