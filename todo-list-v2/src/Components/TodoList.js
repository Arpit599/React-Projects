import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [...todos, todo];
    setTodos([...todos, todo]);
    console.log(...newTodos);
  };

  const updateTodo = (id, textVal) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = textVal;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (delTodoId) => {
    setTodos(todos.filter((todo) => todo.id !== delTodoId));
    console.log(...todos);
  };

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      {todos.length == 0
        ? "There is no todo left"
        : todos.map((todo) => {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
              />
            );
          })}
    </div>
  );
}

export default TodoList;
