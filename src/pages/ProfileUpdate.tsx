import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton } from '@ionic/react';
import { useContext, useState } from 'react';
import { fetchHandle } from '../hooks/postData';
import { AuthContext, AuthDataContext } from '../context/authContext';
import Input from '../components/Input';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import Avatar from '../components/avatar';
import dummy from '../assets/image/dummy.svg'
import './Home.css'


type authData = {
  first_name: string;
  last_name: string;
  email: string;
  phone_no: string;
}

const ProfileUpdate: React.FC = () => {
  const [data, setData] = useState<authData>({
    first_name: '',
    last_name: '',
    email: '',
    phone_no: ''
  })

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
         <IonToolbar mode="ios" color={'#ECF0F1'} style={{ background: 'rgb(229 243 245)' }}>
           <IonButtons slot="start">
           <IonBackButton></IonBackButton>
           </IonButtons>
            <IonTitle>Profile</IonTitle>
         </IonToolbar>
       </IonHeader>
        <IonContent> 
        
        <div className='profile-update'>
            <Avatar profile={dummy} full_name='Philip Mathias' reset={false} customer_id='HJVVD24' link='' />
        </div>

         {/* <Paragraph headertext='' text='Update your account info below'/> */}

          <form action='/' method='post' style={{ padding: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <Input 
              type="text"
              placeholder="First Name"
              name="first_name"
              types="text" 
              event={(e) => handleChange(e)}
            />

            <Input 
              type="text"
              placeholder="Last Name"
              name='last_name' 
              event={(e) => handleChange(e)}
            />

            <Input 
              type="tel"
              placeholder="Phone Number"
              name="phone_no" 
              event={(e) => handleChange(e)}
            />

            <Input 
              type="email"
              placeholder="Email"
              name="email" 
              event={(e) => handleChange(e)}
            />
            
            <IonButton shape='round' expand='full'>Update</IonButton>
            {/* <Button buttonName='Update'/> */}

          </form>
           
        </IonContent>
      </IonPage>
    );
  };
  
  export default ProfileUpdate;