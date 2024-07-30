import { createContext, useState } from "react";

export const LoadingContext = createContext();

const LoadingContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const loadingStart = () => {
    setIsLoading(true);
  };
  const loadingEnd = () => {
    setIsLoading(false);
  };

  const loadingContext = {
    isLoading,
    loadingStart,
    loadingEnd,
  };
  return (
    <LoadingContext.Provider value={loadingContext}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
