import React, { useState } from 'react';
import { IonButton, IonContent, IonIcon, IonLabel, IonText, IonSegment, IonSegmentButton } from '@ionic/react';
import burger from "../../assets/icon/burger.svg"
import tick from "../../assets/icon/tick.svg"
import close from "../../assets/icon/close.svg"
import gburger from "../../assets/icon/gburger.svg"
import gtick from "../../assets/icon/gtick.svg"
import gclose from "../../assets/icon/gclose.svg"
import './index.css'
import OrderCard from '../orderCard';


interface ItemProp{
    data1: any
    data2: any
    data3: any
}


const  OrderSegment:React.FC<ItemProp> =  ({data1, data2, data3}: ItemProp) => {
    const [isActive, setIsActive] = useState("upcoming");

  return (
    <>
      <IonSegment value={isActive} color={'white'} className='order-colors'>
        <IonSegmentButton 
        value="upcoming"
        layout='icon-start'
        className='ion-no-padding'
        onClick={() => setIsActive("upcoming")}
        >
          <IonIcon icon={isActive ==="upcoming"? gburger:burger} style={{ height: '13px', width: '13px', marginRight: '0px' }}></IonIcon>
          <IonLabel style={{ textTransform: 'none', maxWidth: 'max-content', fontWeight: 700, fontSize: '12px' }}>Upcoming</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton 
        value="completed"
        layout='icon-start'
        className='ion-no-padding'
        onClick={() => setIsActive("completed")}
        >
          <IonIcon icon={isActive === "completed"? gtick:tick} style={{ height: '20px', width: '20px', marginRight: '0px' }}></IonIcon>
          <IonLabel style={{ textTransform: 'none', maxWidth: 'max-content', fontWeight: 700, fontSize: '12px' }}>Completed</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton 
        value="cancelled"
        layout='icon-start'
        className='ion-no-padding'
        onClick={() => setIsActive("cancelled")}
        >
          <IonIcon icon={isActive === "cancelled"? gclose:close} style={{ height: '20px', width: '20px', marginRight: '0px' }}></IonIcon>
          <IonLabel style={{ textTransform: 'none', maxWidth: 'max-content', fontWeight: 700, fontSize: '12px' }}>Cancelled</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonContent>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '4%', gap: '2rem'}}>
        {isActive === "upcoming" && 
        <>
        {!data1?
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'center', width: '50%', position: 'relative', top: '18rem', margin: 'auto',}}>
            <IonText style={{textAlign: 'center'}}>There are no orders</IonText>    
            <IonButton>SET PICKUP NOW</IonButton>
            </div>
            :
            <>
                {data1.map((item, index) => (
                    <OrderCard 
                        key_id={index}
                        orderId={item.orderId}
                        orderDate= {item.orderDate}
                        pickUp= {item.pickup}
                        total= {item.total}
                        cancel= {item.cancel}
                        confirm={item.confirm}
                        pick = {item.pickupSet}
                    />
                ))}
            </>
        }
        </>}
        {isActive === "completed" && 
        <>
        {!data2?
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'center', width: '50%', position: 'relative', top: '18rem', margin: 'auto',}}>
            <IonText style={{textAlign: 'center'}}>There are no confirmed orders</IonText> 
            </div>
            :
            <>
                {data2.map((item, index) => (
                    <OrderCard 
                    key_id={index}
                    orderId={item.orderId}
                    orderDate= {item.orderDate}
                    pickUp= {item.pickup}
                    total= {item.total}
                    cancel= {item.cancel}
                    confirm={item.confirm}
                    pick = {item.pickupSet}
                    />
                ))}
            </>
        }
        </>}
        {isActive === "cancelled" && 
        <>
        {!data3?
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'center', width: '50%', position: 'relative', top: '18rem', margin: 'auto',}}>
            <IonText style={{textAlign: 'center'}}>There are no cancelled orders</IonText>   
            </div>
            :
            <>
                {data3.map((item, index) => (
                    <OrderCard 
                    key_id={index}
                    orderId={item.orderId}
                    orderDate= {item.orderDate}
                    pickUp= {item.pickup}
                    total= {item.total}
                    cancel= {item.cancel}
                    confirm={item.confirm}
                    pick = {item.pickupSet}
                    />
                ))}
            </>
        }
        </>}
        </div>
      </IonContent>
    </>
  );
}
export default OrderSegment;