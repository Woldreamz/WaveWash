import { IonAvatar, IonHeader, IonIcon, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import cart from '../../assets/icon/cart.svg'
import bell from '../../assets/icon/bell.svg'
import './index.css'

interface UserProps {
    name: string
    profile: any
}
const UserNav: React.FC<UserProps> = ({name, profile}: UserProps) => {
  return (
    <IonHeader >
        <IonToolbar className='nav-blank'>
            <IonAvatar slot='start'>
                <img src={profile} alt={name} />
            </IonAvatar>
            <IonText style={{paddingLeft: '3%'}}>{name}</IonText>
            <IonIcon icon={cart} size='large' style={{width:'30px'}} slot='primary' />
            <IonIcon icon={bell} size='large' style={{width:'30px', marginLeft: '0.5em'}} slot='end' />
        </IonToolbar>
    </IonHeader>
  )
}

export default UserNav