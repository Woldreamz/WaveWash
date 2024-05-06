import { IonContent, IonHeader,  IonPage, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons, IonText, useIonRouter } from '@ionic/react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Paragraph from '../components/Paragraph';
import { useContext, useState } from 'react';
import { fetchHandle } from '../hooks/postData';
import { AuthContext, AuthDataContext } from '../context/authContext';

interface loginData {
  email: string
  password: string
}

const Signin: React.FC = () => {
    const [data, setData] = useState<loginData>({
      email: '',
      password: '',
    })

    const { addData } = useContext(AuthDataContext) as AuthContext
    const handleChange = (event: React.FormEvent<HTMLIonInputElement>) => {
      const target = event.target as HTMLIonInputElement;
      setData({
        ...data, [target.name]: target.value
      })
    }

    const navigate = useIonRouter()
    const url = `${import.meta.env.VITE_SITE_URL}user/login/user/`
    const handleSubmit = async () => {
      navigate.push('tabs/homepage', 'root', 'replace')
        const response = await fetchHandle({url: url, body: data})
        if(response.status === 200){
            addData({name: 'data', value: response.data});
            addData({name: 'isLoggedIn', value: true});
            console.log("status:", response.status);
        }else {
          alert("Invalid email or password");
        }
        
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar className='nav-blank' color={'primary-contrast'}>
            <IonButtons slot="start">
              <IonBackButton></IonBackButton>
            </IonButtons>
            <IonTitle color={'primary'}>Sign in</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent className='ion-padding'>
        <Paragraph headertext='Welcome' text='Sign in via your email address'/>

          <form action="/" method='post'>

            <Input 
              type="email"
              placeholder="Email"
              name="email"
              event={(e) => handleChange(e)} 
            />

            <Input 
              type="password"
              placeholder="Password"
              name='password' 
              event={(e) => handleChange(e)} 
            />

            <Link to="changepassword" style={{ color: '#006A55', textDecoration: 'none'}}>
              <p style={{fontSize: '20px'}}>
                Forgot password?</p>
            </Link>
            <Link to="/loginphone" style={{ color: '#006A55', textDecoration: 'none'}}>
              <p style={{fontSize: '20px', marginBottom: '7rem'}}>
              Use mobile number, instead</p>
            </Link>

            <IonText>By continuing, you agree to our <IonText color={'primary'}>Terms of service</IonText> and <IonText color={'primary'}>Privacy Policy</IonText></IonText>
            <IonButton shape='round' size='large' style={{ width: '100%' }} onClick={() => handleSubmit()}>Sign in</IonButton>

          </form>
          
        </IonContent>
      </IonPage>
    );
  };
  
  export default Signin;