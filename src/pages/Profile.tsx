import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Profile from '../components/profile';
import Tabs from './Tabs';

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