import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonFooter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { homeOutline, layersOutline, personCircleOutline } from 'ionicons/icons';

import HomePage from './HomePage';
import ServicePage from './Services';
import ProfilePage from './Profile';

const Tabs: React.FC = () => {
  return (
  
    <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/tabs" to="/tabs/homepage" />
        
          <Route path="/tabs/homepage" render={() => <HomePage />} />
          <Route exact path="/tabs/services" render={() => <ServicePage />} />
          <Route exact path="/tabs/profile" render={() => <ProfilePage />} />
        
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="homepage" href="/homepage">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="services" href="/services">
            <IonIcon icon={layersOutline} />
            <IonLabel>Services</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>

        </IonTabBar>
    </IonTabs>
  

  );
}
export default Tabs;