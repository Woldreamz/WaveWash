import { IonCard, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './index.css'
import Tracker from '../tracker';
import shipping from '../../assets/icon/shipping.svg'
import cube from '../../assets/icon/cube.svg'
import ongoing from '../../assets/icon/ongoing.svg'
import gift from '../../assets/icon/gift.svg'

interface OrderDetails {
    orderNumber: number
    total: number
    slot1: any
    slot2: any
    slot3: any
    slot4: any
    date: string
    trackingID: string
    placed: string
    pickup: string
    laundry: string
    delivered: string
    trackScore: number
}
const Order: React.FC<OrderDetails> = ({orderNumber, total, slot1, slot2, slot3, slot4, trackingID, date, laundry, pickup, placed, delivered, trackScore}) => {
    const wait = 'Expected '
    return (
       <IonContent>
         <div className='card-across'>
                <div className='hidden-cards'>
                    <img src={slot4} className='slot4 slots' />
                    <img src={slot3} className='slot3 slots' />
                    <img src={slot2} className='slot2 slots' />
                    <img src={slot1} className='slot1 slots' />
                </div>      
                <div className='order-details'>
                    <IonText className='heavy-text'>Order {orderNumber}</IonText>
                    <IonText>N{total}</IonText> 
                </div>
        </div>
        <div className='card-across'>
            <IonCol>
            <h3 className='heavy-text'>Order Details</h3>
            <IonRow>
                <IonCol>
                    <p className='padding-bottom'>
                        Expired Delivery Date
                    </p>
                    <p>
                        Tracking ID
                    </p>
                </IonCol>
                <IonCol>
                    <p className='heavy-text text-end padding-bottom'>{date}</p>
                    <p className='heavy-text text-end'>{trackingID}</p>
                </IonCol>
            </IonRow>
            </IonCol>
        </div>
        <div style={{padding: '6%'}}>
            <p className='heavy-text'>Order Status</p>
            <div style={{display: 'flex', gap: '6%', padding: '3%'}}>
                <Tracker data={trackScore}/>
                <div className='status-wrapper'>
                    <IonItem>
                        <IonCol>
                            <p className='heavy-text'>Order Placed</p>
                            <p>{placed}</p>
                        </IonCol>
                        <IonIcon icon={shipping} slot='end'/>
                    </IonItem>
                    <IonItem>
                        <IonCol>
                            <p className='heavy-text'>Pickup</p>
                            <p>{trackScore !== 1? wait:''}{pickup}</p>
                        </IonCol>
                        <IonIcon icon={cube} slot='end'/>
                    </IonItem>
                    <IonItem>
                        <IonCol>
                            <p className='heavy-text'>Laundry Ongoing</p>
                            <p>{trackScore !== 2? wait:''}{laundry}</p>
                        </IonCol>
                        <IonIcon icon={ongoing} slot='end'/>
                    </IonItem>
                    <IonItem>
                        <IonCol>
                            <p className='heavy-text'>Delivered</p>
                            <p>{trackScore !== 3? wait:''}{delivered}</p>
                        </IonCol>
                        <IonIcon icon={gift} slot='end'/>
                    </IonItem>
                </div>
            </div>
        </div>
       </IonContent>
    );
};

export default Order;