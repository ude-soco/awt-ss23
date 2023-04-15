import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import News from "./News";
import NewsContent from "./NewsContent";
import Team from "./Team";
import TeamMember from "./TeamMember";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import storeConfig from "./redux/storeConfig";

// App component
export default function App() {
  return (
    <>
      <Provider store={storeConfig}>
        <CssBaseline />
        <BrowserRouter>
          <NavigationBar />
          <Grid container sx={{ p: 2.5 }}>
            <Routes>
              <Route index element={<Home />} />

              <Route path="news">
                <Route index element={<News />} />
                <Route path=":id" element={<NewsContent />} />
              </Route>

              <Route path="team">
                <Route index element={<Team />} />
                <Route path=":id" element={<TeamMember />} />
              </Route>

              <Route path="*" element={<Navigate to={"/"} replace />} />
            </Routes>
          </Grid>
        </BrowserRouter>
      </Provider>
    </>
  );
}
