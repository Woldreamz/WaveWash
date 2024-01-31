import { IonPage, IonButton, IonContent } from '@ionic/react';
import './Home.css';


const Home: React.FC = () => {
  return (
    <IonPage>

      <IonContent className='Home' fullscreen>
        
        <div  id="container1"><IonButton className='Homebtn' size="large" shape="round" routerLink="/FirstPage">Get Started</IonButton></div>

      </IonContent>

    </IonPage>
  );
};

export default Home;
