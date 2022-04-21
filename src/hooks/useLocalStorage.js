import { useState, useEffect } from "react";
import { setLocalStorage, getLocalStorage } from "../Utils/localStorageUtils";

// need help on

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const localStorageValue = getLocalStorage(key);
    if (localStorageValue === " ") {
      return initialValue;
    }
    return localStorageValue;
  });

  useEffect(() => {
    setLocalStorage(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
