import { IonContent, IonHeader,  IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, useIonRouter, IonButton, IonText } from '@ionic/react';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { fetchHandle } from '../hooks/postData';
import Input from '../components/Input';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { AuthContext, AuthDataContext } from '../context/authContext';


interface numberData {
  phone_no: string
}

const LoginPhone: React.FC = () => {
    const [data, setData] = useState<numberData>({
      phone_no: ''
    })

    const { addData } = useContext(AuthDataContext) as AuthContext
    const handleChange = (event: React.FormEvent<HTMLIonInputElement>) => {
      const target = event.target as HTMLIonInputElement;
      setData({
        ...data, [target.name]: target.value
      })
    }

    const navigate = useIonRouter();
    const url = `${import.meta.env.VITE_SITE_URLL}user/login/phone/`
    const handleSubmit = async () => {
        const response = await fetchHandle({url: url, body: data})
          if(response.status === 200){
              addData({name: 'data', value: response.data});
              addData({name: 'isLoggedIn', value: true});
              console.log("status:", response.status);
          }else {
            alert("Invalid phone number");
          }
          navigate.push('tabs/homepage', 'root', 'replace')
    }

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar className='nav-blank' color={'primary-contrast'}>
            <IonButtons slot="start">
              <IonBackButton></IonBackButton>
            </IonButtons>
              <IonTitle color={'primary'}>Log in</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent className='ion-padding'>
          <Paragraph headertext='Welcome' text='Sign in via your mobile number'/>
          
          <form action="/" method='post'>

            <Input 
              type="tel"
              placeholder="Phone no"
              name='phone_no' 
              event={(e) => handleChange(e)}
            />
            <p style={{ fontSize: '13px', marginBottom: '7rem', color: 'grey' }}>You will receive an SMS verification that may apply message and data rates</p>
           
           
           <IonButton shape='round' size='large' style={{ width: '100%' }} onClick={() => handleSubmit()}>Sign in</IonButton>
           <Link to="/signin" style={{ color: '#006A55', padding: "15px", textDecoration: 'none', fontFamily: 'Inter'}}>
              <p style={{ fontSize: '20px', textAlign: 'center' }}> Use email, instead
              </p>
            </Link>

          </form>
          
        </IonContent>
      </IonPage>
    );
  };
  
  export default LoginPhone;