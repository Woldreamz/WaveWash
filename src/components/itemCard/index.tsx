import { IonContent, IonImg, IonItem, IonList, IonRow, IonText } from '@ionic/react'
import React, { useContext } from 'react'
import Counter from '../counter'
import './index.css'


interface ItemProp{
    img: any
    title: string
    price: number
    qty: number
}

const ItemCard = ({img, title, price, qty}: ItemProp) => {
  return (
    <div className='item-card'>
        <img src={img} alt={title} />
        <IonRow className='space-around'>
            <IonText className='text-weight'>N{price}</IonText>
            <Counter title={title.toLowerCase()} price={price} qty={qty} />
        </IonRow>
    </div>
  )
}

export default ItemCard