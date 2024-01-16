import { IonButton } from '@ionic/react'
import './index.css'
import React, { useState } from 'react'

const FillCounter: React.FC =() => {
    const [count, SetCount] = useState<number>(0)
  return (
    <div className='ion-clear'>
        <IonButton className='ion-button-smaller' onClick={() => count === 0? SetCount(0) : SetCount(count-1)}>
            - 
        </IonButton>
        <p style={{alignSelf: 'center', color: 'black', fontWeight: 700}}>{count}</p>
        <IonButton className='ion-button-smaller' onClick={() => SetCount(count+1)}>
            +
        </IonButton>
    </div>
  )
}

export default FillCounter