import React, { useEffect } from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";

const Counter = ({
  name,
  count,
  increaseCount,
  decreaseCount,
  resetToDefault,
  handleChangeName,
}) => {
  // // Mode 0: ComponentDidMount
  // useEffect(() => {
  //   console.log("Counter mounted and will update when any state changes");
  // });

  // // Mode 1: ComponentDidMount
  // useEffect(() => {
  //   console.log("Counter mounted and will only mount once");
  // }, []);

  // // Mode 2: ComponentDidUpdate
  // useEffect(() => {
  //   console.log("Counter mounted and will update when 'count' updates");
  // }, [count]);

  // Mode 3: ComponentWillUnmount
  useEffect(() => {
    console.log("Counter mounted and will only mount once");

    // Clean up function
    return () => {
      console.log("Counter has unmounted");
    };
  }, []);

  // // Mode 4: ComponentDidMount + ComponentDidUpdate + ComponentWillUnmount (DANGEROUS!)
  // useEffect(() => {
  //   console.log(`Counter mounted ${count}`);

  //   // Clean up function
  //   return () => {
  //     console.log(`Counter unmounted ${count}`);
  //   };
  // });

  return (
    <>
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
          p: 7,
          m: 1,
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
            <Button variant="contained" onClick={increaseCount}>
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
              onClick={resetToDefault}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        label="Type a new name here"
        variant="outlined"
        onChange={handleChangeName}
      />
    </>
  );
};

export default Counter;
