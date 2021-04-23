import React, { useState, useEffect, useRef } from "react";

function UpdateForm(props) {
  const [inputText, setInputText] = useState(
    props.updateFlag ? props.currentTodo.text : ""
  );
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitUpdate(inputText);
    setInputText("");
  };

  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Update Todo"
        className="update-input"
        value={inputText}
        ref={inputRef}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="update-button">Update</button>
    </form>
  );
}

export default UpdateForm;
