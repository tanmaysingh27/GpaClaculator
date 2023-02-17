import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/home" type="button" className="btn btn-outline-info">
          Click Here to calculate GPA
        </Link>
      </div>
    </>
  );
}
