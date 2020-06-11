import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Home from "./screens/Home";
import Movies from "./screens/Movies";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/Home/" exact component={Home} />
      <Route path="/Movies/" exact component={Movies} />
    </Router>
  );
}

export default App;
