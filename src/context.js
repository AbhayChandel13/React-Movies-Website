import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();

// we are getting the children and that is app component in our case
//add comment 
//comment two
//comment three
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("hacker");
  const [page, setPage] = useState(1);
  const { isLoading, isError, movie } = useFetch(`&s=${query}&page=${page}`);

  return (
    <AppContext.Provider
      value={{ query, movie, setQuery, isLoading, isError, page, setPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
