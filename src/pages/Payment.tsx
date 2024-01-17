import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonTitle, IonModal, IonItem, IonInput } from '@ionic/react';
import './Home.css';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import CardPaymentModal from '../components/modals/payment_card';
import BankTransferModal from '../components/modals/payment_transfer';
import React, { useState, useRef } from 'react';


const Payment: React.FC = () => {
 
  return (
    <IonPage>

       <IonHeader>
        <IonToolbar mode="ios">
         <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
            <IonTitle>Checkout Now</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className='ion-padding-start'>
        <Paragraph headertext='Select Your Payment Method' 
        text='Your selected payment method will be choosen to pay the bill.'/>
        <>
         <IonButton id="open-modal" size="small" shape="round">Debit Card</IonButton>
         <IonButton id='transfer-modal' size="small" className='paymentBtn2' shape="round" fill='outline'>Bank Transfer</IonButton>    
       </>
       <CardPaymentModal />
       <BankTransferModal />    

        <Button buttonName='Pay Now' />

      </IonContent>

    </IonPage>
  );
};

export default Payment;