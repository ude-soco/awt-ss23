import React, { useState } from "react";
import { createRoot } from "react-dom/client";

// App component
export default function App() {
  const [count, setCount] = useState(7);
  const [name, setName] = useState("Counter App");

  // console.log(count);
  // console.log(name);

  return React.createElement(
    "div",
    {},
    React.createElement("h4", null, name),
    React.createElement("h1", null, count)
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
