import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import MyCart from '../layout/nav/my_cart';


const HomePage: React.FC = () => {
  return (
    <IonPage>
      <MyCart name='Track Order' hide={true}/>
      <IonContent fullscreen>
      </IonContent> 
    </IonPage>
  );
};

export default HomePage;
