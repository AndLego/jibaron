import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { reducer } from "./context/reducer";
import { initialState } from "./context/initialState";
import { StateProvider } from "./context/StateProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);
