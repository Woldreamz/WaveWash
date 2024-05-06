import { IonButton, IonImg } from '@ionic/react';
import React from 'react';
import machbanner from '../../assets/image/machbanner.svg'
import './style.css'

interface props {
    discount: number
    code: string
}
const DiscountBanner: React.FC<props> = ({discount, code}) => {

    return (
        <div className='dbanner'>
            <div className='dbanner-right'>
                <p>New deal</p>
                <p><strong style={{ fontSize: '30px' }}>{discount}%</strong> OFF</p>
                <p style={{ fontSize: '14px' }}>ON YOUR FIRST ORDER</p>
                <IonButton className='custom-btn'>USE THE CODE {code}</IonButton>  
            </div>
            <div className='dbanner-left'>
                <IonImg src={machbanner} alt='discount code' />
            </div>
        </div>
    );
};

export default DiscountBanner;