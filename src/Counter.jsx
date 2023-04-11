import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Counter = ({
  name,
  count,
  increaseCount,
  decreaseCount,
  resetToDefault
}) => {
  return (
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
        m: 1
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
          <Button variant="contained" color="secondary" onClick={decreaseCount}>
            Decrease
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => resetToDefault(7)}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Counter;
