import { IonButton, IonCol, IonContent, IonImg, IonItem, IonList, IonRow, IonText } from '@ionic/react'
import React from 'react'
import './index.css'

interface ItemProp{
    orderId: number
    orderDate: string
    pickUp: string
    total: number
    pick: boolean
    cancel: boolean
    confirm: boolean
    key_id: number
}

const OrderCard = ({orderId, orderDate, pickUp, total, pick, cancel, confirm, key_id}: ItemProp) => {
  return (
    <div className='order-card' key={key_id}>
        <IonRow>
           <IonCol className='order-column'>
            <IonText style={{ color: '#c3bfbf' }}>Order ID:</IonText>
            <IonText style={{ color: '#c3bfbf' }}>Order Date:</IonText>
            <IonText style={{ color: '#c3bfbf' }}>Pick Up:</IonText>
            <IonText style={{ color: '#c3bfbf' }}>Total Amount:</IonText>
           </IonCol>
           <IonCol className='order-column'>
            <IonText className='text-align' ><strong style={{ fontSize: '1.1rem' }}>#{orderId}</strong></IonText>
            <IonText className='text-align' >{orderDate}</IonText>
            <IonText className='text-align' >{pickUp}</IonText>
            <IonText className='text-align' ><strong style={{ color: '#006A55', fontSize: '1.4rem' }}>N{total}</strong></IonText>
           </IonCol>
        </IonRow>
        <IonRow style={{ display: 'grid'}}>
            {pick && <IonButton fill='clear' style={{ backgroundColor: 'rgb(228 243 240)', color: '#006A55', borderRadius: '10px', marginTop: '2rem', justifySelf: 'start'}}>Pick Up</IonButton>}
            {confirm && <IonButton color={'primary'} style={{ borderRadius: '10px', marginTop: '2rem', justifySelf: 'start'}}>Confirmed</IonButton>}
            {cancel && <IonButton fill='clear' style={{ backgroundColor: '#f3677f', color: 'white', borderRadius: '10px', marginTop: '2rem', justifySelf: 'end'}}>Cancel</IonButton>}
        </IonRow>
    </div>
  )
}

export default OrderCard