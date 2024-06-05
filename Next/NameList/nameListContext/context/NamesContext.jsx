import { createContext, useState } from 'react';

// Créer le context
const NamesContext = createContext();

// Créer le provider
export const NamesProvider = ({ children }) => {
  const [names, setNames] = useState([]);

  const addName = (name) => {
    setNames([...names, name]);
  };

  const deleteName = (index) => {
    setNames([
      ...names.slice(0, index),
      ...names.slice(index + 1, names.length)
    ]);
  }

  const editName = (index) =>{

  }

  return (
    <NamesContext.Provider value={{ names, addName, deleteName, editName}}>
      {children}
    </NamesContext.Provider>
  );
};

export default NamesContext;
