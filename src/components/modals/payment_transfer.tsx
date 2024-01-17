import React, { useState, useRef } from 'react';
import { usePaystackPayment, PaystackButton } from "react-paystack"
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




// interface SyntheticEvent<T> {
//   currentTarget: EventTarget & T;
// }



const BankTransferModal: React.FC = () => { 

    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);
    
    const [message, setMessage] = useState(
      'This modal example uses triggers to automatically open a modal when the button is clicked.'
    );

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
      if (ev.detail.role === 'confirm') {
        setMessage(`Hello, ${ev.detail.data}!`);
      }
    }
    const onSuccess = (reference: any) => {
      // Implementation for whatever you want to do with reference and after success call.
      
      console.log(reference);
    };
  
    const onClose = () => {
      modal.current?.dismiss(input.current?.value, 'confirm');
      console.log('closed')
    }
    const[metadata, setMetaData] = useState({
      invoice: '',
      phone: '',
      name: ''
    })
    const [config, setConfig] = useState({
      reference: (new Date()).getTime().toString(),
      email: "user@example.com",
      amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      metadata: {
        custom_fields : [
          {
            "display_name": "Invoice ID",
            "variable_name": "Invoice ID",
            "value": metadata.invoice
          },
          {
            "display_name": "Phone",
            "variable_name": "Phone",
            "value": metadata.phone
          }
        ]
      },
      channels: ['bank_transfer'],
      publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
    })

    const addPhone = (value: any) => {
      setMetaData({
        ...metadata,
        phone: value
      })
      
    }

    const handleChange = (event: React.ChangeEvent<HTMLIonInputElement>) => {
      const target = event.target as HTMLIonInputElement
      if (target.name === 'phone'){
        addPhone(target.value)
      }
      setConfig({...config, [target.name]: target.value})
    }
    const componentProps = {
      ...config,
      text: 'Paystack Button Implementation',
      onSuccess: (reference: any) => onSuccess(reference),
      onClose: onClose,
  };
    const initializePayment = usePaystackPayment(config);
    return(
    
        <IonModal ref={modal} breakpoints={[0, 0.47, 0.75]} initialBreakpoint={0.47} trigger="transfer-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className='ion-padding-start'>
            <form action='/payment' method='post'>
              {/* <Input type="number" placeholder='Account number' /> */}
              <Input type='email' placeholder='Email' name='email' value='' event={handleChange} />
              <Input type="number" placeholder='Amount' name='amount' value='' event={handleChange} />
              <Input type="text" placeholder='Phone number' name='phone_no' value='' event={handleChange} />
              <IonButton type='submit' strong={true} 
                onClick={() => {
                  initializePayment({onSuccess, onClose})}}>
                Confirm
              </IonButton>
            </form>
            <PaystackButton {...componentProps} />
          </IonContent>
        </IonModal>
    
        
    );

};
  
export default BankTransferModal;