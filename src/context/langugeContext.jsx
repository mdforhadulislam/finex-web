const { createContext, useState } = require("react");

export const LangugeContext = createContext();

const LangugeContextProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [isBangla, setIsBangla] = useState(false);

  const english = () => {
    setIsEnglish(true);
    setIsBangla(false);
  };

  const bangla = () => {
    setIsEnglish(false);
    setIsBangla(true);
  };

  const langugeContext = {
    isEnglish,
    isBangla,english,bangla
  }

  
  return(
    <LangugeContext.Provider value={langugeContext}>{children}</LangugeContext.Provider>
  )

};


export default LangugeContextProvider