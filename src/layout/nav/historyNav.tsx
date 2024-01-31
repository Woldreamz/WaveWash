import { IonAvatar, IonButton, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import cart from '../../assets/icon/cart.svg'
import bell from '../../assets/icon/bell.svg'
import './index.css'

interface UserProps {
    name: string
}
const HistoryNav: React.FC<UserProps> = ({name}: UserProps) => {
  return (
    <IonHeader >
        <IonToolbar className='nav-blank'>
            <IonTitle color={'primary'}>{name}</IonTitle>
            <IonIcon icon={bell} size='large' style={{width:'30px', marginLeft: '0.5em'}} slot='end' />
        </IonToolbar>
    </IonHeader>
  )
}

export default HistoryNav