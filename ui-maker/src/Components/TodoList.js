import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./Todo.css";

function TodoList(props) {
  const [todos, setTodos] = useState([]);

  //Load data from the backend when this component renders for the first time and then don't
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((results) => {
        setTodos(results);
      });
  }, []);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((results) => {
        // console.log(typeof results);
        setTodos([...todos, results]);
      });
  };

  const updateTodo = (id, textVal) => {
    if (!textVal || /^\s*$/.test(textVal)) {
      return;
    }
    // console.log("Before", todos);
    const todoUpdate = todos.filter((todo) => todo.id === id)[0];
    todoUpdate.text = textVal;
    // console.log("After", todos);

    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todoUpdate),
    });
    // .then((res) => {
    //   res.json();
    // })
    // .then((results) => {
    //   setTodos([...todos]);
    // });
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    // setTodos([...todos]);
  };

  const completedTodo = (completedTodoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === completedTodoId) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-tab" style={props.style}>
        <div className="todo-container">
          <h1 className="todo-header">What's the plan for today?</h1>
          <TodoForm onSubmit={addTodo} />
          {/* {console.log("todos", todos)}
          {console.log("Below", typeof todos)}
          {console.log("Length", todos.length)} */}
          {todos.length === 0
            ? "There is no todo left"
            : todos.map((todo) => {
                return (
                  <Todo
                    todo={todo}
                    key={todo.id}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                    completedTodo={completedTodo}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
}

export default TodoList;
