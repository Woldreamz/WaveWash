import { IonButton } from '@ionic/react'
import './index.css'
import React, { useState, useContext, useEffect } from 'react'
import { CartContext, CartDataContext } from '../../context/cartContext'


interface ItemProp{
  title: string
  price: number
  qty: number
}


const Counter: React.FC<ItemProp> =({title, price, qty}:ItemProp) => {
    const { addItem, addToCart } = useContext(CartDataContext) as CartContext;
    // const [count, SetCount] = useState({
    //   value: 0,
    //   action: "",
    // });

    function decrement(){
      addItem({title: title, price: price, qty: qty, action: "remove"});
      // if(count.value === 0){
      //   SetCount({...count,
      //     value: 0,
      //     action: ""
      //   });
      // }else {
      //   SetCount({
      //     ...count,
      //     value: count.value-1,
      //     action: "remove"});
      // }
    }
    
    // console.log(addToCart[title])

    function increment(){ 
      addItem({title: title, price: price, qty: qty, action: "add"});
      // SetCount({
      //   ...count,
      //   value: count.value+1,
      //   action: "add"});
      // console.log("count:", count, title);
    }

    // useEffect(() => {
    //   addItem({title: title, price: price, qty: count.value, action: count.action});
    // }, [count])

    useEffect(() => {
      console.log("cart:", addToCart)
    }, [addToCart])
  return (
    <div className='ion-border'>
        <IonButton fill="clear" size="small" className='ion-btn-wt' onClick={() => decrement()}>
            - 
        </IonButton>
        <p style={{alignSelf: 'center'}}>{qty}</p>
        <IonButton fill="clear" size="small" className='ion-btn-wt' onClick={() => increment()}>
            +
        </IonButton>
    </div>
  )
}

export default Counter