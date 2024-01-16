import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import Input from '../components/Input';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const Signup: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
        <IonToolbar mode="ios">
         <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
            <IonTitle>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>
  
        <IonContent class='ion-padding-top' className="ion-padding-start">
         <Paragraph headertext='Welcome' text='Please fill the form below to create an account'/>

          <form action='/' method='post'>

            <Input 
              type="text"
              placeholder="Username" 
            />

            <Input 
              type="tel"
              placeholder="Mobile Number" 
            />

            <Input 
              type="email"
              placeholder="Email" 
            />

            <Input 
              type="password"
              placeholder="Password" 
            />
            
            <Button buttonName='Sign Up'/>

          </form>
           
        </IonContent>
      </IonPage>
    );
  };
  
  export default Signup;