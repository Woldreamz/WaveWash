import { IonButton } from '@ionic/react'
import './index.css'
import React, { useState, useContext, useEffect } from 'react'
import { CartContext, CartDataContext } from '../../context/cartContext'


interface digit {
  total: number
}

const FillCounter: React.FC<digit> =({total}: digit) => {
  const { addToCart, setRemQty } = useContext(CartDataContext) as CartContext;
  const [count, SetCount] = useState<number>(addToCart.remqty)

  function increment(){
    if(count+1 > total){
      SetCount(total);
    } else {
      SetCount(count+1);
    }
  }

  function decrement(){
    if(count === 0){
      SetCount(0);
    } else {
      SetCount(count-1);    
    }
  }

  useEffect(() => {
    setRemQty(count);
  }, [count])

  return (
    <div className='ion-clear'>
        <IonButton className='ion-button-smaller' onClick={() => decrement()}>
            - 
        </IonButton>
        <p style={{alignSelf: 'center', color: 'black', fontWeight: 700}}>{count}</p>
        <IonButton className='ion-button-smaller' onClick={() => increment()}>
            +
        </IonButton>
    </div>
  )
}

export default FillCounter