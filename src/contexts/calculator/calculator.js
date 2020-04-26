// import { entitiesReducer, initialEntitiesState } from './entities.reducer';
import React, { createContext, useContext, useReducer } from 'react';

const CalculatorContext = createContext();

export const useCalculatorContext = () => useContext(CalculatorContext);
export const useCalculatorContext = () => {
  const { state, dispatch } = useContext(TableContext);

  return {
    state,
    dispatch,
    setEditionMode: editionMode =>
      dispatch({ type: bobjectTableActions.BOBJECT_TABLE_SET_EDITION_MODE, editionMode }),
  };
};

export const CalculatorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(entitiesReducer, initialEntitiesState);
  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>{children}</CalculatorContext.Provider>
  );
};
