import { IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonText, IonCol } from '@ionic/react';
import React from 'react';
import DetailCard from '../components/orderCard/detail';
import Rider from '../components/avatar/rider';
import ItemDetail from '../components/itemDetail';
import rider from "../assets/image/dummy2.svg"
import { detail } from '../data';
import { addComma } from '../utils';
import MyCart from '../layout/nav/my_cart';

const OrderDetailsPage: React.FC = () => {
    let subTotal=0
    let selected=0
    for(let i=0; i<detail.length; i++){
        subTotal += detail[i].price
        selected += detail[i].qty
    }
    let total = 1000 + subTotal
    return (
        <IonPage>
            <MyCart name='ORDER DETAILS' hide={true} />
            <IonContent className="ion-padding">
                <DetailCard 
                    action='Confirmed'
                    pickUp='10-02-2011 10:30 am'
                    delivery='10-02-2011 11:00 am'
                    address='Hitech, Phnom Penh, 1200'
                    />
                <Rider 
                    profile={rider}
                    rider_name='Helga Miku'
                    phone_no='+2347089619601'
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem',}}>
                <IonRow>
                        <IonCol>
                            <IonText style={{ color: '#c3bfbf' }}>Total Clothes</IonText>
                        </IonCol>
                        <IonCol style={{ display: 'flex', }}>
                        <IonText style={{ textAlign: 'right', width: '100%'}}>{selected + ' '}selected</IonText>
                        </IonCol>
                </IonRow>
                <div>
                    <IonText color={'primary'} style={{ marginLeft: '7px'}}>laundry</IonText>
                    {detail && detail.map((item, index) => (
                        <ItemDetail 
                        img={item.item}
                        title={item.title}
                        price={addComma(item.price)}
                        qty={item.qty}
                        />
                    ))}
                    <IonRow>
                        <IonCol>Sub Total</IonCol>
                        <IonCol style={{ display: 'flex', }}><IonText style={{ textAlign: 'right', width: '100%'}}>
                            N{addComma(subTotal)}
                            </IonText>
                        </IonCol>
                    </IonRow>
                </div>
                <IonRow style={{ background: 'rgb(242 247 249)'}}>
                    <IonCol style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <IonText>Delivery fee:</IonText>
                        <IonText>Total Price:</IonText>
                    </IonCol>
                    <IonCol style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <IonText style={{ textAlign: 'right', width: '100%'}}>N1,000</IonText>
                        <IonText style={{ textAlign: 'right', width: '100%'}}>N{addComma(total)}</IonText>
                    </IonCol>
                </IonRow>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default OrderDetailsPage;