import { IonContent, IonHeader,  IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';


const LoginPhone: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
        <IonToolbar mode="ios">
         <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
            <IonTitle>Log in</IonTitle>
        </IonToolbar>
      </IonHeader>
  
        <IonContent class='ion-padding-top' className='ion-padding-start'>
          <Paragraph headertext='Welcome' text='Sign in via your mobile number'/>
          
          <form action="/" method='post'>

            <Input 
              type="tel"
              placeholder="Mobile Number" 
            />
        
           <p><Link to="/login" style={{ color: '#006A55', padding: "15px", textDecoration: 'none', fontFamily: 'Inter'}}>
            Click here to use email, instead</Link></p>
           
           <Button buttonName='Log In' />

          </form>
          
        </IonContent>
      </IonPage>
    );
  };
  
  export default LoginPhone;