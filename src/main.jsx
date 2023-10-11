import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import App from "./App.jsx";
import { ChatProvider } from "./context/chatContext.jsx";

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#F3AC54",
    },
    // textColors: {
    //   main: #FCF8F7
    // }
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <ChatProvider>
          <CssBaseline />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <App />
          </LocalizationProvider>
        </ChatProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
