import { IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonHeader, IonContent } from "@ionic/react"
import Segments from "../components/Segment";


const NotificationPage: React.FC = () => {

    return(
      <IonPage>
        <IonHeader>
         <IonToolbar mode="ios">
           <IonButtons slot="start">
             <IonBackButton></IonBackButton>
           </IonButtons>
            <IonTitle>Notifications</IonTitle>
         </IonToolbar>
       </IonHeader>

       <IonContent class="ion-padding">
          <Segments />
       </IonContent>

      </IonPage>

    );

};


export default NotificationPage;
