import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import UpdateForm from "./UpdateForm";

function Todo({ todo, removeTodo, updateTodo }) {
  const [updateFlag, setupdateFlag] = useState(false);

  if (updateFlag) {
    return (
      <UpdateForm
        updateFlag={updateFlag}
        currentTodo={todo}
        updateTodo={updateTodo}
      />
    );
  }

  return (
    <>
      <div className="todo-text" style={{ fontSize: "1.5rem" }}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => removeTodo(todo.id)}
        />
        <TiEdit className="edit-icon" onClick={() => setupdateFlag(true)} />
      </div>
    </>
  );
}

export default Todo;
