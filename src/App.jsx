import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);
  const [name, setName] = useState("Counter App");

  // console.log(count);
  // console.log(name);

  return (
    <div>
      <h1> {name} </h1>
      <h1> {count} </h1>
    </div>
  );
}

export default App;
