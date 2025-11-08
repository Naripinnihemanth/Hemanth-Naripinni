import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Cursor from "./Components/Cursor/Cursor.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
    {/* <Cursor></Cursor> */}
  </StrictMode>
);
