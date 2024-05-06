import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonFooter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { homeOutline, layersOutline, personCircleOutline, settingsOutline } from 'ionicons/icons';

import HomePage from './HomePage';
import ServicePage from './Services';
import ProfilePage from './Profile';
import NotificationPage from './Notifications';
import CartPage from './Cart';
import History from './OrderHistory';
import ProfileUpdate from './ProfileUpdate';

const Tabs: React.FC = () => {
  return (
    
  
    <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/tabs" to="/tabs/homepage" />
        
          <Route exact path="/tabs/homepage" render={() => <HomePage />} />
          <Route exact path="/tabs/services">
            <ServicePage />
          </Route>
          <Route exact path="/tabs/services/cart">
            <CartPage />
          </Route>
          <Route exact path="/tabs/settings">
            <ProfilePage />
          </Route>
          <Route exact path="/tabs/settings/notifications">
            <NotificationPage />
          </Route>
          <Route exact path="/tabs/settings/update">
            <ProfileUpdate />
          </Route>
          <Route exact path="/tabs/settings/orders">
            <History />
          </Route>
        
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

          <IonTabButton tab="settings" href="/tabs/settings">
            <IonIcon icon={settingsOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>

        </IonTabBar>
    </IonTabs>
  

  );
}
export default Tabs;