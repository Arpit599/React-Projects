import "./App.css";
import Header from "./MyComponents/header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

  const [todos, setTodos] = useState(initTodo);
  //We are using useEffect as changes of setTodos don't take place instantly
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Header title="Todos List" />

      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            );
          }}
        ></Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
