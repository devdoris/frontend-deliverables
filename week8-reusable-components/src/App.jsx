import React, { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import InputField from "./components/InputField";
import Checkbox from "./components/Checkbox";
import Table from "./components/Table";
import Alert from "./components/Alert";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
`;

function App() {
  const [name, setName] = useState("");
  const [accepted, setAccepted] = useState(false);

  const tableData = [
    { name: "Doris", course: "React" },
    { name: "John", course: "JavaScript" },
  ];

  const handleSubmit = () => {
    if (accepted && name) {
      alert(`Hello ${name}, you are enrolled!`);
    } else {
      alert("Please enter your name and accept terms.");
    }
  };

  return (
    <Container>
      <h1>Week 8: Reusable Components</h1>

      <Alert message="Welcome to Doris's reusable components!" />

      <Card
        title="Reusable Card"
        description="This card can be used anywhere."
      />

      <InputField
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Checkbox
        label="Accept terms"
        checked={accepted}
        onChange={(e) => setAccepted(e.target.checked)}
      />

      <Button text="Submit" onClick={handleSubmit} />

      <Table data={tableData} />
    </Container>
  );
}

export default App;