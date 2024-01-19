import { IonContent, IonIcon, IonButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import back from '../../assets/icon/arrow-right.svg'
import './index.css'



interface Props {
    text: string
    icon: any
    link: string
}

const TabAcross: React.FC<Props> = (props: Props) => {

    return (
        <IonRow className='tab-across'>
            <IonRow style={{width: '70%', justifyContent: 'space-between'}}>
            <IonIcon  icon={props.icon} style={{paddingLeft: '4%'}} />
            <IonText color={'primary'} style={{textAlign: 'left', width: '80%'}}>{props.text}</IonText>
            </IonRow>
            <IonButton size='small' fill='clear' routerLink={props.link}><IonIcon  icon={back} /></IonButton>
        </IonRow>
    );
};
 
export default TabAcross;