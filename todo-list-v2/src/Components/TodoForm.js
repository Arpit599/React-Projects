import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [inputText, setInputText] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

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
        ref={inputRef}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
