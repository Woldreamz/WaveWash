import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useContext } from 'react';
import MyCart from '../layout/nav/my_cart';
import ItemCart from '../components/itemCart';
import { services, services_w } from '../data'
import CartModal from '../components/modals/cart_total';
import { CartContext, CartDataContext } from '../context/cartContext'


const CartPage: React.FC = () => {
    const { addToCart } = useContext(CartDataContext) as CartContext;
    console.log("cart:", addToCart)
    let discount = 500
    let deliveryFee = 2500
    return (
        <IonPage>
            <MyCart name='My Cart' hide={false}/>
            <IonContent>
                {addToCart.shirts.pcs !== 0 && <ItemCart title={services_w[0].title} 
                    img={services_w[0].image}
                    pcs={addToCart.shirts.pcs}
                    price={addToCart.shirts.price}
                    modal='remove-modal1'/>
                }
                {addToCart.pants.pcs !== 0 && <ItemCart title={services_w[1].title} 
                    img={services_w[1].image}
                    pcs={addToCart.pants.pcs}
                    price={addToCart.pants.price}
                    modal='remove-modal2'/>
                }
                {addToCart.beddings.pcs !== 0 && <ItemCart title={services_w[2].title} 
                    img={services_w[2].image}
                    pcs={addToCart.beddings.pcs}
                    price={addToCart.beddings.price}
                    modal='remove-modal3'/>
                }
                {addToCart.shoes.pcs !== 0 && <ItemCart title={services_w[3].title} 
                    img={services_w[3].image}
                    pcs={addToCart.shoes.pcs}
                    price={addToCart.shoes.price}
                    modal='remove-modal4'/>
                }
                {addToCart.totalqty === 0 ?
                <div style={{ width: '100%', height: '85vh', 
                    display: 'flex', 
                    flexWrap: 'wrap',
                    alignContent: 'center',
                    justifyContent: 'center' }}>
                    <p style={{ fontSize: '21px', textAlign: 'center' }}>Your cart is empty</p>
                </div>
                :
                <IonButton id='checkout-modal' style={{width: '54%', '--border-radius': '21px', margin: '5% 23%'}}>
                    Checkout?
                </IonButton>} 
                <CartModal subTotal={addToCart.total} deliveryFee={deliveryFee} discount={discount} total={addToCart.total + deliveryFee - discount} />
            </IonContent>
        </IonPage>
    );
};

export default CartPage;