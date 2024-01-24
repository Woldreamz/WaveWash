import { IonButton, IonCol, IonIcon, IonActionSheet } from '@ionic/react';
import React, { useState} from 'react';
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
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <IonIcon src={coupon} style={{height: '2rem', width: '2rem', position: 'relative', top: '4rem'}} />
        <Avatar profile={dummy} full_name='Philip Mathias' reset customer_id='HJVVD24' link='/profileupdate' /> 
        <div className='profile-drawer'> 
            <IonCol> 
                <TabAcross icon={history} text='Order History' />
                <TabAcross icon={noti} text='Noifications' link='/tabs/notifications' />
                <TabAcross icon={call} text='Change Password' link='/changepassword'/>
                <TabAcross icon={promo} text='Promotion' />
            </IonCol>
            <IonButton style={{marginBottom: '28rem', marginTop: "20rem"}} onClick={() => setIsOpen(true)}>LOG OUT</IonButton>
            <IonActionSheet
                isOpen={isOpen}
                header="Actions"
                buttons={[
                // {
                //     text: 'Delete',
                //     role: 'destructive',
                //     data: {
                //     action: 'delete',
                //     },
                // },
                {
                    text: 'Logout',
                    data: {
                    action: 'logout',
                    },
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    data: {
                    action: 'cancel',
                    },
                },
                ]}
                onDidDismiss={() => setIsOpen(false)}
            ></IonActionSheet>
        </div>
        </>
    );
};

export default Profile;