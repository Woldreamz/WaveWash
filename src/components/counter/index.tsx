import { IonButton } from '@ionic/react'
import './index.css'
import React, { useState } from 'react'

const Counter: React.FC =() => {
    const [count, SetCount] = useState<number>(0)
  return (
    <div className='ion-border'>
        <IonButton fill="clear" size="small" className='ion-btn-wt' onClick={() => count === 0? SetCount(0) : SetCount(count-1)}>
            - 
        </IonButton>
        <p style={{alignSelf: 'center'}}>{count}</p>
        <IonButton fill="clear" size="small" className='ion-btn-wt' onClick={() => SetCount(count+1)}>
            +
        </IonButton>
    </div>
  )
}

export default Counter