import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ResumeProvider from "./context/ResumeContext";

import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResumeProvider>
        <App />
        <Toaster position="bottom-right" />
      </ResumeProvider>
    </BrowserRouter>
  </React.StrictMode>
);