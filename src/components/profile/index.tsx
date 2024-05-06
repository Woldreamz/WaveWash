import { IonButton, IonCol, IonIcon, IonActionSheet, useIonRouter } from '@ionic/react';
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
import type { OverlayEventDetail } from '@ionic/core';


interface Props {
    full_name: string
}

const Profile: React.FC<Props> = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useIonRouter();
    const logOut = (result: OverlayEventDetail) => {
        // const content = JSON.stringify(result, null, 2)
        console.log(result, 'f')
        if(result.data.action === 'logout'){
            navigate.push('/signin', 'root', 'replace')
        }
        setIsOpen(false);
      };
    return (
        <>
        <IonIcon src={coupon} style={{height: '2rem', width: '2rem', position: 'relative', top: '4rem'}} />
        <Avatar profile={dummy} full_name='Philip Mathias' reset customer_id='HJVVD24' link='/profileupdate' /> 
        <div className='profile-drawer'> 
            <IonCol> 
                <TabAcross icon={history} text='Order History' link='/tabs/settings/orders' />
                <TabAcross icon={noti} text='Noifications' link='/tabs/settings/notifications' />
                <TabAcross icon={call} text='Change Password' link='/changepassword'/>
                <TabAcross icon={promo} text='Promotion' link=''/>
            </IonCol>
            <IonButton style={{marginBottom: '28rem', marginTop: "20rem"}} onClick={() => setIsOpen(true)}>LOG OUT</IonButton>
            <IonActionSheet
                isOpen={isOpen}
                header="Are you sure you want to logout ?"
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
                onDidDismiss={({detail}) => logOut(detail)}
            ></IonActionSheet>
        </div>
        </>
    );
};

export default Profile;