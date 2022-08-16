import React, { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./LocationService";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setkeyword] = useState("San Francisco");

  const onSearch = (searchKeywork) => {
    setIsLoading(true);
    setkeyword(searchKeywork);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    } // don't do anything

    const formattedKeyboard = keyword.toLowerCase();

    locationRequest(formattedKeyboard)
      .then(locationTransform)
      .then((result) => setLocation(result))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
