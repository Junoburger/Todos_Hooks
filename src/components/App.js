import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  const [resource, setResource] = useState("posts");
  const main = {
    background: 'rgb(225,225,225)',
    border: "black 10px dashed",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh"
  };
  const button = {
      background: 'rgb(300,300,300)',
      border: 'solid grey 1px',
      fontSize: '21pt',
      borderRadius: '2px',
      padding: '10px',
      cursor: 'pointer'
  }


  return (
    <div style={main}>
      <div>
        <button style={button} onClick={() => setResource("posts")}>Posts</button>&nbsp;
        <button style={button} onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
