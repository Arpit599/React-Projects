import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="row mx-0 px-0">
      <div className="col-4 offset-4">
        <h3 className="my-3 mb-4">Todos List</h3>
        {props.todos.length === 0
          ? "There is no todo left"
          : props.todos.map((todo) => {
              return (
                <>
                  <TodoItem
                    todo={todo}
                    key={todo.id}
                    onDelete={props.onDelete}
                  ></TodoItem>
                  <hr />
                </>
              );
            })}
      </div>
    </div>
  );
};
