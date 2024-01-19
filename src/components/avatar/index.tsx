import { IonAvatar, IonImg, IonItem, IonText, IonIcon, IonRow, IonCol, IonButton } from '@ionic/react';
import React from 'react';
import styled from '../../assets/icon/styled-right-arrow.svg'
import camera from '../../assets/icon/camera.svg'
import './index.css'

interface Props {
    full_name: string
    profile: any
    reset: boolean
    customer_id: string
    link: string
}
 

const Avatar: React.FC<Props> = (props: Props) => {

    return (
        <div className='avatar-back-drop'>
            <IonAvatar style={{height: '5rem', width: '5rem'}}>
                <IonImg src={props.profile} />
            </IonAvatar>
            {props.reset?
                <IonRow className='name-tab'>
                    <IonText className='text-large' color={'primary'}>{props.full_name}</IonText>
                    <IonButton size='small' fill='clear' routerLink={props.link}><IonIcon icon={styled}  style={{height: '1.3rem', marginTop: '3px'}}/></IonButton>
                </IonRow>
                :
                <>
                <IonIcon icon={camera} style={{position: 'absolute', bottom: '0', right: '0', height: '2rem', width: '2rem' }} />
                <IonCol className='name-tab' style={{display: 'flex', flexDirection: 'column', left: '0rem'}}>
                    <IonText color={'medium-tint'} style={{width: '10rem'}}>Customer ID</IonText>
                    <IonText color={'black'} style={{width: '10rem'}}>{props.customer_id}</IonText>
                </IonCol>
                </>
            }
        </div>
    );
};

export default Avatar;