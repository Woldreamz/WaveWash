import { IonPage, IonContent } from "@ionic/react";
import Walkthrough from '../components/Walkthrough';


const FirstPage: React.FC = () => {
    return (
      <IonPage>
  
        <IonContent color="light" fullscreen>
          <Walkthrough />
        </IonContent>
      </IonPage>
    );
};

export default FirstPage;

