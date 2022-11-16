import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { CreateContainer } from "./components/CreateContainer/CreateContainer";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <BrowserRouter>
          <Header key="header" />
          <div className="Main">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/createItem" element={<CreateContainer />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}

export default App;
