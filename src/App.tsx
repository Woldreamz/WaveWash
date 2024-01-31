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
import LoginPage from './pages/LoginPage';
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
import Tabs from './pages/Tabs';
import History from './pages/OrderHistory';
import OrderDetailsPage from './pages/Details';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home /> 
        </Route>
        <Route exact path="/history">
          <History /> 
        </Route>
        <Route exact path="/orderdetail">
          <OrderDetailsPage /> 
        </Route>
        <Route exact path="/FirstPage">
          <FirstPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/loginphone">
          <LoginPhone />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/phoneauth">
          <PhoneAuth />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/track">
          <TrackPage />
        </Route>
        <Route exact path="/changepassword">
          <ChangePassword />
        </Route>
        <Route exact path="/profileupdate">
          <ProfileUpdate/>
        </Route>
        <Route path="/tabs" component={Tabs}/>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;