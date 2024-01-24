import { IonButton, IonContent, IonPage, IonRow } from '@ionic/react';
import React from 'react';
import ServiceNav from '../layout/nav/service';
import profile from '../assets/image/dummy.svg'
import HeaderTop from '../layout/header';
import ItemCard from '../components/itemCard';
import { services, services_w } from '../data'
import RiderModal from '../components/modals/rider_details';



const ServicePage: React.FC = () => {

    return (
        <IonPage>
            <ServiceNav profile={profile} name='Services'/>
            <IonContent className="ion-padding">
                <HeaderTop />
                <IonRow style={{flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                    <ItemCard img={services[0].image} 
                            title={services[0].title} 
                            price={services[0].price} />
                    <ItemCard img={services[1].image} 
                            title={services[1].title} 
                            price={services[1].price} />
                    <ItemCard img={services[2].image} 
                            title={services[2].title} 
                            price={services[2].price} />
                    <ItemCard img={services[3].image} 
                            title={services[3].title} 
                            price={services[3].price} />
                    <IonButton id='rider-modal' style={{width: '54%', '--border-radius': '21px'}}>
                    Proceed to Cart
                    </IonButton>
                    <RiderModal full_name='Rainer Nsa' time={6} deliveries={400} />
                    <Tabs />
                </IonRow>
                
                
            </IonContent>
        

        </IonPage>

    );
};

export default ServicePage;