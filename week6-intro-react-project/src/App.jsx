import React, { useState, useEffect, Component } from "react";
import "./App.css";

function UserCard({ name }) {
  return (
    <>
      <h2>Welcome, {name}!</h2>
    </>
  );
}

class Message extends Component {
  render() {
    return <p>Enter your name below to update the name above.</p>;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Doris");

  useEffect(() => {
    console.log("Component Mounted or Updated");
  }, [count]);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
    <div className="app">
    <div className="card">
      <h1 className="title">Intro to React Project</h1>

      <UserCard name={name} />
      <Message />

      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
        className="input"
      />

      <p className="counter">Counter: {count}</p>

      <button onClick={increaseCount} className="btn">
        Increase Counter
      </button>
    </div>
    </div>
    </>
  );
}

export default App;