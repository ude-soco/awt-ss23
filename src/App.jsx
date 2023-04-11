import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Counter from "./Counter";
import TextField from "@mui/material/TextField";

// App component
export default function App() {
  const [count, setCount] = useState(7);
  const [name, setName] = useState("Counter App");

  const handleChangeName = (event) => {
    console.log(event);
    setName(event.target.value);
  };

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

  return (
    <>
      <CssBaseline />
      <Grid
        container
        sx={{ p: 3, height: "100vh" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Counter
            name={name}
            count={count}
            increaseCount={increaseCount}
            descreaseCount={decreaseCount}
            resetToDefault={() => resetToDefaultWithPar(7)}
          />
          <TextField
            sx={{ mt: 2 }}
            fullWidth
            label="Type a new name here"
            variant="outlined"
            onChange={handleChangeName}
          />
        </Grid>
      </Grid>
    </>
  );
}
