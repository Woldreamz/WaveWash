import { IonCol, IonImg, IonText } from '@ionic/react';
import React from 'react';

interface DataProps {
    img: any
    title: string
    price: any
    qty: number
}
const ItemDetail: React.FC<DataProps> = (props: DataProps) => {

    return (
        <div style={{display: 'flex', padding: '3%', background: '#FAFAFA', borderBottom:'0.5px solid #efefef'  }}>
            <IonImg src={props.img} />
            <IonCol style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', }}>
                <IonText>{props.title}</IonText>
                <IonText>{props.price}</IonText>
            </IonCol>
            <IonText style={{ alignSelf: 'center' }} >Qty:{props.qty}</IonText>
        </div>
    );
};

export default ItemDetail;