import { createContext, useState } from 'react';


interface ContextData {
    children: any
    title: string 
    data: string | number
}
const RemoveDataContext = createContext({});

const RemoveDataProvider = ({ children }: any) => {
   const[remove, setRemove] = useState({
    img: null,
    title: '',
    pcs: 0,
    price: 0
})

  const addItem = ({title, data}: ContextData) => {
    setRemove({...remove, [title]: data});
  };
  return (
    <RemoveDataContext.Provider value={{ remove, addItem }}>
      {children}
    </RemoveDataContext.Provider>
  );
};

export { RemoveDataProvider, RemoveDataContext };
