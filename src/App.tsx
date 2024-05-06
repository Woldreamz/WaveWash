import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Pages */
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import FirstPage from './pages/FirstPage';
import LoginPhone from './pages/LoginPhone';
import PhoneAuth from './pages/PhonAuth';
import Payment from './pages/Payment';
import HomePage from './pages/HomePage';
import ServicePage from './pages/Services';
import CartPage from './pages/Cart';
import TrackPage from './pages/Track';
import ProfilePage from './pages/Profile';
import ChangePassword from './pages/ChangePassword';
import ProfileUpdate from './pages/ProfileUpdate';
import NotificationPage from './pages/Notifications';
import Tabs from './pages/Tabs';
import History from './pages/OrderHistory';
import OrderDetailsPage from './pages/Details';
import { AuthDataProvider } from './context/authContext'
import { CartDataProvider } from './context/cartContext';

setupIonicReact();

const App: React.FC = () => (
  <AuthDataProvider>
    <CartDataProvider>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" exact={true}>
            <Home /> 
          </Route>
          <Route path="/orderdetail" exact={true}>
            <OrderDetailsPage /> 
          </Route>
          <Route path="/start" exact={true}>
            <FirstPage />
          </Route>
          <Route path="/signin" exact={true}>
            <Signin />
          </Route>
          <Route path="/loginphone" exact={true}>
            <LoginPhone />
          </Route>
          <Route path="/signup" exact={true}>
            <Signup />
          </Route>
          <Route path="/phoneauth" exact={true}>
            <PhoneAuth />
          </Route>
          <Route path="/payment" exact={true}>
            <Payment />
          </Route>
          {/* <Route path="/services" exact>
            <ServicePage />
          </Route> */}
          {/* <Route path="/cart" exact={true}>
            <CartPage />
          </Route> */}
          <Route path="/track" exact={true}>
            <TrackPage />
          </Route>
          {/* <Route path="/notifications" exact>
            <NotificationPage />
          </Route> */}
          <Route path="/changepassword" exact={true}>
            <ChangePassword />
          </Route>
          <Route path="/profileupdate" exact={true}>
            <ProfileUpdate/>
          </Route>
          <Route path="/tabs" component={Tabs}/>
          <Route path="/" exact={true}>
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
    </CartDataProvider>
  </AuthDataProvider>
);

export default App;