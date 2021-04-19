import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (title === "" || desc === "") {
      alert("Title or description is not defined");
    } else {
      addTodo(title, desc);
      settitle("");
      setdesc("");
    }
  };
  return (
    <div className="mt-5 row w-100 mx-0">
      <div className="col-4 offset-4">
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="titleInput" className="form-label">
              Todo Title
            </label>
            {/* Can not use this because everytime the value changes its value is equal to title only which is empty */}
            {/* <input type="text" value={title} className="form-control" /> */}
            <input
              type="text"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descInput" className="form-label">
              Todo Description
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e) => {
                // e.target returns the specified element that triggered the event
                setdesc(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-50 d-flex btn-sm mt-2 mb-3 justify-content-center"
          >
            <span className="center">Add Todo</span>
          </button>
        </form>
      </div>
    </div>
  );
};
