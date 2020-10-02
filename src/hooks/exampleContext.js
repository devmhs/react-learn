import React, { createContext, useContext, useState } from 'react';

const ExamplesContext = createContext({});

export function ExamplesProvider({ children }) {
  const [example, setExample] = useState('MeuNome');
  return <ExamplesContext.Provider value={{ example }}>{children}</ExamplesContext.Provider>;
}

export function useUsers() {
  const context = useContext(ExamplesContext);
  return context;
}
