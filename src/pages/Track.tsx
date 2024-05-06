import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import { services, services_w } from '../data'
import Order from '../components/order';

const TrackPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary-contrast'}>
          <IonButtons slot='start'>
              <IonBackButton defaultHref='' text={''}></IonBackButton>
          </IonButtons>
          <IonTitle>Track Order</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <Order orderNumber={2} total={9500} 
              slot1={services_w[0].image}
              slot2={services_w[1].image}
              slot3={services_w[2].image}
              slot4={services_w[3].image}
              trackingID='TRK452126542'
              date='05 Jan 2023'
              laundry='05 Dec,2023'
              placed='30 Dec 2023, 05:55 PM'
              pickup='30 Dec 2023, 06:05 PM'
              delivered='05 Jan,2023'
              trackScore={0}
              />
      </IonContent>
    </IonPage>
  );
};

export default TrackPage;
