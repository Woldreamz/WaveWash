import { IonAvatar, IonImg, IonItem, IonText, IonIcon, IonRow, IonCol, IonButton } from '@ionic/react';
import React from 'react';
import styled from '../../assets/icon/styled-right-arrow.svg'
import camera from '../../assets/icon/camera.svg'
import './index.css'

interface Props {
    rider_name: string
    profile: any
    phone_no: string
}
 

const Rider: React.FC<Props> = ({profile, rider_name, phone_no}: Props) => {

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center', padding: '3%', gap: '4%', boxShadow: '0 4px 7px #efefef', }}>
            <IonAvatar style={{height: '5rem', width: '5rem'}}>
                <IonImg src={profile} />
            </IonAvatar>
            <IonCol style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center', }}>
                <IonText><strong>{rider_name}</strong></IonText>
                <IonText>{phone_no}</IonText>
            </IonCol>
        </div>
    );
};

export default Rider;