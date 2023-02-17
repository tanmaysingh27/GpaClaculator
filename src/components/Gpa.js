import React, { useState } from "react";
import Table from "./Table";

export default function Gpa() {
  const getInitialState = () => {
    const credit = "Orange";
    return credit;
  };
  const [calculatedGpa, setcalculatedGpa] = useState("0");
  const [credit, setCredit] = useState(getInitialState);
  const [grade, setGrade] = useState();
  const [subject, setSubject] = useState([]);
  const [showGpa, setshowGpa] = useState(false);
  const [displayGpa, setDisplayGpa] = useState("none");

  const addCredit = (event) => {
    setCredit(event.target.value);
  };

  const addGrade = (event) => {
    setGrade(event.target.value);
  };

  const addSubject = () => {
    setSubject((prevSubject) => {
      return [
        ...prevSubject,
        { grade: grade, credit: credit, id: subject.length + 1 },
      ];
    });
  };
  function clickHandler(key) {
    setSubject((prevSubject) => {
      return prevSubject.filter((subject) => subject.id !== key);
    });
    setDisplayGpa("none");
  }

  const claculateGpa = () => {
    let tempGradeValue = 0;
    let tempSum = 0;
    let tempCredit = 0;

    for (let i = 0; i < subject.length; i++) {
      let temp = subject[i];
      switch (temp.grade) {
        case "S":
          tempGradeValue = 10 * Number(temp.credit);
          break;
        case "A":
          tempGradeValue = 9 * Number(temp.credit);
          break;
        case "B":
          tempGradeValue = 8 * Number(temp.credit);
          break;
        case "C":
          tempGradeValue = 7 * Number(temp.credit);
          break;
        case "D":
          tempGradeValue = 6 * Number(temp.credit);
          break;
        case "E":
          tempGradeValue = 5 * Number(temp.credit);
          break;
        case "F":
          tempGradeValue = 0 * Number(temp.credit);
          break;
        case "N":
          tempGradeValue = 0 * Number(temp.credit);
          break;

        default:
          break;
      }
      tempSum = tempSum + tempGradeValue;
      tempCredit += Number(temp.credit);
    }
    if (tempSum === 0) {
      setcalculatedGpa("Put Values");
    } else {
      setcalculatedGpa(tempSum / tempCredit);
    }
    setshowGpa(true);
    setDisplayGpa("block");
  };

  const styleInput = {
    width: "45%",
  };
  const styleButton = {
    width: "10%",
  };
  const centre = {
    height: "20px" /* Magic here */,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    fontSize: "2rem",
    maxWidth: "10%",
    textAlign: "center",
    display: displayGpa,
  };

  return (
    <>
      <div style={centre}>
        <div className="input-group align-items-start" style={styleInput}>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
            onChange={addGrade}
          />
          <select
            className="form-select"
            id="selectCredit"
            value={credit}
            onChange={addCredit}
          >
            <option defaultValue={0}>Choose Credit</option>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <br />
      <div className="mb-2" style={centre}>
        <button
          className="btn btn-primary my-5mx-2"
          style={styleButton}
          onClick={addSubject}
        >
          Add Subject
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          style={styleButton}
          onClick={claculateGpa}
        >
          Calculate
        </button>
      </div>
      {subject.map(({ grade, credit, id }) => (
        <Table
          key={id}
          grade={grade}
          credit={credit}
          id={id}
          clickHandler={clickHandler}
        />
      ))}
      <div className="mt-2 p-1">
        <h1 className="card text-bg-danger mx-auto" style={cardStyle}>
          {showGpa ? calculatedGpa : "0"}
        </h1>
      </div>
    </>
  );
}
