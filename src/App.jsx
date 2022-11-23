import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { MainContainer } from "./components/MainContainer/MainContainer";
import { Header } from "./components/Header/Header";
import { CreateContainer } from "./components/CreateContainer/CreateContainer";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import { MenuContainer } from "./components/MenuContainer/MenuContainer";
import { UnderConstruction } from "./components/UnderConstruction/UnderConstruction";

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
              <Route exact path="/" element={<MainContainer />} />
              <Route exact path="/createItem" element={<CreateContainer />} />
              <Route exact path="/menu" element={<MenuContainer />} />
              <Route exact path="/building" element={<UnderConstruction />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}

export default App;
