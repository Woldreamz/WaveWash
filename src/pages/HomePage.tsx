import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import './Home.css';
import profile from '../assets/image/dummy.svg'
import DiscountBanner from '../components/banner/discount';
import HowTo from '../layout/banner';
import OptionBanner from '../components/option/options';
import UserNav from '../layout/nav/user';


const HomePage: React.FC = () => {

  const navigation = useIonRouter()
  const doLogin = () => {
    navigation.push("/tabs", "root", "replace")
  }
  return (
    <IonPage>
      <UserNav name='Rainer Nsa' profile={profile} />
      <IonContent className="ion-padding-top">
        <OptionBanner />
        <DiscountBanner discount={20} code='WERTY' />
        <HowTo />
      </IonContent> 
    
    </IonPage>
  
  );
};

export default HomePage;
 