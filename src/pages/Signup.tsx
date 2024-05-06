import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton } from '@ionic/react';
// import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { useContext, useState } from 'react';
import { fetchHandle } from '../hooks/postData';
import { AuthContext, AuthDataContext } from '../context/authContext';


type authData = {
  first_name: string;
  last_name: string;
  email: string;
  phone_no: string;
  password: string;
  password2: string
}


const Signup: React.FC = () => {
    const [data, setData] = useState<authData>({
      first_name: '',
      last_name: '',
      email: '',
      phone_no: '',
      password: '',
      password2: ''
    })

    // const navigate = useNavigate();
    const { addData } = useContext(AuthDataContext) as AuthContext
    const handleChange = (event: React.FormEvent<HTMLIonInputElement>) => {
      const target = event.target as HTMLIonInputElement;
      setData({
        ...data, [target.name]: target.value
      })
    }

    const url = `${import.meta.env.VITE_SITE_URL}user/register/user/`
    const handleSubmit = async () => {
        const response = await fetchHandle({url: url, body: data})
          if(response.status === 200){
              addData({name: 'data', value: response.data})
              console.log("status:", response.status)
          }
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar className='nav-blank' color={'primary-contrast'}>
            <IonButtons slot="start">
              <IonBackButton defaultHref='/start' text={''}></IonBackButton>
            </IonButtons>
            <IonTitle color={'primary'}>Create Account</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent className="ion-padding">
         <Paragraph headertext='Welcome' text='Please fill the form below to create an account'/>

          <form action='/' method='post'>

            <Input 
              type="text"
              placeholder="firstname"
              name="first_name"
              types="text"
              placeholders="lastname"
              names='last_name'   
              event={(e) => handleChange(e)}
            />

            <Input 
              type="tel"
              placeholder="phone no"
              name="phone_no" 
              event={(e) => handleChange(e)}
            />

            <Input 
              type="email"
              placeholder="email"
              name="email" 
              event={(e) => handleChange(e)}
            />

            <Input 
              type="password"
              placeholder="password"
              name="password" 
              event={(e) => handleChange(e)}
            />

            <Input 
              type="password"
              placeholder="confirm password"
              name="password2" 
              event={(e) => handleChange(e)}
            />
             
            <IonButton shape='round' size='large' style={{ width: '100%' }} onClick={() => handleSubmit()}>Sign up</IonButton>

          </form>
           
        </IonContent>
      </IonPage>
    );
  };
  
  export default Signup;