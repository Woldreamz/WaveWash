import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './index.css'


interface TrackStops {
    data:any
}

// type myHt = {
//     ht: number
// }

const Tracker: React.FC<TrackStops> = ({data}: TrackStops) => {
    let ht;
    const thumbs = Array.from(document.getElementsByClassName('thumb'));
    console.log('nom:', thumbs);
    function Step(){
        thumbs.forEach((thumb) => {
            thumb.classList.remove('common-color') 
            console.log('h:', thumb)});
        for(let i = 0; i <= data; i++){
            console.log('nom:', i);
            thumbs[i]?.classList.add('common-color');
        } 
    }
    switch (data) {
        case 0:
            ht = 0
            Step();
            break
        case 1:
            ht = 101
            Step();
            break;
        case 2:
            ht = 210
            Step();
            break;
        case 3:
            ht= 335
            Step();      
            break;
    }

    return (
        <div className='tracker' style={{background: '#EDEDED', height: '335px'}}>
            <div className='tracker common-color' style={{height: `${ht}px`}}>
                
            </div>
            <div className="ticks thumb" style={{top: '0'}}></div>
            <div className="ticks thumb" style={{top: '30%'}}></div>
            <div className="ticks thumb" style={{top: '62%'}}></div>
            <div className="ticks thumb" style={{bottom: '0'}}></div>
        </div>
      
    );
};

export default Tracker;