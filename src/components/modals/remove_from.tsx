import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonModal, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, {useRef, useState} from 'react';
import ItemCart, {ItemProp} from '../itemCart';
import RemoveCart from '../itemCart/remove';



const RemoveModal: React.FC<ItemProp> = ({title, pcs, price, img, modal}) => {
    const [checkOut, setCheckOut] = useState<any>(null);
    const remModal = useRef<HTMLIonModalElement>(null);

    function checkout(){
        setCheckOut(1);
        remModal.current?.dismiss();
    }

    return (
        <IonModal breakpoints={[0, 0.35]} initialBreakpoint={0.35} ref={remModal} trigger={modal}>
            <IonHeader style={{height: '3rem', boxShadow: '0 0 7px grey', padding: '7%'}}>
                <IonTitle>
                    Remove from cart?
                </IonTitle>
            </IonHeader>
            <IonContent className="ion-padding">
                <RemoveCart title={title} img={img} pcs={pcs} modal={modal} price={price}/>
                <IonRow>
                    <IonCol size='6'>
                        <IonButton shape='round' style={{ width: '100%', minHeight: '3rem'}} onClick={() => remModal.current?.dismiss()}>
                            Cancel
                        </IonButton>
                    </IonCol>
                    <IonCol size='6'>
                        <IonButton shape='round' style={{ width: '100%', minHeight: '3rem'}}>
                            Yes, Remove
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonModal>
    );
};

export default RemoveModal;