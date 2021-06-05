import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/services" exact component={Services}></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/sign-up" component={Signup}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
