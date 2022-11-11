import React from "react";
import { useInitialState } from "../hook/useInitialState";

export const AppContext = React.createContext();

export const AppProvider = (props) => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      {props.children}
    </AppContext.Provider>
  );
};

// // Prepare the dataLayer
// export const StateContext = React.createContext();

// // Wrap our app and provide the Data layer
// export const StateProvider = ({ reducer, initialState, children }) => (
//   <StateContext.Provider value={React.useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );
