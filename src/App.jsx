import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import AllRoutes from "./Routes/AllRoutes.jsx";
import Appbar from "./components/Appbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="mainStyles">
      <BrowserRouter>
          <Appbar />
          <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
