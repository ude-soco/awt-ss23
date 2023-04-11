import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Counter from "./Counter";

// App component
export default function App() {
  const [count, setCount] = useState(7);
  const [name, setName] = useState("Counter App");

  console.log(count);
  console.log(name);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetToDefault = () => {
    setCount(7);
  };

  const resetToDefaultWithPar = (value) => {
    setCount(value);
  };

  const increaseCountByTen = (event) => {
    if (event.shiftKey) {
      setCount(count + 10);
    } else {
      increaseCount();
    }
  };

  console.log(count);

  return (
    <>
      <CssBaseline />
      <Grid
        container
        sx={{ p: 3, height: "100vh" }}
        justifyContent="center"
        alignItems="center"
      >
        {Array(3)
          .fill(0)
          .map((c, index) => {
            return (
              <Counter
                key={index}
                name={name}
                count={count}
                increaseCount={increaseCount}
                descreaseCount={decreaseCount}
                resetToDefault={() => resetToDefaultWithPar(10)}
              />
            );
          })}
      </Grid>
    </>
  );
}
