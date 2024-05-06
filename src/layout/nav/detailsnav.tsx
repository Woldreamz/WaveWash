import { IonAvatar, IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import './index.css'

interface UserProps {
    name: string
}
const DetailsNav: React.FC<UserProps> = ({name}: UserProps) => {
  return (
    <IonHeader >
        <IonToolbar className='nav-blank' color={'primary-contrast'}>
            <IonButtons slot='start'>
              <IonBackButton defaultHref={'/tabs/settings/orders/'}></IonBackButton>
            </IonButtons>
            <IonTitle color={'primary'}>{name}</IonTitle>
        </IonToolbar>
    </IonHeader>
  )
}

export default DetailsNav