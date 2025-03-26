import React, { createContext, useState } from 'react';

const ResultContext = createContext(null);

const ResultProvider = ({ children }) => {
  const [result, setResult] = useState(null);

  const updateResult = (newData) => setResult(newData);

  return (
    <ResultContext.Provider value={{ result, updateResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export { ResultContext, ResultProvider };