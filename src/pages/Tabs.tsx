import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonFooter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { homeOutline, layersOutline, personCircleOutline } from 'ionicons/icons';

import HomePage from './HomePage';
import ServicePage from './Services';
import ProfilePage from './Profile';
import NotificationPage from './Notifications';

const Tabs: React.FC = () => {
  return (
    
  
    <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/tabs" to="/tabs/homepage" />
        
          <Route exact path="/tabs/homepage" render={() => <HomePage />} />
          <Route exact path="/tabs/services" render={() => <ServicePage />} />
          <Route exact path="/tabs/profile" render={() => <ProfilePage />} />
          <Route exact path="/tabs/notifications" render={() => <NotificationPage />} />
        
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="homepage" href="/tabs/homepage">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="services" href="/tabs/services">
            <IonIcon icon={layersOutline} />
            <IonLabel>Services</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="/tabs/profile">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>

        </IonTabBar>
    </IonTabs>
  

  );
}
export default Tabs;