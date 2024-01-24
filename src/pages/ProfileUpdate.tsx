import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import Input from '../components/Input';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import Avatar from '../components/avatar';
import dummy from '../assets/image/dummy.svg'

const ProfileUpdate: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
         <IonToolbar mode="ios">
           <IonButtons slot="start">
             <IonBackButton></IonBackButton>
           </IonButtons>
            <IonTitle>Profile</IonTitle>
         </IonToolbar>
       </IonHeader>

      <div style={{paddingBottom: "40px", backgroundColor: "#2491CB0D", width:'100%'}}>
            <Avatar profile={dummy} full_name='Philip Mathias' reset={false} customer_id='HJVVD24' link='' />
       </div>
  
        <IonContent class='ion-padding-top' className="ion-padding-start"> 

         <Paragraph headertext='' text='Update your account info below'/>

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
            
            <Button buttonName='Update'/>

          </form>
           
        </IonContent>
      </IonPage>
    );
  };
  
  export default ProfileUpdate;