import { IonPage, IonContent } from "@ionic/react";
import Walkthrough from '../components/Walkthrough';


const FirstPage: React.FC = () => {
    return (
      <IonPage>
  
        <IonContent fullscreen>
          <Walkthrough />
        </IonContent>
      </IonPage>
    );
};

export default FirstPage;

