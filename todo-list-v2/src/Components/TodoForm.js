import React, { useState } from "react";

function TodoForm(props) {
  const [inputText, setInputText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: inputText,
    });
    setInputText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a Todo"
        className="todo-input"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="todo-button">Add</button>
    </form>
  );
}

export default TodoForm;
