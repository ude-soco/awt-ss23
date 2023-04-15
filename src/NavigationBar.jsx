import React from "react";
import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// App component
export default function NavigationBar() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToNews = () => {
    navigate("news");
  };

  const navigateToTeam = () => {
    navigate("team");
  };

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "openlapbg.main" }}>
        <Toolbar>
          <Grid container>
            <Grid item xl={2} />
            <Grid item xs>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h5">React Lecture 2</Typography>
                </Grid>
                <Grid item>
                  <Grid container alignItems="center">
                    <Button
                      disableRipple
                      size="large"
                      color="inherit"
                      sx={{ mr: 1 }}
                      onClick={navigateToHome}
                    >
                      Home
                    </Button>

                    <Button
                      disableRipple
                      size="large"
                      color="inherit"
                      sx={{ mr: 1 }}
                      onClick={navigateToNews}
                    >
                      News
                    </Button>

                    <Button
                      disableRipple
                      size="large"
                      color="inherit"
                      sx={{ mr: 1 }}
                      onClick={navigateToTeam}
                    >
                      Team
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={2} />
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
