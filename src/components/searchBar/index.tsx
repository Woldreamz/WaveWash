import { IonButton, IonIcon, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import "./index.css"

const Search: React.FC = () => {

    return (
        <IonInput
            aria-label="Custom input"
            placeholder="Custom input"
            class="custom"
        >
            <IonButton fill='clear' slot='start'>
                <IonIcon slot='icon-only' aria-hidden='true'></IonIcon>
            </IonButton>
        </IonInput>
    );
};   

export default Search;