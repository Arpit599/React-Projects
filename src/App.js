import "./App.css";
import Header from "./MyComponents/header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";

import React, { useState, useEffect } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title, desc) => {
    let id;
    if (todos.length !== 0) {
      id = todos[todos.length - 1].id + 1;
    } else {
      id = 1;
    }

    const newTodo = {
      id: id,
      title: title,
      desc: desc,
    };

    setTodos([...todos, newTodo]);
    console.log(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const onDelete = (delTodo) => {
    setTodos(
      todos.filter((todo) => {
        return delTodo !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  return (
    <>
      <Header title="Todos List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
