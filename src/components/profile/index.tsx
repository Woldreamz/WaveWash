import { IonButton, IonCol, IonIcon } from '@ionic/react';
import React from 'react';
import TabAcross from '../profile_tab';
import history from '../../assets/icon/history.svg'
import noti from '../../assets/icon/noti.svg'
import call from '../../assets/icon/tk-call.svg'
import promo from '../../assets/icon/promo.svg'
import coupon from '../../assets/icon/coupon.svg'
import Avatar from '../avatar';
import dummy from '../../assets/image/dummy.svg'
import './index.css'


interface Props {
    full_name: string
}

const Profile: React.FC<Props> = (props: Props) => {

    return (
        <>
        <IonIcon src={coupon} style={{height: '2rem', width: '2rem', position: 'relative', top: '4rem'}} />
        <Avatar profile={dummy} full_name='Philip Mathias' reset customer_id='HJVVD24' link='/profileupdate' /> 
        <div className='profile-drawer'> 
            <IonCol> 
                <TabAcross icon={history} text='Order History' />
                <TabAcross icon={noti} text='Noifications' />
                <TabAcross icon={call} text='Change Password' link='/changepassword'/>
                <TabAcross icon={promo} text='Promotion' />
            </IonCol>
            <IonButton style={{marginBottom: '28rem', marginTop: "20rem"}} >LOG OUT</IonButton>
        </div>
        </>
    );
};

export default Profile;