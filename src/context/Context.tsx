import React, { createContext, ReactNode, useState, useReducer } from "react";
import sections from "../base/sections.json";

type SearchContextProps = {
  state: {
    response: Array<any>;
    handleSearch: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>,
    searchValue: string;
    assets: {
      navIcon: string;
      nerdyIcon: string;
      loadingIcon: string;
    }
  }
  dispatch: React.Dispatch<any>;
}

export const SearchContext = createContext({} as SearchContextProps);

const assets = {
  nerdyIcon: "https://cdna.artstation.com/p/assets/images/images/023/576/078/original/ying-chen-me-optimize.gif?1579652163",
  navIcon: "https://www.icegif.com/wp-content/uploads/2022/04/icegif-1373.gif",
  loadingIcon: "https://i.gifer.com/origin/a1/a1c78c7b60a5f9a6a9a77d876baae618_w200."
};

const actionReducer = (state:any, action: any) => {
  switch(action.type){
    case "SECTION":
      return {
        ...state,
        data: sections?.sections
      }
    default: 
      return state;

  }
}


const SearchContextProvider = ({ children }: { children: ReactNode }) => {
  const [ searchValue, setSearchValue ] = useState("");
  const [ results, setResults ] = useState([]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = searchValue;

    if(e.key === "Enter"){
      console.log("value in search is:", value);
    }
  };

  const initalState = {
    assets,
    searchValue: "",
    handleSearch,
    setSearchValue,
    response: []
  }

  const [ state, dispatch ] = useReducer(actionReducer, initalState);

  const valueInProvider = {
    state,
    dispatch
  }

  return (
    <SearchContext.Provider value={valueInProvider}>
      { children }
    </SearchContext.Provider>
  )
};

export default SearchContextProvider;