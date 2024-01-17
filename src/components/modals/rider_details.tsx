import { IonAvatar, IonButton, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonModal, IonRow, IonText, IonTitle } from '@ionic/react';
import React, {useRef, useState} from 'react';
import dummy from '../../assets/image/dummy.svg'
import call from '../../assets/icon/call.svg'
import message from '../../assets/icon/message.svg'
import cancel from '../../assets/icon/cancel.svg'
import Rating from '../rating';


interface Rider {
    full_name: string
    time: number
    deliveries: number
}
const RiderModal: React.FC<Rider> = ({full_name, time, deliveries}) => {
    const [checkOut, setCheckOut] = useState<any>(null);
    const riderModal = useRef<HTMLIonModalElement>(null);

    function select(){
        setCheckOut(1);
        riderModal.current?.dismiss();
    }

    return (
        <IonModal breakpoints={[0, 0.45]} initialBreakpoint={0.45} ref={riderModal} trigger='rider-modal'>
            <IonHeader style={{height: '3rem', color: 'black', fontWeight: 700, boxShadow: '0 0 7px grey'}}>
                <IonTitle>
                    Rider Details
                </IonTitle>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonText style={{marginLeft: '33%'}}>
                    Arrives in {time} minutes
                </IonText>
                <IonRow>
                    <IonCol size='2.5'>
                        <IonAvatar>
                            <IonImg src={dummy} style={{height: '4.5rem', width: '4.5rem'}} />
                        </IonAvatar>
                    </IonCol>
                    <IonCol size='9.5' style={{display: 'flex', flexDirection: 'column', padding: '3%', alignContent: 'center'}}>
                        <IonText style={{fontSize: '1.5rem', fontWeight: 700}}>{full_name}</IonText>
                        <IonText>{deliveries} deliveries</IonText>
                        <Rating rating={5}/>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size='12' style={{height: '3rem'}}>
                        <IonButton style={{color: 'black', fontWeight: 700}} fill="clear" color={'black'}>
                            <IonIcon icon={call} slot='start'/>
                            Call Rider
                        </IonButton>
                    </IonCol>
                    <IonCol size='12' style={{height: '3rem'}}>
                        <IonButton style={{color: 'black', fontWeight: 700}} fill="clear">
                            <IonIcon icon={message} slot='start'/>
                            Message Rider
                        </IonButton>
                    </IonCol>
                    <IonCol size='12' style={{height: '3rem', marginBottom: '2rem'}}>
                        <IonButton style={{color: 'black', fontWeight: 700}} fill="clear">
                            <IonIcon icon={cancel} slot='start'/>
                            Cancel Order
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonButton style={{width: '60%', margin: 'auto', 'border-radius': '6px'}}>
                        Select Rider
                    </IonButton>
                </IonRow>
            </IonContent>
        </IonModal>
    );
};

export default RiderModal;