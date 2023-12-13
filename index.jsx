import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge"

function App() {
  return (
    <>
      <h1>Your components go here</h1>
      <Badge
        color="grey"
        shape="pill"
      >
        Hello
      </Badge>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


ReactDOM.createRoot(document.getElementById('root')).render(<App />);
