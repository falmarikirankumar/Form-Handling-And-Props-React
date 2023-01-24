import React, { useState } from "react";

const FormData = () => {
  const [click, setClick] = useState(true);
  const [state, setState] = useState({
    Name: "",
    Department: "",
    Rating: "",
    Employees: [],
  });

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(e.target.name + " : " + e.target.value);
  };

  const btnClick = () => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state);
    const obj = {
      Name: state.Name,
      Department: state.Department,
      Rating: state.Rating,
    };

    const arr = state.Employees;
    arr.push(obj);
    setState({ Employees: arr });
    // setClick(false);
    btnClick();
  };

  if (click) {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>EMPLOYEE FEEDBACK FORM</h1>
        <form className="form-1" id="form">
          <label htmlFor="" className="labels">
            Name :
            <input
              type="text"
              name="Name"
              value={state.Name}
              onChange={changeHandler}
            />
          </label>

          <br />
          <label htmlFor="" className="labels">
            Department :
            <input
              type="text"
              name="Department"
              value={state.Department}
              onChange={changeHandler}
            />
          </label>

          <br />
          <label htmlFor="" className="labels">
            Rating :
            <input
              type="number"
              name="Rating"
              value={state.Rating}
              onChange={changeHandler}
            />
          </label>

          <br />
          <button onClick={submitHandler}>Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <div className="main">
          {state.Employees.map((value, index) => {
            return (
              <div className="div2" key={index}>
                <span>
                  Name : {value.Name} <br />
                  Department : {value.Department} <br />
                  Rating :{value.Rating}
                  <br />
                </span>
              </div>
            );
          })}
        </div>
        <div className="div-go">
          <button onClick={btnClick}>Go Back</button>
        </div>
      </div>
    );
  }
};

export default FormData;
