import { IonAvatar, IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import back from '../../assets/icon/arrow-left.svg'
import filter from '../../assets/icon/filter.svg'
import './index.css'

interface UserProps {
    name: string
    hide: boolean
}
const MyCart: React.FC<UserProps> = ({name, hide}: UserProps) => {
  return (
    <IonHeader >
        <IonToolbar className='nav-blank'>
            <IonButtons slot='start'>
                <IonBackButton defaultHref='' text={''}></IonBackButton>
            </IonButtons>
            <IonTitle color={'primary'}>{name}</IonTitle>
            {!hide? <IonIcon icon={filter} size='large' style={{width:'30px'}} slot='end' />: <></>}
        </IonToolbar>
    </IonHeader>
  )
}

export default MyCart