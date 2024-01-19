import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import MyCart from '../layout/nav/my_cart';
import ItemCart from '../components/itemCart';
import { services, services_w } from '../data'
import CartModal from '../components/modals/cart_total';
import Tabs from './Tabs';


const CartPage: React.FC = () => {
   

    return (
        <IonPage>
            <MyCart name='My Cart' hide={false}/>
            <IonContent>
                <ItemCart title={services_w[0].title} 
                    img={services_w[0].image}
                    pcs={services_w[0].pcs}
                    price={services_w[0].price}
                    modal='remove-modal1'/>
                <ItemCart title={services_w[1].title} 
                    img={services_w[1].image}
                    pcs={services_w[1].pcs}
                    price={services_w[1].price}
                    modal='remove-modal2'/>
                <ItemCart title={services_w[2].title} 
                    img={services_w[2].image}
                    pcs={services_w[2].pcs}
                    price={services_w[2].price}
                    modal='remove-modal3'/>
                <ItemCart title={services_w[3].title} 
                    img={services_w[3].image}
                    pcs={services_w[3].pcs}
                    price={services_w[3].price}
                    modal='remove-modal4'/>
                <IonButton id='checkout-modal' style={{width: '54%', '--border-radius': '21px', margin: '5% 23%'}}>
                    Checkout?
                </IonButton> 
                <CartModal subTotal={7500} deliveryFee={2500} discount={500} total={9500} />
                <Tabs />
            </IonContent>
        </IonPage>
    );
};

export default CartPage;