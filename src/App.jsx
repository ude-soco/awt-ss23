import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

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
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            bgcolor: "#FFC53A",
            maxWidth: 380,
            minWidth: 380,
            borderRadius: 3,
            padding: 7
          }}
        >
          <Typography variant="h4" align="center" sx={{ mb: 6 }}>
            {name}
          </Typography>

          <Typography variant="h1" sx={{ mb: 6 }}>
            {count}
          </Typography>
          <Grid container justifyContent="center" spacing={1}>
            <Grid item>
              <Button
                variant="contained"
                onClick={(event) => increaseCountByTen(event)}
              >
                Increase
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={decreaseCount}
              >
                Decrease
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => resetToDefaultWithPar(7)}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
