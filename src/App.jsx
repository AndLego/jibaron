import React from "react";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateContainer } from "./components/CreateContainer/CreateContainer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/createItem" element={<CreateContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
