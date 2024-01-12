import { createContext, useState } from 'react';


interface ContextData {
    children: any
    title: string 
    amount: number
}
const CartDataContext = createContext({});

const CartDataProvider = ({ children }: any) => {
   const shirtInitial = 1000
   const pantInitial = 1000
   const beddingInitial = 2500
   const shoeInitial = 1500
  const [addToCart, setAddToCart] = useState({
    shirts:{ 
        pcs: 0,
        price: 1000
    },
    pants: {
        pcs: 0,
        price: 1000
    },
    beddings: {
        pcs: 0,
        price: 2500
    },
    shoes: {
        pcs: 0,
        price: 1500
    },
    total: 0
  });

  const addItem = ({title, amount}: ContextData) => {
    let final;
    switch (title){
        case 'Shirts':
            final = amount * shirtInitial
            break;
        case 'Pants':
            final = amount * pantInitial
            break;
        case 'Beddings':
            final = amount * beddingInitial
            break;
        case 'Shoes':
            final = amount * shoeInitial
            break;
    }
    setAddToCart({...addToCart, [title]: {
                                            pcs: amount,
                                            price: final
                                        }});
  };
  return (
    <CartDataContext.Provider value={{ addToCart, addItem }}>
      {children}
    </CartDataContext.Provider>
  );
};

export { CartDataProvider, CartDataContext };
