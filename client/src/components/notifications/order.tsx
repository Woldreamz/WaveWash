import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";

const Order:  React.FC = () => {
    const notifications = [
        {id: 1, title:"Order Confirmed", content:"Your Order has been confirmed."},
        {id: 2, title:"Order Pick Up", content:"Your Order has been picked up."},
        {id: 3, title:"Order Delivered", content:"Your Order, all clothes have been delivered."},
        {id: 4, title:"Order Rejected", content:"Your Order has been Rejected"}
    ];
    return (
        <IonPage>
            <IonContent>
                {notifications.map(notification => (
                    <IonCard>
                        <IonCardHeader key={notification.id}>
                            <IonCardTitle>
                                {notification.title}
                            </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>{notification.content}</IonCardContent>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    );
}

export default Order;