import { IonContent, IonHeader,  IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';


const ChangePassword: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
        <IonToolbar mode="ios">
         <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>

        </IonToolbar>
      </IonHeader>
  
        <IonContent class='ion-padding-top' className='ion-padding-start'>
          
          <form action="/" method='post'>
            <Paragraph headertext='Change Password' text=''/>

            <Input 
              type="password"
              placeholder="Current Password" 
              name='Current Password'
              value=''
            />

            <Input 
              type="password"
              placeholder="New Password"
              name='New Password'
              value=''
            />

            <Input 
              type="password"
              placeholder="Confirm New Password"
              name='New Password'
              value='' 
            />

            <Button buttonName='Change' />

          </form>
          
        </IonContent>
      </IonPage>
    );
  };
  
  export default ChangePassword;