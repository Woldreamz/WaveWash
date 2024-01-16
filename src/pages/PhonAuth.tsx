import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';
import './Home.css';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Input from '../components/Input';


const PhoneAuth: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar mode="ios">
         <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
            <IonTitle>Authentication Code</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent  class='ion-padding-top' className='ion-padding-start'>
        <div className="ion-text-center">
         <Paragraph headertext='Enter Authentication Code' 
         text='Enter the 4-digit that we have sent via the phone number'/>

        </div>
        
        <Input type="number" placeholder='Enter code here'/>
        <p style={{ fontFamily: 'Inter', padding: "15px"}}>Resend Code</p>

        <Button buttonName='Continue' />
      </IonContent>

    </IonPage>
  );
};

export default PhoneAuth;