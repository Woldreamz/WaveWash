import { IonAvatar, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import cart from '../../assets/cart.svg'
import bell from '../../assets/bell.svg'
import './index.css'

interface UserProps {
    name: string
    profile: any
}
const ServiceNav: React.FC<UserProps> = ({name, profile}: UserProps) => {
  return (
    <IonHeader >
        <IonToolbar className='nav-blank'>
            <IonAvatar slot='start'>
                <img src={profile} alt={name} />
            </IonAvatar>
            <IonTitle>{name}</IonTitle>
            <IonIcon icon={cart} size='large' style={{width:'30px'}} slot='primary' />
            <IonIcon icon={bell} size='large' style={{width:'30px', marginLeft: '0.5em'}} slot='end' />
        </IonToolbar>
    </IonHeader>
  )
}

export default ServiceNav