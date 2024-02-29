import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";

const Promotion:  React.FC = () => {
    const notifications = [
        {id: 1, title:"Promotion 1", content:"New Promotion for 2024."},
        {id: 2, title:"Promotion 2", content:"New Promotion for 2024."},
        {id: 3, title:"Promotion 3", content:"New Promotion for 2024."},
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

export default Promotion;