import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import UpdateForm from "./UpdateForm";

function Todo({ todo, removeTodo, updateTodo, completedTodo }) {
  const [updateFlag, setupdateFlag] = useState(false);

  const submitUpdate = (updatedText) => {
    updateTodo(todo.id, updatedText);
    setupdateFlag(false);
  };

  if (updateFlag) {
    return (
      <UpdateForm
        updateFlag={updateFlag}
        currentTodo={todo}
        submitUpdate={submitUpdate}
      />
    );
  }

  return (
    <div className={todo.isCompleted ? "active-todo complete" : "active-todo"}>
      <div
        className="todo-text"
        style={{ fontSize: "1.5rem" }}
        onClick={() => completedTodo(todo.id)}
      >
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => removeTodo(todo.id)}
        />
        <TiEdit className="edit-icon" onClick={() => setupdateFlag(true)} />
      </div>
    </div>
  );
}

export default Todo;
