import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { CreateContainer } from "./components/CreateContainer/CreateContainer";

function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <BrowserRouter>
          <Header key="header" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/createItem" element={<CreateContainer />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}

export default App;
