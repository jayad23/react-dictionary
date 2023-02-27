import React, { createContext, ReactNode, useReducer } from "react";
import { getData } from "../api/api";
import { SearchContextProps, PropsState, PropSection } from "./ContextTypes";
import { assets } from "./utils"
import { stringManager } from "../utilities/stringManager";

const data = getData("/sections");

export const SearchContext = createContext({} as SearchContextProps);

const actionReducer = (state: PropsState, action: { type: string; payload?: any }) => {
  switch(action.type){
    case "SEARCH":
      return {
        ...state,
        searchValue: action.payload,
        homeData: data.sections.read().filter((el: PropSection) => stringManager(el.title[state.lang]).includes(stringManager(action.payload)))
      }
    case "CLEAR":
      return {
        ...state,
        searchValue: "",
        homeData: data.sections.read()
      }
    case "LANG":
      return {
        ...state,
        lang: action.payload
      }
    default: 
      return state;
  }
}


const SearchContextProvider = ({ children }: { children: ReactNode }) => {

  const initalState = {
    assets,
    searchValue: "",
    response: [],
    homeData: data.sections.read(),
    lang: 'es'
  };

  const [ state, dispatch ] = useReducer(actionReducer, initalState);

  const valueInProvider = {
    state,
    dispatch
  };

  return (
    <SearchContext.Provider value={valueInProvider}>
      { children }
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;