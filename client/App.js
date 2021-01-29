import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
// import ReactDom from 'react-dom'

function App() {
  // workout name
  const [workout, setWorkout] = useState("");
  // workout img
  const [image, setImage] = useState("");
  // number of excercies
  const [number, setNumber] = useState(0);
  // workout description
  const [description, setDescription] = useState("");
  // next - functianality - page reload with new content
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
