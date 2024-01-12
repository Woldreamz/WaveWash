import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonModal, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, {useRef, useState} from 'react';
import './index.css'

interface Receipt{
    subTotal: number
    deliveryFee: number
    discount: number
    total: number
}


const CartModal: React.FC<Receipt> = ({subTotal, deliveryFee, discount, total}) => {
    const [checkOut, setCheckOut] = useState<any>(null);
    const modal = useRef<HTMLIonModalElement>(null);

    function checkout(){
        setCheckOut(1);
        modal.current?.dismiss();
    }

    return (
        <IonModal breakpoints={[0, 0.42]} initialBreakpoint={0.42} ref={modal} trigger='checkout-modal'>
            <IonHeader style={{padding: '5%'}}>
                <IonInput type='text' placeholder='Promo Code' fill='outline' shape='round' style={{'--padding-start': '3%'}}>
                    <IonButton slot='end' shape='round'>
                        Apply
                    </IonButton>
                </IonInput>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonRow>
                    <IonCol size='3'>
                        <IonText>Sub-Total</IonText>
                    </IonCol>
                    <IonCol size='3' className='bottom-col'>
                        <IonText>{subTotal}</IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size='4'>
                        <IonText>Delivery fee</IonText>
                    </IonCol>
                    <IonCol size='2' className='bottom-col'>
                        <IonText>{deliveryFee}</IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size='3'>
                        <IonText>Discount</IonText>
                    </IonCol>
                    <IonCol size='3' className='bottom-col'>
                        <IonText>{discount}</IonText>
                    </IonCol>
                </IonRow>
                <IonCol className='extra-col'>
                <IonRow>
                    <IonCol size='3'>
                        <IonText>Total</IonText>
                    </IonCol>
                    <IonCol size='3' className='bottom-col'>
                        <IonText>{total}</IonText>
                    </IonCol>
                </IonRow>
                <IonButton shape='round' onClick={checkout}>
                    Proceed to Checkout
                </IonButton>
                </IonCol>
            </IonContent>
        </IonModal>
    );
};

export default CartModal;