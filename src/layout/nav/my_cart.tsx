import { IonAvatar, IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import back from '../../assets/icon/arrow-left.svg'
import filter from '../../assets/icon/filter.svg'
import './index.css'

interface UserProps {
    name: string
    hide: boolean
    path: string
}
const MyCart: React.FC<UserProps> = ({name, hide, path}: UserProps) => {
  return (
    <IonHeader >
        <IonToolbar className='nav-blank' color={'primary-contrast'}>
            <IonButtons slot='start'>
                <IonBackButton defaultHref={path? path : '/tabs/services'} text={''}></IonBackButton>
            </IonButtons>
            <IonTitle color={'primary'}>{name}</IonTitle>
            {!hide? <IonIcon icon={filter} size='large' style={{width:'30px'}} slot='end' />: <></>}
        </IonToolbar>
    </IonHeader>
  )
}

export default MyCart