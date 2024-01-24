import {
    IonCard,
    IonContent,
    IonLabel,
    IonSegment,
    IonSegmentButton,
} from "@ionic/react";

import React, { useState } from "react";
  
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
              <IonCard>
                There are no notifications currently.
              </IonCard>
            ) : null}

            {isActive === "orders" ? (
              <IonCard>
                There are no orders currently.
              </IonCard>
            ) : null}

            {isActive === "promotions" ? (
              <IonCard>
                There are no promotions currently.
              </IonCard>
            ) : null}

          </IonContent>
        </>
      </React.Fragment>
    );
  };
  
  export default Segments;