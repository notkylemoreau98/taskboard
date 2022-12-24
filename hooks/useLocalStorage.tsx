import React, { useState } from "react";

function useLocalStorage(key: string, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    // Error Catch
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      // Grab item from local storage
      const item = window.localStorage.getItem(key);
      // Return item if there, else use passed in value
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
