import React, { createContext, useState } from 'react';

interface ItemData {
    pcs: number 
    price: number
}

export type CartData = {
    [key: string]: any;
    shirts: ItemData;
    pants: ItemData;
    beddings: ItemData;
    shoes: ItemData;
    remqty: number;
    totalqty: number;
    total: number;
}
export interface ItemInfo {
    title: string 
    qty: number
    price: number
    action?: string
}
export type CartContext = {
    addToCart: CartData;
    addItem: ({title, price, qty, action}: ItemInfo) => void;
    removeItem: ({title, price, qty, action}: ItemInfo) => void;
    setRemQty: (remqty: number) => void;
}    

const CartDataContext = createContext<CartContext | null>(null);

const CartDataProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
//    const shirtInitial = 1000
//    const pantInitial = 1000
//    const beddingInitial = 2500
//    const shoeInitial = 1500
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
    remqty: 0,
    totalqty: 0,
    total: 0
  });

  const minusItem = ({title, price, qty}: ItemInfo) => {
    console.log("qty:", qty)
    let newQty = qty === 0? 0 : qty - 1;
    // let totalqty = addToCart.shirts.pcs + addToCart.beddings.pcs + addToCart.pants.pcs + addToCart.shoes.pcs;
    let newPrice = price*newQty
    let remTotal = qty === 0? 0 : price
    console.log("data:", newPrice, price)
    setAddToCart(prevState => ({...prevState, [title]: {
                                            pcs: newQty,
                                            price: newPrice
                                        }, 
                                        total: prevState.total - remTotal, 
                                        totalqty: prevState.totalqty - qty === 0? 0 :  1
                                      }));
  };

  const addItem = ({title, price, qty, action}: ItemInfo) => {
    console.log("triggered add:", title, price, qty)
    if (action === "remove"){
      minusItem({title, price, qty});
    }else if(action === "add"){
      let total = addToCart.total + price
      let totalqty = addToCart.totalqty + 1
      let newQty = qty + 1  
      let newPrice = price*newQty
      console.log("he:", newPrice)
      setAddToCart(prevState => ({...prevState, [title]: {
                                              pcs: newQty,
                                              price: newPrice
                                          }, 
                                          total: total, 
                                          totalqty: totalqty
                                        }));
    }
  };

  const setRemQty = (remqty: number) => {
    setAddToCart(prevState => ({...prevState, remqty: remqty}));
  }

  const removeItem = ({title, price, qty}: ItemInfo) => {
    let newQty = qty - addToCart.remqty;
    let remQty = addToCart.remqty
    // let totalqty = addToCart.shirts.pcs + addToCart.beddings.pcs + addToCart.pants.pcs + addToCart.shoes.pcs;
    let newPrice = price*newQty
    let remPrice = addToCart.remqty*price
    console.log("data:", newPrice, remPrice)
    setAddToCart(prevState => ({...prevState, [title]: {
                                            pcs: newQty,
                                            price: newPrice
                                        }, 
                                        total: prevState.total - remPrice, 
                                        totalqty: prevState.totalqty - remQty
                                      }));
  };
  return (
    <CartDataContext.Provider value={{ addToCart, addItem, removeItem, setRemQty }}>
      {children}
    </CartDataContext.Provider>
  );
};

export { CartDataProvider, CartDataContext };
