import React, { useState, useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonToolbar,
  IonModal,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import Input from '../Input';

const CardPaymentModal: React.FC = () => { 

    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);
    
    const [message, setMessage] = useState(
      'This modal example uses triggers to automatically open a modal when the button is clicked.'
    );
    
    function confirm() {
     modal.current?.dismiss(input.current?.value, 'confirm');
    }
    
    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
      if (ev.detail.role === 'confirm') {
        setMessage(`Hello, ${ev.detail.data}!`);
      }
    }

    return(
    
        <IonModal ref={modal} breakpoints={[0, 0.47, 0.75]} initialBreakpoint={0.47} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className='ion-padding-start'>
            <form action='/payment' method='post'>
              <Input type="number" placeholder='Card number'/>
              <Input type="text" placeholder='Cardholder name'/>
              <Input type="number" placeholder='MM/YY'/>
              <Input type="number" placeholder='CVV'/>
              <IonButton type='submit' strong={true} onClick={() => confirm()}>
                Confirm
              </IonButton>
            </form>
          </IonContent>
        </IonModal>
    
        
    );

};
  
export default CardPaymentModal;