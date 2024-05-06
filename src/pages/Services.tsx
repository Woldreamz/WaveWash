import { IonButton, IonContent, IonPage, IonRow } from '@ionic/react';
import React, { useContext } from 'react';
import ServiceNav from '../layout/nav/service';
import profile from '../assets/image/dummy.svg'
import HeaderTop from '../layout/header';
import ItemCard from '../components/itemCard';
import { services, services_w } from '../data'
import RiderModal from '../components/modals/rider_details';
import CartModal from '../components/modals/cart_total';
import { useAxios } from '../hooks/useAxios';
import { CartContext, CartDataContext } from '../context/cartContext'



const ServicePage: React.FC = () => {
    const [loading, data, error] = useAxios({
        url: `${import.meta.env.VITE_SITE_URL}order/items/view/`, 
        method: 'GET',
        headers:{"Content-Type": "application/json"}
        });
    const { addItem, addToCart } = useContext(CartDataContext) as CartContext;
    console.log(loading, data, error)
    let deliveryFee = 1000
    let discount = 1000

    return (
        <IonPage>
            <ServiceNav profile={profile} name='Services'/>
            <IonContent className="ion-padding">
                <HeaderTop />
                <IonRow style={{flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                    <ItemCard img={services[0].image} 
                            title={services[0].title} 
                            price={services[0].price}
                            qty={addToCart.shirts.pcs} />
                    <ItemCard img={services[1].image} 
                            title={services[1].title} 
                            price={services[1].price}
                            qty={addToCart.pants.pcs} />
                    <ItemCard img={services[2].image} 
                            title={services[2].title} 
                            price={services[2].price}
                            qty={addToCart.beddings.pcs} />
                    <ItemCard img={services[3].image} 
                            title={services[3].title} 
                            price={services[3].price}
                            qty={addToCart.shoes.pcs} />
                    <IonButton id='checkout-modal' style={{width: '54%', '--border-radius': '21px'}}>
                        Proceed to Cart
                    </IonButton>
                    {/* <RiderModal full_name='Rainer Nsa' time={6} deliveries={400} /> */}
                    <CartModal subTotal={addToCart.total} deliveryFee={deliveryFee} discount={discount} total={addToCart.total + deliveryFee - discount }/>
                    {/* <Tabs /> */}
                </IonRow>
                
                
            </IonContent>
        

        </IonPage>

    );
};

export default ServicePage;