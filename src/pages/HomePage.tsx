import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import './Home.css';
import MyCart from '../layout/nav/my_cart';


const HomePage: React.FC = () => {

  const navigation = useIonRouter()
  const doLogin = () => {
    navigation.push("/tabs", "root", "replace")
  }
  return (
    <IonPage>
      <MyCart name='Track Order' hide={true}/>
      <IonContent>
       
      </IonContent> 
    
    </IonPage>
  
  );
};

export default HomePage;
 