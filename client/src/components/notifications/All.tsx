import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent  } from "@ionic/react";

const AllNotifications:  React.FC = () => {
    const notifications = [
        {id: 1, title:"Promotion 1", content:"New Promotion for 2024."},
        {id: 2, title:"Promotion 2", content:"New Promotion for 2024."},
        {id: 3, title:"Promotion 3", content:"New Promotion for 2024."},
        {id: 4, title:"Order Confirmed", content:"Your Order has been confirmed."},
        {id: 5, title:"Order Pick Up", content:"Your Order has been picked up."},
        {id: 6, title:"Order Delivered", content:"Your Order, all clothes have been delivered."},
        {id: 7, title:"Order Rejected", content:"Your Order has been Rejected"}
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

export default AllNotifications;