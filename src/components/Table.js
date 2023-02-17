import React from "react";

export default function Table(props) {
  const styleTable = {
    width: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <ul className="list-group list-group-horizontal pt-2" style={styleTable}>
        <li className="list-group-item">Subject</li>
        <li className="list-group-item">{props.grade}</li>
        <li className="list-group-item">{props.credit}</li>
        <button
          type="button"
          className="btn btn-danger btn-sm mx-2"
          onClick={() => props.clickHandler(props.id)}
        >
          Remove
        </button>
      </ul>
    </>
  );
}
