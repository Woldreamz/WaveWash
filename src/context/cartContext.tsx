import React, { createContext, useState } from 'react';

interface ItemData {
    pcs: number 
    price: number
}

type CartData = {
    shirts: ItemData;
    pants: ItemData;
    beddings: ItemData;
    shoes: ItemData;
    total: number
}
export interface ItemInfo {
    title: string 
    qty: number
}
export type CartContext = {
    addToCart: CartData;
    addItem: ({title, qty}: ItemInfo) => void;
}    

const CartDataContext = createContext<CartContext | null>(null);

const CartDataProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
   const shirtInitial = 1000
   const pantInitial = 1000
   const beddingInitial = 2500
   const shoeInitial = 1500
  const [addToCart, setAddToCart] = useState<CartData>({
    shirts:{ 
        pcs: 0,
        price: 0
    },
    pants: {
        pcs: 0,
        price: 0
    },
    beddings: {
        pcs: 0,
        price: 0
    },
    shoes: {
        pcs: 0,
        price: 0
    },
    total: 0
  });

  const addItem = ({title, qty}: ItemInfo) => {
    let final;
    switch (title){
        case 'Shirts':
            final = qty * shirtInitial
            break;
        case 'Pants':
            final = qty * pantInitial
            break;
        case 'Beddings':
            final = qty * beddingInitial
            break;
        case 'Shoes':
            final = qty * shoeInitial
            break;
    }
    setAddToCart({...addToCart, [title]: {
                                            pcs: qty,
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
