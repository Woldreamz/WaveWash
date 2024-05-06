import { IonAvatar, IonButton, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import cart from '../../assets/icon/cart.svg'
import bell from '../../assets/icon/bell.svg'
import './index.css'

interface UserProps {
    name: string
    profile: any
}
const ServiceNav: React.FC<UserProps> = ({name, profile}: UserProps) => {
  return (
    <IonHeader>
        <IonToolbar className='nav-blank' color={'primary-contrast'}>
            <IonAvatar slot='start' className='small-size'>
                <img src={profile} alt={name} />
            </IonAvatar>
            <IonTitle>{name}</IonTitle>
            <IonButton  slot='primary' size='small' fill='clear' className='ion-padding-start' routerLink="/tabs/services/cart">
              <IonIcon icon={cart} size='large' style={{width:'30px'}} />
            </IonButton>
            <IonButton  slot='end' size='small' fill='clear' className='ion-no-padding' routerLink="/tabs/settings/notifications">
              <IonIcon icon={bell} size='large' style={{width:'30px', marginLeft: '0.5em'}} />
            </IonButton>
        </IonToolbar>
    </IonHeader>
  )
}

export default ServiceNav