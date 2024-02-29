import { IonContent, IonImg, IonItem, IonList, IonRow, IonText } from '@ionic/react'
import React, { useContext } from 'react'
import Counter from '../counter'
import './index.css'


interface ItemProp{
    img: any
    title: string
    price: number
}

const ItemCard = ({img, title, price}: ItemProp) => {
  return (
    <div className='item-card'>
        <img src={img} alt={title} />
        <IonRow className='space-around'>
            <IonText className='text-weight'>N{price}</IonText>
            <Counter title={title}/>
        </IonRow>
    </div>
  )
}

export default ItemCard