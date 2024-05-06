import React from 'react';
import './style.css'
import { useIonRouter } from '@ionic/react';

interface items {
    src: any
    alt: string
    title: string
    wt?: string
    route: string
}
const OptionBox: React.FC<items> = ({src, alt, wt, title, route}) => {
    const navigation = useIonRouter();

    return (
       <>
        <div className='box' onClick={() => navigation.push(`${route}`, "root", "replace")}>
            <img style={{ width: `${wt}`, alignSelf: `${title === 'Order History' && 'center'}` }} src={src} alt={alt} />
            <p style={{ textAlign: 'center' }}>{title}</p>
        </div>
       </>
    );
};

export default OptionBox;