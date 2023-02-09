import React, { createContext, ReactNode, useState, useReducer } from "react";
import sections from "../base/sections.json";
import { SearchContextProps, PropsState, PropSection } from "./ContextTypes";
import { assets } from "./utils"
import { stringManager } from "../utilities/stringManager";


export const SearchContext = createContext({} as SearchContextProps);

const actionReducer = (state: PropsState, action: { type: string; payload?: any }) => {
  switch(action.type){
    case "SEARCH":
      return {
        ...state,
        searchValue: action.payload,
        homeData: sections.sections.filter((el: PropSection) => stringManager(el.title[state.lang]).includes(stringManager(action.payload)))
      }
    case "CLEAR":
      return {
        ...state,
        searchValue: "",
        homeData: sections?.sections
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
    homeData: sections?.sections,
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