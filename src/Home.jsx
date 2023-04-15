import { Typography, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import Counter from "./Counter";

// Home component
export default function Home() {
  const [count, setCount] = useState(7);
  const [name, setName] = useState("Counter App");
  const [showCounter, setShowCounter] = useState(true);

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

  const handleShowCounter = () => {
    setShowCounter((prevState) => !prevState);
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center" sx={{ pt: 3 }}>
            Home
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" align="center" sx={{ pb: 3 }}>
            Meet our ground breaking counter application!
          </Typography>
        </Grid>
        <Grid container justifyContent="center" sx={{ pb: 2 }}>
          <Button variant="contained" onClick={handleShowCounter}>
            {showCounter ? "Hide Counter" : "Show Counter"}
          </Button>
        </Grid>

        {Boolean(showCounter) && (
          <>
            <Grid item>
              <Counter
                name={name}
                count={count}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
                resetToDefault={resetToDefault}
                handleChangeName={handleChangeName}
              />
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}
