import React from "react";

export default function Theme() {
  function darkMode() {
    document.body.style.backgroundColor = "#434c5e";
    document.body.style.color = "#d8dee9";
  }

  function lightMode() {
    document.body.style.backgroundColor = "#d8dee9";
    document.body.style.color = "434c5e";
  }

  function solarMode() {
    document.body.style.backgroundColor = "#034F84";
    document.body.style.color = "#BFD641";
  }

  function softMode() {
    document.body.style.backgroundColor = "#EFDECD";
    document.body.style.color = "#2f9e44";
  }
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "75vh",
        }}
      >
        <button type="button" class="btn btn-light mx-1" onClick={darkMode}>
          Dark
        </button>
        <button type="button" class="btn btn-light mx-1" onClick={lightMode}>
          Light
        </button>
        <button type="button" class="btn btn-light mx-1" onClick={solarMode}>
          Solarized
        </button>
        <button type="button" class="btn btn-light mx-1" onClick={softMode}>
          Soft
        </button>
      </div>
    </>
  );
}
