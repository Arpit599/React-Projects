import React, { useState } from "react";

function UpdateForm(props) {
  const [inputText, setInputText] = useState(
    props.updateFlag ? props.currentTodo.text : ""
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateTodo(props.currentTodo.id, inputText);
    setInputText("");
  };

  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Update  Todo"
        className="update-input"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="update-button">Update</button>
    </form>
  );
}

export default UpdateForm;
