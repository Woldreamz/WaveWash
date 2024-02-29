import {
    IonCard,
    IonContent,
    IonLabel,
    IonSegment,
    IonSegmentButton,
} from "@ionic/react";

import React, { useState } from "react";
import Order from "./notifications/order";
import Promotion from "./notifications/promo";
import AllNotifications from "./notifications/All";

  
const Segments = () => {

    const [isActive, setIsActive] = useState("");

    return (
      <React.Fragment>
        <>
          
            <IonSegment value={isActive}>
                <IonSegmentButton
                  value="all"
                  onClick={() => {
                    setIsActive("all");
                  }}
                >
                  <IonLabel>All</IonLabel>
                </IonSegmentButton>

                <IonSegmentButton
                  value="orders"
                  onClick={() => {
                    setIsActive("orders");
                  }}
                >
                  <IonLabel>Orders</IonLabel>
                </IonSegmentButton>

                <IonSegmentButton
                  value="promotions"
                  onClick={() => {
                    setIsActive("promotions");
                  }}
                >
                  <IonLabel>Promos</IonLabel>
                </IonSegmentButton>
            </IonSegment>

          <IonContent className="ion-padding">
            {isActive === "all" ? (
              <AllNotifications />
            ) : null}

            {isActive === "orders" ? (
              <Order />
            ) : null}

            {isActive === "promotions" ? (
              <Promotion />
            ) : null}

          </IonContent>
        </>
      </React.Fragment>
    );
  };
  
  export default Segments;