import { IonButton } from '@ionic/react'
import './index.css'
import React, { useState, useContext } from 'react'
import { CartContext, CartDataContext } from '../../context/cartContext'


interface ItemProp{
  title: string
}

const Counter: React.FC<ItemProp> =({title}:ItemProp) => {
    const { addItem } = useContext(CartDataContext) as CartContext;
    const [count, SetCount] = useState(0)
    let qty = count;
    function decrement(){
      if(count === 0){
        SetCount(0);
      }else {
        SetCount(count-1);
      }
      addItem({title, qty});
    }
    function increment(){
      SetCount(count+1);
      addItem({title, qty});
    }
  return (
    <div className='ion-border'>
        <IonButton fill="clear" size="small" className='ion-btn-wt' onClick={() => decrement}>
            - 
        </IonButton>
        <p style={{alignSelf: 'center'}}>{count}</p>
        <IonButton fill="clear" size="small" className='ion-btn-wt' onClick={() => increment}>
            +
        </IonButton>
    </div>
  )
}

export default Counter