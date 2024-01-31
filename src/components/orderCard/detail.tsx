import { IonButton, IonCol, IonContent, IonImg, IonItem, IonList, IonRow, IonText } from '@ionic/react'
import React from 'react'
import './index.css'

interface ItemProp{
    delivery: string
    pickUp: string
    address: string
    action: string
}
// F2994A
const DetailCard = ({ delivery, pickUp, address, action}: ItemProp) => {
  let color;
    switch (action) {
      case 'Confirmed':
          color = '#F2994A';
          break
      case 'Pick':
          color = '#2dd36f';
          break;
      case 'Cancel':
          color = '#f3677f';
          break;
  }
  return (
    <div className='order-card'>
        <IonRow>
           <IonCol className='order-column' size='5'>
            <IonText><strong>Order ID</strong></IonText>
            <IonText style={{ color: '#c3bfbf' }}>Pick Up:</IonText>
            <IonText style={{ color: '#c3bfbf' }}>Delivery Date:</IonText>
            <IonText style={{ color: '#c3bfbf' }}>Address:</IonText>
           </IonCol>
           <IonCol className='order-column' size='7'>
            <IonText className='text-align' ><strong style={{ fontSize: '1.1rem', color: `${color}` }}>{action}</strong></IonText>
            <IonText className='text-align' >{pickUp}</IonText>
            <IonText className='text-align' >{delivery}</IonText>
            <IonText className='text-align' >{address}</IonText>
           </IonCol>
        </IonRow>
    </div>
  )
}

export default DetailCard