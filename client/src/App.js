// from: https://www.youtube.com/watch?v=K8YELRmUb5o
// https://github.com/ed-roh/mern-social-media/
/* Hey everyone! Questions and Discussions about this project 
can be asked here in discord: https://discord.gg/2FfPeEk2mX */

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
// don't have to reference "./scenes/homePage" ('./') because of statement in jsconfig.json
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode); // grab 'mode' value from global state
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);  // sets-up MUI theme
  const isAuth = Boolean(useSelector((state) => state.token));  // if token exits, we are authorized

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* a collection of HTML element and attribute style-normalizations */}
        {/* At the <head> of our document, it is added as CSS reset */}
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
          <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />
          {/* CLEAN-UP ROUTE FOR ANY OTHER URLS: */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
