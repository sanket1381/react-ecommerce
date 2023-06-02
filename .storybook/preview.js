import { Button } from "@mui/material";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "../src/App.css";
import "../src/index.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const theme = createTheme();

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Story />
        <Routes>
          <Route path="/" element={<Button />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  ),
];
