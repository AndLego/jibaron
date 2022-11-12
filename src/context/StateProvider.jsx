import React from "react";
/* Creating a context and a provider. */

export const StateContext = React.createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={React.useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//hook to use context
export const useStateValue = () => React.useContext(StateContext);
