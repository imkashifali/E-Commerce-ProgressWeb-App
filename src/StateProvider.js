import React, { createContext, useReducer, useContext } from "react";

//Prepare DataLayer
export const StateContext = createContext();

//wrap our app and provide Data Lawyer
export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull Information From Data
export const useStateValue = () => useContext(StateContext);
