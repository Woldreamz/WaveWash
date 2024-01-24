import { IonContent, IonHeader, IonPage, IonTitle} from '@ionic/react';
import React from 'react';
import Profile from '../components/profile';


const ProfilePage: React.FC = () => {

    return (
        <IonPage>
            <IonContent color={'primary'} className="ion-padding" fullscreen>
                <Profile full_name='Lilian Stryga'/>

            </IonContent>
            
        </IonPage>
    );
};

export default ProfilePage;