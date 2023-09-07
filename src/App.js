// src/App.js
import React from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <div className="container">
        <AddTask />
        <ListTask />
        {/*  <Filter /> */}
      </div>
    </div>
  );
}

export default App;
