import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useContext } from 'react';
import MyCart from '../layout/nav/my_cart';
import ItemCart from '../components/itemCart';
import { services, services_w } from '../data'
import CartModal from '../components/modals/cart_total';
import { CartContext, CartDataContext } from '../context/cartContext'


const CartPage: React.FC = () => {
    const { addToCart } = useContext(CartDataContext) as CartContext;
    let discount = 500
    let deliveryFee = 2500
    let subTotal = addToCart.shirts.price + addToCart.pants.price + addToCart.beddings.price + addToCart.shoes.price 
    let total = subTotal + deliveryFee - discount
    return (
        <IonPage>
            <MyCart name='My Cart' hide={false}/>
            <IonContent>
                {addToCart.shirts.pcs >= 1 && <ItemCart title={services_w[0].title} 
                    img={services_w[0].image}
                    pcs={addToCart.shirts.pcs}
                    price={addToCart.shirts.price}
                    modal='remove-modal1'/>
                }
                {addToCart.pants.pcs >= 1 && <ItemCart title={services_w[1].title} 
                    img={services_w[1].image}
                    pcs={addToCart.pants.pcs}
                    price={addToCart.pants.price}
                    modal='remove-modal2'/>
                }
                {addToCart.beddings.pcs >= 1 && <ItemCart title={services_w[2].title} 
                    img={services_w[2].image}
                    pcs={addToCart.beddings.pcs}
                    price={addToCart.beddings.price}
                    modal='remove-modal3'/>
                }
                {addToCart.shoes.pcs >= 1 && <ItemCart title={services_w[3].title} 
                    img={services_w[3].image}
                    pcs={addToCart.shoes.pcs}
                    price={addToCart.shoes.price}
                    modal='remove-modal4'/>
                }
                <IonButton id='checkout-modal' style={{width: '54%', '--border-radius': '21px', margin: '5% 23%'}}>
                    Checkout?
                </IonButton> 
                <CartModal subTotal={subTotal} deliveryFee={deliveryFee} discount={discount} total={total} />
            </IonContent>
        </IonPage>
    );
};

export default CartPage;