import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonTitle, } from '@ionic/react';
import './Home.css';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Input from '../components/Input';


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
         <IonButton size="small" className='paymentBtn1' shape="round">Debit Card</IonButton>
         <IonButton size="small" className='paymentBtn2' shape="round" fill='outline'>Bank Transfer</IonButton>
       </>

        <Button buttonName='Pay Now' />
      </IonContent>

    </IonPage>
  );
};

export default Payment;