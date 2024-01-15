import { IonAvatar, IonButton, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonModal, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, {useRef, useState} from 'react';
import done from '../../assets/done.svg'
import './index.css'

const DoneModal: React.FC = () => {
    const doneModal = useRef<HTMLIonModalElement>(null);


    return (
        <IonModal breakpoints={[0, 0.4]} initialBreakpoint={0.4} ref={doneModal} trigger='done-modal'>
            <IonHeader style={{height: '3rem', boxShadow: '0 0 7px grey', padding: '7%'}}>
                <IonTitle>
                    Confirmed
                </IonTitle>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonRow style={{display: 'flex', 'gap': '4%'}}>
                    <IonCol size='12' className='spec-col' style={{marginTop: '1rem', marginBottom: '0.5rem'}}>
                        <IonImg className='item-center-self' style={{height: '6rem', width: '6rem'}} src={done} />
                    </IonCol>
                    <IonCol size='12' className='spec-col' style={{marginBottom: '2.5rem'}}>
                        <IonText className='item-center-self' style={{textAlign: 'center', fontSize: '1.3rem'}}>
                            Your Rider is on the way
                        </IonText>
                    </IonCol>
                    <IonCol size='12' className='spec-col'>
                        <IonButton  onClick={() => doneModal.current?.dismiss()} className='item-center-self'>
                            Back to home
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonModal>
    );
};

export default DoneModal;